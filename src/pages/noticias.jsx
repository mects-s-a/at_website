import { useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageHero from "../components/pagehero";
import MediaSidebar from "../components/mediasidebar";
import { useAllArticles } from "../lib/use-news";
import { Newspaper } from "lucide-react";

function formatDate(dateStr) {
  const months = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  const d = new Date(dateStr);
  return `${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
}

export default function Noticias() {
  const { articles } = useAllArticles();
  const [activeCategory, setActiveCategory] = useState("Todas");

  const categories = ["Todas", ...Array.from(new Set(articles.map((a) => a.category)))];

  const filtered =
    activeCategory === "Todas"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <PageHero
          eyebrow="Média"
          title="Notícias"
          description="Últimas actualidades e comunicados da Autoridade Tributária de Moçambique."
          icon={Newspaper}
        />

        <div className="flex gap-6">
          <MediaSidebar activeKey="noticias" />

          <div className="flex-1 min-w-0">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-at-deep text-white"
                      : "bg-at-pale text-at-muted hover:bg-at-mid hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((n) => (
                <Link
                  key={n.id}
                  to={`/noticia/${n.id}`}
                  className="group bg-white rounded-xl overflow-hidden border border-at-border shadow-at-sm hover:shadow-at-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                >
                  <div className="aspect-video overflow-hidden relative bg-at-pale">
                    <img
                      src={n.img}
                      alt={n.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full bg-at-pale text-at-mid">
                      {n.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-[11.5px] text-at-muted mb-2">
                      <Calendar className="w-3 h-3" />
                      {formatDate(n.date)}
                    </div>
                    <h3 className="font-semibold text-at-ink mb-2 line-clamp-2 group-hover:text-at-mid transition-colors flex-1 text-[14.5px] leading-snug">
                      {n.title}
                    </h3>
                    <p className="text-[12.5px] text-at-muted line-clamp-2 mb-3 leading-relaxed">{n.summary}</p>
                    <span className="inline-flex items-center gap-1 text-at-mid text-[12.5px] font-semibold mt-auto group-hover:underline">
                      Ler mais <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}