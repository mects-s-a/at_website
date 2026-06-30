import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getTaxDays, getTaxLabel } from "../../components/fiscalcalendar";

const MONTH_NAMES_FULL = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const WEEK_DAYS = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

const today = new Date();
const CURRENT_YEAR  = today.getFullYear();
const CURRENT_MONTH = today.getMonth();
const CURRENT_DAY   = today.getDate();

export default function FiscalCalendarTab() {
  const [viewYear, setViewYear] = useState(CURRENT_YEAR);
  const [viewMonth, setViewMonth] = useState(CURRENT_MONTH);
  const [viewMode, setViewMode] = useState("calendar");

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 flex-wrap gap-3">
        <button
          onClick={() => setViewMode(viewMode === "calendar" ? "year" : "calendar")}
          className="px-5 py-2 bg-[#1B4FAB] text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
        >
          {viewMode === "calendar" ? "Ver Ano Completo" : "Ver Calendário Mensal"}
        </button>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
          {viewMode === "calendar" ? `${MONTH_NAMES_FULL[viewMonth]} ${viewYear}` : `Ano ${viewYear}`}
        </h2>
        <div className="flex gap-1">
          <button onClick={() => setViewYear((y) => y - 1)} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 hover:text-[#1B4FAB] transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => setViewYear((y) => y + 1)} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 hover:text-[#1B4FAB] transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {viewMode === "calendar" ? (
        <MonthView year={viewYear} month={viewMonth} />
      ) : (
        <YearOverview year={viewYear} onSelectMonth={(m) => { setViewMonth(m); setViewMode("calendar"); }} />
      )}
    </div>
  );
}

function MonthView({ year, month }) {
  const taxDays = getTaxDays(year, month);
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const isCurrentMonth = year === CURRENT_YEAR && month === CURRENT_MONTH;
  const [tooltip, setTooltip] = useState(null);

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 sm:p-6 mt-5 relative select-none">
      <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-slate-400 mb-2">
        {WEEK_DAYS.map((d) => <div key={d} className="py-1">{d}</div>)}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {days.map((d, i) => {
          if (!d) return <div key={i} />;
          const isTax = taxDays.has(d);
          const isToday = isCurrentMonth && d === CURRENT_DAY;
          const label = isTax ? getTaxLabel(d, month, year) : null;
          const isHovered = tooltip?.day === d;
          return (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => isTax && label && setTooltip({ day: d, label })}
              onMouseLeave={() => setTooltip(null)}
            >
              <div className={`py-1.5 rounded-lg transition-colors cursor-default ${
                isToday
                  ? "bg-[#0B2D6E] text-white font-bold"
                  : isTax
                  ? "bg-blue-50 text-[#1B4FAB] font-semibold hover:bg-blue-100"
                  : "text-slate-600 hover:bg-slate-100"
              }`}>
                {d}
              </div>
              {isTax && isHovered && (
                <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[220px] bg-slate-800 text-white text-xs rounded-lg px-2.5 py-1.5 shadow-lg pointer-events-none whitespace-pre-line text-left leading-relaxed">
                  {label}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-50 border border-[#1B4FAB]/30" /> Prazo fiscal
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0B2D6E]" /> Hoje
        </span>
      </div>
    </div>
  );
}

function YearOverview({ year, onSelectMonth }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {MONTH_NAMES_FULL.map((monthName, i) => (
        <div
          key={monthName}
          onClick={() => onSelectMonth(i)}
          className="border border-slate-200 p-4 hover:border-[#1B4FAB] cursor-pointer transition-all bg-white rounded-xl shadow-sm"
        >
          <h3 className="font-bold text-base mb-2 text-slate-700">{monthName}</h3>
          <MiniMonth year={year} month={i} />
        </div>
      ))}
    </div>
  );
}

function MiniMonth({ year, month }) {
  const taxDays = getTaxDays(year, month);
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(i);
  return (
    <div className="grid grid-cols-7 gap-0.5 text-[9px] text-center">
      {cells.map((d, i) => (
        <div key={i} className={`py-0.5 rounded ${d && taxDays.has(d) ? "bg-blue-100 text-[#1B4FAB] font-bold" : "text-slate-400"}`}>
          {d || ""}
        </div>
      ))}
    </div>
  );
}