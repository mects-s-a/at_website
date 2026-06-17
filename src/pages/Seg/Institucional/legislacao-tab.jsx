import { FileText, Download } from "lucide-react";

const documents = [
  {
    title: "Decreto nº 7/2006 de 16 de Maio",
    desc: "Decreto de criação oficial e aprovação do estatuto orgânico estrutural da Autoridade Tributária de Moçambique.",
    size: "PDF (2.4 MB)",
    category: "Estatuto",
  },
  {
    title: "Plano Estratégico da AT (2022–2026)",
    desc: "Metas plurianuais de arrecadação, diretrizes de governação digital e eixos estratégicos de modernização aduaneira.",
    size: "PDF (4.1 MB)",
    category: "Estratégia",
  },
  {
    title: "Relatório de Actividades e Contas Anual",
    desc: "Balanço institucional consolidado da arrecadação interna de receitas estatais e execução orçamental.",
    size: "PDF (3.8 MB)",
    category: "Relatório",
  },
  {
    title: "Código de Conduta dos Funcionários da AT",
    desc: "Normas de ética, transparência, integridade profissional e deveres exigidos no exercício de funções públicas.",
    size: "PDF (1.2 MB)",
    category: "Ética",
  },
];

export default function LegislacaoTab() {
  return (
    <div className="space-y-6">
      <div className="section-label">Biblioteca Digital</div>
      <h2 className="section-title">Documentos Normativos & Estatutos</h2>
      <p className="section-desc">
        Transparência jurídica e acesso público à legislação fiscal governamental.
      </p>

      <div className="download-list">
        {documents.map((doc, i) => (
          <div className="download-item" key={i}>
            <div className="download-icon">
              <FileText className="w-5 h-5" />
            </div>
            <div className="download-info">
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <strong>{doc.title}</strong>
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
                  {doc.category}
                </span>
              </div>
              <p>{doc.desc}</p>
              <span>{doc.size}</span>
            </div>
            <button className="download-btn">
              <Download className="w-4 h-4" /> Descarregar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}