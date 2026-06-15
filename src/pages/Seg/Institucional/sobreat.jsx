import { useState } from "react";
import { ChevronRight } from "lucide-react";
import sobreatstyles from "./sobreatstyles";
import InstitucionalSidebar from "./InstitucionalSidebar";
import SobreTab from "./SobreTab";
import AtribuicoesTab from "./AtribuicoesTab";
import OrganogramaTab from "./OrganogramaTab";
import InfraestruturasTab from "./InfraestruturasTab";
import LegislacaoTab from "./LegislacaoTab";

// Placeholder for tabs not yet built
function ComingSoonTab({ title }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-4">
        <span style={{ fontSize: "26px" }}>🗂️</span>
      </div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "var(--sat-fg)", marginBottom: "8px" }}>
        {title}
      </h3>
      <p style={{ fontSize: "14px", color: "var(--sat-muted-fg)", maxWidth: "340px", lineHeight: "1.6" }}>
        Esta secção está em desenvolvimento. O conteúdo será disponibilizado em breve.
      </p>
    </div>
  );
}

const HERO_CONTENT = {
  sobre: {
    title: "Sobre a Instituição",
    desc: "Conheça o organismo do Estado responsável pela administração tributária e aduaneira nacional, instituído para impulsionar o crescimento sustentável.",
  },
  atribuicoes: {
    title: "Atribuições e Competências",
    desc: "Explore o escopo legal de atuação, competências regulamentares e as responsabilidades essenciais confiadas à nossa governação.",
  },
  organograma: {
    title: "Organograma Institucional",
    desc: "Veja o encadeamento hierárquico, coordenação operacional e a árvore estrutural das Direcções Gerais da AT.",
  },
  infraestruturas: {
    title: "Infraestruturas & Delegações",
    desc: "Localize delegações provinciais, terminais de carga internacionais e postos de fiscalização fronteiriça.",
  },
  legislacao: {
    title: "Legislação & Planos",
    desc: "Consulte e descarregue regulamentos normativos, relatórios anuais de prestação de contas e diretrizes estratégicas vigentes.",
  },
  relatorios: {
    title: "Relatórios e Publicações",
    desc: "Aceda aos relatórios anuais, publicações institucionais e estudos técnicos da Autoridade Tributária.",
  },
  conduta: {
    title: "Código de Conduta",
    desc: "Consulte as normas de conduta e ética que regem os funcionários da Autoridade Tributária de Moçambique.",
  },
};

const BREADCRUMB_LABELS = {
  sobre: "Sobre a AT",
  atribuicoes: "Atribuições e Competências",
  organograma: "Organograma",
  infraestruturas: "Infraestruturas",
  legislacao: "Legislação & Planos",
  relatorios: "Relatórios e Publicações",
  conduta: "Código de Conduta",
};

export default function SobreAT() {
  const [activeTab, setActiveTab] = useState("sobre");
  const hero = HERO_CONTENT[activeTab];

  return (
    <div className="sobre-at-container">
      <style>{sobreatstyles}</style>

      <div className="shell">

        {/* ── SIDEBAR ── */}
        <InstitucionalSidebar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* ── MAIN CONTENT ── */}
        <main className="main-content">

          {/* Breadcrumb */}
          <div className="custom-breadcrumb">
            <span>Início</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span>Institucional</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="current">{BREADCRUMB_LABELS[activeTab]}</span>
          </div>

          {/* Hero Banner */}
          <div className="page-hero">
            <div className="eyebrow">Autoridade Tributária de Moçambique</div>
            <h1>{hero.title}</h1>
            <p>{hero.desc}</p>
          </div>

          {/* Tab content */}
          {activeTab === "sobre"          && <SobreTab />}
          {activeTab === "atribuicoes"    && <AtribuicoesTab />}
          {activeTab === "organograma"    && <OrganogramaTab />}
          {activeTab === "infraestruturas"&& <InfraestruturasTab />}
          {activeTab === "legislacao"     && <LegislacaoTab />}
          {activeTab === "relatorios"     && <ComingSoonTab title="Relatórios e Publicações" />}
          {activeTab === "conduta"        && <ComingSoonTab title="Código de Conduta" />}

        </main>
      </div>
    </div>
  );
}