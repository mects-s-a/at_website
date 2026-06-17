import {
  Building2, ShieldCheck, Network, MapPin,
  FileText, BookOpen, ClipboardList,
} from "lucide-react";

const NAV = [
  {
    section: "Institucional",
    items: [
      { id: "sobre",           label: "Sobre a AT",                icon: Building2    },
      { id: "atribuicoes",     label: "Atribuições e Competências", icon: ShieldCheck  },
      { id: "organograma",     label: "Organograma",                icon: Network      },
      { id: "infraestruturas", label: "Infraestruturas",            icon: MapPin       },
    ],
  },
  {
    section: "Documentação",
    items: [
      { id: "legislacao", label: "Legislação & Planos",       icon: FileText      },
      { id: "relatorios", label: "Relatórios e Publicações",  icon: BookOpen      },
      { id: "conduta",    label: "Código de Conduta",         icon: ClipboardList },
    ],
  },
];

export default function InstitucionalSidebar({ activeTab, onTabChange }) {
  return (
    <aside style={{ width: "320px", flexShrink: 0 }}>
      <div
        className="bg-white border border-border rounded-xl shadow-sm overflow-hidden"
        style={{ position: "sticky", top: "88px" }}
      >
        {NAV.map((group, gi) => (
          <div key={group.section}>
            <div className="px-5 pt-4 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {group.section}
            </div>

            {group.items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={[
                    "w-full flex items-center gap-3 px-5 py-3 text-left transition-all duration-150 border-l-[3px]",
                    isActive
                      ? "border-l-primary bg-primary/5 text-primary font-semibold"
                      : "border-l-transparent text-foreground/60 hover:bg-muted hover:text-primary font-medium",
                  ].join(" ")}
                  style={{ fontSize: "15px" }}
                >
                  <Icon
                    className={`shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`}
                    style={{ width: "18px", height: "18px" }}
                  />
                  <span className="leading-snug">{item.label}</span>
                </button>
              );
            })}

            {gi < NAV.length - 1 && <div className="mx-5 my-2 border-t border-border" />}
          </div>
        ))}

        <div className="px-5 py-4 mt-1 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Para consultas, ligue para{" "}
            <span className="font-bold text-primary">1266</span>
            {" "}(linha gratuita nacional).
          </p>
        </div>
      </div>
    </aside>
  );
}