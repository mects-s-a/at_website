import { Phone, Mail, MapPin, AlertTriangle } from "lucide-react";

const channels = [
  { icon: Phone, title: "Telefone", info: "Call Center: 1266", href: "tel:1266", color: "bg-blue-500" },
  { icon: Mail, title: "Email", info: "linhadocontribuinte@at.gov.mz", href: "mailto:linhadocontribuinte@at.gov.mz", color: "bg-accent" },
  { icon: MapPin, title: "Presencial", info: "Atendimento nas repartições da AT", href: "https://at-mocambique.tributo670.workers.dev/Presencial.html", color: "bg-amber-500" },
  { icon: AlertTriangle, title: "Denúncias", info: "Canal seguro para denúncias", href: "https://denuncias.at.gov.mz/", color: "bg-red-500" },
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
          <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300">
            <div className={`w-14 h-14 rounded-2xl ${c.color} text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <c.icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.info}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
