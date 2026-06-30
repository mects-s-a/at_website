import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: "hero",
    duration: 12000,
    type: "hero",
  },
  {
    id: "nuit",
    duration: 6000,
    type: "image",
    img: "https://base44.app/api/apps/6a10556912996cfabed12a84/files/mp/public/6a10556912996cfabed12a84/1e77180af_nuit-mahala.png",
    title: "NUIT é Mahala",
    desc: "Registe-se gratuitamente e obtenha o seu Número Único de Identificação Tributária.",
    url: "https://nuit.at.gov.mz/nuit/bootstrap/theme/work/Impressao_Carta.aspx",
  },
  {
    id: "digital",
    duration: 6000,
    type: "image",
    img: "https://media.base44.com/images/public/6a10556912996cfabed12a84/fcec13ce1_generated_image.png",
    title: "Serviços Digitais Modernos",
    desc: "Aceda aos nossos serviços online de forma rápida, segura e conveniente.",
    url: "https://cas-portaldocontribuinte.at.gov.mz/cas/login?service=https%3A%2F%2Fportaldocontribuinte.at.gov.mz%2Fj_spring_cas_security_check",
  },
  {
    id: "moz",
    duration: 6000,
    type: "image",
    img: "https://media.base44.com/images/public/6a10556912996cfabed12a84/774bbf158_generated_image.png",
    title: "Todos Juntos Fazemos Moçambique",
    desc: "A Autoridade Tributária ao serviço do desenvolvimento nacional.",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((p) => (p + 1) % SLIDES.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + SLIDES.length) % SLIDES.length), []);

  const touchStartX = useRef(null);
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) { delta > 0 ? prev() : next(); }
    touchStartX.current = null;
  };

  useEffect(() => {
    const t = setTimeout(next, SLIDES[active].duration);
    return () => clearTimeout(t);
  }, [active, next]);

  const slide = SLIDES[active];

  return (
    <section className="relative overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="relative h-[380px] sm:h-[420px] md:h-[460px] lg:h-[480px]">
        <AnimatePresence mode="wait">
          {slide.type === "hero" ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
              style={{ background: "linear-gradient(140deg, #0B2D6E 0%, #163E96 55%, #1A4FAF 100%)" }}
            >
              <div className="absolute inset-0 hero-pattern pointer-events-none" />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center w-full">
                  {/* Left: text */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="eyebrow-line mb-4">
                      Autoridade Tributária de Moçambique
                    </div>
                    <h1 className="font-display text-2xl sm:text-3xl lg:text-[44px] font-bold leading-[1.15] text-white mb-4">
                      Serviço ao<br />contribuinte.<br />
                      <em className="text-at-light italic">Receitas para a nação.</em>
                    </h1>
                    <p className="text-white/70 text-sm sm:text-base max-w-lg mb-6 leading-relaxed">
                      A AT administra os impostos e aduanas de Moçambique com eficiência, transparência e foco no cidadão.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://cas-portaldocontribuinte.at.gov.mz/cas/login?service=https%3A%2F%2Fportaldocontribuinte.at.gov.mz%2Fj_spring_cas_security_check"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-at-deep px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-at-pale hover:-translate-y-0.5 transition-all"
                      >
                        Portal do Contribuinte <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="https://nuit.at.gov.mz/nuit/bootstrap/theme/work/Impressao_Carta.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-transparent text-white px-5 py-2.5 rounded-xl font-semibold text-sm border-[1.5px] border-white/30 hover:border-white/60 hover:bg-white/5 transition-all"
                      >
                        Registo NUIT
                      </a>
                    </div>
                  </motion.div>

                  {/* Right: Mission / Vision / Values */}
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="hidden lg:grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                      <Shield className="w-6 h-6 text-at-light mb-2" />
                      <h3 className="font-semibold text-base mb-1 text-white">Nossa Missão</h3>
                      <p className="text-white/60 text-xs leading-relaxed">Arrecadação justa e transparente de receitas.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                      <FileText className="w-6 h-6 text-at-light mb-2" />
                      <h3 className="font-semibold text-base mb-1 text-white">Visão</h3>
                      <p className="text-white/60 text-xs leading-relaxed">Referência internacional na arrecadação de receitas.</p>
                    </div>
                    <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                      <p className="text-at-light font-semibold text-xs mb-1 uppercase tracking-wider">Valores</p>
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
              className="absolute inset-0 bg-black"
            >
              {slide.url ? (
                <a href={slide.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative group">
                  <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />
                  <div className="absolute bottom-10 left-6 sm:left-12 max-w-md">
                    <h2 className="text-white font-display text-lg sm:text-xl lg:text-2xl font-bold underline underline-offset-4 decoration-at-light group-hover:text-at-light transition-colors">
                      {slide.title}
                    </h2>
                    <p className="text-white/75 text-xs sm:text-sm mt-1.5 leading-relaxed">{slide.desc}</p>
                  </div>
                </a>
              ) : (
                <div className="w-full h-full relative">
                  <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />
                  <div className="absolute bottom-10 left-6 sm:left-12 max-w-md">
                    <h2 className="text-white font-display text-lg sm:text-xl lg:text-2xl font-bold">
                      {slide.title}
                    </h2>
                    <p className="text-white/75 text-xs sm:text-sm mt-1.5 leading-relaxed">{slide.desc}</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Indicator dots */}
        <div className="absolute top-4 inset-x-0 flex items-center justify-center px-4 z-10">
          <div className="flex gap-2 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? "w-6 h-2 bg-at-light" : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-10">
          <motion.div
            key={active}
            className="h-full bg-at-light"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: SLIDES[active].duration / 1000, ease: "linear" }}
          />
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/55 text-white flex items-center justify-center transition backdrop-blur-md border border-white/15"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/55 text-white flex items-center justify-center transition backdrop-blur-md border border-white/15"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}