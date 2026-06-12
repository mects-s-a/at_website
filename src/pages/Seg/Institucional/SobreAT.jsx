import { useState } from "react";
import {
  Building2, ShieldCheck, MapPin, FileText,
  ChevronRight, Network
} from "lucide-react";
import sobreATStyles from "./sobreATStyles";
import SobreTab from "./SobreTab";
import AtribuicoesTab from "./AtribuicoesTab";
import OrganogramaTab from "./OrganogramaTab";
import InfraestuturasTab from "./InfraestruturasTab";
import LegislacaoTab from "./LegislacaoTab";

export default function SobreAT() {
  const [activeTab, setActiveTab] = useState("sobre");

  return (
    <div className="sobre-at-container">
      {/* Injeção dos Design Tokens e Estilos Customizados */}
      <style>{sobreATStyles}</style>

      <div className="shell">

        {/* ── BARRA LATERAL (SIDEBAR NAV) ── */}
        <aside className="sidebar">
          <div className="sidebar-inner">
            <div className="sidebar-section">Institucional</div>

            <button
              onClick={() => setActiveTab("sobre")}
              className={`sidebar-item ${activeTab === "sobre" ? "active" : ""}`}
            >
              <Building2 className="w-4 h-4" /> Sobre a AT
            </button>

            <button
              onClick={() => setActiveTab("atribuicoes")}
              className={`sidebar-item ${activeTab === "atribuicoes" ? "active" : ""}`}
            >
              <ShieldCheck className="w-4 h-4" /> Atribuições
            </button>

            <button
              onClick={() => setActiveTab("organograma")}
              className={`sidebar-item ${activeTab === "organograma" ? "active" : ""}`}
            >
              <Network className="w-4 h-4" /> Organograma
            </button>

            <button
              onClick={() => setActiveTab("infraestruturas")}
              className={`sidebar-item ${activeTab === "infraestruturas" ? "active" : ""}`}
            >
              <MapPin className="w-4 h-4" /> Infraestruturas
            </button>

            <div className="sidebar-divider" />
            <div className="sidebar-section">Documentação</div>

            <button
              onClick={() => setActiveTab("legislacao")}
              className={`sidebar-item ${activeTab === "legislacao" ? "active" : ""}`}
            >
              <FileText className="w-4 h-4" /> Legislação & Planos
            </button>
          </div>
        </aside>

        {/* ── CONTEÚDO PRINCIPAL DINÂMICO ── */}
        <main className="main-content">

          {/* Breadcrumb Elegante */}
          <div className="custom-breadcrumb">
            <span>Início</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span>Institucional</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="current">
              {activeTab === "sobre" && "Sobre a AT"}
              {activeTab === "atribuicoes" && "Atribuições e Competências"}
              {activeTab === "organograma" && "Organograma"}
              {activeTab === "infraestruturas" && "Infraestruturas"}
              {activeTab === "legislacao" && "Legislação & Planos"}
            </span>
          </div>

          {/* PREMIUM PAGE HERO (BANNER UNIFICADO) */}
          <div className="page-hero">
            <div className="eyebrow">Autoridade Tributária de Moçambique</div>
            <h1>
              {activeTab === "sobre" && "Sobre a Instituição"}
              {activeTab === "atribuicoes" && "Atribuições Estratégicas"}
              {activeTab === "organograma" && "Organograma Institucional"}
              {activeTab === "infraestruturas" && "Infraestruturas & Delegações"}
              {activeTab === "legislacao" && "Biblioteca Digital Oficial"}
            </h1>
            <p>
              {activeTab === "sobre" && "Conheça o organismo do Estado responsável pela administração tributária e aduaneira nacional, instituído para impulsionar o crescimento sustentável."}
              {activeTab === "atribuicoes" && "Explore o escopo legal de atuação, competências regulamentares e as responsabilidades essenciais confiadas à nossa governação."}
              {activeTab === "organograma" && "Veja o encadeamento hierárquico, coordenação operacional e a árvore estrutural das Direcções Gerais da AT."}
              {activeTab === "infraestruturas" && "Localize instantaneamente delegações provinciais, terminais de carga internacionais e postos de fiscalização fronteiriça digitalizados."}
              {activeTab === "legislacao" && "Consulte e descarregue regulamentos normativos, relatórios anuais de prestação de contas e diretrizes estratégicas vigentes."}
            </p>
          </div>

          {/* ABA 1: SOBRE A AT */}
          {activeTab === "sobre" && <SobreTab />}

          {/* ABA 2: ATRIBUIÇÕES E COMPETÊNCIAS */}
          {activeTab === "atribuicoes" && <AtribuicoesTab />}

          {/* ABA 3: ORGANOGRAMA ESTRUTURADO PREMIUM */}
          {activeTab === "organograma" && <OrganogramaTab />}

          {/* ABA 4: INFRAESTRUTURAS COM PREMIUM KPI E TABELA */}
          {activeTab === "infraestruturas" && <InfraestuturasTab />}

          {/* ABA 5: LEGISLAÇÃO E REPOSITÓRIO DIGITAL */}
          {activeTab === "legislacao" && <LegislacaoTab />}

        </main>
      </div>
    </div>
  );
}
