import { Building2, Layers, ShieldCheck, Network, MapPin } from "lucide-react";

const NAV = [
  {
    section: "Institucional",
    items: [
      { id: "sobre",           label: "Sobre a AT",                 icon: Building2 },
      { id: "procedimentos",   label: "Fluxo de Desalfandegamento", icon: Layers },
      { id: "atribuicoes",     label: "Atribuições e Competências", icon: ShieldCheck },
      { id: "organograma",     label: "Organograma",                icon: Network },
      { id: "infraestruturas", label: "Infraestruturas",            icon: MapPin },
    ],
  },
];

export default function InstitucionalSidebar({ activeTab, onTabChange }) {
  return (
    <aside className="w-72 shrink-0 select-none">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden sticky top-24">
        {NAV.map((group, gi) => (
          <div key={group.section}>
            <div className="px-5 pt-4 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {group.section}
            </div>
            {group.items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-all duration-150 border-l-[3px] text-[14px] ${
                    isActive
                      ? "border-l-blue-600 bg-blue-50/50 text-blue-600 font-semibold"
                      : "border-l-transparent text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-medium"
                  }`}
                >
                  <Icon className={`shrink-0 w-4 h-4 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                  <span className="leading-snug">{item.label}</span>
                </button>
              );
            })}
            {gi < NAV.length - 1 && <div className="mx-5 my-2 border-t border-slate-100" />}
          </div>
        ))}
        <div className="px-5 py-4 mt-1 border-t border-slate-100 bg-slate-50/50">
          <p className="text-xs text-slate-500 leading-relaxed">
            Para consultas, ligue para{" "}
            <span className="font-bold text-blue-600">1266</span>{" "}
            (linha gratuita nacional).
          </p>
        </div>
      </div>
    </aside>
  );
}