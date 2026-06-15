import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, CalendarClock } from "lucide-react";

function getTaxDays(year, month) {
  const lastDay = new Date(year, month + 1, 0).getDate();
  const days = new Set();
  days.add(15);
  days.add(20);
  days.add(lastDay);
  if (month === 3 || month === 4) days.add(10);
  if (month === 4) days.add(31);
  return days;
}

function getTaxLabel(day, month, year) {
  const lastDay = new Date(year, month + 1, 0).getDate();
  const labels = [];
  // if (day === 10)      labels.push("");
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

const today       = new Date();
const CURRENT_YEAR  = today.getFullYear();
const CURRENT_MONTH = today.getMonth();
const CURRENT_DAY   = today.getDate();
const YEARS = Array.from({ length: 21 }, (_, i) => CURRENT_YEAR - 10 + i);

// Dropdown rendered via portal-style fixed positioning
function Dropdown({ anchorRef, open, children }) {
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    if (open && anchorRef.current) {
      const r = anchorRef.current.getBoundingClientRect();
      setPos({ top: r.bottom + 4, left: r.left, width: r.width });
    }
  }, [open, anchorRef]);

  if (!open) return null;

  return (
    <div
      className="fixed z-[9999] bg-card border border-border rounded-xl shadow-xl overflow-hidden"
      style={{ top: pos.top, left: pos.left, minWidth: pos.width }}
    >
      {children}
    </div>
  );
}

export default function FiscalCalendar() {
  const [viewYear,  setViewYear]  = useState(CURRENT_YEAR);
  const [viewMonth, setViewMonth] = useState(CURRENT_MONTH);
  const [picker, setPicker]       = useState(null);
  const [tooltip, setTooltip]     = useState(null);

  const monthBtnRef = useRef(null);
  const yearBtnRef  = useRef(null);

  const taxDays     = getTaxDays(viewYear, viewMonth);
  const firstDay    = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const isCurrentMonth = viewYear === CURRENT_YEAR && viewMonth === CURRENT_MONTH;

  const prev = () => {
    setPicker(null);
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
  };
  const next = () => {
    setPicker(null);
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
  };
  const goToday = () => { setViewYear(CURRENT_YEAR); setViewMonth(CURRENT_MONTH); setPicker(null); };

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);
  // Pad to 6 rows so height is stable
  while (days.length < 42) days.push(null);

  return (
    <>
      {/* Backdrop to close pickers */}
      {picker && (
        <div className="fixed inset-0 z-[9998]" onClick={() => setPicker(null)} />
      )}

      <div className="bg-card rounded-2xl border border-border p-6 relative select-none w-full h-full flex flex-col">

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <CalendarClock className="w-5 h-5 text-primary shrink-0" />
          Calendário Fiscal
        </h3>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prev}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-1">
            {/* Month button */}
            <button
              ref={monthBtnRef}
              onClick={() => setPicker(p => p === "month" ? null : "month")}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-muted transition-colors text-sm font-semibold text-foreground capitalize"
            >
              {MONTH_NAMES_FULL[viewMonth]}
              <ChevronDown size={13} className={`transition-transform ${picker === "month" ? "rotate-180" : ""}`} />
            </button>

            {/* Year button */}
            <button
              ref={yearBtnRef}
              onClick={() => setPicker(p => p === "year" ? null : "year")}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-muted transition-colors text-sm font-semibold text-foreground"
            >
              {viewYear}
              <ChevronDown size={13} className={`transition-transform ${picker === "year" ? "rotate-180" : ""}`} />
            </button>

            {/* Today badge */}
            {!isCurrentMonth && (
              <button
                onClick={goToday}
                className="ml-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Hoje
              </button>
            )}
          </div>

          <button
            onClick={next}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Month dropdown */}
        <Dropdown anchorRef={monthBtnRef} open={picker === "month"}>
          <div className="p-2 grid grid-cols-3 gap-1 w-48">
            {MONTH_NAMES_SHORT.map((m, i) => (
              <button
                key={m}
                onClick={() => { setViewMonth(i); setPicker(null); }}
                className={`px-2 py-2 rounded-lg text-xs font-medium transition-colors ${
                  i === viewMonth
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-foreground/80"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </Dropdown>

        {/* Year dropdown */}
        <Dropdown anchorRef={yearBtnRef} open={picker === "year"}>
          <div className="p-2 flex flex-col gap-0.5 w-24 max-h-56 overflow-y-auto">
            {YEARS.map((y) => (
              <button
                key={y}
                onClick={() => { setViewYear(y); setPicker(null); }}
                className={`px-2 py-2 rounded-lg text-xs font-medium transition-colors ${
                  y === viewYear
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-foreground/80"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </Dropdown>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted-foreground mb-1">
          {WEEK_DAYS.map((d) => <div key={d} className="py-1">{d}</div>)}
        </div>

        {/* Days grid — 6 fixed rows, grows to fill card height */}
        <div className="grid grid-cols-7 gap-1 text-center text-sm flex-1">
          {days.map((d, i) => {
            if (!d) return <div key={i} />;
            const isTax     = taxDays.has(d);
            const isToday   = isCurrentMonth && d === CURRENT_DAY;
            const label     = isTax ? getTaxLabel(d, viewMonth, viewYear) : null;
            const isHovered = tooltip?.day === d;

            return (
              <div
                key={i}
                className="relative flex items-center justify-center"
                onMouseEnter={() => isTax && label && setTooltip({ day: d, label })}
                onMouseLeave={() => setTooltip(null)}
              >
                <div className={`w-full h-full flex items-center justify-center rounded-lg transition-colors cursor-default text-sm ${
                  isToday
                    ? "bg-primary text-primary-foreground font-bold"
                    : isTax
                    ? "bg-accent/15 text-accent font-semibold hover:bg-accent/25"
                    : "text-foreground/70 hover:bg-muted"
                }`}>
                  {d}
                </div>

                {isTax && isHovered && (
                  <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] bg-foreground text-background text-xs rounded-lg px-2.5 py-1.5 shadow-lg pointer-events-none whitespace-pre-line text-left leading-relaxed">
                    {label}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent/30" /> Prazo fiscal
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" /> Hoje
          </span>
        </div>
      </div>
    </>
  );
}