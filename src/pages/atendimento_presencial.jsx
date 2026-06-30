import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { MapPin, Phone, Clock, Building2, Anchor, Plane, Ship } from "lucide-react";

const PROVINCES = [
  {
    name: "Maputo Cidade",
    delegacao: "Delegação Fiscal de Maputo",
    address: "Av. 25 de Setembro, Nº 1235, Maputo",
    phone: "+258 21 344 200",
    type: "Sede Nacional",
  },
  {
    name: "Maputo Província",
    delegacao: "Delegação Fiscal da Matola",
    address: "Av. Josina Machel, Matola",
    phone: "+258 21 750 100",
    type: "Delegação",
  },
  {
    name: "Gaza",
    delegacao: "Delegação Fiscal de Xai-Xai",
    address: "Av. Samora Machel, Xai-Xai",
    phone: "+258 282 100 200",
    type: "Delegação",
  },
  {
    name: "Inhambane",
    delegacao: "Delegação Fiscal de Inhambane",
    address: "Av. Independence, Inhambane",
    phone: "+258 293 100 200",
    type: "Delegação",
  },
  {
    name: "Sofala",
    delegacao: "Delegação Fiscal da Beira",
    address: "Av. Eduardo Mondlane, Beira",
    phone: "+258 233 100 200",
    type: "Delegação",
  },
  {
    name: "Manica",
    delegacao: "Delegação Fiscal de Chimoio",
    address: "Av. Republica, Chimoio",
    phone: "+258 251 100 200",
    type: "Delegação",
  },
  {
    name: "Tete",
    delegacao: "Delegação Fiscal de Tete",
    address: "Av. Patrice Lumumba, Tete",
    phone: "+258 252 100 200",
    type: "Delegação",
  },
  {
    name: "Zambézia",
    delegacao: "Delegação Fiscal de Quelimane",
    address: "Av. Augusto Cardoso, Quelimane",
    phone: "+258 242 100 200",
    type: "Delegação",
  },
  {
    name: "Nampula",
    delegacao: "Delegação Fiscal de Nampula",
    address: "Av. Eduardo Mondlane, Nampula",
    phone: "+258 261 100 200",
    type: "Delegação",
  },
  {
    name: "Cabo Delgado",
    delegacao: "Delegação Fiscal de Pemba",
    address: "Av. Marginal, Pemba",
    phone: "+258 272 100 200",
    type: "Delegação",
  },
  {
    name: "Niassa",
    delegacao: "Delegação Fiscal de Lichinga",
    address: "Av. Eduardo Mondlane, Lichinga",
    phone: "+258 271 100 200",
    type: "Delegação",
  },
];

const BORDER_POSTS = [
  { name: "Ressano Garcia", type: "Terrestre", province: "Maputo", icon: Building2 },
  { name: "Aeroporto de Maputo", type: "Aéreo", province: "Maputo", icon: Plane },
  { name: "Porto de Maputo", type: "Marítimo", province: "Maputo", icon: Ship },
  { name: "Porto da Beira", type: "Marítimo", province: "Sofala", icon: Ship },
  { name: "Machipanda", type: "Terrestre", province: "Manica", icon: Building2 },
  { name: "Zobué", type: "Terrestre", province: "Tete", icon: Building2 },
  { name: "Cassacatiza", type: "Terrestre", province: "Tete", icon: Building2 },
  { name: "Nyamapanda", type: "Terrestre", province: "Tete", icon: Building2 },
  { name: "Entre Lagos", type: "Terrestre", province: "Niassa", icon: Building2 },
  { name: "Porto de Nacala", type: "Marítimo", province: "Nampula", icon: Ship },
  { name: "Aeroporto de Nampula", type: "Aéreo", province: "Nampula", icon: Plane },
  { name: "Cóbuè", type: "Lacustre", province: "Niassa", icon: Anchor },
];

const SERVICE_INFO = [
  { icon: Clock, title: "Horário de Atendimento", desc: "Segunda a Sexta-feira, das 07h30 às 15h30. Encerrado aos sábados, domingos e feriados." },
  { icon: Phone, title: "Linha do Contribuinte", desc: "1266 — gratuita em todo o território nacional. Para dúvidas, solicitações e suporte." },
  { icon: Building2, title: "Atendimento Presencial", desc: "Dirija-se à repartição fiscal ou aduaneira mais próxima. Leve o seu NUIT e documentos relevantes." },
];

export default function AtendimentoPresencial() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <PageHero
          eyebrow="Atendimento"
          title="Atendimento Presencial"
          description="Encontre a repartição da Autoridade Tributária mais próxima de si. Atendimento em todo o território nacional."
          icon={MapPin}
        />

        {/* Service info cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {SERVICE_INFO.map((s) => (
            <div key={s.title} className="bg-white border border-at-border rounded-xl p-5 shadow-at-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-[10px] bg-at-smoke flex items-center justify-center shrink-0">
                <s.icon className="w-5 h-5 text-at-mid" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-at-ink mb-1.5">{s.title}</h3>
                <p className="text-[12.5px] text-at-muted leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Provincial delegations */}
        <div className="mb-12">
          <div className="section-eyebrow">Rede Nacional</div>
          <h2 className="section-title">Delegações Provinciais</h2>
          <p className="section-desc">A AT está presente em todas as províncias do país, com delegações fiscais e aduaneiras.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {PROVINCES.map((p) => (
              <div
                key={p.name}
                className={`bg-white border rounded-xl p-5 shadow-at-sm hover:shadow-at-md transition-all duration-200 ${
                  p.type === "Sede Nacional" ? "border-at-light/30 bg-gradient-to-br from-at-deep to-at-mid text-white hover:scale-[1.02]" : "border-at-border"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full ${
                    p.type === "Sede Nacional" ? "bg-white text-at-deep" : "bg-at-pale text-at-mid"
                  }`}>
                    {p.type}
                  </span>
                </div>
                <h3 className={`font-semibold text-sm mb-0.5 ${p.type === "Sede Nacional" ? "text-white" : "text-at-ink"}`}>
                  {p.name}
                </h3>
                <p className={`text-[12.5px] mb-3 ${p.type === "Sede Nacional" ? "text-white/70" : "text-at-muted"}`}>
                  {p.delegacao}
                </p>
                <div className={`space-y-1.5 text-[11.5px] ${p.type === "Sede Nacional" ? "text-white/70" : "text-at-muted"}`}>
                  <p className="flex items-start gap-1.5">
                    <MapPin className={`w-3 h-3 mt-0.5 shrink-0 ${p.type === "Sede Nacional" ? "text-at-light" : "text-at-muted"}`} />
                    {p.address}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone className={`w-3 h-3 shrink-0 ${p.type === "Sede Nacional" ? "text-at-light" : "text-at-muted"}`} />
                    {p.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Border posts */}
        <div>
          <div className="section-eyebrow">Postos de Fronteira</div>
          <h2 className="section-title">Estâncias Aduaneiras</h2>
          <p className="section-desc">Principais postos de fronteira para desembaraço aduaneiro de mercadorias e viajantes.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
            {BORDER_POSTS.map((b) => (
              <div
                key={b.name}
                className="flex items-center gap-3 bg-white border border-at-border rounded-xl p-4 shadow-at-sm hover:border-at-mid hover:shadow-at-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-at-smoke flex items-center justify-center shrink-0">
                  <b.icon className="w-4 h-4 text-at-mid" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-at-ink truncate">{b.name}</h3>
                  <div className="flex items-center gap-2 text-[11px] text-at-muted">
                    <span className="font-medium">{b.type}</span>
                    <span className="text-at-border">·</span>
                    <span>{b.province}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}