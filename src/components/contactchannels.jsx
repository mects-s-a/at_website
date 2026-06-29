import { Phone, Mail, MapPin, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

const channels = [
  {
    icon: Phone,
    title: "Telefone",
    info: "Call Center: 1266",
    sub: "Linha gratuita, nacional",
    href: "tel:1266",
    bg: "bg-at-light",
  },
  {
    icon: Mail,
    title: "Email",
    info: "linhadocontribuinte@at.gov.mz",
    sub: "Suporte geral e técnico",
    href: "/contacto",
    internal: true,
    bg: "bg-at-light",
  },
  {
    icon: MapPin,
    title: "Presencial",
    info: "Repartições da AT",
    sub: "Em todo o país",
    href: "/atendimento-presencial",
    internal: true,
    bg: "bg-at-light",
  },
  {
    icon: ShieldAlert,
    title: "Denúncias",
    info: "Canal seguro",
    sub: "Reporte irregularidades",
    href: "https://denuncias.at.gov.mz/",
    bg: "bg-at-light",
  },
];

export default function ContactChannels() {
  return (
    <section className="py-16 bg-at-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-9">
          <h2 className="section-title">Canais de Atendimento</h2>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] mt-1.5 text-at-mid">Apoio</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map((c) => {
            const content = (
              <>
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mx-auto mb-3.5 shadow-sm`}>
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-at-ink mb-1">{c.title}</h3>
                <p className="text-[12.5px] text-at-muted leading-relaxed mb-2.5">{c.info}</p>
                {c.sub && <span className="text-xs font-semibold text-at-mid">{c.sub}</span>}
              </>
            );

            return c.internal ? (
              <Link
                key={c.title}
                to={c.href}
                className="block bg-white border border-at-border rounded-xl shadow-at-sm p-6 text-center hover:border-at-mid hover:shadow-at-md hover:-translate-y-0.5 transition-all duration-200"
              >
                {content}
              </Link>
            ) : (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block bg-white border border-at-border rounded-xl shadow-at-sm p-6 text-center hover:border-at-mid hover:shadow-at-md hover:-translate-y-0.5 transition-all duration-200"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}