import { useState } from "react";
import { ChevronRight } from "lucide-react";
import sobreATStyles from "./atstyles";
import InstitucionalSidebar from "./institucional-sidebar";
import SobreTab from "./sobre-tab";
import AtribuicoesTab from "./atribuicoes-tab";
import OrganogramaTab from "./organograma-tab";
import InfraestruturasTab from "./infraestruturas-tab";
import LegislacaoTab from "./legislacao-tab";

function ComingSoonTab({ title }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
        style={{ background: "rgba(27,79,171,0.08)" }}
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
          maxWidth: "340px",
          lineHeight: "1.6",
        }}
      >
        Esta secção está em desenvolvimento. O conteúdo será disponibilizado em breve.
      </p>
    </div>
  );
}

const HERO = {
  sobre:           { title: "Sobre a Instituição",          desc: "Conheça o organismo do Estado responsável pela administração tributária e aduaneira nacional, instituído para impulsionar o crescimento sustentável." },
  atribuicoes:     { title: "Atribuições e Competências",   desc: "Explore o escopo legal de atuação, competências regulamentares e as responsabilidades essenciais confiadas à nossa governação." },
  organograma:     { title: "Organograma Institucional",    desc: "Veja o encadeamento hierárquico, coordenação operacional e a árvore estrutural das Direcções Gerais da AT." },
  infraestruturas: { title: "Infraestruturas & Delegações", desc: "Localize delegações provinciais, terminais de carga internacionais e postos de fiscalização fronteiriça." },
  legislacao:      { title: "Legislação & Planos",          desc: "Consulte e descarregue regulamentos normativos, relatórios anuais de prestação de contas e diretrizes estratégicas vigentes." },
  relatorios:      { title: "Relatórios e Publicações",     desc: "Aceda aos relatórios anuais, publicações institucionais e estudos técnicos da Autoridade Tributária." },
  conduta:         { title: "Código de Conduta",            desc: "Consulte as normas de conduta e ética que regem os funcionários da Autoridade Tributária de Moçambique." },
};

const BREADCRUMB = {
  sobre:           "Sobre a AT",
  atribuicoes:     "Atribuições e Competências",
  organograma:     "Organograma",
  infraestruturas: "Infraestruturas",
  legislacao:      "Legislação & Planos",
  relatorios:      "Relatórios e Publicações",
  conduta:         "Código de Conduta",
};

export default function SobreAT() {
  const [activeTab, setActiveTab] = useState("sobre");
  const hero = HERO[activeTab];

  return (
    <div className="sobre-at-container">
      <style>{sobreATStyles}</style>
      <div className="shell">
        <InstitucionalSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="main-content">

          {/* Breadcrumb */}
          <div className="custom-breadcrumb">
            <span>Início</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span>Institucional</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="current">{BREADCRUMB[activeTab]}</span>
          </div>

          {/* Hero */}
          <div className="page-hero">
            <div className="eyebrow">Autoridade Tributária de Moçambique</div>
            <h1>{hero.title}</h1>
            <p>{hero.desc}</p>
          </div>

          {/* Tab content */}
          {activeTab === "sobre"           && <SobreTab />}
          {activeTab === "atribuicoes"     && <AtribuicoesTab />}
          {activeTab === "organograma"     && <OrganogramaTab />}
          {activeTab === "infraestruturas" && <InfraestruturasTab />}
          {activeTab === "legislacao"      && <LegislacaoTab />}
          {activeTab === "relatorios"      && <ComingSoonTab title="Relatórios e Publicações" />}
          {activeTab === "conduta"         && <ComingSoonTab title="Código de Conduta" />}

        </main>
      </div>
    </div>
  );
}