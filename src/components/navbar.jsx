import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navItems = [
{
  label: "Institucional",
  href: "#",
  submenu: [
  { label: "Sobre a AT", href: "/institucional#sobre" },
  { label: "Fluxo de Desalfandegamento", href: "/institucional#procedimentos" },
  { label: "Atribuições e Competências", href: "/institucional#atribuicoes" },
  { label: "Organograma", href: "/institucional#organograma" },
  { label: "Infraestruturas", href: "/institucional#infraestruturas" }]

},
{
  label: "Serviços",
  href: "#",
  submenu: [
  { label: "Procedimentos Aduaneiros", href: "/servicos/procedimentos-aduaneiros" },
  { label: "Pauta Aduaneira", href: "/servicos/pauta-aduaneira" },
  { label: "Formulários Aduaneiros", href: "/servicos/formularios-aduaneiros" },
  { label: "Estâncias Aduaneiras", href: "/servicos/estancias-aduaneiras" },
  { label: "Impostos", href: "/servicos/impostos" },
  { label: "Calendário Fiscal", href: "/servicos/calendario-fiscal" },
  { label: "Formulários Fiscais", href: "/servicos/formularios-fiscais" }]

},
{
  label: "Legislação",
  href: "#",
  submenu: [
  { label: "Legislação Geral", href: "/legislacao/geral" },
  { label: "Legislação Fiscal", href: "/legislacao/fiscal" },
  { label: "Legislação Aduaneira", href: "/legislacao/aduaneira" }]

},
{
  label: "Media",
  href: "/noticias",
  submenu: [
  { label: "Notícias e Imprensa", href: "/noticias" },
  { label: "Galeria de Eventos", href: "/galeria" }]

},
{
  label: "Informações",
  href: "#",
  submenu: [
  { label: "Comunicado de Imprensa", href: "/informacoes/comunicado-de-imprensa" },
  { label: "Concursos Públicos", href: "/informacoes/concursos" },
  { label: "Planos", href: "" },
  { label: "Boletins Informativos", href: "/informacoes/boletins" },
  { label: "Conjuntura Fiscal", href: "/informacoes/boletins" },
  { label: "Branqueamento de Capitais", href: "/informacoes/branqueamento-de-capitais" }]

},
{
  label: "Ferramentas",
  href: "#",
  submenu: [
  { label: "Atendimento Presencial", href: "/atendimento-presencial" },
  { label: "Taxa de Câmbio", href: "/taxa-de-cambio" },
  { label: "Perguntas Frequentes", href: "" },
  { label: "Calendário Fiscal", href: "#calendario" }]

},
{
  label: "Formulários",
  href: "/formularios"
},
{
  label: "Contactos",
  href: "/contacto"
}];


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

