import { Link } from "react-router-dom";
import { Monitor, FileText, CreditCard, ClipboardList, Plane, Building2 } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Portal do Contribuinte",
    desc: "Acesso online aos serviços tributários",
    url: "https://cas-portaldocontribuinte.at.gov.mz/cas/login?service=https%3A%2F%2Fportaldocontribuinte.at.gov.mz%2Fj_spring_cas_security_check",
  },
  {
    icon: FileText,
    title: "e-Declaração",
    desc: "Submissão electrónica de declarações",
    url: "https://edeclaracao.at.gov.mz/",
  },
  {
    icon: CreditCard,
    title: "Pré-registo NUIT",
    desc: "Registo e impressão de carta de NUIT",
    url: "https://nuit.at.gov.mz/nuit/bootstrap/theme/work/Impressao_Carta.aspx",
  },
  {
    icon: Plane,
    title: "E-Viajante",
    desc: "Serviços para viajantes internacionais",
    url: "https://e-viajante.at.gov.mz/",
  },
  {
    icon: Building2,
    title: "Janela Única Electrónica",
    desc: "Desembaraço aduaneiro integrado",
    url: "https://jue.mcnet.co.mz/",
  },
  {
    icon: ClipboardList,
    title: "Formulários",
    desc: "Modelos e documentos oficiais",
    url: "/formularios",
    internal: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-16 bg-at-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-9">
          <h2 className="section-title">Serviços</h2>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] mt-1.5 text-at-mid">Serviços Digitais</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const content = (
              <>
                <div className="w-11 h-11 rounded-[10px] bg-at-pale flex items-center justify-center shrink-0 group-hover:bg-at-mid transition-colors">
                  <s.icon className="w-5 h-5 text-at-mid group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-at-ink mb-1 group-hover:text-at-mid transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[12.5px] text-at-muted leading-relaxed">{s.desc}</p>
                </div>
              </>
            );
            const className = "flex items-start gap-4 p-5 bg-white border border-at-border rounded-xl shadow-at-sm hover:border-at-mid hover:shadow-at-md hover:-translate-y-0.5 transition-all duration-200 group";
            return s.internal ? (
              <Link key={s.title} to={s.url} className={className}>{content}</Link>
            ) : (
              <a key={s.title} href={s.url} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>
            );
          })}
        </div>
      </div>
    </section>
  );
}