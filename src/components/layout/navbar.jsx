import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

/**
 * navbar.jsx
 * ──────────
 * - No external links to the old site
 * - Items without a route yet show an "em breve" badge and are non-clickable
 * - Desktop: hover opens dropdown; clicking a top-level item with a submenu
 *   toggles the dropdown without navigating
 * - Mobile: accordion expand/collapse per section; "em breve" items greyed out
 * - Servicos submenu maps to all 7 /servicos/:slug routes
 * - Institucional submenu all point to /sobre-at (tab switching handled inside)
 */

const navItems = [
  {
    label: "Institucional",
    href: "/sobre-at",
    submenu: [
      { label: "Sobre a AT",               href: "/sobre-at" },
      { label: "Atribuições",              href: "/sobre-at" },
      { label: "Organograma",              href: "/sobre-at" },
      { label: "Infraestruturas",          href: "/sobre-at" },
      { label: "Relatórios e Publicações", href: "/sobre-at" },
      { label: "Código de Conduta",        href: "/sobre-at" },
    ],
  },
  {
    label: "Serviços",
    href: "/servicos",
    submenu: [
      { label: "Procedimentos Aduaneiros", href: "/servicos/procedimentos-aduaneiros" },
      { label: "Pauta Aduaneira",          href: "/servicos/pauta-aduaneira" },
      { label: "Formulários Aduaneiros",   href: "/servicos/formularios-aduaneiros" },
      { label: "Estâncias Aduaneiras",     href: "/servicos/estancias-aduaneiras" },
      { label: "Impostos",                 href: "/servicos/impostos" },
      { label: "Calendário Fiscal",        href: "/servicos/calendario-fiscal" },
      { label: "Formulários Fiscais",      href: "/servicos/formularios-fiscais" },
    ],
  },
  {
    label: "Legislação",
    href: "#",
    submenu: [
      { label: "Legislação Geral",     href: "" },
      { label: "Legislação Fiscal",    href: "" },
      { label: "Legislação Aduaneira", href: "" },
    ],
  },
  {
    label: "Média",
    href: "/noticias",
    submenu: [
      { label: "Notícias e Imprensa", href: "/noticias" },
      { label: "Galeria de Eventos",  href: "/galeria" },
    ],
  },
  {
    label: "Informações",
    href: "#",
    submenu: [
      { label: "Comunicado de Imprensa",    href: "" },
      { label: "Concursos Públicos",        href: "" },
      { label: "Planos",                    href: "" },
      { label: "Boletins Informativos",     href: "" },
      { label: "Conjuntura Fiscal",         href: "" },
      { label: "Branqueamento de Capitais", href: "" },
    ],
  },
  {
    label: "Ferramentas",
    href: "/ferramentas",
    submenu: [
      { label: "Calculadora Fiscal",   href: "/ferramentas" },
      { label: "Taxa de Câmbio",       href: "/taxa-de-cambio" },
      { label: "Perguntas Frequentes", href: "" },
      { label: "Calendário Fiscal",    href: "#calendario" },
    ],
  },
  {
    label: "Contactos",
    href: "/contacto",
  },
];

// Smooth-scroll handler for hash links; no-op for empty hrefs
const handleHashScroll = (e, href) => {
  if (!href) return;
  if (href.startsWith("#")) {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.location.href = "/" + href;
    } else {
      const targetId = href.substring(1);
      const el = targetId ? document.getElementById(targetId) : document.body;
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }
};

