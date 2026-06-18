import { useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { Scale, Landmark, Gavel, FileText, ChevronDown } from "lucide-react";

const NAV_LEGIS = [
  {
    id: "geral",
    label: "Legislação Geral",
    basePath: "/legislacao/geral",
    icon: Scale,
    subItems: [
      { label: "Leis Orgânicas", path: "/legislacao/geral?cat=leis" },
      { label: "Decretos Presidenciais", path: "/legislacao/geral?cat=decretos" },
      { label: "Diplomas Ministeriais", path: "/legislacao/geral?cat=diplomas" },
    ],
  },
  {
    id: "fiscal",
    label: "Legislação Fiscal",
    basePath: "/legislacao/fiscal",
    icon: Landmark,
    subItems: [
      { label: "Códigos de Impostos", path: "/legislacao/fiscal?cat=codigos" },
      { label: "Decretos e Regulamentos", path: "/legislacao/fiscal?cat=decretos" },
    ],
  },
  {
    id: "aduaneira",
    label: "Legislação Aduaneira",
    basePath: "/legislacao/aduaneira",
    icon: Gavel,
    subItems: [
      { label: "Código Aduaneiro", path: "/legislacao/aduaneira?cat=codigo" },
      { label: "Regimes Especiais", path: "/legislacao/aduaneira?cat=regimes" },
      { label: "Instruções de Serviço", path: "/legislacao/aduaneira?cat=instrucoes" },
    ],
  },
];

export default function LegisLegislacaoSidebar() {
  const { pathname, search } = useLocation();
  const { slug } = useParams();

  const [openSections, setOpenSections] = useState({
    geral: slug === "geral" || !slug,
    fiscal: slug === "fiscal",
    aduaneira: slug === "aduaneira",
  });

  const currentFullCaminho = `${pathname}${search}`;

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside style={{ width: "320px", flexShrink: 0 }}>
      <div
        className="bg-white border border-border rounded-xl shadow-sm overflow-hidden p-4 flex flex-col justify-between"
        style={{ 
          position: "sticky", 
          top: "88px",
          minHeight: "calc(100vh - 140px)" // Faz a barra lateral esticar verticalmente acompanhando o ecrã
        }}
      >
        <div className="w-full space-y-2">
          <div className="px-3 pt-2 pb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground border-b border-border/60 mb-4">
            Categorias de Legislação
          </div>

          <div className="w-full space-y-2">
            {NAV_LEGIS.map((section) => {
              const Icon = section.icon;
              const isParentActive = slug === section.id;
              const isOpen = openSections[section.id];

              return (
                <div key={section.id} className="overflow-hidden rounded-xl border border-transparent bg-muted/5">
                  {/* Botão de Disparo - Texto aumentado para text-base e mais padding */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={[
                      "flex items-center justify-between w-full px-4 py-4 text-base font-semibold transition-all hover:bg-muted/60 group",
                      isParentActive 
                        ? "text-primary bg-primary/5" 
                        : "text-foreground/85"
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3.5">
                      <Icon className={`w-5 h-5 shrink-0 ${isParentActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
                      <span>{section.label}</span>
                    </div>
                    <ChevronDown 
                      className={[
                        "w-4 h-4 shrink-0 text-muted-foreground/70 transition-transform duration-200",
                        isOpen ? "transform rotate-180 text-primary" : ""
                      ].join(" ")}
                    />
                  </button>

                  {/* Lista de Sub-itens - Texto aumentado para text-sm e mais padding vertical */}
                  <div 
                    className={[
                      "transition-all duration-200 ease-in-out overflow-hidden pl-8 pr-3 space-y-1",
                      isOpen ? "max-h-60 pt-2 pb-4 opacity-100" : "max-h-0 opacity-0"
                    ].join(" ")}
                  >
                    {section.subItems.map((subItem) => {
                      const isSubActive = currentFullCaminho === subItem.path;

                      return (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={[
                            "flex items-center gap-2.5 w-full px-3 py-2.5 text-sm rounded-lg transition-all border-l-2",
                            isSubActive
                              ? "border-primary text-primary font-semibold bg-primary/5"
                              : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
                          ].join(" ")}
                        >
                          <FileText className="w-4 h-4 shrink-0 opacity-60" />
                          <span>{subItem.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Nota de rodapé empurrada fixamente para a base devido ao flex box layout */}
        <div className="px-3 py-4 mt-8 border-t border-border bg-muted/30 rounded-xl">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Selecione uma das áreas acima para listar as leis, decretos e diplomas oficiais.
          </p>
        </div>
      </div>
    </aside>
  );
}