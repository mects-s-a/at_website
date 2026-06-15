import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Opens the user's email client pre-filled — no backend required
    const mailtoBody = `Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`;
    const mailtoLink = `mailto:linhadocontribuinte@at.gov.mz?subject=${encodeURIComponent(
      `[Contacto AT] ${form.subject}`
    )}&body=${encodeURIComponent(mailtoBody)}`;

    window.location.href = mailtoLink;

    // Brief pause so the user sees the loading state before success screen
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: info panel */}
          <div>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
              Fale Connosco
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-5">
              Envie-nos uma Mensagem
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A nossa equipa está disponível para ajudar. Preencha o formulário e entraremos em
              contacto em breve.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> Call Center:{" "}
                <span className="text-foreground font-semibold">1266</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-foreground font-semibold">
                  linhadocontribuinte@at.gov.mz
                </span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Av. 25 de Setembro, Nº 1235, Maputo
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> Segunda a Sexta, 07:30 – 15:30
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-card rounded-2xl border border-border p-7 shadow-sm">
            {sent ? (
              <div className="text-center py-10">
                <CheckCircle className="w-14 h-14 text-accent mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Mensagem Preparada!
                </h3>
                <p className="text-muted-foreground text-sm">
                  O seu cliente de email foi aberto com a mensagem pré-preenchida. Envie-a
                  directamente a partir daí.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 text-sm text-accent hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Nome Completo
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="João Silva"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="joao@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Assunto
                  </label>
                  <input
                    required
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Qual é o assunto?"
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Escreva a sua mensagem aqui..."
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold text-sm hover:brightness-110 transition disabled:opacity-60"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {loading ? "A preparar..." : "Enviar Mensagem"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}