// ── Dropdown item renderer ────────────────────────────────────────────────────
function DropdownItem({ item, closeDropdown }) {
  // Empty href → "em breve" placeholder
  if (!item.href) {
    return (
      <span
        key={item.label}
        className="flex items-center justify-between px-4 py-2.5 text-sm text-foreground/30 cursor-default select-none"
      >
        {item.label}
        <span className="text-[10px] font-semibold bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full ml-2">
          em breve
        </span>
      </span>
    );
  }

  const isInternal = item.href.startsWith("/");

  if (isInternal) {
    return (
      <Link
        to={item.href}
        onClick={closeDropdown}
        className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <a
      href={item.href}
      onClick={(e) => { handleHashScroll(e, item.href); closeDropdown(); }}
      className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      {item.label}
    </a>
  );
}

// ── Desktop dropdown panel ────────────────────────────────────────────────────
function DropdownMenu({ items, isOpen, closeDropdown }) {
  return (
    <div
      className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-border overflow-hidden transition-all duration-200 ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      {items.map((item) => (
        <DropdownItem key={item.label} item={item} closeDropdown={closeDropdown} />
      ))}
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleDropdown = (e, label, hasSubmenu) => {
    if (hasSubmenu) {
      e.preventDefault();
      setActiveDropdown((prev) => (prev === label ? null : label));
    }
  };

  const closeDropdown = () => setActiveDropdown(null);

  return (
    <>
      {/* Spacer — prevents content hiding under the fixed header */}
      <div className="h-16 sm:h-20" />

      <header
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-border shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 shrink-0"
              onClick={closeDropdown}
            >
              <img
                src="https://at-mocambique.tributo670.workers.dev/Imagens/logo-at.png"
                alt="Autoridade Tributária de Moçambique"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isInternal = item.href.startsWith("/");
                const hasSubmenu = !!item.submenu;
                const isActive = activeDropdown === item.label;

                const itemClass = `flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70 hover:text-primary hover:bg-muted"
                }`;

                return (
                  <div key={item.label} className="relative">
                    {isInternal ? (
                      <Link
                        to={item.href}
                        onClick={(e) => toggleDropdown(e, item.label, hasSubmenu)}
                        className={itemClass}
                      >
                        {item.label}
                        {hasSubmenu && (
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isActive ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </Link>
                    ) : (
                      <a
                        href={item.href || undefined}
                        onClick={(e) => {
                          if (hasSubmenu) toggleDropdown(e, item.label, hasSubmenu);
                          else handleHashScroll(e, item.href);
                        }}
                        className={itemClass}
                      >
                        {item.label}
                        {hasSubmenu && (
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isActive ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </a>
                    )}

                    {hasSubmenu && (
                      <DropdownMenu
                        items={item.submenu}
                        isOpen={isActive}
                        closeDropdown={closeDropdown}
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {open && (
          <div className="lg:hidden border-t border-border bg-white px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => {
              const isInternal = item.href.startsWith("/");
              const isExpanded = mobileExpanded === item.label;

              return (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    {isInternal ? (
                      <Link
                        to={item.href}
                        onClick={() => { if (!item.submenu) setOpen(false); }}
                        className="flex-1 px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted rounded-lg"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href || undefined}
                        onClick={(e) => {
                          handleHashScroll(e, item.href);
                          if (!item.submenu) setOpen(false);
                        }}
                        className="flex-1 px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted rounded-lg"
                      >
                        {item.label}
                      </a>
                    )}

                    {item.submenu && (
                      <button
                        onClick={() =>
                          setMobileExpanded((prev) =>
                            prev === item.label ? null : item.label
                          )
                        }
                        className="p-2 rounded-lg hover:bg-muted"
                        aria-label="Expandir"
                      >
                        <ChevronDown
                          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile submenu */}
                  {item.submenu && isExpanded && (
                    <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-primary/20 pl-3">
                      {item.submenu.map((sub) => {
                        // Empty href → "em breve"
                        if (!sub.href) {
                          return (
                            <span
                              key={sub.label}
                              className="flex items-center justify-between px-3 py-2 text-xs text-muted-foreground/40 cursor-default"
                            >
                              {sub.label}
                              <span className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full ml-2">
                                em breve
                              </span>
                            </span>
                          );
                        }

                        const isInternalSub = sub.href.startsWith("/");
                        return isInternalSub ? (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            onClick={() => setOpen(false)}
                            className="block px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-muted rounded-lg"
                          >
                            {sub.label}
                          </Link>
                        ) : (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={(e) => {
                              handleHashScroll(e, sub.href);
                              setOpen(false);
                            }}
                            className="block px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-muted rounded-lg"
                          >
                            {sub.label}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
}