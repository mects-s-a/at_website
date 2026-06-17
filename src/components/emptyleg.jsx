import DownloadList from "./downloadlist";

/**
 * EmptyLeg
 * ────────────
 * Reusable empty legislation section with a notice banner and a document download list.
 *
 * @param {{
 *   eyebrow: string,
 *   title: string,
 *   desc?: string,
 *   items: { title: string, desc: string, size?: string, category?: string }[]
 * }} props
 *
 * Usage (inside servicos.jsx TABS registry):
 *   component: () => (
 *     <EmptyLeg
 *       eyebrow="Legislação Geral"
 *       title="Legislação Geral"
 *       items={[{ title: "...", desc: "...", size: "PDF (1.2 MB)", category: "Lei" }]}
 *     />
 *   ),
 */
export default function EmptyLeg({ eyebrow, title, desc, items = [] }) {
  return (
    <div className="space-y-6">

      {/* Section header */}
      <div>
        <div className="section-label">{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
        <p className="section-desc">
          {desc || "Documentos legislativos disponibilizados pela Autoridade Tributária de Moçambique."}
        </p>
      </div>

      {/* Notice banner */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          padding: "14px 18px",
          background: "var(--sat-muted-bg)",
          border: "1px solid var(--sat-border)",
          borderRadius: "var(--sat-radius)",
          fontSize: "13px",
          color: "var(--sat-muted-fg)",
          lineHeight: "1.6",
        }}
      >
        <span style={{ fontSize: "16px", flexShrink: 0 }}>📌</span>
        <span>
          Os documentos legislativos são actualizados periodicamente. Para versões mais
          recentes, consulte o Boletim da República ou contacte a AT através da linha{" "}
          <strong style={{ color: "var(--sat-primary)" }}>1266</strong>.
        </span>
      </div>

      {/* Document list */}
      <DownloadList items={items} />

    </div>
  );
}