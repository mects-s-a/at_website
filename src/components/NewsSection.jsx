import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { newsArticles } from "../data/news"; // 🌟 Consumindo os dados centralizados

export default function NewsSection() {
  // Filtra dinamicamente os artigos que devem aparecer na homepage
  const homeArticles = newsArticles.filter(article => article.featured).slice(0, 3);

  return (
    <section id="noticias" className="py-20 sm:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Header alinhado com o link "Ver Mais" à direita */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
              Actualidades
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Notícias
            </h2>
          </div>
          <Link 
            to="/noticias" 
            className="text-sm font-bold text-primary hover:text-primary/80 hover:underline flex items-center gap-1 shrink-0 mb-1 transition-colors"
          >
            Ver Mais »
          </Link>
        </div>

        {/* Grelha de Notícias */}
        <div className="grid md:grid-cols-3 gap-6">
          {homeArticles.map((n) => (
            <Link 
              key={n.id} 
              to="/noticias" // Redireciona o utilizador diretamente para o News Hub dedicado
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative bg-slate-100">
                <img 
                  src={n.img} 
                  alt={n.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Badge Dinâmico de Categoria */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                  {n.category}
                </span>
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {n.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                  {n.summary}
                </p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-medium self-start">
                  Ler mais <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}