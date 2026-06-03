import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react"; // Imported your beautiful icons

// Defining the exact array structure your layout maps over
const channels = [
  {
    title: "Email",
    info: "Geral & Suporte técnico",
    icon: Mail,
    href: ""
  },
  {
    title: "Telefone",
    info: "Linha de Apoio: 1266",
    icon: Phone,
    href: "tel:1266"
  },
  {
    title: "Localização",
    info: "Sede Geral da AT, Maputo",
    icon: MapPin,
    href: "https://maps.google.com"
  },
  {
    title: "Horário",
    info: "Seg - Sex: 7:30 às 15:30",
    icon: Clock,
    href: "#"
  }
];

export default function ContactChannels() {
  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Apoio</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Canais de Atendimento</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {channels.map((c) => {
          const isEmail = c.title === "Email";
          const WrapperElement = isEmail ? "div" : "a";

          return (
            <WrapperElement
              key={c.title}
              href={isEmail ? undefined : c.href}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
              className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500 text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <c.icon className="w-6 h-6" /> {/* This cleanly mounts the Lucide element directly */}
              </div>
              
              <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground flex-1 mb-3">{c.info}</p>
              
              {isEmail && (
                <Link
                  to="/contacto"
                  className="text-xs font-semibold text-accent hover:underline mt-auto"
                >
                  Fale Connosco &rsaquo;
                </Link>
              )}
            </WrapperElement>
          );
        })}
      </div>
    </section>
  );
}