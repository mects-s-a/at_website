import { useState } from "react";
import { Calculator, Info } from "lucide-react";

const TAX_BRACKETS = [
  { min: 0, max: 42000, rate: 0, fixed: 0 },
  { min: 42001, max: 168000, rate: 0.10, fixed: 0 },
  { min: 168001, max: 504000, rate: 0.15, fixed: 12600 },
  { min: 504001, max: 1512000, rate: 0.20, fixed: 63000 },
  { min: 1512001, max: 3024000, rate: 0.25, fixed: 264600 },
  { min: 3024001, max: Infinity, rate: 0.32, fixed: 642600 },
];

function calcIRPS(annual) {
  const bracket = TAX_BRACKETS.find((b) => annual >= b.min && annual <= b.max);
  if (!bracket) return 0;
  return bracket.fixed + (annual - bracket.min) * bracket.rate;
}

function fmt(n) {
  return n.toLocaleString("pt-MZ", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function TaxCalculator() {
  const [type, setType] = useState("individual");
  const [income, setIncome] = useState("");
  const [hasVAT, setHasVAT] = useState(false);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const val = parseFloat(income.replace(/\s/g, "").replace(",", "."));
    if (!val || val <= 0) return;
    if (type === "individual") {
      const annual = val * 12;
      const inss = annual * 0.03;
      const taxableIncome = annual - inss;
      const irps = calcIRPS(taxableIncome);
      const monthlyTax = irps / 12;
      const monthlyInss = inss / 12;
      setResult({
        rows: [
          { label: "Rendimento Bruto Mensal", value: val, highlight: false },
          { label: "Rendimento Bruto Anual", value: annual, highlight: false },
          { label: "Desconto INSS (3%)", value: monthlyInss, highlight: false },
          { label: "Rendimento Tributável", value: taxableIncome / 12, highlight: false },
          { label: "IRPS Mensal Estimado", value: monthlyTax, highlight: true },
          { label: "Salário Líquido Mensal", value: val - monthlyTax - monthlyInss, highlight: true },
        ],
        note: "Cálculo baseado nas tabelas IRPS 2024. Valores estimativos.",
      });
    } else {
      const revenue = val;
      const iva = hasVAT ? revenue * 0.17 : 0;
      const irpc = revenue * 0.32;
      const total = iva + irpc;
      setResult({
        rows: [
          { label: "Receita Informada", value: revenue, highlight: false },
          { label: "IRPC Estimado (32%)", value: irpc, highlight: false },
          ...(hasVAT ? [{ label: "IVA Estimado (17%)", value: iva, highlight: false }] : []),
          { label: "Total de Impostos Estimado", value: total, highlight: true },
          { label: "Receita Líquida Estimada", value: revenue - total, highlight: true },
        ],
        note: "Cálculo simplificado para fins de estimativa. Consulte um técnico tributário.",
      });
    }
  };

  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Ferramenta</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Calculadora Fiscal</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Estime as suas obrigações fiscais de forma simples e rápida. Os valores são indicativos.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="bg-card border border-border rounded-2xl p-7 shadow-sm">
          <div className="flex rounded-xl overflow-hidden border border-border mb-6">
            {["individual", "empresa"].map((t) => (
              <button key={t} onClick={() => { setType(t); setResult(null); }}
                className={`flex-1 py-2.5 text-sm font-semibold transition ${type === t ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-muted"}`}>
                {t === "individual" ? "Pessoa Singular" : "Pessoa Colectiva"}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                {type === "individual" ? "Salário Bruto Mensal (MZN)" : "Receita Anual (MZN)"}
              </label>
              <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="Ex: 50000"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" />
            </div>
            {type === "empresa" && (
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={hasVAT} onChange={(e) => setHasVAT(e.target.checked)} className="w-4 h-4 accent-primary" />
                <span className="text-sm text-foreground">Sujeito a IVA (17%)</span>
              </label>
            )}
            <button onClick={calculate} className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold text-sm hover:brightness-110 transition">
              <Calculator className="w-4 h-4" /> Calcular
            </button>
          </div>
          <div className="mt-5 flex items-start gap-2 text-xs text-muted-foreground bg-muted rounded-xl p-3">
            <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
            <span>Esta calculadora fornece estimativas para orientação. Para cálculos oficiais, consulte um técnico tributário credenciado.</span>
          </div>
        </div>
        <div className={`bg-card border border-border rounded-2xl p-7 shadow-sm transition-opacity ${result ? "opacity-100" : "opacity-40"}`}>
          <h3 className="font-semibold text-foreground mb-5">Resultado da Estimativa</h3>
          {result ? (
            <>
              <div className="space-y-3">
                {result.rows.map((r) => (
                  <div key={r.label} className={`flex justify-between items-center py-2.5 px-3 rounded-xl ${r.highlight ? "bg-accent/10 border border-accent/20" : "border border-border"}`}>
                    <span className={`text-sm ${r.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{r.label}</span>
                    <span className={`font-mono font-bold ${r.highlight ? "text-accent text-base" : "text-foreground text-sm"}`}>{fmt(r.value)} MZN</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">{result.note}</p>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-48 text-muted-foreground">
              <Calculator className="w-12 h-12 mb-3 opacity-20" />
              <p className="text-sm">Preencha os dados e clique em Calcular</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
