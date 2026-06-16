import { ArrowRight, FileText, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full translate-y-1/2 -translate-x-1/4" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">Autoridade Tributária de Moçambique</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Todos Juntos Fazemos Moçambique
            </h1>
            <p className="text-white/70 text-lg max-w-lg mb-8 leading-relaxed">
              Arrecadar receitas, de forma justa e transparente para o financiamento de despesa pública e proteger a economia e a sociedade.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://cas-portaldocontribuinte.at.gov.mz/cas/login?service=https%3A%2F%2Fportaldocontribuinte.at.gov.mz%2Fj_spring_cas_security_check" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:brightness-110 transition">
                Portal do Contribuinte <ArrowRight className="w-4 h-4" />
              </a>
              <a href="mailto:linhadocontribuinte@at.gov.mz" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/20 transition border border-white/20">
                Fale Connosco
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Shield className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-1">Nossa Missão</h3>
              <p className="text-white/60 text-sm">Arrecadação justa e transparente de receitas.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mt-8">
              <FileText className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-1">Visão</h3>
              <p className="text-white/60 text-sm">Referência internacional na arrecadação de receitas.</p>
            </div>
            <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-accent font-semibold text-sm mb-1">Valores</p>
              <p className="text-white/80">Legalidade · Eficiência · Integridade</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
