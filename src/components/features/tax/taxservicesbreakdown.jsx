import { useState, useCallback, useRef } from "react";
import { ThumbsUp, ThumbsDown, Lightbulb, X, Paperclip } from "lucide-react";
import { sendEmail } from "../contact/sendemail";

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
  @keyframes modalIn {
    0%   { opacity: 0; transform: translateY(16px) scale(0.97); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  .anim-sway   { animation: swayUp 0.65s cubic-bezier(.36,.07,.19,.97) both; }
  .anim-shake  { animation: shake 0.65s cubic-bezier(.36,.07,.19,.97) both; }
  .anim-bulb   { animation: bulbPop 0.65s cubic-bezier(.36,.07,.19,.97) both; }
  .anim-ripple { animation: ripple 0.6s ease-out forwards; }
  .modal-in    { animation: modalIn 0.25s ease-out both; }
`;

const CARDS = [
  {
    type: "up",
    label: "Elogie",
    sub: "Partilhe uma experiência positiva",
    modalTitle: "Enviar Elogio",
    subject: "Elogio - Canal do Ouvinte",
    iconColor: "#4ade80",
    bgFrom: "rgba(74,222,128,0.18)",
    bgTo: "rgba(74,222,128,0.08)",
    ring: "rgba(74,222,128,0.25)",
    rippleColor: "rgba(74,222,128,0.3)",
    btnBg: "#16a34a",
    Icon: ThumbsUp,
    animClass: "anim-sway",
  },
  {
    type: "idea",
    label: "Sugira",
    sub: "Envie uma sugestão de melhoria",
    modalTitle: "Enviar Sugestão",
    subject: "Sugestão - Canal do Ouvinte",
    iconColor: "#fbbf24",
    bgFrom: "rgba(251,191,36,0.18)",
    bgTo: "rgba(251,191,36,0.08)",
    ring: "rgba(251,191,36,0.25)",
    rippleColor: "rgba(251,191,36,0.3)",
    btnBg: "#d97706",
    Icon: Lightbulb,
    animClass: "anim-bulb",
  },
  {
    type: "down",
    label: "Reclame",
    sub: "Reporte um problema ou insatisfação",
    modalTitle: "Registrar Reclamação",
    subject: "Reclamação - Canal do Ouvinte",
    iconColor: "#f87171",
    bgFrom: "rgba(248,113,113,0.18)",
    bgTo: "rgba(248,113,113,0.08)",
    ring: "rgba(248,113,113,0.25)",
    rippleColor: "rgba(248,113,113,0.3)",
    btnBg: "#dc2626",
    Icon: ThumbsDown,
    animClass: "anim-shake",
  },
];

function Particle({ value, x, y }) {
  return (
    <span
      className="pointer-events-none fixed z-[9999] font-black select-none"
      style={{
        left: x, top: y, fontSize: "1.6rem",
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

function Modal({ card, onClose, onSuccess }) {
  const [form, setForm]       = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [file, setFile]       = useState(null);
  const [sending, setSending] = useState(false);
  const [error, setError]     = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async () => {
    if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
      setError("Por favor preencha todos os campos obrigatórios.");
      return;
    }
    setSending(true);
    setError(null);

    const body = [
      `Tipo: ${card.modalTitle}`,
      `Nome: ${form.nome}`,
      `Email: ${form.email}`,
      `Telefone: ${form.telefone || "-"}`,
      ``,
      `Mensagem:`,
      form.mensagem,
      ``,
      `Anexo: ${file ? file.name : "Nenhum"}`,
    ].join("\n");

    try {
      const result = await sendEmail({
        to: "ouvinte@at.gov.mz",
        subject: card.subject,
        body,
      });
      if (result?.ok) {
        onSuccess();
      } else {
        throw new Error();
      }
    } catch {
      setError("Erro ao enviar. Tente novamente.");
      setSending(false);
    }
  };

  const inputCls = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all text-gray-800";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-in bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <card.Icon size={20} style={{ color: card.iconColor }} strokeWidth={2} />
            <h2 className="font-bold text-gray-800 text-lg">{card.modalTitle}</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Fields */}
        <div className="px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto">
          {[
            { key: "nome",     label: "Nome Completo",        type: "text",  required: true },
            { key: "email",    label: "Email",                type: "email", required: true },
            { key: "telefone", label: "Telefone / Telemóvel", type: "tel",   required: false },
          ].map(({ key, label, type, required }) => (
            <div key={key}>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                {label} {required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={type}
                className={inputCls}
                value={form[key]}
                onChange={set(key)}
                autoFocus={key === "nome"}
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Mensagem <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              className={inputCls + " resize-none"}
              placeholder="Escreva aqui a sua mensagem..."
              value={form.mensagem}
              onChange={set("mensagem")}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Anexo (opcional)
            </label>
            <label className="flex items-center gap-2.5 cursor-pointer">
              <span
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity whitespace-nowrap select-none"
                style={{ background: card.btnBg }}
              >
                <Paperclip size={14} />
                Escolher arquivo
              </span>
              <span className="text-xs text-gray-400 truncate max-w-[160px]">
                {file ? file.name : "Nenhum arquivo selecionado"}
              </span>
              <input type="file" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            </label>
          </div>

          {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
        </div>

        {/* Submit */}
        <div className="px-6 pb-6 pt-2 border-t border-gray-50">
          <button
            onClick={submit}
            disabled={sending}
            className="w-full py-3 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
            style={{ background: card.btnBg }}
          >
            {sending ? "A enviar..." : "Enviar Mensagem"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default function CanalDoOuvinte() {
  const [particles, setParticles] = useState([]);
  const [animating, setAnimating] = useState({});
  const [rippling, setRippling]   = useState({});
  const [modal, setModal]         = useState(null);
  const cardRefs                  = useRef({});

  const activeCard = CARDS.find((c) => c.type === modal);

  const fireSuccess = useCallback((type) => {
    setAnimating((a) => ({ ...a, [type]: true }));
    setRippling((r)  => ({ ...r,  [type]: true }));
    setTimeout(() => setAnimating((a) => ({ ...a, [type]: false })), 700);
    setTimeout(() => setRippling((r)  => ({ ...r,  [type]: false })), 650);

    const el = cardRefs.current[type];
    if (el) {
      const rect  = el.getBoundingClientRect();
      const cx    = rect.left + rect.width / 2 - 16;
      const value = type === "down" ? -1 : 1;
      const y     = type === "down" ? rect.bottom - 30 : rect.top + 10;
      const id    = Date.now();
      setParticles((p) => [...p, { id, value, x: cx, y }]);
      setTimeout(() => setParticles((p) => p.filter((pt) => pt.id !== id)), 1200);
    }

    setModal(null);
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      {particles.map((p) => <Particle key={p.id} {...p} />)}

      {modal && activeCard && (
        <Modal
          card={activeCard}
          onClose={() => setModal(null)}
          onSuccess={() => fireSuccess(modal)}
        />
      )}

      <section className="py-10 sm:py-14 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Top Header */}
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
              Canal do Ouvinte
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm">
              Partilhe a sua experiência, envie sugestões ou reporte problemas. A sua opinião ajuda-nos a melhorar.
            </p>
          </div>

          {/* Cards Grid - Updated to responsive grid columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-2xl mx-auto">
            {CARDS.map((card) => (
              <button
                key={card.type}
                ref={(el) => { cardRefs.current[card.type] = el; }}
                onClick={() => setModal(card.type)}
                className="group relative overflow-hidden border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer select-none"
                style={{ padding: "2rem 1rem 1.75rem" }}
              >
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

                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105"
                  style={{
                    background: `radial-gradient(circle at 40% 35%, ${card.bgFrom}, ${card.bgTo})`,
                    boxShadow: `0 0 0 2px ${card.ring}`,
                  }}
                >
                  <card.Icon
                    className={animating[card.type] ? card.animClass : ""}
                    style={{ width: 38, height: 38, color: card.iconColor, strokeWidth: 1.75, display: "block" }}
                  />
                </div>

                <h3 className="font-bold text-sm mb-1">{card.label}</h3>
                <p className="text-white/50 text-xs leading-relaxed hidden sm:block">{card.sub}</p>
              </button>
            ))}
          </div>

          {/* Subtitle / Notice Section */}
          <div className="text-center mt-8">
            <p className="text-accent font-semibold text-xs tracking-widest uppercase">
              A Sua Voz Importa
            </p>
          </div>

        </div>
      </section>
    </>
  );
}