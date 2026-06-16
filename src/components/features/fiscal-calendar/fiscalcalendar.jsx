import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

// ─── Tax deadlines per month ───────────────────────────────────────
function getTaxDays(year, month) {
  const lastDay = new Date(year, month + 1, 0).getDate();
  const days = new Set();

  // Fixed monthly deadlines
  days.add(15);  // IVA sem movimentos + IVA com créditos
  days.add(20);  // IRPS + IRPC declarations

  // Last day of month — IVA com pagamento
  days.add(lastDay);

  // April (3) and May (4) extras
  if (month === 3 || month === 4) {
    days.add(10); // ISPC 1st quarter guides (approximate mid-deadline)
  }
  if (month === 4) {
    days.add(31); // 31 May — first IRPC Pagamento por conta (May always has 31)
  }

  return days;
}

function getTaxLabel(day, month, year) {
  const lastDay = new Date(year, month + 1, 0).getDate();
  const labels = [];
  if (day === 15)      labels.push("IVA sem movimentos · IVA com créditos");
  if (day === 20)      labels.push("IRPS · IRPC");
  if (day === lastDay) labels.push("IVA com pagamento");
  if ((month === 3 || month === 4) && day === 10) labels.push("ISPC 1.º trimestre");
  if (month === 4 && day === 31) labels.push("Pagamento por conta IRPC · IRPS M/10 · Modelo 22");
  return labels.join("\n");
}

const MONTH_NAMES_SHORT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
const MONTH_NAMES_FULL  = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const WEEK_DAYS = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

const today = new Date();
const CURRENT_YEAR  = today.getFullYear();
const CURRENT_MONTH = today.getMonth();
const CURRENT_DAY   = today.getDate();

const YEARS = Array.from({ length: 11 }, (_, i) => CURRENT_YEAR - 5 + i);

export default function FiscalCalendar() {
  const [viewYear,  setViewYear]  = useState(CURRENT_YEAR);
  const [viewMonth, setViewMonth] = useState(CURRENT_MONTH);
  const [picker, setPicker]       = useState(null); // null | "month" | "year"
  const [tooltip, setTooltip]     = useState(null); // { day, label }

  const taxDays    = getTaxDays(viewYear, viewMonth);
  const firstDay   = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const isCurrentMonth = viewYear === CURRENT_YEAR && viewMonth === CURRENT_MONTH;

  const prev = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
    setPicker(null);
  };
  const next = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
    setPicker(null);
  };
  const goToday = () => { setViewYear(CURRENT_YEAR); setViewMonth(CURRENT_MONTH); setPicker(null); };

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className="bg-card rounded-2xl border border-border p-6 relative select-none w-full">

      {/* ── Title ── */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Calendário Fiscal
      </h3>

      {/* ── Stable Fluid Navigation row ── */}
      <div className="flex items-center justify-between mb-4 relative h-9">
        <button
          onClick={prev}
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground shrink-0"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Stable Non-shifting Central Control Deck */}
        <div className="flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2 w-[260px]">
          {/* Month Segment Wrapper with Stable Fixed Width */}
          <div className="w-28 flex justify-center relative">
            <button
              onClick={() => setPicker(p => p === "month" ? null : "month")}
              className="flex items-center justify-between w-full px-2 py-1.5 rounded-lg hover:bg-muted transition-colors text-sm font-semibold text-foreground capitalize"
            >
              <span className="truncate w-full text-center">
                {MONTH_NAMES_FULL[viewMonth]}
              </span>
              <ChevronDown size={13} className={`ml-1 shrink-0 transition-transform ${picker === "month" ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Year Segment Wrapper with Stable Fixed Width */}
          <div className="w-20 flex justify-center relative">
            <button
              onClick={() => setPicker(p => p === "year" ? null : "year")}
              className="flex items-center justify-between w-full px-2 py-1.5 rounded-lg hover:bg-muted transition-colors text-sm font-semibold text-foreground"
            >
              <span className="w-full text-center">{viewYear}</span>
              <ChevronDown size={13} className={`ml-1 shrink-0 transition-transform ${picker === "year" ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Today Button Absolute Anchor Slot */}
          <div className="w-12 h-6 flex items-center justify-center">
            {!isCurrentMonth && (
              <button
                onClick={goToday}
                className="px-2 py-1 rounded-lg text-xs font-semibold bg-primary/15 text-primary hover:bg-primary/25 transition-colors whitespace-nowrap"
              >
                Hoje
              </button>
            )}
          </div>

          {/* Dropdowns */}
          {picker === "month" && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-30 bg-card border border-border rounded-xl shadow-lg p-2 grid grid-cols-3 gap-1 w-48">
              {MONTH_NAMES_SHORT.map((m, i) => (
                <button
                  key={m}
                  onClick={() => { setViewMonth(i); setPicker(null); }}
                  className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    i === viewMonth
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-foreground/80"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          )}

          {picker === "year" && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-30 bg-card border border-border rounded-xl shadow-lg p-2 flex flex-col gap-0.5 w-24 max-h-52 overflow-y-auto">
              {YEARS.map((y) => (
                <button
                  key={y}
                  onClick={() => { setViewYear(y); setPicker(null); }}
                  className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    y === viewYear
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-foreground/80"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={next}
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground shrink-0"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* ── Weekday headers ── */}
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted-foreground mb-2">
        {WEEK_DAYS.map((d) => <div key={d} className="py-1">{d}</div>)}
      </div>

      {/* ── Days grid ── */}
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {days.map((d, i) => {
          if (!d) return <div key={i} />;
          const isTax     = taxDays.has(d);
          const isToday   = isCurrentMonth && d === CURRENT_DAY;
          const label     = isTax ? getTaxLabel(d, viewMonth, viewYear) : null;
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
                  ? "bg-primary text-primary-foreground font-bold"
                  : isTax
                  ? "bg-accent/15 text-accent font-semibold hover:bg-accent/25"
                  : "text-foreground/70 hover:bg-muted"
              }`}>
                {d}
              </div>

              {/* Tooltip */}
              {isTax && isHovered && (
                <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[220px] bg-foreground text-background text-xs rounded-lg px-2.5 py-1.5 shadow-lg pointer-events-none whitespace-pre-line text-left leading-relaxed">
                  {label}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Legend ── */}
      <div className="flex items-center gap-4 mt-5 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent/30" /> Prazo fiscal
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-primary" /> Hoje
        </span>
      </div>

      {/* Backdrop overlay for dropdown closing */}
      {picker && (
        <div className="fixed inset-0 z-20" onClick={() => setPicker(null)} />
      )}
    </div>
  );
}