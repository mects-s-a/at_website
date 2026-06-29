export default function PageHero({ eyebrow, title, description, icon: Icon }) {
  return (
    <div
      className="rounded-2xl p-8 sm:p-12 mb-8 relative overflow-hidden shadow-at-lg"
      style={{ background: "linear-gradient(135deg, #0B2D6E 0%, #1A4FAF 60%, #2E72D4 100%)" }}
    >
      <div className="absolute inset-0 page-hero-pattern pointer-events-none" />
      <div className="relative">
        {eyebrow && (
          <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-at-light mb-3">
            {eyebrow}
          </div>
        )}
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="hidden sm:flex w-12 h-12 rounded-xl bg-white/10 border border-white/15 items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-at-light" />
            </div>
          )}
          <h1 className="font-display text-2xl sm:text-3xl lg:text-[40px] font-bold text-white leading-tight">
            {title}
          </h1>
        </div>
        {description && (
          <p className="text-white/70 text-[15px] max-w-2xl leading-relaxed mt-3">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}