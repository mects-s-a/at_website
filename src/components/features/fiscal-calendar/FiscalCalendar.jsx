import { useState } from "react";

const taxDays = [20, 21, 25, 30, 31];

export default function FiscalCalendar() {
  const [date] = useState(new Date());
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = date.getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = date.toLocaleDateString("pt-MZ", { month: "long", year: "numeric" });

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="font-display text-xl font-bold text-foreground mb-1">Calendário Fiscal</h3>
      <p className="text-sm text-muted-foreground capitalize mb-5">{monthName}</p>
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted-foreground mb-2">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((d) => (
          <div key={d} className="py-1">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {days.map((d, i) => (
          <div key={i} className={`py-1.5 rounded-lg transition-colors ${
            !d ? "" :
            d === today ? "bg-primary text-primary-foreground font-bold" :
            taxDays.includes(d) ? "bg-accent/15 text-accent font-semibold" :
            "text-foreground/70 hover:bg-muted"
          }`}>{d}</div>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-5 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-accent/30" /> Pagamento</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary" /> Hoje</span>
      </div>
    </div>
  );
}
