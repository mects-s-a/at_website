import { FileCheck, ShieldCheck, Building, Globe, ClipboardCheck, Headphones } from "lucide-react";

const services = [
  { icon: FileCheck, title: "Declaração de Impostos", desc: "Assistência na submissão de declarações de IRS, IRC, IVA e outros impostos com precisão e dentro dos prazos legais.", tags: ["IRPS", "IRPC", "IVA"] },
  { icon: ShieldCheck, title: "Cumprimento Fiscal", desc: "Garantimos que a sua empresa ou actividade cumpre todas as obrigações fiscais e parafiscais exigidas pela legislação moçambicana.", tags: ["Auditoria", "Conformidade", "INSS"] },
  { icon: Building, title: "Registo de Empresas", desc: "Apoio completo no registo de empresas, obtenção do NUIT colectivo e licenças de actividade.", tags: ["NUIT", "Licenças", "Registo"] },
  { icon: Globe, title: "Comércio Internacional", desc: "Facilitação do desembaraço aduaneiro, classificação tarifária e regimes aduaneiros especiais.", tags: ["Alfândegas", "DUA", "Importação"] },
  { icon: ClipboardCheck, title: "Contencioso Fiscal", desc: "Apoio em processos de impugnação, reclamações graciosas e recursos junto das autoridades tributárias.", tags: ["Recursos", "Impugnação", "Defesa"] },
  { icon: Headphones, title: "Consultoria Tributária", desc: "Aconselhamento especializado sobre planeamento fiscal, benefícios fiscais e optimização da carga tributária.", tags: ["Planeamento", "Benefícios", "Optimização"] },
];

export default function TaxServicesBreakdown() {
  return (
    <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Como Ajudamos</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Serviços de Conformidade Fiscal</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Uma visão completa dos serviços tributários e financeiros que a AT disponibiliza para apoiar cidadãos e empresas.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 rounded-2xl p-6 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <s.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-white/10 text-white/70 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
