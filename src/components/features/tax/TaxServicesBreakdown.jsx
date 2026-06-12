import { useState, useCallback } from "react";
import { ThumbsUp, ThumbsDown, Lightbulb } from "lucide-react";

const STYLES = `
  @keyframes floatUp {
    0%   { opacity: 1; transform: translateY(0) scale(1); }
    100% { opacity: 0; transform: translateY(-70px) scale(1.5); }
  }
  @keyframes floatDown {
    0%   { opacity: 1; transform: translateY(0) scale(1); }
    100% { opacity: 0; transform: translateY(70px) scale(1.5); }
  }
  @keyframes swayUp {
    0%   { transform: rotate(0deg) translateY(0); }
    20%  { transform: rotate(-18deg) translateY(-8px); }
    45%  { transform: rotate(10deg) translateY(-4px); }
    70%  { transform: rotate(-6deg) translateY(-2px); }
    100% { transform: rotate(0deg) translateY(0); }
  }
  @keyframes shake {
    0%   { transform: translateX(0) rotate(0deg); }
    15%  { transform: translateX(-7px) rotate(-14deg); }
    30%  { transform: translateX(7px) rotate(14deg); }
    45%  { transform: translateX(-6px) rotate(-10deg); }
    60%  { transform: translateX(6px) rotate(10deg); }
    75%  { transform: translateX(-3px) rotate(-5deg); }
    90%  { transform: translateX(3px) rotate(5deg); }
    100% { transform: translateX(0) rotate(0deg); }
  }
  @keyframes bulbPop {
    0%   { transform: scale(1); filter: brightness(1); }
    30%  { transform: scale(1.35); filter: brightness(1.6); }
    55%  { transform: scale(1.2); filter: brightness(1.3); }
    100% { transform: scale(1); filter: brightness(1); }
  }
  @keyframes ripple {
    0%   { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(2.6); opacity: 0; }
  }
  @keyframes fadeSlideUp {
    0%   { opacity: 0; transform: translateY(6px); }
    20%  { opacity: 1; transform: translateY(0); }
    75%  { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-6px); }
  }
  .anim-sway   { animation: swayUp 0.65s cubic-bezier(.36,.07,.19,.97) both; }
  .anim-shake  { animation: shake 0.65s cubic-bezier(.36,.07,.19,.97) both; }
  .anim-bulb   { animation: bulbPop 0.65s cubic-bezier(.36,.07,.19,.97) both; }
  .anim-ripple { animation: ripple 0.6s ease-out forwards; }
  .idea-toast  { animation: fadeSlideUp 1.4s ease-out forwards; }
`;

const IDEA_MSGS = ["Anotado!", "Obrigado!"];

function Particle({ value, x, y }) {
  return (
    <span
      className="pointer-events-none fixed z-50 font-black select-none"
      style={{
        left: x, top: y,
        fontSize: "1.6rem",
        color: value > 0 ? "#4ade80" : "#f87171",
        animation: value > 0
          ? "floatUp 1.1s ease-out forwards"
          : "floatDown 1.1s ease-out forwards",
      }}
    >
      {value > 0 ? "+1" : "-1"}
    </span>
  );
}

const CARDS = [
  {
    type: "up",
    label: "Elogie",
    sub: "Partilhe uma experiência positiva",
    iconColor: "#4ade80",
    bgFrom: "rgba(74,222,128,0.18)",
    bgTo: "rgba(74,222,128,0.08)",
    ring: "rgba(74,222,128,0.25)",
    rippleColor: "rgba(74,222,128,0.3)",
    Icon: ThumbsUp,
    animClass: "anim-sway",
  },
  {
    type: "idea",
    label: "Sugira",
    sub: "Envie uma sugestão de melhoria",
    iconColor: "#fbbf24",
    bgFrom: "rgba(251,191,36,0.18)",
    bgTo: "rgba(251,191,36,0.08)",
    ring: "rgba(251,191,36,0.25)",
    rippleColor: "rgba(251,191,36,0.3)",
    Icon: Lightbulb,
    animClass: "anim-bulb",
  },
  {
    type: "down",
    label: "Reclame",
    sub: "Reporte um problema ou insatisfação",
    iconColor: "#f87171",
    bgFrom: "rgba(248,113,113,0.18)",
    bgTo: "rgba(248,113,113,0.08)",
    ring: "rgba(248,113,113,0.25)",
    rippleColor: "rgba(248,113,113,0.3)",
    Icon: ThumbsDown,
    animClass: "anim-shake",
  },
];

