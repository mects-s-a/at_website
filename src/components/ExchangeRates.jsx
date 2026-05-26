const rates = [
  { code: "USD", name: "Dólar Americano", rate: "64.65", flag: "🇺🇸" },
  { code: "ZAR", name: "Rand", rate: "4.06", flag: "🇿🇦" },
  { code: "GBP", name: "Libra", rate: "86.31", flag: "🇬🇧" },
  { code: "EUR", name: "Euro", rate: "74.64", flag: "🇪🇺" },
  { code: "CNY", name: "Yuan Renminbi", rate: "9.05", flag: "🇨🇳" },
  { code: "BRL", name: "Real Brasileiro", rate: "12.13", flag: "🇧🇷" },
];

export default function ExchangeRates() {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="font-display text-xl font-bold text-foreground mb-1">Taxa de Câmbio</h3>
      <p className="text-sm text-muted-foreground mb-5">Valores em MZN (Metical)</p>
      <div className="space-y-3">
        {rates.map((r) => (
          <div key={r.code} className="flex items-center justify-between py-2 border-b border-border last:border-0">
            <div className="flex items-center gap-3">
              <span className="text-xl">{r.flag}</span>
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
