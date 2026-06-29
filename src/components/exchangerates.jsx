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
    <div className="bg-white rounded-2xl border border-at-border p-6 flex flex-col justify-between h-full">
      <div>
        <h3 className="font-display text-xl font-bold text-at-ink mb-1">
          Taxa de Câmbio
        </h3>
        <p className="text-sm text-at-muted mb-5">Valores em MZN (Metical)</p>

        <div className="grid grid-cols-3 gap-2 px-2 py-1.5 bg-at-smoke rounded-lg text-[10px] font-semibold text-at-muted uppercase tracking-wider mb-2">
          <span>Moeda</span>
          <span className="text-center">Código</span>
          <span className="text-right">Câmbio</span>
        </div>

        <div className="space-y-1.5">
          {rates.map((r) => (
            <div
              key={r.code}
              className="grid grid-cols-3 gap-2 items-center px-2 py-2 border-b border-at-border last:border-0 hover:bg-at-smoke/50 transition-colors rounded-md"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-4 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src={`https://flagcdn.com/w40/${r.iso}.png`}
                    alt={r.code}
                    className="w-full h-full object-contain filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
                  />
                </div>
                <span className="text-xs text-at-muted truncate hidden sm:block">{r.name}</span>
                <span className="text-xs font-medium text-at-ink block sm:hidden truncate">{r.code}</span>
              </div>

              <span className="font-mono font-bold text-xs text-at-mid text-center">
                {r.code}
              </span>

              <p className="font-mono font-semibold text-sm text-at-ink text-right">
                {r.rate}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center w-full">
        <Link
          to="/taxa-de-cambio"
          className="w-full text-center px-4 py-2 rounded-xl text-xs font-semibold bg-at-smoke text-at-muted border border-at-border/40 hover:bg-at-pale hover:text-at-mid hover:border-at-mid/20 transition-all active:scale-[0.98]"
        >
          Ver Mais Câmbios
        </Link>
      </div>
    </div>
  );
}