export default function CanalDoOuvinte() {
  const [particles, setParticles]   = useState([]);
  const [animating, setAnimating]   = useState({});
  const [rippling, setRippling]     = useState({});
  const [toast, setToast]           = useState(null);
  const [ideaIdx, setIdeaIdx]       = useState(0);

  const fire = useCallback((type, event) => {
    if (animating[type]) return;

    setAnimating((a) => ({ ...a, [type]: true }));
    setRippling((r) => ({ ...r, [type]: true }));
    setTimeout(() => setAnimating((a) => ({ ...a, [type]: false })), 700);
    setTimeout(() => setRippling((r) => ({ ...r, [type]: false })), 650);

    const rect = event.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2 - 16;

    if (type === "up") {
      const id = Date.now();
      setParticles((p) => [...p, { id, value: 1, x: cx, y: rect.top + 10 }]);
      setTimeout(() => setParticles((p) => p.filter((pt) => pt.id !== id)), 1200);
    } else if (type === "down") {
      const id = Date.now();
      setParticles((p) => [...p, { id, value: -1, x: cx, y: rect.bottom - 30 }]);
      setTimeout(() => setParticles((p) => p.filter((pt) => pt.id !== id)), 1200);
    } else {
      const next = (ideaIdx + 1) % IDEA_MSGS.length;
      setIdeaIdx(next);
      const id = Date.now();
      setToast({ id, msg: IDEA_MSGS[next] });
      setTimeout(() => setToast((t) => t?.id === id ? null : t), 1500);
    }
  }, [animating, ideaIdx]);

  return (
    <>
      <style>{STYLES}</style>
      {particles.map((p) => <Particle key={p.id} {...p} />)}

      {/* REDUZIDO: de py-12 sm:py-16 para py-10 sm:py-14 */}
      <section className="py-10 sm:py-14 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* REDUZIDO: mb-10 para mb-6 */}
          <div className="text-center mb-6">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
              A Sua Voz Importa
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
              Canal do Ouvinte
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm">
              Partilhe a sua experiência, envie sugestões ou reporte problemas. A sua opinião ajuda-nos a melhorar.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 max-w-2xl mx-auto">
            {CARDS.map((card) => (
              <button
                key={card.type}
                onClick={(e) => fire(card.type, e)}
                className="group relative overflow-hidden border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer select-none"
                style={{ padding: "2rem 1rem 1.75rem" }}
              >
                {/* Ripple */}
                {rippling[card.type] && (
                  <span
                    className="anim-ripple pointer-events-none absolute rounded-full"
                    style={{
                      width: 80, height: 80,
                      top: "50%", left: "50%",
                      marginTop: -40, marginLeft: -40,
                      background: card.rippleColor,
                    }}
                  />
                )}

                {/* Icon container */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105"
                  style={{
                    background: `radial-gradient(circle at 40% 35%, ${card.bgFrom}, ${card.bgTo})`,
                    boxShadow: `0 0 0 2px ${card.ring}`,
                  }}
                >
                  <card.Icon
                    className={animating[card.type] ? card.animClass : ""}
                    style={{
                      width: 38, height: 38,
                      color: card.iconColor,
                      strokeWidth: 1.75,
                      display: "block",
                    }}
                  />
                </div>

                <h3 className="font-bold text-sm mb-1">{card.label}</h3>
                <p className="text-white/50 text-xs leading-relaxed hidden sm:block">
                  {card.sub}
                </p>

                {/* Idea toast — absolute so it never shifts layout */}
                {card.type === "idea" && toast && (
                  <span
                    key={toast.id}
                    className="idea-toast absolute bottom-3 left-0 right-0 text-center text-xs font-semibold pointer-events-none"
                    style={{ color: card.iconColor }}
                  >
                    {toast.msg}
                  </span>
                )}
              </button>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}