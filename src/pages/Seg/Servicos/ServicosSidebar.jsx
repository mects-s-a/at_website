import { useLocation, Link } from "react-router-dom";
import {
  Anchor, FileStack, LayoutList, Building,
  ReceiptText, CalendarDays, FileText,
} from "lucide-react";

/**
 * ServicosSidebar
 * ───────────────
 * Sidebar for all pages under Serviços.
 * Uses useLocation to highlight the current route.
 * Each item is a <Link> that navigates to its own route.
 */

const NAV = [
  {
    section: "Serviços Aduaneiros",
    items: [
      {
        label: "Procedimentos Aduaneiros",
        path: "/servicos/procedimentos-aduaneiros",
        icon: Anchor,
      },
      {
        label: "Pauta Aduaneira",
        path: "/servicos/pauta-aduaneira",
        icon: LayoutList,
      },
      {
        label: "Formulários Aduaneiros",
        path: "/servicos/formularios-aduaneiros",
        icon: FileStack,
      },
      {
        label: "Estâncias Aduaneiras",
        path: "/servicos/estancias-aduaneiras",
        icon: Building,
      },
    ],
  },
  {
    section: "Serviços Tributários",
    items: [
      {
        label: "Impostos",
        path: "/servicos/impostos",
        icon: ReceiptText,
      },
      {
        label: "Calendário Fiscal",
        path: "/servicos/calendario-fiscal",
        icon: CalendarDays,
      },
      {
        label: "Formulários Fiscais",
        path: "/servicos/formularios-fiscais",
        icon: FileText,
      },
    ],
  },
];

export default function ServicosSidebar() {
  const { pathname } = useLocation();

  return (
    <aside style={{ width: "320px", flexShrink: 0 }}>
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
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={[
                    "w-full flex items-center gap-3 px-5 py-3 transition-all duration-150",
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
                </Link>
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
            Precisa de ajuda?{" "}
            <span className="font-bold text-primary">1266</span>
            {" "}— linha gratuita nacional, segunda a sexta, 07h30–15h30.
          </p>
        </div>
      </div>
    </aside>
  );
}