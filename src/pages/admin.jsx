import { useState } from "react";
import { Upload, CheckCircle2, AlertCircle, Lock } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const CATEGORIES = ["Institucional", "Eventos", "Fiscal", "Aduaneiro", "Comunicado"];

export default function Admin() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [docxFile, setDocxFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleUnlock = (e) => {
    e.preventDefault();
    if (password.trim()) setUnlocked(true);
  };

  const resetForm = () => {
    setTitle("");
    setSummary("");
    setCategory(CATEGORIES[0]);
    setDate(new Date().toISOString().slice(0, 10));
    setDocxFile(null);
    setImageFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!docxFile) {
      setStatus("error");
      setErrorMsg("Por favor seleccione um ficheiro .docx");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData();
    formData.append("password", password);
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("category", category);
    formData.append("date", date);
    formData.append("docx", docxFile);
    if (imageFile) formData.append("image", imageFile);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Erro ao enviar");
      }
      setStatus("success");
      resetForm();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
      if (err.message.includes("Senha")) setUnlocked(false);
    }
  };

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-white font-inter">
        <Navbar />
        <div className="max-w-sm mx-auto px-4 py-24">
          <div className="text-center mb-6">
            <Lock className="w-8 h-8 text-at-mid mx-auto mb-3" />
            <h1 className="font-display text-xl font-bold text-at-ink">Área Reservada</h1>
            <p className="text-at-muted text-sm mt-1">Comunicação Social — AT</p>
          </div>
          <form onSubmit={handleUnlock} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Palavra-passe"
              className="w-full px-4 py-2.5 rounded-xl border border-at-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-at-mid/20 focus:border-at-mid"
              autoFocus
            />
            <button
              type="submit"
              className="w-full bg-at-deep text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-at-mid transition"
            >
              Entrar
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <div className="section-eyebrow">Comunicação Social</div>
          <h1 className="section-title">Publicar Notícia</h1>
          <p className="section-desc">
            Carregue um documento Word (.docx) com o conteúdo da notícia. O sistema converte
            automaticamente o texto para o formato do site.
          </p>
        </div>

        {status === "success" && (
          <div className="mb-6 flex items-center gap-2.5 bg-at-teal-pale border border-at-teal-light/30 text-at-teal rounded-xl px-4 py-3 text-sm font-medium">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            Notícia publicada com sucesso! Já está visível no site.
          </div>
        )}
        {status === "error" && (
          <div className="mb-6 flex items-center gap-2.5 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium">
            <AlertCircle className="w-5 h-5 shrink-0" />
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-at-border rounded-2xl p-6 shadow-at-sm">
          <div>
            <label className="block text-[13px] font-semibold text-at-ink mb-1.5">Título</label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título da notícia"
              className="w-full px-4 py-2.5 rounded-xl border border-at-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-at-mid/20 focus:border-at-mid"
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-at-ink mb-1.5">Resumo</label>
            <textarea
              required
              rows={3}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Breve resumo da notícia (1-2 frases)"
              className="w-full px-4 py-2.5 rounded-xl border border-at-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-at-mid/20 focus:border-at-mid resize-none"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-semibold text-at-ink mb-1.5">Categoria</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-at-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-at-mid/20 focus:border-at-mid"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-at-ink mb-1.5">Data</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-at-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-at-mid/20 focus:border-at-mid"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-at-ink mb-1.5">
              Documento Word (.docx) <span className="text-at-mid">*</span>
            </label>
            <input
              required
              type="file"
              accept=".docx"
              onChange={(e) => setDocxFile(e.target.files[0])}
              className="w-full text-sm text-at-muted file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-at-pale file:text-at-mid hover:file:bg-at-mid hover:file:text-white file:transition"
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-at-ink mb-1.5">
              Imagem de Capa (opcional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="w-full text-sm text-at-muted file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-at-pale file:text-at-mid hover:file:bg-at-mid hover:file:text-white file:transition"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 bg-at-deep text-white py-3 rounded-xl font-semibold text-sm hover:bg-at-mid transition disabled:opacity-60"
          >
            {status === "loading" ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Upload className="w-4 h-4" />
            )}
            {status === "loading" ? "A publicar..." : "Publicar Notícia"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}