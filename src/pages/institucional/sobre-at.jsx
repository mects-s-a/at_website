import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import sobreATStyles from "./atstyles";
import InstitucionalSidebar from "./institucional-sidebar";
import SobreTab from "./sobre-tab";
import AtribuicoesTab from "./atribuicoes-tab";
import OrganogramaTab from "./organograma-tab";
import InfraestruturasTab from "./infraestruturas-tab";
import ProcedimentosAduaneirosFlow from "./procedimentosaduaneirosflow";

const HERO = {
  sobre:           { title: "Sobre a Instituição",          desc: "Conheça o organismo do Estado responsável pela administração tributária e aduaneira nacional." },
  procedimentos:   { title: "Fluxo de Desalfandegamento",   desc: "Guia passo-a-passo para o desalfandegamento de mercadorias em Moçambique." },
  atribuicoes:     { title: "Atribuições e Competências",   desc: "Explore o escopo legal de atuação, competências regulamentares e responsabilidades essenciais." },
  organograma:     { title: "Organograma Institucional",    desc: "Veja o encadeamento hierárquico e a árvore estrutural das Direcções Gerais da AT." },
  infraestruturas: { title: "Infraestruturas e Delegações", desc: "Localize delegações provinciais, terminais de carga e postos de fiscalização fronteiriça." },
  legislacao:      { title: "Legislação e Planos",          desc: "Consulte e descarregue regulamentos normativos, relatórios e diretrizes estratégicas." },
};

const BREADCRUMB = {
  sobre:           "Sobre a AT",
  procedimentos:   "Fluxo de Desalfandegamento",
  atribuicoes:     "Atribuições e Competências",
  organograma:     "Organograma",
  infraestruturas: "Infraestruturas",
  legislacao:      "Legislação e Planos",
};

export default function SobreAT() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    const hash = location.hash.replace("#", "");
    return hash || "sobre";
  });

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) setActiveTab(hash);
  }, [location.hash]);

  const hero = HERO[activeTab] || HERO.sobre;

  return (
    <div className="sobre-at-container">
      <style>{sobreATStyles}</style>
      <div className="shell">
        <InstitucionalSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="main-content">
          <div className="custom-breadcrumb">
            <Link to="/" style={{ color: "inherit", textDecoration: "underline" }} className="hover:opacity-80 transition-opacity">Início</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span style={{ color: "var(--sat-muted-fg)" }}>Institucional</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="current">{BREADCRUMB[activeTab]}</span>
          </div>

          <div className="page-hero">
            <div className="eyebrow">Autoridade Tributária de Moçambique</div>
            <h1>{hero.title}</h1>
            <p>{hero.desc}</p>
          </div>

          {activeTab === "sobre"           && <SobreTab />}
          {activeTab === "procedimentos"   && <ProcedimentosAduaneirosFlow />}
          {activeTab === "atribuicoes"     && <AtribuicoesTab />}
          {activeTab === "organograma"     && <OrganogramaTab />}
          {activeTab === "infraestruturas" && <InfraestruturasTab />}
        </main>
      </div>
    </div>
  );
}