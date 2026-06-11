import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: "hero",
    duration: 15000,
    type: "hero",
  },
  {
    id: "nuit",
    duration: 5000,
    type: "image",
    img: "https://at-mocambique.tributo670.workers.dev/Imagens/NUIT%20%C3%A9%20Mahala.png",
    title: "NUIT é Mahala",
    desc: "Registe-se gratuitamente e obtenha o seu Número Único de Identificação Tributária.",
    url: "https://nuit.at.gov.mz/nuit/bootstrap/theme/work/Impressao_Carta.aspx",
  },
  {
    id: "digital",
    duration: 5000,
    type: "image",
    img: "https://at-mocambique.tributo670.workers.dev/Imagens/BANNER%20AT%20.png",
    title: "Serviços Digitais Modernos",
    desc: "Aceda aos nossos serviços online de forma rápida, segura e conveniente.",
    url: "https://cas-portaldocontribuinte.at.gov.mz/cas/login?service=https%3A%2F%2Fportaldocontribuinte.at.gov.mz%2Fj_spring_cas_security_check",
  },
  {
    id: "moz",
    duration: 5000,
    type: "image",
    img: "https://at-mocambique.tributo670.workers.dev/Imagens/BANNER%20MOZ%20.png",
    title: "Todos Juntos Fazemos Moçambique",
    desc: "A Autoridade Tributária ao serviço do desenvolvimento nacional.",
    url: "https://at-mocambique.tributo670.workers.dev",
  },
  {
    id: "trabalho",
    duration: 5000,
    type: "image",
    img: "/src/components/Media/Content/PAT TIMAR web_050744.png",
    title: "Atendimento Humanizado e Rigor Fiscal",
    desc: "Atendimento Humanizado e Controlo Eficaz das Receitas no Centro das Atenções do Presidente da AT.",
    bgColor: "bg-[#161616]",
  },
  {
    id: "crianca",
    duration: 5000,
    type: "image",
    img: "/src/components/Media/Dia da Criança - AT/PAT 1 de Junho_094712.png",
    title: "Dia Internacional da Criança",
    desc: "Presidente da AT Partilha o 'ABC dos Impostos' com Petizes da Escola 16 de Junho.",
    bgColor: "bg-[#161616]",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((p) => (p + 1) % SLIDES.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const t = setTimeout(next, SLIDES[active].duration);
    return () => clearTimeout(t);
  }, [active, next]);

  const slide = SLIDES[active];

  return (
    <section className="relative overflow-hidden">
      {/* Reduced responsive height scale constraints */}
      <div className="relative h-[320px] sm:h-[400px] lg:h-[460px] xl:h-[500px] transition-all duration-300">
        <AnimatePresence mode="wait">
          {slide.type === "hero" ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground"
            >
              {/* Background decorations */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-white rounded-full translate-y-1/2 -translate-x-1/4" />
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
                <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <p className="text-accent font-medium text-xs tracking-widest uppercase mb-2">
                      Autoridade Tributária de Moçambique
                    </p>
                    <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                      Todos Juntos Fazemos Moçambique
                    </h1>
                    <p className="text-white/70 text-base max-w-lg mb-6 leading-relaxed">
                      Arrecadar receitas, de forma justa e transparente para o financiamento de despesa pública e proteger a economia e a sociedade.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href="https://cas-portaldocontribuinte.at.gov.mz/cas/login?service=https%3A%2F%2Fportaldocontribuinte.at.gov.mz%2Fj_spring_cas_security_check" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-xl font-semibold text-xs hover:brightness-110 transition"
                      >
                        Portal do Contribuinte <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <a 
                        href="mailto:linhadocontribuinte@at.gov.mz" 
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-5 py-2.5 rounded-xl font-semibold text-xs hover:bg-white/20 transition border border-white/20"
                      >
                        Fale Connosco
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.6, delay: 0.4 }} 
                    className="hidden lg:grid grid-cols-2 gap-3"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <Shield className="w-6 h-6 text-accent mb-2" />
                      <h3 className="font-semibold text-base mb-0.5">Nossa Missão</h3>
                      <p className="text-white/60 text-xs">Arrecadação justa e transparente de receitas.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <FileText className="w-6 h-6 text-accent mb-2" />
                      <h3 className="font-semibold text-base mb-0.5">Visão</h3>
                      <p className="text-white/60 text-xs">Referência internacional na arrecadação de receitas.</p>
                    </div>
                    <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <p className="text-accent font-semibold text-xs mb-0.5">Valores</p>
                      <p className="text-white/80 text-sm">Legalidade · Eficiência · Integridade</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
              
              {slide.url ? (
                <a
                  href={slide.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-14 left-6 sm:left-12 max-w-md group cursor-pointer"
                >
                  <h2 className="text-white font-display text-lg sm:text-xl lg:text-2xl font-bold underline underline-offset-4 decoration-accent group-hover:text-accent transition-colors">
                    {slide.title}
                  </h2>
                  <p className="text-white/75 text-xs sm:text-sm mt-1.5 leading-relaxed">{slide.desc}</p>
                </a>
              ) : (
                <div className="absolute bottom-14 left-6 sm:left-12 max-w-md">
                  <h2 className="text-white font-display text-lg sm:text-xl lg:text-2xl font-bold decoration-accent">
                    {slide.title}
                  </h2>
                  <p className="text-white/75 text-xs sm:text-sm mt-1.5 leading-relaxed">{slide.desc}</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top bar indicators */}
        <div className="absolute top-4 inset-x-0 flex items-center justify-center px-4 z-10">
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-5 h-1.5 bg-accent"
                    : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress bar overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-10">
          <motion.div
            key={active}
            className="h-full bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: SLIDES[active].duration / 1000, ease: "linear" }}
          />
        </div>

        {/* Navigation arrows standard across all slide views */}
        <button
          onClick={prev}
          className="absolute left-3 sm:left-5 bottom-4 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition backdrop-blur-sm border border-white/10"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 sm:right-5 bottom-4 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition backdrop-blur-sm border border-white/10"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}