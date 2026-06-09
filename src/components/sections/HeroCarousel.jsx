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
    bgColor: "bg-[#004767]",
  },
  {
    id: "digital",
    duration: 5000,
    type: "image",
    img: "https://at-mocambique.tributo670.workers.dev/Imagens/BANNER%20AT%20.png",
    title: "Serviços Digitais Modernos",
    desc: "Aceda aos nossos serviços online de forma rápida, segura e conveniente.",
    url: "https://cas-portaldocontribuinte.at.gov.mz/cas/login?service=https%3A%2F%2Fportaldocontribuinte.at.gov.mz%2Fj_spring_cas_security_check",
    bgColor: "bg-[#004767]",
  },
  {
    id: "moz",
    duration: 5000,
    type: "image",
    img: "https://at-mocambique.tributo670.workers.dev/Imagens/BANNER%20MOZ%20.png",
    title: "Todos Juntos Fazemos Moçambique",
    desc: "A Autoridade Tributária ao serviço do desenvolvimento nacional.",
    url: "https://at-mocambique.tributo670.workers.dev",
    bgColor: "bg-[#045d33]",
  },
  {
    id: "anos",
    duration: 5000,
    type: "image",
    img: "https://at-mocambique.tributo670.workers.dev/Imagens/20%20Anos%20da%20AT%20830X333.png",
    title: "20 Anos de Excelência",
    desc: "Duas décadas de comprometimento com a arrecadação justa e transparente de receitas.",
    url: "https://at-mocambique.tributo670.workers.dev",
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
    <section className="relative overflow-hidden bg-black">
      {/* Outer container: fixed height for hero, flex-col for image slides */}
      <div className="relative h-[320px] sm:h-[450px] md:h-[520px] lg:h-[580px] xl:h-[640px] transition-all duration-300">

        <AnimatePresence mode="wait">

          {/* ── HERO SLIDE ── */}
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
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full translate-y-1/2 -translate-x-1/4" />
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
                      Autoridade Tributária de Moçambique
                    </p>
                    <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                      Todos Juntos Fazemos Moçambique
                    </h1>
                    <p className="text-white/70 text-lg max-w-lg mb-8 leading-relaxed">
                      Arrecadar receitas, de forma justa e transparente para o financiamento de
                      despesa pública e proteger a economia e a sociedade.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://cas-portaldocontribuinte.at.gov.mz/cas/login?service=https%3A%2F%2Fportaldocontribuinte.at.gov.mz%2Fj_spring_cas_security_check"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:brightness-110 transition"
                      >
                        Portal do Contribuinte <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="mailto:linhadocontribuinte@at.gov.mz"
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/20 transition border border-white/20"
                      >
                        Fale Connosco
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="hidden lg:grid grid-cols-2 gap-4"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <Shield className="w-8 h-8 text-accent mb-3" />
                      <h3 className="font-semibold text-lg mb-1">Nossa Missão</h3>
                      <p className="text-white/60 text-sm">
                        Arrecadação justa e transparente de receitas.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <FileText className="w-8 h-8 text-accent mb-3" />
                      <h3 className="font-semibold text-lg mb-1">Visão</h3>
                      <p className="text-white/60 text-sm">
                        Referência internacional na arrecadação de receitas.
                      </p>
                    </div>
                    <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <p className="text-accent font-semibold text-sm mb-1">Valores</p>
                      <p className="text-white/80">Legalidade · Eficiência · Integridade</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          ) : (

            /* ── IMAGE SLIDES ── */
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`absolute inset-0 flex flex-col ${slide.bgColor}`}
            >
              {/* Image area — fills all space above the bottom bar */}
              <a
                href={slide.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 block overflow-hidden"
                tabIndex={-1}
                aria-hidden="true"
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-contain"
                />
              </a>

              {/* Bottom bar — title + desc + arrows in one clean row */}
              <div className="shrink-0 bg-black/65 backdrop-blur-md border-t border-white/10 px-3 sm:px-5 py-2.5 flex items-center gap-3 z-10">

                {/* Prev arrow */}
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition border border-white/10"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Text + link */}
                <a
                  href={slide.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 flex items-center gap-3 sm:gap-6 group"
                >
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.35 }}
                    className="min-w-0 flex-1"
                  >
                    <p className="text-sm sm:text-base font-semibold text-accent leading-tight truncate">
                      {slide.title}
                    </p>
                    <p className="text-xs text-white/65 leading-snug line-clamp-1 hidden sm:block mt-0.5">
                      {slide.desc}
                    </p>
                  </motion.div>

                  <span className="shrink-0 inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-accent whitespace-nowrap group-hover:underline">
                    Saber mais <ArrowRight className="w-3 h-3" />
                  </span>
                </a>

                {/* Next arrow */}
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition border border-white/10"
                  aria-label="Próximo slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── DOT INDICATORS (all slides) ── */}
        <div className="absolute top-4 inset-x-0 flex items-center justify-center px-4 z-20">
          <div className="flex gap-2 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 h-2 bg-accent"
                    : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── PROGRESS BAR (all slides) ── */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
          <motion.div
            key={active}
            className="h-full bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: SLIDES[active].duration / 1000, ease: "linear" }}
          />
        </div>

        {/* ── HERO SLIDE ARROWS ONLY ── */}
        {slide.type === "hero" && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 sm:left-5 bottom-6 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition backdrop-blur-sm border border-white/10"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 sm:right-5 bottom-6 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition backdrop-blur-sm border border-white/10"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

      </div>
    </section>
  );
}