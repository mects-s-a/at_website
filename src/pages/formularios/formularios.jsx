import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, FileText, Download, Search } from "lucide-react";
import sobreATStyles from "../institucional/atstyles";
import { formCategories } from "../../data/forms";

export default function Formularios() {
  const [activeTab, setActiveTab] = useState(formCategories[0].id);
  const [search, setSearch] = useState("");

  const activeCategory = formCategories.find((c) => c.id === activeTab);
  const filteredForms = activeCategory.forms.filter(
    (f) =>
      f.title.toLowerCase().includes(search.toLowerCase()) ||
      f.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="sobre-at-container">
      <style>{sobreATStyles}</style>
      <div className="shell">
        {/* Sidebar */}
        <aside className="w-72 shrink-0 select-none">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden sticky top-24">
            <div className="px-5 pt-4 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Categorias
            </div>
            {formCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveTab(cat.id); setSearch(""); }}
                className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-all duration-150 border-l-[3px] text-[14px] ${
                  activeTab === cat.id
                    ? "border-l-blue-600 bg-blue-50/50 text-blue-600 font-semibold"
                    : "border-l-transparent text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-medium"
                }`}
              >
                <span className="leading-snug">{cat.label}</span>
              </button>
            ))}
            <div className="px-5 py-4 mt-1 border-t border-slate-100 bg-slate-50/50">
              <p className="text-xs text-slate-500 leading-relaxed">
                Para consultas, ligue para{" "}
                <span className="font-bold text-blue-600">1266</span>{" "}
                (linha gratuita nacional).
              </p>
            </div>
          </div>
        </aside>

        <main className="main-content">
          {/* Breadcrumb */}
          <div className="custom-breadcrumb">
            <Link to="/" style={{ color: "inherit", textDecoration: "underline" }} className="hover:opacity-80 transition-opacity">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="current">Formulários</span>
          </div>

          {/* Hero */}
          <div className="page-hero">
            <div className="eyebrow">Autoridade Tributária de Moçambique</div>
            <h1>{activeCategory.label}</h1>
            <p>{activeCategory.desc} Seleccione a categoria pretendida na barra lateral para aceder aos modelos disponíveis.</p>
          </div>

          {/* Search */}
          <div className="filter-shell">
            <div className="search-input-wrap">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Pesquisar formulário..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Forms list */}
          <div className="download-list">
            {filteredForms.length > 0 ? (
              filteredForms.map((form, i) => (
                <div className="download-item" key={i}>
                  <div className="download-icon">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="download-info">
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <strong>{form.title}</strong>
                      <span
                        style={{
                          fontSize: "10px",
                          background: "var(--sat-muted-bg)",
                          color: "var(--sat-gold)",
                          border: "1px solid var(--sat-border)",
                          padding: "2px 6px",
                          borderRadius: "4px",
                          fontWeight: "bold",
                        }}
                      >
                        {form.category}
                      </span>
                    </div>
                    <p>{form.desc}</p>
                    <span>{form.size}</span>
                  </div>
                  {form.url ? (
                    <a href={form.url} target="_blank" rel="noopener noreferrer" className="download-btn">
                      <Download className="w-4 h-4" /> Descarregar
                    </a>
                  ) : (
                    <button className="download-btn">
                      <Download className="w-4 h-4" /> Descarregar
                    </button>
                  )}
                </div>
              ))
            ) : (
              <div className="card text-center py-8">
                <p style={{ color: "var(--sat-muted-fg)", fontSize: "14px" }}>
                  Nenhum formulário corresponde à pesquisa.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}