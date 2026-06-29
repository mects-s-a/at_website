import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, FileText, Download, Search, Calendar } from "lucide-react";
import sobreATStyles from "../institucional/atstyles";
import { infoSections } from "../../data/info";

export default function InfoPage() {
  const { slug } = useParams();
  const [search, setSearch] = useState("");

  const section = infoSections[slug];

  if (!section) {
    return (
      <div className="sobre-at-container">
        <style>{sobreATStyles}</style>
        <div className="shell" style={{ maxWidth: "900px" }}>
          <main className="main-content">
            <div className="custom-breadcrumb">
              <Link to="/" style={{ color: "inherit", textDecoration: "underline" }}>Início</Link>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              <span className="current">Informações</span>
            </div>
            <div className="card text-center py-16">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "var(--sat-fg)" }}>Secção não encontrada</h3>
              <p style={{ fontSize: "14px", color: "var(--sat-muted-fg)", marginTop: "8px" }}>A página solicitada não existe.</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const isConcursos = section.type === "concursos";
  const filteredDocs = section.documents
    ? section.documents.filter(
        (d) =>
          d.title.toLowerCase().includes(search.toLowerCase()) ||
          (d.desc && d.desc.toLowerCase().includes(search.toLowerCase()))
      )
    : [];

  const filteredConcursos = section.concursos
    ? section.concursos.filter(
        (c) =>
          c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.numero.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="sobre-at-container">
      <style>{sobreATStyles}</style>
      <div className="shell" style={{ maxWidth: "900px" }}>
        <main className="main-content">
          {/* Breadcrumb */}
          <div className="custom-breadcrumb">
            <Link to="/" style={{ color: "inherit", textDecoration: "underline" }} className="hover:opacity-80 transition-opacity">Início</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span style={{ color: "var(--sat-muted-fg)" }}>Informações</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="current">{section.shortTitle}</span>
          </div>

          {/* Hero */}
          <div className="page-hero">
            <div className="eyebrow">Informações</div>
            <h1>{section.title}</h1>
            <p>{section.subtitle}</p>
          </div>

          {/* Search */}
          <div className="filter-shell">
            <div className="search-input-wrap">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" style={{ color: "var(--sat-muted-fg)" }} />
              <input
                type="text"
                placeholder={isConcursos ? "Pesquisar concurso..." : "Pesquisar documento..."}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Content */}
          {isConcursos ? (
            <div className="download-list">
              {filteredConcursos.length > 0 ? (
                filteredConcursos.map((c, i) => (
                  <div className="concurso-card" key={i}>
                    <div className="concurso-header">
                      <h4 style={{ fontSize: "15px", fontWeight: 600, color: "var(--sat-fg)", lineHeight: 1.4 }}>{c.title}</h4>
                      <span className="info-badge primary" style={{ whiteSpace: "nowrap" }}>{c.status}</span>
                    </div>
                    <div className="concurso-body">
                      <div className="concurso-row">
                        <span className="concurso-label">Nº do Concurso</span>
                        <span className="concurso-value">{c.numero}</span>
                      </div>
                      <div className="concurso-row">
                        <span className="concurso-label">UGEA / Órgão</span>
                        <span className="concurso-value">{c.ugea}</span>
                      </div>
                      <div className="concurso-row">
                        <span className="concurso-label">Data de Publicação</span>
                        <span className="concurso-value">{c.dataPublicacao}</span>
                      </div>
                      <div className="concurso-row">
                        <span className="concurso-label">Prazo Limite</span>
                        <span className="concurso-value" style={{ fontWeight: 600, color: "var(--sat-primary)" }}>{c.prazoLimite}</span>
                      </div>
                      <div className="concurso-row">
                        <span className="concurso-label">Abertura de Propostas</span>
                        <span className="concurso-value">{c.aberturaPropostas}</span>
                      </div>
                      <div className="concurso-row">
                        <span className="concurso-label">Valor Estimado</span>
                        <span className="concurso-value">{c.valorEstimado}</span>
                      </div>
                      <div className="concurso-row">
                        <span className="concurso-label">Garantia Provisória</span>
                        <span className="concurso-value">{c.garantiaProvisoria}</span>
                      </div>
                      <div className="concurso-row">
                        <span className="concurso-label">Critério</span>
                        <span className="concurso-value">{c.criterio}</span>
                      </div>
                      <div className="concurso-row">
                        <span className="concurso-label">Regime</span>
                        <span className="concurso-value">{c.regime}</span>
                      </div>
                      <div className="concurso-row">
                        <span className="concurso-label">Lote</span>
                        <span className="concurso-value">{c.lote}</span>
                      </div>
                      <div className="concurso-row">
                        <span className="concurso-label">Local de Entrega</span>
                        <span className="concurso-value">{c.localEntrega}</span>
                      </div>
                      <p style={{ fontSize: "12.5px", color: "var(--sat-muted-fg)", lineHeight: 1.6, marginTop: "12px" }}>{c.descricao}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="card text-center py-8">
                  <p style={{ color: "var(--sat-muted-fg)", fontSize: "14px" }}>Nenhum concurso corresponde à pesquisa.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="download-grid">
              {filteredDocs.length > 0 ? (
                filteredDocs.map((doc, i) => (
                  <div className="info-card" key={i}>
                    <div className="info-card-icon">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="info-card-body">
                      <h4>{doc.title}</h4>
                      {doc.desc && <p>{doc.desc}</p>}
                      <div className="info-card-meta">
                        {doc.date && (
                          <span className="info-badge" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <Calendar className="w-3 h-3" /> {doc.date}
                          </span>
                        )}
                        {doc.size && <span className="info-badge">{doc.size}</span>}
                        {doc.badge && <span className="info-badge gold">{doc.badge}</span>}
                      </div>
                    </div>
                    {doc.url ? (
                      <a href={doc.url} target="_blank" rel="noopener noreferrer" className="download-btn" style={{ alignSelf: "center" }}>
                        <Download className="w-4 h-4" /> Descarregar
                      </a>
                    ) : (
                      <button className="download-btn" style={{ alignSelf: "center" }}>
                        <Download className="w-4 h-4" /> Descarregar
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <div className="card text-center py-8" style={{ gridColumn: "1 / -1" }}>
                  <p style={{ color: "var(--sat-muted-fg)", fontSize: "14px" }}>Nenhum documento corresponde à pesquisa.</p>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}