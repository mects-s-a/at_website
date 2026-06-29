import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredArticles, articles } from "../data/news";

function formatDate(dateStr) {
  const months = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
  const d = new Date(dateStr);
  return `${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
}

export default function NewsSection() {
  const quickLinks = articles.filter((a) => !a.featured).slice(0, 3);

  return (
    <section id="noticias" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative text-center mb-9">
          <h2 className="section-title">Notícias</h2>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] mt-1.5 text-at-mid">Actualizadas</p>
          <Link
            to="/noticias"
            className="absolute right-0 bottom-0 text-[11px] font-bold uppercase tracking-wider text-at-mid border border-at-mid rounded-lg px-3 py-1.5 hover:bg-at-mid hover:text-white transition-all"
          >
            Notícias »
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-6">
          {/* Featured articles — 2 cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {featuredArticles.map((n) => (
              <Link
                key={n.id}
                to={`/noticia/${n.id}`}
                className="group bg-white border border-at-border rounded-xl shadow-at-sm overflow-hidden hover:shadow-at-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                <div className="aspect-video overflow-hidden bg-at-pale">
                  <img
                    src={n.img}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="inline-block self-start text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full mb-3 bg-at-pale text-at-mid">
                    {n.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11.5px] text-at-muted mb-2">
                    <Calendar className="w-3 h-3" />
                    {formatDate(n.date)}
                  </div>
                  <h3 className="text-[14.5px] font-semibold text-at-ink leading-snug group-hover:text-at-mid transition-colors mb-2 flex-1">
                    {n.title}
                  </h3>
                  <p className="text-[12.5px] text-at-muted leading-relaxed line-clamp-2 mb-3">{n.summary}</p>
                  <span className="inline-flex items-center gap-1 text-at-mid text-[12.5px] font-semibold group-hover:underline">
                    Ler mais <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick links — 3 small cards */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-at-muted mb-3">Leitura Rápida</h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map((n) => (
                <Link
                  key={n.id}
                  to={`/noticia/${n.id}`}
                  className="group flex items-start gap-3.5 p-4 bg-at-pale border border-at-border rounded-xl hover:border-at-mid hover:shadow-at-sm transition-all duration-200"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-at-smoke">
                    <img src={n.img} alt={n.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-at-mid block mb-1">{n.category}</span>
                    <h4 className="text-[13.5px] font-semibold text-at-ink leading-snug line-clamp-2 group-hover:text-at-mid transition-colors">
                      {n.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}