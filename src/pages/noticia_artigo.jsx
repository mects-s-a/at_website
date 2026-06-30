import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ReactMarkdown from "react-markdown";
import { useAllArticles } from "../lib/use-news";



function formatDate(dateStr) {
  const months = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  const d = new Date(dateStr);
  return `${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
}

export default function NoticiaArtigo() {
  const { id } = useParams();
  const { articles, loading } = useAllArticles();
  const article = articles.find((a) => String(a.id) === String(id));

  if (loading) {
    return (
      <div className="min-h-screen bg-white font-inter">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <p className="text-at-muted">A carregar...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white font-inter">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <p className="text-at-muted">Artigo não encontrado.</p>
          <Link to="/noticias" className="text-at-mid hover:underline mt-2 inline-block font-semibold">
            Voltar às Notícias
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = articles.filter((a) => String(a.id) !== String(article.id)).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <Link
          to="/noticias"
          className="inline-flex items-center gap-1.5 text-at-mid text-sm font-semibold hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar às Notícias
        </Link>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-8 lg:gap-12">
          {/* Article column */}
          <article className="min-w-0">
            {/* Article header */}
            <header className="mb-6">
              <span className="inline-block text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full bg-at-pale text-at-mid mb-4">
                {article.category}
              </span>
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-at-ink leading-tight mb-4">
                {article.title}
              </h1>
              <div className="flex items-center gap-3 text-[13px] text-at-muted border-b border-at-border pb-4">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
                <span className="text-at-border">·</span>
                <span>Autoridade Tributária de Moçambique</span>
              </div>
            </header>

            {/* Hero image */}
            {article.img && (
              <img
                src={article.img}
                alt={article.title}
                className="w-full aspect-video object-cover rounded-2xl mb-8 shadow-at-sm"
              />
            )}

            {/* Article body */}
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className="text-[15px] text-at-ink leading-[1.85] mb-4">{children}</p>
                ),
                h2: ({ children }) => (
                  <h2 className="font-display text-xl font-bold text-at-ink mt-6 mb-3">{children}</h2>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-at-mid pl-4 italic text-at-muted my-4 text-[14px] leading-relaxed">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-[15px] text-at-ink leading-[1.85] mb-4 space-y-1">
                    {children}
                  </ul>
                ),
                li: ({ children }) => <li>{children}</li>,
              }}
            >
              {article.content || article.summary}
            </ReactMarkdown>

            {/* Source docx download, only for uploaded articles */}
            {article.sourceDocx && (
              <a
                href={article.sourceDocx}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-[13px] text-at-mid hover:underline font-semibold"
              >
                Descarregar documento original (.docx)
              </a>
            )}

            {/* Share section */}
            <div className="mt-8 pt-6 border-t border-at-border flex items-center gap-3">
              <span className="text-[12px] font-semibold text-at-muted">Partilhar:</span>
              <a
                href={`https://web.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-lg bg-[#1877F2] text-white text-[12px] font-semibold hover:scale-105 hover:shadow-md transition-all"
              >
                Facebook
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + " " + window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-lg bg-[#25D366] text-white text-[12px] font-semibold hover:scale-105 hover:shadow-md transition-all"
              >
                WhatsApp
              </a>
            </div>
          </article>

          {/* Quick links sidebar — far right */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-at-muted mb-3">Leitura Rápida</h3>
              <div className="flex flex-col gap-3">
                {related.map((n) => (
                  <Link
                    key={n.id}
                    to={`/noticia/${n.id}`}
                    className="group flex items-start gap-3 p-3 bg-at-pale border border-at-border rounded-xl hover:border-at-mid hover:shadow-at-sm transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-at-smoke">
                      <img src={n.img} alt={n.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-at-mid block">{n.category}</span>
                      <h4 className="text-[12px] font-semibold text-at-ink leading-snug line-clamp-2 group-hover:text-at-mid transition-colors">
                        {n.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}