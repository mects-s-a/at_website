import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  Building2, ShieldCheck, Network, MapPin,
  FileText, BookOpen, Users, ClipboardList,
} from "lucide-react";

/**
 * InstitucionalSidebar
 * ─────────────────────
 * Reusable sidebar for all pages under the Institucional section.
 * - activeTab / onTabChange : controls in-page tab switching
 *   (used by SobreAT for Sobre, Atribuições, Organograma, Infraestruturas, Legislação)
 * - useLocation highlights the current route for future standalone pages
 */

const NAV = [
  {
    section: "Institucional",
    items: [
      {
        id: "sobre",
        label: "Sobre a AT",
        icon: Building2,
        type: "tab",          // handled inside SobreAT via tab switch
      },
      {
        id: "atribuicoes",
        label: "Atribuições e Competências",
        icon: ShieldCheck,
        type: "tab",
      },
      {
        id: "organograma",
        label: "Organograma",
        icon: Network,
        type: "tab",
      },
      {
        id: "infraestruturas",
        label: "Infraestruturas",
        icon: MapPin,
        type: "tab",
      },
    ],
  },
  {
    section: "Documentação",
    items: [
      {
        id: "legislacao",
        label: "Legislação & Planos",
        icon: FileText,
        type: "tab",
      },
      {
        id: "relatorios",
        label: "Relatórios e Publicações",
        icon: BookOpen,
        type: "tab",          // placeholder tab — content TBD
      },
      {
        id: "conduta",
        label: "Código de Conduta",
        icon: ClipboardList,
        type: "tab",          // placeholder tab — content TBD
      },
    ],
  },
];

export default function InstitucionalSidebar({ activeTab, onTabChange }) {
  return (
    <aside
      style={{ width: "320px", flexShrink: 0 }}
    >
      <div
        className="bg-white border border-border rounded-xl shadow-sm overflow-hidden"
        style={{ position: "sticky", top: "88px" }}
      >
        {NAV.map((group, gi) => (
          <div key={group.section}>
            {/* Section label */}
            <div
              className="px-5 pt-4 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
              style={{ letterSpacing: "0.1em" }}
            >
              {group.section}
            </div>

            {/* Items */}
            {group.items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={[
                    "w-full flex items-center gap-3 px-5 py-3 text-left transition-all duration-150",
                    "border-l-[3px]",
                    isActive
                      ? "border-l-primary bg-primary/5 text-primary font-semibold"
                      : "border-l-transparent text-foreground/60 hover:bg-muted hover:text-primary font-medium",
                  ].join(" ")}
                  style={{ fontSize: "15px" }}
                >
                  <Icon
                    className={`shrink-0 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}
                    style={{ width: "18px", height: "18px" }}
                  />
                  <span className="leading-snug">{item.label}</span>
                </button>
              );
            })}

            {/* Divider between groups */}
            {gi < NAV.length - 1 && (
              <div className="mx-5 my-2 border-t border-border" />
            )}
          </div>
        ))}

        {/* Bottom hint */}
        <div className="px-5 py-4 mt-1 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Para consultas e assistência, ligue para{" "}
            <span className="font-bold text-primary">1266</span>
            {" "}(linha gratuita nacional).
          </p>
        </div>
      </div>
    </aside>
  );
}