import { Monitor, FileText, CreditCard, ClipboardList, Plane, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Monitor, title: "Portal do Contribuinte", desc: "Acesso online aos serviços tributários", url: "https://cas-portaldocontribuinte.at.gov.mz/cas/login?service=https%3A%2F%2Fportaldocontribuinte.at.gov.mz%2Fj_spring_cas_security_check" },
  { icon: FileText, title: "e-Declaração", desc: "Submissão electrónica de declarações", url: "https://edeclaracao.at.gov.mz/" },
  { icon: CreditCard, title: "Pré-registo NUIT", desc: "Registo e impressão de carta de NUIT", url: "https://nuit.at.gov.mz/nuit/bootstrap/theme/work/Impressao_Carta.aspx" },
  { icon: ClipboardList, title: "Formulários", desc: "Declarações de impostos", url: "https://at-mocambique.tributo670.workers.dev/formularios.html" },
  { icon: Plane, title: "E-Viajante", desc: "Serviços para viajantes", url: "https://e-viajante.at.gov.mz/" },
  { icon: Building2, title: "Janela Única Electrónica", desc: "Desembaraço aduaneiro integrado", url: "https://jue.mcnet.co.mz/" },
];

export default function ServicesSection() {
  // REDUZIDO: de py-20 sm:py-28 para py-12 sm:py-16
  // REDUZIDO: mb-14 para mb-8
  return (
    <section id="servicos" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Serviços</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.a
            key={s.title}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="group flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <s.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}