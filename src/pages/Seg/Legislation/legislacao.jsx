import { useParams, Navigate, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import sobreATStyles from "../Institucional/atstyles";
import LegisLegislacaoSidebar from "./legis.sidebar";

// Importação de todos os sub-conteúdos estruturados
import GeralContent from "./geral.content";
import FiscalContent from "./fiscal.content";
import AduaneiraContent from "./aduaneira.content";

const LEGIS_TABS = {
  geral: {
    hero: { title: "Legislação Geral", desc: "Aceda às leis basilares do sistema financeiro, decretos organizacionais e normativos transversais da Autoridade Tributária." },
    breadcrumb: "Legislação Geral",
    component: () => <GeralContent />,
  },
  fiscal: {
    hero: { title: "Legislação Fiscal", desc: "Consulte os Códigos de Impostos vigentes em Moçambique, alterações recentes e regulamentos de liquidação de tributos." },
    breadcrumb: "Legislação Fiscal",
    component: () => <FiscalContent />,
  },
  aduaneira: {
    hero: { title: "Legislação Aduaneira", desc: "Explore o Código aduaneiro, regulamentações de trânsito de mercadorias, pautas aduaneiras e acordos de facilitação de comércio." },
    breadcrumb: "Legislação Aduaneira",
    component: () => <AduaneiraContent />,
  },
};

export default function Legislacao() {
  const { slug = "geral" } = useParams();
  const currentTab = LEGIS_TABS[slug];
  if (!currentTab) return <Navigate to="/legislacao/geral" replace />;

  const ContentComponent = currentTab.component;

  return (
    <div className="sobre-at-container">
      <style>{sobreATStyles}</style>
      <div className="shell">
        <LegisLegislacaoSidebar />
        <main className="main-content">
          
          {/* Breadcrumb */}
          <div className="custom-breadcrumb">
            <Link to="/" style={{ color: "inherit", textDecoration: "underline" }} className="hover:opacity-80 transition-opacity">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span style={{ color: "var(--sat-muted-fg)" }}>Legislação</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="current">{currentTab.breadcrumb}</span>
          </div>

          {/* Hero Section */}
          <div className="page-hero">
            <div className="eyebrow">Repositório Legal de Moçambique</div>
            <h1>{currentTab.hero.title}</h1>
            <p>{currentTab.hero.desc}</p>
          </div>
          
          {/* Conteúdo Renderizado Dinamicamente com base nas Queries */}
          <ContentComponent />
        </main>
      </div>
    </div>
  );
}