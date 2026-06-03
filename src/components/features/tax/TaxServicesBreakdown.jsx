import { FileCheck, ShieldCheck, Globe, ClipboardCheck, Headphones } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Declaração de Impostos",
    desc: "Assistência na submissão de declarações de IRS, IRC, IVA e outros impostos com precisão e dentro dos prazos legais.",
    tags: ["IRPS", "IRPC", "IVA"],
  },
  {
    icon: ShieldCheck,
    title: "Cumprimento Fiscal",
    desc: "Garantimos que a sua empresa ou actividade cumpre todas as obrigações fiscais e parafiscais exigidas pela legislação moçambicana.",
    tags: ["Auditoria", "Conformidade", "INSS"],
  },
  {
    icon: Globe,
    title: "Comércio Internacional",
    desc: "Facilitação do desembaraço aduaneiro, classificação tarifária e regimes aduaneiros especiais.",
    tags: ["Alfândegas", "DUA", "Importação"],
  },
  {
    icon: ClipboardCheck,
    title: "Contencioso Fiscal",
    desc: "Apoio em processos de impugnação, reclamações graciosas e recursos junto das autoridades tributárias.",
    tags: ["Recursos", "Impugnação", "Defesa"],
  },
  {
    icon: Headphones,
    title: "Consultoria Tributária",
    desc: "Aconselhamento especializado sobre planeamento fiscal, benefícios fiscais e optimização da carga tributária.",
    tags: ["Planeamento", "Benefícios", "Optimização"],
  },
];

export default function TaxServicesBreakdown() {
  return (
    <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
            Como Ajudamos
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Serviços de Conformidade Fiscal
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm">
            Uma visão completa dos serviços tributários e financeiros que a AT disponibiliza para apoiar cidadãos e empresas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((s) => (
            <div 
              key={s.title} 
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3 group-hover:bg-accent transition-all duration-300">
                <s.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="font-semibold text-sm mb-1.5 leading-snug">
                {s.title}
              </h3>
              
              <p className="text-white/55 text-xs leading-relaxed mb-3 hidden lg:block">
                {s.desc}
              </p>
              
              <div className="flex flex-wrap gap-1.5 justify-center mt-auto">
                {s.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs bg-white/10 text-white/70 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}