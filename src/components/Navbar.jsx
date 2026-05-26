import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Início", href: "#" },
  { label: "Institucional", href: "#institucional" },
  { label: "Serviços Aduaneiros", href: "#servicos" },
  { label: "Serviços Tributários", href: "#servicos" },
  { label: "Legislação", href: "#" },
  { label: "Informações", href: "#noticias" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">AT</div>
            <div className="hidden sm:block">
              <p className="font-display text-lg font-bold text-primary leading-tight">Autoridade Tributária</p>
              <p className="text-xs text-muted-foreground tracking-wide">de Moçambique</p>
            </div>
            <p className="sm:hidden font-display text-base font-bold text-primary">AT Moçambique</p>
          </div>
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-lg hover:bg-muted">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:1266" className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full">
              <Phone className="w-3.5 h-3.5" /> 1266
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg hover:bg-muted">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted rounded-lg">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
