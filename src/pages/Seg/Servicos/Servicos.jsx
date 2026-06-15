import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import sobreATStyles from "../Institucional/SobreATStyles";
import ServicosSidebar from "./ServicosSidebar";

/**
 * Servicos.jsx
 * ─────────────
 * Shell page for all Serviços sub-pages.
 * Route: /servicos/:slug
 *
 * Each slug maps to a tab component. As you build out the real
 * content components, replace the <ComingSoonTab> entries below.
 *
 * Routes to add in App.jsx:
 *   <Route path="/servicos/:slug" element={<Servicos />} />
 *   <Route path="/servicos" element={<Navigate to="/servicos/procedimentos-aduaneiros" replace />} />
 */

function ComingSoonTab({ title, desc }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div
        className="flex items-center justify-center mb-4 rounded-2xl bg-primary/8"
        style={{ width: "56px", height: "56px" }}
      >
        <span style={{ fontSize: "26px" }}>🗂️</span>
      </div>
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "22px",
          color: "var(--sat-fg)",
          marginBottom: "8px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: "var(--sat-muted-fg)",
          maxWidth: "360px",
          lineHeight: "1.65",
        }}
      >
        {desc || "Esta secção está em desenvolvimento. O conteúdo será disponibilizado em breve."}
      </p>
    </div>
  );
}

// ── Tab registry ─────────────────────────────────────────────────────────────
// Replace ComingSoonTab with the real component as each page is built.
const TABS = {
  "procedimentos-aduaneiros": {
    hero: {
      title: "Procedimentos Aduaneiros",
      desc: "Consulte os processos de desalfandegamento, regimes aduaneiros especiais e os requisitos para importação e exportação de mercadorias.",
    },
    breadcrumb: "Procedimentos Aduaneiros",
    component: () => (
      <ComingSoonTab title="Procedimentos Aduaneiros" />
    ),
  },
  "pauta-aduaneira": {
    hero: {
      title: "Pauta Aduaneira",
      desc: "Pesquise as taxas e classificações tarifárias aplicáveis às mercadorias que transitam pela fronteira moçambicana.",
    },
    breadcrumb: "Pauta Aduaneira",
    component: () => <ComingSoonTab title="Pauta Aduaneira" />,
  },
  "formularios-aduaneiros": {
    hero: {
      title: "Formulários Aduaneiros",
      desc: "Descarregue os formulários oficiais necessários para os processos de declaração e desalfandegamento aduaneiro.",
    },
    breadcrumb: "Formulários Aduaneiros",
    component: () => <ComingSoonTab title="Formulários Aduaneiros" />,
  },
  "estancias-aduaneiras": {
    hero: {
      title: "Estâncias Aduaneiras",
      desc: "Localize postos aduaneiros, terminais de carga e fronteiras alfandegárias activas em todo o território nacional.",
    },
    breadcrumb: "Estâncias Aduaneiras",
    component: () => <ComingSoonTab title="Estâncias Aduaneiras" />,
  },
  "impostos": {
    hero: {
      title: "Impostos",
      desc: "Conheça os tipos de impostos vigentes, taxas aplicáveis, obrigações do contribuinte e prazos de liquidação.",
    },
    breadcrumb: "Impostos",
    component: () => <ComingSoonTab title="Impostos" />,
  },
  "calendario-fiscal": {
    hero: {
      title: "Calendário Fiscal",
      desc: "Consulte as datas-limite para entrega de declarações, pagamentos e outras obrigações fiscais ao longo do ano.",
    },
    breadcrumb: "Calendário Fiscal",
    component: () => <ComingSoonTab title="Calendário Fiscal" />,
  },
  "formularios-fiscais": {
    hero: {
      title: "Formulários Fiscais",
      desc: "Descarregue os formulários tributários oficiais para declaração de rendimentos, IVA, IRPC, IRPS e outros impostos.",
    },
    breadcrumb: "Formulários Fiscais",
    component: () => <ComingSoonTab title="Formulários Fiscais" />,
  },
};

const DEFAULT_SLUG = "procedimentos-aduaneiros";

// ── Shell ─────────────────────────────────────────────────────────────────────
export default function Servicos() {
  const { slug = DEFAULT_SLUG } = useParams();
  const navigate = useNavigate();

  const tab = TABS[slug] || TABS[DEFAULT_SLUG];
  const TabComponent = tab.component;

  // Determine section label for breadcrumb
  const aduaneiros = ["procedimentos-aduaneiros","pauta-aduaneira","formularios-aduaneiros","estancias-aduaneiras"];
  const sectionLabel = aduaneiros.includes(slug) ? "Serviços Aduaneiros" : "Serviços Tributários";

  return (
    <div className="sobre-at-container">
      <style>{sobreATStyles}</style>

      <div className="shell">

        {/* ── SIDEBAR ── */}
        <ServicosSidebar />

        {/* ── MAIN CONTENT ── */}
        <main className="main-content">

          {/* Breadcrumb */}
          <div className="custom-breadcrumb">
            <span>Início</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span>Serviços</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span style={{ color: "var(--sat-muted-fg)" }}>{sectionLabel}</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="current">{tab.breadcrumb}</span>
          </div>

          {/* Hero Banner */}
          <div className="page-hero">
            <div className="eyebrow">Autoridade Tributária de Moçambique</div>
            <h1>{tab.hero.title}</h1>
            <p>{tab.hero.desc}</p>
          </div>

          {/* Page content */}
          <TabComponent />

        </main>
      </div>
    </div>
  );
}