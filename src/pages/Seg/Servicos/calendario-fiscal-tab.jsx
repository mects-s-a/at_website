import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MONTH_NAMES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const WEEK_DAYS = ["D", "S", "T", "Q", "Q", "S", "S"];

export default function FiscalCalendar() {
  const [viewYear, setViewYear] = useState(new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(new Date().getMonth());
  const [viewMode, setViewMode] = useState("calendar"); // "calendar" | "year"

  return (
    <div className="w-full h-full flex flex-col gap-6">
      {/* Navigation Header - Outside Calendar Container */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <button 
          onClick={() => setViewMode(viewMode === "calendar" ? "year" : "calendar")}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          {viewMode === "calendar" ? "Ver Ano Completo" : "Ver Calendário Mensal"}
        </button>
        <h1 className="text-3xl font-bold">{viewMode === "calendar" ? `${MONTH_NAMES[viewMonth]} ${viewYear}` : `Ano ${viewYear}`}</h1>
        <div className="flex gap-2">
            <button onClick={() => setViewYear(y => y - 1)} className="p-2 hover:bg-muted rounded-full"><ChevronLeft /></button>
            <button onClick={() => setViewYear(y => y + 1)} className="p-2 hover:bg-muted rounded-full"><ChevronRight /></button>
        </div>
      </div>

      {viewMode === "calendar" ? (
        <FullMonthView year={viewYear} month={viewMonth} />
      ) : (
        <YearOverview year={viewYear} onSelectMonth={(m) => { setViewMonth(m); setViewMode("calendar"); }} />
      )}
    </div>
  );
}

// 1. FULL MONTH VIEW - High focus, takes up screen space
function FullMonthView({ year, month }) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: firstDay }, () => null).concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

  return (
    <div className="grid grid-cols-7 gap-px bg-border border border-border shadow-sm">
      {WEEK_DAYS.map(d => <div key={d} className="bg-muted p-4 text-center font-bold">{d}</div>)}
      {days.map((d, i) => (
        <div key={i} className="bg-card min-h-[120px] p-4 text-lg border-t border-r border-border">
          {d}
        </div>
      ))}
    </div>
  );
}

// 2. YEAR OVERVIEW - High density, 3x4 grid
function YearOverview({ year, onSelectMonth }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {MONTH_NAMES.map((monthName, i) => (
        <div 
            key={monthName} 
            onClick={() => onSelectMonth(i)}
            className="border border-border p-4 hover:border-primary cursor-pointer transition-all bg-card"
        >
          <h3 className="font-bold text-lg mb-2">{monthName}</h3>
          <div className="grid grid-cols-7 gap-1 text-[10px] text-center">
            {Array.from({ length: 30 }, (_, d) => d + 1).map(d => (
                <div key={d} className="py-1 hover:bg-muted rounded">{d}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}