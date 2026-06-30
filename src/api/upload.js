import { put, list } from '@vercel/blob';
import mammoth from 'mammoth';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const NEWS_DATA_KEY = 'data/news-uploaded.json';

async function getExistingArticles() {
  try {
    const { blobs } = await list({ prefix: NEWS_DATA_KEY });
    const existing = blobs.find((b) => b.pathname === NEWS_DATA_KEY);
    if (!existing) return [];
    const res = await fetch(existing.url);
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.error('Failed to read existing articles:', err);
    return [];
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return res.status(500).json({ error: 'Server not configured: missing BLOB_READ_WRITE_TOKEN' });
  }
  if (!process.env.ADMIN_UPLOAD_PASSWORD) {
    return res.status(500).json({ error: 'Server not configured: missing ADMIN_UPLOAD_PASSWORD' });
  }

  try {
    const form = formidable({ multiples: false, maxFileSize: 15 * 1024 * 1024 });
    const [fields, files] = await form.parse(req);

    const password = fields.password?.[0];
    if (password !== process.env.ADMIN_UPLOAD_PASSWORD) {
      return res.status(401).json({ error: 'Senha incorrecta' });
    }

    const title = fields.title?.[0]?.trim();
    const summary = fields.summary?.[0]?.trim();
    const category = fields.category?.[0]?.trim() || 'Institucional';
    const date = fields.date?.[0] || new Date().toISOString().slice(0, 10);

    if (!title || !summary) {
      return res.status(400).json({ error: 'Título e resumo são obrigatórios' });
    }

    const docxFile = files.docx?.[0];
    const imageFile = files.image?.[0];

    if (!docxFile) {
      return res.status(400).json({ error: 'Ficheiro .docx é obrigatório' });
    }

    // Parse docx -> HTML-ish markdown-compatible text
    const docxBuffer = fs.readFileSync(docxFile.filepath);
    const { value: rawHtml } = await mammoth.convertToHtml({ buffer: docxBuffer });

    // Convert simple HTML to the markdown-like format used in news.js content fields
    const content = rawHtml
      .replace(/<h1>(.*?)<\/h1>/g, '## $1')
      .replace(/<h2>(.*?)<\/h2>/g, '## $1')
      .replace(/<p>(.*?)<\/p>/g, '$1\n\n')
      .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
      .replace(/<em>(.*?)<\/em>/g, '*$1*')
      .replace(/<[^>]+>/g, '')
      .trim();

    // Upload original docx for record-keeping
    const docxBlob = await put(
      `news/${Date.now()}-${docxFile.originalFilename}`,
      fs.readFileSync(docxFile.filepath),
      { access: 'public', addRandomSuffix: false }
    );

    // Upload image if provided
    let imgUrl = null;
    if (imageFile) {
      const imageBlob = await put(
        `news/${Date.now()}-${imageFile.originalFilename}`,
        fs.readFileSync(imageFile.filepath),
        { access: 'public', addRandomSuffix: false }
      );
      imgUrl = imageBlob.url;
    }

    const existingArticles = await getExistingArticles();
    const newId = Date.now();

    const newArticle = {
      id: newId,
      title,
      summary,
      img: imgUrl || 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80',
      date,
      category,
      featured: false,
      content,
      sourceDocx: docxBlob.url,
    };

    const updatedArticles = [newArticle, ...existingArticles];

    await put(NEWS_DATA_KEY, JSON.stringify(updatedArticles, null, 2), {
      access: 'public',
      addRandomSuffix: false,
      contentType: 'application/json',
    });

    return res.status(200).json({ success: true, article: newArticle });
  } catch (err) {
    console.error('Upload error:', err);
    return res.status(500).json({ error: err.message || 'Erro ao processar o ficheiro' });
  }
}