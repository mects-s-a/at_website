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
    <div className="bg-card rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-display text-xl font-bold text-foreground">Taxa de Câmbio</h3>
        <Link 
          to="/taxa-de-cambio" 
          className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
        >
          Ver Mais »
        </Link>
      </div>
      <p className="text-sm text-muted-foreground mb-5">Valores em MZN (Metical)</p>

      <div className="space-y-3">
        {rates.map((r) => (
          <div key={r.code} className="flex items-center justify-between py-2 border-b border-border last:border-0">
            <div className="flex items-center gap-3">
              <img 
                src={`https://flagcdn.com/w20/${r.iso}.png`} 
                alt={r.code} 
                className="w-6 h-4 object-cover rounded-sm shadow-sm" 
              />
              <div>
                <p className="font-semibold text-sm text-foreground">{r.code}</p>
                <p className="text-xs text-muted-foreground">{r.name}</p>
              </div>
            </div>
            <p className="font-mono font-semibold text-foreground">{r.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}