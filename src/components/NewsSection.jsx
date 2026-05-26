import { ArrowRight } from "lucide-react";

const news = [
  { title: "\"O Governo continuará a apostar na Modernização da AT\"", summary: "O Ministro da Economia e Finanças reafirmou o compromisso com a modernização da Autoridade Tributária.", img: "https://at-mocambique.tributo670.workers.dev/Imagens/Amido.jpg", url: "https://at-mocambique.tributo670.workers.dev/noticia-amido.html" },
  { title: "AT Exalta o Papel da Mulher Moçambicana", summary: "Celebrações do Dia da Mulher destacam o papel feminino na administração pública.", img: "https://at-mocambique.tributo670.workers.dev/Imagens/Esc%20Sec%20Malhazine%201.jpeg", url: "https://at-mocambique.tributo670.workers.dev/7%20de%20abril.html" },
  { title: "AT busca soluções para melhor arrecadação de receitas", summary: "V Fórum Fiscal dos Operadores do Sector Extractivo discute estratégias de melhoria.", img: "https://at-mocambique.tributo670.workers.dev/Imagens/V%20F%C3%B3rum%20Fiscal%20dos%20Operadores%20do%20Sector%20Extractivo%201.jpeg", url: "https://at-mocambique.tributo670.workers.dev/AT%20BUSACA.html" },
];

export default function NewsSection() {
  return (
    <section id="noticias" className="py-20 sm:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Actualidades</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Notícias</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n) => (
            <a key={n.title} href={n.url} target="_blank" rel="noopener noreferrer" className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">{n.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{n.summary}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                  Ler mais <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
