#!/usr/bin/env node
/**
 * add-noticia.js
 * ─────────────────────────────────────────────────────────────────────────
 * Converts a .docx file into a news article entry and appends it directly
 * to src/data/news.js — no backend, no Vercel, no internet access required.
 *
 * USAGE:
 *   node scripts/add-noticia.js "C:\path\to\Tomada de Posse.docx" \
 *     --title "Tomada de Posse do Novo Director" \
 *     --summary "Breve resumo da notícia aqui." \
 *     --category "Institucional" \
 *     --date "2026-06-04" \
 *     --img "https://example.com/photo.jpg"
 *
 * If --img is omitted, a placeholder image is used and you can swap it
 * in manually afterwards by editing src/data/news.js.
 *
 * After running, review src/data/news.js, then commit and push as usual.
 * ─────────────────────────────────────────────────────────────────────────
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mammoth from "mammoth";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const NEWS_FILE = path.join(__dirname, "..", "src", "data", "news.js");

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const val = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : true;
      args[key] = val;
    } else {
      args._.push(a);
    }
  }
  return args;
}

function htmlToContentString(html) {
  return html
    .replace(/<h1>(.*?)<\/h1>/g, "\n\n## $1\n\n")
    .replace(/<h2>(.*?)<\/h2>/g, "\n\n## $1\n\n")
    .replace(/<h3>(.*?)<\/h3>/g, "\n\n### $1\n\n")
    .replace(/<p>(.*?)<\/p>/g, "$1\n\n")
    .replace(/<strong>(.*?)<\/strong>/g, "**$1**")
    .replace(/<em>(.*?)<\/em>/g, "*$1*")
    .replace(/<li>(.*?)<\/li>/g, "- $1\n")
    .replace(/<\/?(ul|ol)>/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function escapeForTemplateLiteral(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function escapeForJsString(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

async function main() {
  const argv = process.argv.slice(2);
  const args = parseArgs(argv);
  const docxPath = args._[0];

  if (!docxPath) {
    console.error("Erro: indique o caminho do ficheiro .docx como primeiro argumento.");
    console.error('Exemplo: node scripts/add-noticia.js "C:\\caminho\\ficheiro.docx" --title "..." --summary "..."');
    process.exit(1);
  }
  if (!fs.existsSync(docxPath)) {
    console.error(`Erro: ficheiro não encontrado: ${docxPath}`);
    process.exit(1);
  }
  if (!args.title || !args.summary) {
    console.error("Erro: --title e --summary são obrigatórios.");
    process.exit(1);
  }

  console.log(`A ler: ${docxPath}`);
  const buffer = fs.readFileSync(docxPath);
  const { value: html, messages } = await mammoth.convertToHtml({ buffer });

  if (messages.length) {
    console.log("Avisos do mammoth (geralmente inofensivos):");
    messages.forEach((m) => console.log(`  - ${m.message}`));
  }

  const content = htmlToContentString(html);

  if (!fs.existsSync(NEWS_FILE)) {
    console.error(`Erro: não encontrei ${NEWS_FILE}. Execute este script a partir da raiz do projecto, dentro de /scripts.`);
    process.exit(1);
  }

  const newsSource = fs.readFileSync(NEWS_FILE, "utf-8");

  const allIdsMatch = [...newsSource.matchAll(/id:\s*(\d+)/g)].map((m) => parseInt(m[1], 10));
  const nextId = allIdsMatch.length ? Math.max(...allIdsMatch) + 1 : 1;

  const title = escapeForJsString(args.title);
  const summary = escapeForJsString(args.summary);
  const category = escapeForJsString(args.category || "Institucional");
  const date = args.date || new Date().toISOString().slice(0, 10);
  const img = args.img || "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80";
  const safeContent = escapeForTemplateLiteral(content);

  const newEntry = `  {
    id: ${nextId},
    title: "${title}",
    summary: "${summary}",
    img: "${img}",
    date: "${date}",
    category: "${category}",
    featured: false,
    content: \`${safeContent}\`,
  },
`;

  const insertionPoint = newsSource.indexOf("export const articles = [") + "export const articles = [".length;
  const updatedSource =
    newsSource.slice(0, insertionPoint) +
    "\n" +
    newEntry +
    newsSource.slice(insertionPoint);

  fs.writeFileSync(NEWS_FILE, updatedSource, "utf-8");

  console.log("");
  console.log(`✅ Notícia adicionada com sucesso (id: ${nextId}).`);
  console.log(`   Ficheiro actualizado: ${NEWS_FILE}`);
  console.log("");
  console.log("Próximos passos:");
  console.log("  1. Reveja src/data/news.js para confirmar a formatação.");
  console.log("  2. Se não indicou --img, substitua a imagem placeholder pela imagem correcta.");
  console.log("  3. git add, git commit, git push — a notícia aparece após o deploy.");
}

main().catch((err) => {
  console.error("Erro inesperado:", err);
  process.exit(1);
});