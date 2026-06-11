import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Institucional",
    href: "#institucional",
    submenu: [
      // 🔄 Mude de "#institucional" para "/sobre-at"
      { label: "Sobre a AT", href: "/sobre-at" }, 
      { label: "Organograma", href: "https://at-mocambique.tributo670.workers.dev" },
      { label: "Directório", href: "https://at-mocambique.tributo670.workers.dev" },
      { label: "Relatórios e Publicações", href: "https://at-mocambique.tributo670.workers.dev" },
      { label: "Código de Conduta", href: "https://at-mocambique.tributo670.workers.dev/Imagens/C%C3%B3digo+de+Conduta+dos+Funcion%C3%A1rios+da+AT%20(1).pdf" },
    ],
  },
  {
    label: "Serviços",
    href: "#servicos",
    submenu: [
      { label: "Serviços Aduaneiros", href: "/sobre-at" }, 
      { label: "Serviços Tributários", href: "https://at-mocambique.tributo670.workers.dev" },
    ],
  },
  {
    label: "Legislação",
    href: "#",
    submenu: [
      { label: "Legislação Geral", href: "https://at-mocambique.tributo670.workers.dev/formularios.html" },
      { label: "Legislação Fiscal", href: "https://at-mocambique.tributo670.workers.dev/formularios.html" },
      { label: "Legislação Aduaneira", href: "https://at-mocambique.tributo670.workers.dev/formularios.html" },
    ],
  },
  {
    label: "Média",
    href: "/noticias",
    submenu: [
      { label: "Notícias e Imprensa", href: "/noticias" },
      { label: "Galeria de Eventos", href: "/galeria" },
    ],
  },
  {
    label: "Informações",
    href: "#",
    submenu: [
      { label: "Perguntas Frequentes", href: "https://at-mocambique.tributo670.workers.dev" },
      { label: "Calendário Fiscal", href: "#calendario" },
    ],
  },
  {
    label: "Ferramentas",
    href: "/ferramentas",
    submenu: [
      { label: "Calculadora Fiscal", href: "/ferramentas" },
      { label: "Taxa de Câmbio", href: "/taxa-de-cambio" },
    ],
  },
  {
    label: "Contactos",
    href: "/contacto",
  },
];

const handleHashScroll = (e, href) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.location.href = "/" + href;
    } else {
      const targetId = href.substring(1);
      const element = targetId === "" ? document.body : document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

function DropdownMenu({ items, isOpen }) {
  return (
    <div
      className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-border overflow-hidden transition-all duration-200 ${
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      {items.map((item) => {
        const isInternalRoute = item.href.startsWith("/");
        return isInternalRoute ? (
          <Link
            key={item.label}
            to={item.href}
            className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {item.label}
          </Link>
        ) : (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={(e) => handleHashScroll(e, item.href)}
            className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="https://at-mocambique.tributo670.workers.dev/Imagens/logo-at.png"
              alt="Autoridade Tributária de Moçambique"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isInternalRoute = item.href.startsWith("/");
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {isInternalRoute ? (
                    <Link
                      to={item.href}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeDropdown === item.label
                          ? "text-primary bg-primary/5"
                          : "text-foreground/70 hover:text-primary hover:bg-muted"
                      }`}
                    >
                      {item.label}
                      {item.submenu && <ChevronDown className="w-3.5 h-3.5" />}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleHashScroll(e, item.href)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeDropdown === item.label
                          ? "text-primary bg-primary/5"
                          : "text-foreground/70 hover:text-primary hover:bg-muted"
                      }`}
                    >
                      {item.label}
                      {item.submenu && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </a>
                  )}
                  {item.submenu && (
                    <DropdownMenu items={item.submenu} isOpen={activeDropdown === item.label} />
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => {
            const isInternalRoute = item.href.startsWith("/");
            return (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  {isInternalRoute ? (
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="flex-1 px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted rounded-lg"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
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
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="p-2 rounded-lg hover:bg-muted"
                    >
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.submenu && mobileExpanded === item.label && (
                  <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-primary/20 pl-3">
                    {item.submenu.map((sub) =>
                      sub.href.startsWith("/") ? (
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
                          target={sub.href.startsWith("http") ? "_blank" : undefined}
                          rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          onClick={(e) => {
                            handleHashScroll(e, sub.href);
                            setOpen(false);
                          }}
                          className="block px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-muted rounded-lg"
                        >
                          {sub.label}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
}