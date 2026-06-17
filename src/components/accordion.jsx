/**
 * Accordion
 * ─────────
 * Reusable accordion component using the .acc-* classes from atstyles.js.
 * Works on any page that injects sobreATStyles.
 *
 * @param {{ items: { q: string, a: string }[] }} props
 *
 * Usage:
 *   <Accordion items={[
 *     { q: "Question one?", a: "Answer one." },
 *     { q: "Question two?", a: "Answer two." },
 *   ]} />
 */
export default function Accordion({ items = [] }) {
  const toggleAccordion = (e) => {
    const trigger = e.currentTarget;
    const body = trigger.nextElementSibling;
    const isOpen = trigger.classList.contains("open");
    trigger.classList.toggle("open", !isOpen);
    if (body) body.style.display = isOpen ? "none" : "block";
    const arrow = trigger.querySelector(".acc-arrow");
    if (arrow) arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
  };

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={i} className="acc-item">
          <button className="acc-trigger" onClick={toggleAccordion}>
            <span>{item.q}</span>
            <span className="acc-arrow">▼</span>
          </button>
          <div className="acc-body" style={{ display: "none" }}>
            {item.a}
          </div>
        </div>
      ))}
    </div>
  );
}