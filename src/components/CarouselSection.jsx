import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

const slides = [
  { img: "https://at-mocambique.tributo670.workers.dev/Imagens/NUIT%20%C3%A9%20Mahala.png", title: "NUIT é Mahala", desc: "Registe-se gratuitamente e obtenha o seu Número Único de Identificação Tributária.", url: "https://nuit.at.gov.mz/nuit/bootstrap/theme/work/Impressao_Carta.aspx" },
  { img: "https://at-mocambique.tributo670.workers.dev/Imagens/BANNER%20AT%20.png", title: "Serviços Digitais Modernos", desc: "Aceda aos nossos serviços online de forma rápida, segura e conveniente.", url: "https://cas-portaldocontribuinte.at.gov.mz/cas/login?service=https%3A%2F%2Fportaldocontribuinte.at.gov.mz%2Fj_spring_cas_security_check" },
  { img: "https://at-mocambique.tributo670.workers.dev/Imagens/BANNER%20MOZ%20.png", title: "Todos Juntos Fazemos Moçambique", desc: "A Autoridade Tributária ao serviço do desenvolvimento nacional.", url: "https://at-mocambique.tributo670.workers.dev" },
  { img: "https://at-mocambique.tributo670.workers.dev/Imagens/20%20Anos%20da%20AT%20830X333.png", title: "20 Anos de Excelência", desc: "Duas décadas de comprometimento com a arrecadação justa e transparente de receitas.", url: "https://at-mocambique.tributo670.workers.dev" },
];

export default function CarouselSection() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setActive((p) => (p + 1) % slides.length);

  return (
    <section className="relative overflow-hidden bg-foreground">
      <div className="relative h-72 sm:h-96 lg:h-[480px]">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
            <div className="absolute top-4 inset-x-0 flex items-center justify-center px-4">
              <div className="flex gap-2">
                {slides.map((_, i2) => (
                  <button key={i2} onClick={() => setActive(i2)} className={`rounded-full transition-all duration-300 ${i2 === active ? "w-6 h-2 bg-accent" : "w-2 h-2 bg-white/50 hover:bg-white/80"}`} />
                ))}
              </div>
              <div className="absolute right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                <Images className="w-3.5 h-3.5" /> {active + 1} / {slides.length}
              </div>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="absolute bottom-10 left-6 sm:left-10 max-w-md group cursor-pointer">
              <h2 className="text-white font-display text-xl sm:text-2xl lg:text-3xl font-bold underline underline-offset-4 decoration-accent group-hover:text-accent transition-colors">{s.title}</h2>
              <p className="text-white/75 text-sm sm:text-base mt-2 leading-relaxed">{s.desc}</p>
            </a>
          </div>
        ))}
        <button onClick={prev} className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition backdrop-blur-sm"><ChevronLeft className="w-5 h-5" /></button>
        <button onClick={next} className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition backdrop-blur-sm"><ChevronRight className="w-5 h-5" /></button>
      </div>
    </section>
  );
}
