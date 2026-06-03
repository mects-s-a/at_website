import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

const INITIAL_MESSAGE = {
  role: "assistant",
  content:
    "Olá! Sou o assistente virtual da AT Moçambique. Como posso ajudá-lo hoje? " +
    "Posso esclarecer dúvidas sobre impostos, serviços aduaneiros, declarações e muito mais.",
};

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Smooth scroll to layout bottom when new messages stream in
  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  // Accessibility/UX: Auto-focus the input box when chat opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMessage = { role: "user", content: text };
    setInput("");
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      // Safely strip the static initial welcome message out of the API array payload 
      // to perfectly respect the strict alternating User/Assistant structure required by LLMs
      const chatHistory = messages
        .filter((_, idx) => idx !== 0) 
        .concat(userMessage);

      // Hit our own internal proxy endpoint safely
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history: chatHistory }),
      });

      if (!response.ok) throw new Error("Server error");

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev, 
        { role: "assistant", content: data.reply }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Ocorreu um erro de ligação. Por favor verifique a sua ligação à internet e tente novamente.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Widget Toggle Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-200 ${
          open ? "hidden" : ""
        }`}
        aria-label="Abrir assistente virtual"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Main Drawer Interface */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm font-semibold">Assistente AT</p>
                <p className="text-xs text-white/60">Powered by IA</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Fechar assistente"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Transcript Area */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-muted-foreground">
                  <span className="animate-pulse">A escrever…</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Message Form Inputs */}
          <div className="px-3 py-3 border-t border-border flex gap-2 shrink-0">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
              placeholder="Escreva a sua pergunta…"
              className="flex-1 text-sm bg-muted rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition-opacity shrink-0"
              aria-label="Enviar mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}