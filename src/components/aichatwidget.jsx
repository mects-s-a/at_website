import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { base44 } from "@/api/base44Client";

const INITIAL_MESSAGE = {
  role: "assistant",
  text: "Olá! Sou o assistente virtual da AT Moçambique. Como posso ajudá-lo hoje? Posso esclarecer dúvidas sobre impostos, serviços aduaneiros, declarações e mais.",
};

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setLoading(true);
    const history = messages
      .map((m) => `${m.role === "user" ? "Utilizador" : "Assistente"}: ${m.text}`)
      .join("\n");
    const response = await base44.integrations.Core.InvokeLLM({
      prompt: `Você é o assistente virtual da Autoridade Tributária de Moçambique (AT). Responda em Português europeu/moçambicano, de forma clara e profissional. Limite a resposta a 3 parágrafos.\n\nHistórico:\n${history}\n\nUtilizador: ${text}`,
    });
    setMessages((m) => [...m, { role: "assistant", text: response }]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-at-mid text-white shadow-at-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 ${open ? "hidden" : ""}`}
        aria-label="Abrir assistente virtual"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white border border-at-border rounded-2xl shadow-at-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-at-deep text-white px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <Bot className="w-5 h-5 text-at-gold" />
              <div>
                <p className="text-sm font-semibold">Assistente AT</p>
                <p className="text-[11px] text-white/50">Powered by IA</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-at-cream/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-at-mid text-white rounded-br-sm"
                      : "bg-white text-at-ink rounded-bl-sm border border-at-border"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-at-border rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-at-muted">
                  <span className="animate-pulse">A escrever…</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-at-border flex gap-2 shrink-0 bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Escreva a sua pergunta…"
              className="flex-1 text-sm bg-at-smoke rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-at-mid/20 border border-transparent focus:border-at-mid transition-all"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-xl bg-at-mid text-white flex items-center justify-center disabled:opacity-40 hover:bg-at-deep transition shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}