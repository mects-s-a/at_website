// src/components/EmptyLeg.jsx
// Shared layout used by LegGeral, LegFiscal, and LegAduaneira.
import DownloadList from "./DownloadList";

/**
 * EmptyLeg — legislation page template
 * @param {{ eyebrow: string, title: string, items: { title: string, desc: string }[] }} props
 */
export default function EmptyLeg({ eyebrow, title, items }) {
  return (
    <>
      <div className="page-hero">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>Documentos legislativos disponibilizados pela Autoridade Tributária de Moçambique.</p>
      </div>

      <div className="at-notice">
        <span>📌</span>
        <span>
          Os documentos legislativos são actualizados periodicamente. Para versões mais
          recentes, consulte o Boletim da República ou contacte a AT.
        </span>
      </div>

      <DownloadList items={items} />
    </>
  );
}