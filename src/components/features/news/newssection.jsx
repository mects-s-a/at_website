import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
// Path updated to reference the true structural location shown in Screenshot (869).jpg
import { featuredArticles } from "@/data/news";

export default function NewsSection() { 
  return (
    <section id="noticias" className="py-12 sm:py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Centered Header with "Ver Mais" anchored to the right */}
        {/* REDUZIDO: mb-14 para mb-8 */}
        <div className="grid grid-cols-3 items-end mb-8">
          {/* Left empty spacer to balance the grid and keep title perfectly centered */}
          <div className="hidden sm:block" /> 
          
          <div className="text-center col-span-3 sm:col-span-1">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Notícias
            </h2>

            <br></br>

            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
              Actualizadas
            </p>
          </div>

          <div className="text-right col-span-3 sm:col-span-1 mt-4 sm:mt-0">
            <Link
              to="/noticias"
              className="text-sm font-bold text-primary hover:text-primary/80 hover:underline inline-flex items-center gap-1 transition-colors"
            >
              Ver Mais »
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredArticles.map((n) => (
            <Link
              key={n.id}
              to="/noticias"
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative bg-slate-100">
                <img
                  src={n.img}
                  alt={n.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
                  Ler mais{" "}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}