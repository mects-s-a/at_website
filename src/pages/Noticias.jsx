import { useState } from "react";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Dados de contingência caso o ficheiro externo não esteja pronto
const fallbackNews = [
  {
    id: 1,
    category: "Institucional",
    date: "28 Mai 2026",
    title: "AT lança novas Linhas de Apoio ao Contribuinte via Central Telefónica",
    summary: "Modernização do atendimento público permite reduzir tempos de espera e facilitar o esclarecimento sobre o IRPS.",
    img: "https://at-mocambique.tributo670.workers.dev/Imagens/logo-at.png",
    url: "#"
  },
  {
    id: 2,
    category: "Fiscalidade",
    date: "20 Mai 2026",
    title: "Guias Práticos sobre IVA e Facturação Electrónica já disponíveis",
    summary: "Consulte os novos manuais práticos criados para orientar as PME no ecossistema digital de facturação.",
    img: "https://at-mocambique.tributo670.workers.dev/Imagens/logo-at.png",
    url: "#"
  }
];

let externalNews = [];
try {
  // Tentativa dinâmica de importação preventiva
  const module = await import("../data/news");
  externalNews = module.newsArticles;
} catch (e) {
  externalNews = fallbackNews;
}

export default function Noticias() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const categories = ["Todos", "Institucional", "Fiscalidade", "Eventos"];

  const filteredNews = activeCategory === "Todos"
    ? externalNews
    : externalNews.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 flex-1 w-full">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar para a Página Inicial
        </Link>

        {/* HERO BANNER */}
        <div className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-primary-foreground rounded-2xl p-6 sm:p-10 mb-10 shadow-md relative overflow-hidden border border-primary/20">
          <div className="absolute right-0 bottom-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <span className="text-accent font-bold text-xs tracking-widest uppercase block mb-2">Comunicação & Imprensa</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3 tracking-tight text-white">Hub de Notícias e Imprensa</h1>
          <p className="text-white/75 max-w-2xl text-xs sm:text-sm leading-relaxed">
            Acompanhe os comunicados oficiais, reformas tributárias e atualizações aduaneiras da Autoridade Tributária de Moçambique.
          </p>
        </div>

        {/* FILTROS */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* GRELHA */}
        {filteredNews.length === 0 ? (
          <p className="text-muted-foreground text-sm py-8">Nenhuma notícia encontrada nesta categoria.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((n) => (
              <a
                key={n.id}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="aspect-video overflow-hidden relative bg-muted flex items-center justify-center p-4">
                  <img src={n.img} alt={n.title} className="max-h-full max-w-full object-contain group-hover:scale-102 transition-transform duration-500" />
                  <span className="absolute bottom-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {n.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {n.date}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {n.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 mb-4 flex-1">
                    {n.summary}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-accent text-xs font-bold mt-auto pt-2 border-t border-border/50">
                    Aceder Artigo Completo <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}