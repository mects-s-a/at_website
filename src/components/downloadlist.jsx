// src/components/DownloadList.jsx

/**
 * DownloadList
 * @param {{ items: { title: string, desc: string }[] }} props
 */
export default function DownloadList({ items }) {
  return (
    <div className="at-download-list">
      {items.map((d, i) => (
        <div className="at-download-item" key={i}>
          <div className="at-download-icon">📄</div>
          <div className="at-download-info">
            <strong>{d.title}</strong>
            <span>{d.desc}</span>
          </div>
          <button className="at-download-btn">⬇ Download</button>
        </div>
      ))}
    </div>
  );
}