function DropdownMenu({ items, isOpen, closeDropdown }) {
  return (
    <div
      className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-at-md border border-at-border overflow-hidden transition-all duration-200 ${
      isOpen ?
      "opacity-100 translate-y-0 pointer-events-auto" :
      "opacity-0 -translate-y-2 pointer-events-none"}`
      }>
      
      {items.map((item) => {
        if (!item.href) {
          return (
            <span
              key={item.label}
              className="flex items-center justify-between px-4 py-2.5 text-sm text-at-muted/40 cursor-default select-none">
              
              {item.label}
              <span className="text-[10px] font-medium bg-at-smoke text-at-muted px-1.5 py-0.5 rounded-full">
                em breve
              </span>
            </span>);

        }
        const isInternal = item.href.startsWith("/");
        return isInternal ?
        <Link
          key={item.label}
          to={item.href}
          onClick={closeDropdown}
          className="block px-4 py-2.5 text-sm text-at-ink/80 hover:bg-at-deep hover:text-white transition-colors">
          
            {item.label}
          </Link> :

        <a
          key={item.label}
          href={item.href}
          onClick={(e) => {handleHashScroll(e, item.href);closeDropdown();}}
          className="block px-4 py-2.5 text-sm text-at-ink/80 hover:bg-at-deep hover:text-white transition-colors">
          
            {item.label}
          </a>;

      })}
    </div>);

}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);

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
      setActiveDropdown((prev) => prev === label ? null : label);
    }
  };

  return (
    <>
      <div className="h-16 sm:h-[68px]" />

      <header
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-at-deep shadow-md w-full">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center h-16 sm:h-[68px]">

            <Link
              to="/"
              className="flex items-center gap-2.5 shrink-0"
              onClick={() => setActiveDropdown(null)}>
              
              <img
                src="https://media.base44.com/images/public/6a10556912996cfabed12a84/4501ecebc_logo-da-at.png"
                alt="Autoridade Tributária de Moçambique"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain shrink-0" />
              
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-0.5">
              {navItems.map((item) => {
                const isInternal = item.href.startsWith("/");
                const hasSubmenu = !!item.submenu;
                const isActive = activeDropdown === item.label;

                const itemClass = `flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-lg transition-colors cursor-pointer ${
                isActive ?
                "text-at-light bg-white/10" :
                "text-white/70 hover:text-white hover:bg-white/5"}`;


                return (
                  <div key={item.label} className="relative">
                    {isInternal ?
                    <Link
                      to={item.href}
                      onClick={(e) => toggleDropdown(e, item.label, hasSubmenu)}
                      className={itemClass}>
                      
                        {item.label}
                        {hasSubmenu &&
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isActive ? "rotate-180" : ""}`
                        } />

                      }
                      </Link> :

                    <a
                      href={item.href || undefined}
                      onClick={(e) => {
                        if (hasSubmenu) toggleDropdown(e, item.label, hasSubmenu);else
                        handleHashScroll(e, item.href);
                      }}
                      className={itemClass}>
                      
                        {item.label}
                        {hasSubmenu &&
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isActive ? "rotate-180" : ""}`
                        } />

                      }
                      </a>
                    }

                    {hasSubmenu &&
                    <DropdownMenu
                      items={item.submenu}
                      isOpen={isActive}
                      closeDropdown={() => setActiveDropdown(null)} />

                    }
                  </div>);

              })}
            </nav>

            {/* Call center CTA */}
            





            

            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden ml-auto p-2 rounded-lg text-white hover:bg-white/10"
              aria-label="Menu">
              
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open &&
        <div className="lg:hidden border-t border-white/10 bg-at-deep px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => {
            const isInternal = item.href.startsWith("/");
            const isExpanded = mobileExpanded === item.label;

            return (
              <div key={item.label}>
                  <div className="flex items-center justify-between">
                    {isInternal ?
                  <Link
                    to={item.href}
                    onClick={() => {if (!item.submenu) setOpen(false);}}
                    className="flex-1 px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 rounded-lg">
                    
                        {item.label}
                      </Link> :

                  <a
                    href={item.href || undefined}
                    onClick={(e) => {
                      handleHashScroll(e, item.href);
                      if (!item.submenu) setOpen(false);
                    }}
                    className="flex-1 px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 rounded-lg">
                    
                        {item.label}
                      </a>
                  }

                    {item.submenu &&
                  <button
                    onClick={() =>
                    setMobileExpanded((prev) =>
                    prev === item.label ? null : item.label
                    )
                    }
                    className="p-2 rounded-lg text-white/60 hover:bg-white/10"
                    aria-label="Expandir">
                    
                        <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""}`
                      } />
                    
                      </button>
                  }
                  </div>

                  {item.submenu && isExpanded &&
                <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-at-gold/20 pl-3">
                      {item.submenu.map((sub) => {
                    if (!sub.href) {
                      return (
                        <span
                          key={sub.label}
                          className="flex items-center justify-between px-3 py-2 text-xs text-white/30 cursor-default">
                          
                              {sub.label}
                              <span className="text-[10px] bg-white/10 text-white/40 px-1.5 py-0.5 rounded-full ml-2">
                                em breve
                              </span>
                            </span>);

                    }
                    const isInternalSub = sub.href.startsWith("/");
                    return isInternalSub ?
                    <Link
                      key={sub.label}
                      to={sub.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 text-xs text-white/60 hover:text-at-light hover:bg-white/5 rounded-lg">
                      
                            {sub.label}
                          </Link> :

                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={(e) => {
                        handleHashScroll(e, sub.href);
                        setOpen(false);
                      }}
                      className="block px-3 py-2 text-xs text-white/60 hover:text-at-light hover:bg-white/5 rounded-lg">
                      
                            {sub.label}
                          </a>;

                  })}
                    </div>
                }
                </div>);

          })}

            <a
            href="tel:1266"
            className="flex items-center justify-center gap-1.5 mt-3 bg-at-light text-at-deep font-bold text-sm px-4 py-2.5 rounded-full">
            
              <Phone className="w-4 h-4" />
              Call Center: 1266
            </a>
          </div>
        }
      </header>
    </>);

}