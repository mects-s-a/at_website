import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.integrations.Core.SendEmail({
      to: "linhadocontribuinte@at.gov.mz",
      subject: `[Contacto AT] ${form.subject}`,
      body: `Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`,
    });
    setLoading(false);
    setSent(true);
  };

  const inputCls = "w-full px-4 py-2.5 rounded-xl border border-at-border bg-white text-sm text-at-ink focus:outline-none focus:ring-2 focus:ring-at-mid/20 focus:border-at-mid transition-all";

  return (
    <section id="contacto" className="grid lg:grid-cols-2 gap-10 items-start">
      {/* Info */}
      <div>
        <div className="section-eyebrow">Comunicações</div>
        <h2 className="section-title">Envie-nos uma Mensagem</h2>
        <p className="section-desc">
          A nossa equipa está disponível para ajudar. Preencha o formulário e entraremos em contacto em breve.
        </p>

        <div className="space-y-4 text-sm text-at-muted mt-6">
          <p className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-at-smoke flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-at-mid" />
            </span>
            Call Center: <span className="text-at-ink font-semibold">1266</span>
          </p>
          <p className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-at-smoke flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-at-mid" />
            </span>
            <span className="text-at-ink font-semibold">linhadocontribuinte@at.gov.mz</span>
          </p>
          <p className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-at-smoke flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-at-mid" />
            </span>
            Av. 25 de Setembro, Nº 1235, Maputo
          </p>
          <p className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-at-smoke flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-at-mid" />
            </span>
            Segunda a Sexta, 07:30 – 15:30
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white border border-at-border rounded-2xl p-7 shadow-at-sm">
        {sent ? (
          <div className="text-center py-10">
            <CheckCircle2 className="w-14 h-14 text-at-mid mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-at-ink mb-2">Mensagem Enviada!</h3>
            <p className="text-at-muted text-sm">Obrigado pelo seu contacto. Responderemos em breve.</p>
            <button
              onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
              className="mt-6 text-sm text-at-mid hover:underline font-semibold"
            >
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-at-ink mb-1.5">Nome Completo</label>
                <input required name="name" value={form.name} onChange={handleChange} placeholder="João Silva" className={inputCls} />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-at-ink mb-1.5">Email</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="joao@email.com" className={inputCls} />
              </div>
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-at-ink mb-1.5">Assunto</label>
              <input required name="subject" value={form.subject} onChange={handleChange} placeholder="Qual é o assunto?" className={inputCls} />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-at-ink mb-1.5">Mensagem</label>
              <textarea required name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Escreva a sua mensagem aqui..." className={inputCls + " resize-none"} />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-at-deep text-white py-3 rounded-xl font-semibold text-sm hover:bg-at-mid transition disabled:opacity-60"
            >
              {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
              {loading ? "A enviar..." : "Enviar Mensagem"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}