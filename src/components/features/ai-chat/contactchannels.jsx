import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, TriangleAlert } from "lucide-react"; // Imported your beautiful icons

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
    title: "Presencial",
    info: "Sede Geral da AT, Maputo",
    icon: MapPin,
    href: "https://www.google.com/maps/place/Autoridade+Tribut%C3%A1ria+de+Mo%C3%A7ambique/@-25.9746688,32.5711264,17z/data=!3m1!4b1!4m6!3m5!1s0x1ee69b05502461c7:0xbd52d11f32e73e38!8m2!3d-25.9746688!4d32.5737013!16s%2Fg%2F11c1s4byk2?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    title: "Denúncias",
    info: "Canal seguro para denúncias",
    icon: TriangleAlert,
    href: "#"
  }
];

export default function ContactChannels() {
  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-9">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-1">Apoio</p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Canais de Atendimento</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {channels.map((c) => {
          const isEmail = c.title === "Email";
          const WrapperElement = isEmail ? "div" : "a";

          return (
            <WrapperElement
              key={c.title}
              href={isEmail ? undefined : c.href}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
              className="group text-center p-5 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                <c.icon className="w-5 h-5" /> {/* This cleanly mounts the Lucide element directly */}
              </div>
              
              <h3 className="font-semibold text-sm sm:text-base text-foreground mb-0.5">{c.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground flex-1 mb-2">{c.info}</p>
              
              {isEmail && (
                <Link
                  to="/contacto"
                  className="text-xs font-semibold text-accent hover:underline mt-auto"
                >
                  Fale Connosco ›
                </Link>
              )}
            </WrapperElement>
          );
        })}
      </div>
    </section>
  );
}