import { Link } from "react-router-dom";

const rates = [
  { code: "USD", name: "Dólar Americano", rate: "64.65", iso: "us" },
  { code: "ZAR", name: "Rand", rate: "4.06", iso: "za" },
  { code: "GBP", name: "Libra", rate: "86.31", iso: "gb" },
  { code: "EUR", name: "Euro", rate: "74.64", iso: "eu" },
  { code: "CNY", name: "Yuan Renminbi", rate: "9.05", iso: "cn" },
  { code: "BRL", name: "Real Brasileiro", rate: "12.13", iso: "br" },
];

export default function ExchangeRates() {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 flex flex-col justify-between h-full">
      <div>
        {/* Header Block */}
        <h3 className="font-display text-xl font-bold text-foreground mb-1">
          Taxa de Câmbio
        </h3>
        <p className="text-sm text-muted-foreground mb-5">Valores em MZN (Metical)</p>

        {/* Section Columns Subheader Header applied from the main page schema */}
        <div className="grid grid-cols-3 gap-2 px-2 py-1.5 bg-muted rounded-lg text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          <span>Moeda</span>
          <span className="text-center">Código</span>
          <span className="text-right">Câmbio</span>
        </div>

        {/* Rates Listing with custom structured grid format */}
        <div className="space-y-1.5">
          {rates.map((r) => (
            <div 
              key={r.code} 
              className="grid grid-cols-3 gap-2 items-center px-2 py-2 border-b border-border last:border-0 hover:bg-muted/30 transition-colors rounded-md"
            >
              {/* Column 1: Country Flag + Info */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-4 flex items-center justify-center overflow-hidden shrink-0">
                  <img 
                    src={`https://flagcdn.com/w40/${r.iso}.png`} 
                    alt={r.code} 
                    className="w-full h-full object-contain filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]" 
                  />
                </div>
                <span className="text-xs text-muted-foreground truncate hidden sm:block">{r.name}</span>
                <span className="text-xs font-medium text-foreground block sm:hidden truncate">{r.code}</span>
              </div>

              {/* Column 2: ISO Code Identifier */}
              <span className="font-mono font-bold text-xs text-primary text-center">
                {r.code}
              </span>

              {/* Column 3: Numeric Metical Rate */}
              <p className="font-mono font-semibold text-sm text-foreground text-right">
                {r.rate}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Center bottom action button */}
      <div className="mt-5 flex justify-center w-full">
        <Link 
          to="/taxa-de-cambio" 
          className="w-full text-center px-4 py-2 rounded-xl text-xs font-semibold bg-muted text-muted-foreground border border-border/40 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all active:scale-[0.98]"
        >
          Ver Mais Câmbios
        </Link>
      </div>
    </div>
  );
}