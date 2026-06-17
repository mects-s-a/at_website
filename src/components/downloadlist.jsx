import { FileText, Download } from "lucide-react";

/**
 * DownloadList
 * ────────────
 * Reusable document download list using the .download-* classes from atstyles.js.
 * Works on any page that injects sobreATStyles.
 *
 * @param {{
 *   items: {
 *     title: string,
 *     desc: string,
 *     size?: string,
 *     category?: string
 *   }[]
 * }} props
 *
 * Usage:
 *   <DownloadList items={[
 *     { title: "Decreto nº 7/2006", desc: "Criação da AT.", size: "PDF (2.4 MB)", category: "Estatuto" },
 *   ]} />
 */
export default function DownloadList({ items = [] }) {
  return (
    <div className="download-list">
      {items.map((doc, i) => (
        <div className="download-item" key={i}>
          <div className="download-icon">
            <FileText className="w-5 h-5" />
          </div>
          <div className="download-info">
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <strong>{doc.title}</strong>
              {doc.category && (
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
              )}
            </div>
            <p>{doc.desc}</p>
            {doc.size && <span>{doc.size}</span>}
          </div>
          <button className="download-btn">
            <Download className="w-4 h-4" /> Descarregar
          </button>
        </div>
      ))}
    </div>
  );
}