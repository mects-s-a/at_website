import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, AlertTriangle } from "lucide-react";

const channels = [
  { icon: Phone, title: "Telefone", info: "Call Center: 1266", href: "tel:1266" },
  { icon: Mail, title: "Email", info: "linhadocontribuinte@at.gov.mz", href: "mailto:linhadocontribuinte@at.gov.mz" },
  { icon: MapPin, title: "Presencial", info: "Atendimento nas repartições da AT", href: "https://at-mocambique.tributo670.workers.dev/Presencial.html" },
  { icon: AlertTriangle, title: "Denúncias", info: "Canal seguro para denúncias", href: "https://denuncias.at.gov.mz/" },
];

export default function ContactChannels() {
  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Apoio</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Canais de Atendimento</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {channels.map((c) => (
          <a
            key={c.title}
            href={c.title === "Email" ? undefined : c.href}
            target={c.title === "Email" ? undefined : "_blank"}
            rel={c.title === "Email" ? undefined : "noopener noreferrer"}
            className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500 text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <c.icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
            <p className="text-sm text-muted-foreground flex-1">{c.info}</p>
            {c.title === "Email" && (
              <Link
                to="/contacto"
                className="mt-3 text-xs font-semibold text-accent hover:underline self-start"
                onClick={(e) => e.stopPropagation()}
              >
                Fale Connosco &rsaquo;
              </Link>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}