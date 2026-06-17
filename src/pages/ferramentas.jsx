import TaxCalculator from "../components/features/tax/taxcalculator";

export default function Ferramentas() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-10 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-1">Ferramentas</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">Ferramentas {"&"} Extras</h1>
          <p className="text-white/60 mt-2">Recursos adicionais para contribuintes e empresas.</p>
        </div>
      </div>
      <TaxCalculator />
    </div>
  );
}