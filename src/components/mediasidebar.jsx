import { Link } from "react-router-dom";
import { Newspaper, Images, FileText, Video, ChevronRight } from "lucide-react";

const items = [
  { icon: Newspaper, label: "Notícias", href: "/noticias", key: "noticias" },
  { icon: Images, label: "Galeria", href: "/galeria", key: "galeria" },
  { icon: FileText, label: "Comunicados", href: "#", soon: true },
  { icon: Video, label: "Vídeos", href: "#", soon: true },
];

export default function MediaSidebar({ activeKey }) {
  return (
    <aside className="hidden lg:block lg:w-56 shrink-0">
      <div className="bg-white border border-at-border rounded-2xl p-4 shadow-at-sm lg:sticky lg:top-24">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-at-muted mb-3 px-2">Média</h3>
        <nav className="flex flex-col gap-1">
          {items.map((item) => {
            const isActive = activeKey === item.key;
            if (item.soon) {
              return (
                <span
                  key={item.label}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-at-muted/40 cursor-default"
                >
                  <span className="flex items-center gap-2.5">
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </span>
                  <span className="text-[9px] bg-at-pale text-at-muted px-1.5 py-0.5 rounded-full">em breve</span>
                </span>
              );
            }
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-at-deep text-white"
                    : "text-at-ink hover:bg-at-pale hover:text-at-mid"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </span>
                {!isActive && <ChevronRight className="w-3.5 h-3.5 opacity-40" />}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}