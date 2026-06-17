import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { articles } from "../data/news";

const categories = ["Todas", ...Array.from(new Set(articles.map((a) => a.category)))];

export default function Noticias() {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filtered =
    activeCategory === "Todas"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="w-full">
      {/* Page header */}
      <div className="py-10 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-1">Media</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">Notícias</h1>
          <p className="text-white/60 mt-2">
            Últimas actualidades da Autoridade Tributária de Moçambique
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        {filtered.length === 0 ? (
          <p className="text-muted-foreground text-sm py-8">
            Nenhuma notícia encontrada nesta categoria.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((n) => (
              <a
                key={n.id}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={n.img}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {n.featured && (
                    <span className="absolute top-3 left-3 flex items-center justify-center w-7 h-7 bg-yellow-400 rounded-full shadow">
                      <Star className="w-3.5 h-3.5 text-yellow-900 fill-current" />
                    </span>
                  )}
                  <span className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                    {n.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-muted-foreground mb-2">
                    {new Date(n.date).toLocaleDateString("pt-MZ", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors flex-1">
                    {n.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{n.summary}</p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-auto">
                    Ler mais{" "}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}