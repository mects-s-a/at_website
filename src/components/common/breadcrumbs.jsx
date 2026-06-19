import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ trackLabel, trackHref, currentPageLabel }) {
  return (
    <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-foreground/60 mb-6 font-medium select-none">
      {/* Home link */}
      <Link 
        to="/" 
        className="flex items-center gap-1 hover:text-primary transition-colors text-foreground/70"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Início</span>
      </Link>
      
      <ChevronRight className="w-3.5 h-3.5 text-foreground/30 shrink-0" />
      
      {/* Track Link (Aduaneiros or Tributários) */}
      <Link 
        to={trackHref} 
        className="hover:text-primary transition-colors text-foreground/70"
      >
        {trackLabel}
      </Link>
      
      {currentPageLabel && (
        <>
          <ChevronRight className="w-3.5 h-3.5 text-foreground/30 shrink-0" />
          {/* Active page item - non-clickable */}
          <span className="text-foreground font-semibold">
            {currentPageLabel}
          </span>
        </>
      )}
    </nav>
  );
}