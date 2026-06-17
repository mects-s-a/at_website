import { useParams, Navigate, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import sobreATStyles from "../Institucional/atstyles";
import ServicosSidebar from "./serv.sidebar";

function ComingSoonTab({ title, desc }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="flex items-center justify-center mb-4 rounded-2xl" style={{ width: "56px", height: "56px", background: "rgba(27,79,171,0.08)" }}>
        <span style={{ fontSize: "26px" }}>🗂️</span>
      </div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "var(--sat-fg)", marginBottom: "8px" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "var(--sat-muted-fg)", maxWidth: "360px", lineHeight: "1.65" }}>
        {desc || "Esta secção está em desenvolvimento. O conteúdo será disponibilizado em breve."}
      </p>
    </div>
  );
}

const TABS = {
  "procedimentos-aduaneiros": {
    hero: { title: "Procedimentos Aduaneiros", desc: "Consulte os processos de desalfandegamento, regimes aduaneiros especiais e os requisitos para importação e exportação de mercadorias." },
    breadcrumb: "Procedimentos Aduaneiros", section: "Serviços Aduaneiros",
    component: () => <ComingSoonTab title="Procedimentos Aduaneiros" />,
  },
  "pauta-aduaneira": {
    hero: { title: "Pauta Aduaneira", desc: "Pesquise as taxas e classifications tarifárias aplicáveis às mercadorias que transitam pela fronteira moçambicana." },
    breadcrumb: "Pauta Aduaneira", section: "Serviços Aduaneiros",
    component: () => <ComingSoonTab title="Pauta Aduaneira" />,
  },
  "formularios-aduaneiros": {
    hero: { title: "Formulários Aduaneiros", desc: "Descarregue os formulários oficiais necessários para os processos de declaração e desalfandegamento aduaneiro." },
    breadcrumb: "Formulários Aduaneiros", section: "Serviços Aduaneiros",
    component: () => <ComingSoonTab title="Formulários Aduaneiros" />,
  },
  "estancias-aduaneiras": {
    hero: { title: "Estâncias Aduaneiras", desc: "Localize postos aduaneiros, terminais de carga e fronteiras alfandegárias activas em todo o território nacional." },
    breadcrumb: "Estâncias Aduaneiras", section: "Serviços Aduaneiros",
    component: () => <ComingSoonTab title="Estâncias Aduaneiras" />,
  },
  "impostos": {
    hero: { title: "Impostos", desc: "Conheça os tipos de impostos vigentes, taxas aplicáveis, obrigações do contribuinte e prazos de liquidação." },
    breadcrumb: "Impostos", section: "Serviços Tributários",
    component: () => <ComingSoonTab title="Impostos" />,
  },
  "calendario-fiscal": {
    hero: { title: "Calendário Fiscal", desc: "Consulte as datas-limite para entrega de declarações, pagamentos e outras obrigações fiscais ao longo do ano." },
    breadcrumb: "Calendário Fiscal", section: "Serviços Tributários",
    component: () => <ComingSoonTab title="Calendário Fiscal" />,
  },
  "formularios-fiscais": {
    hero: { title: "Formulários Fiscais", desc: "Descarregue os formulários tributários oficiais para declaração de rendimentos, IVA, IRPC, IRPS e outros impostos." },
    breadcrumb: "Formulários Fiscais", section: "Serviços Tributários",
    component: () => <ComingSoonTab title="Formulários Fiscais" />,
  },
};

export default function Servicos() {
  const { slug = "procedimentos-aduaneiros" } = useParams();
  const tab = TABS[slug];

  if (!tab) return <Navigate to="/servicos/procedimentos-aduaneiros" replace />;

  const TabComponent = tab.component;

  return (
    <div className="sobre-at-container">
      <style>{sobreATStyles}</style>
      <div className="shell">
        <ServicosSidebar />
        <main className="main-content">
          
          {/* Underlined clickable "Início" entry point */}
          <div className="custom-breadcrumb">
            <Link 
              to="/" 
              style={{ color: "inherit", textDecoration: "underline" }} 
              className="hover:opacity-80 transition-opacity"
            >
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span style={{ color: "var(--sat-muted-fg)" }}>{tab.section}</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="current">{tab.breadcrumb}</span>
          </div>

          <div className="page-hero">
            <div className="eyebrow">Autoridade Tributária de Moçambique</div>
            <h1>{tab.hero.title}</h1>
            <p>{tab.hero.desc}</p>
          </div>
          
          <TabComponent />
        </main>
      </div>
    </div>
  );
}