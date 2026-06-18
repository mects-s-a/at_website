import { useParams, useNavigate } from "react-router-dom";
import InstitucionalSidebar from "../../pages/Seg/Institucional/institucional-sidebar.jsx";
import SobreTab from "../../pages/Seg/Institucional/sobre-tab.jsx";
import ProcedimentosAduaneirosFlow from "../../pages/Seg/Institucional/procedimentosaduaneirosflow.jsx";
import AtribuicoesTab from "../../pages/Seg/Institucional/atribuicoes-tab.jsx";
import OrganogramaTab from "../../pages/Seg/Institucional/organograma-tab.jsx";
import InfraestruturasTab from "../../pages/Seg/Institucional/infraestruturas-tab.jsx";
import LegislacaoTab from "../../pages/Seg/Institucional/legislacao-tab.jsx";

export default function Navigation() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Determina a aba atual com base no :slug da URL, com fallback para "sobre"
  const currentTab = slug || "sobre";

  // Renderiza o componente correspondente baseado no parâmetro da URL
  const renderTabContent = () => {
    switch (currentTab) {
      case "sobre":
        return <SobreTab />;
      case "procedimentos":
        return <ProcedimentosAduaneirosFlow />;
      case "atribuicoes":
        return <AtribuicoesTab />;
      case "organograma":
        return <OrganogramaTab />;
      case "infraestruturas":
        return <InfraestruturasTab />;
      case "legislacao":
        return <LegislacaoTab />;
      default:
        return <SobreTab />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* A Sidebar agora atualiza a URL em vez de alterar um estado local */}
        <InstitucionalSidebar 
          activeTab={currentTab} 
          onTabChange={(tabId) => navigate(`/sobre-at/${tabId}`)} 
        />

        {/* Espaço de conteúdo dinâmico à direita */}
        <main className="flex-1 w-full bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm min-h-[650px]">
          {renderTabContent()}
        </main>

      </div>
    </div>
  );
}