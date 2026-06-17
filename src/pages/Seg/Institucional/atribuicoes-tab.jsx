export default function AtribuicoesTab() {
  return (
    <div className="space-y-6">
      <div className="section-label">Escopo Legal</div>
      <h2 className="section-title">Competências Institucionais</h2>
      <p className="section-desc">Eixos pilares determinados pelo decreto regulamentador de governança fiscal.</p>

      <div className="card-grid cols-2">
        {[
          {
            num: "01",
            title: "Justiça e Fiscalidade",
            desc: "Assegurar a aplicação rigorosa, justa e equitativa das leis fiscais e aduaneiras em todo o território nacional, minimizando a evasão e promovendo a conformidade voluntária.",
          },
          {
            num: "02",
            title: "Controlo de Fronteiras",
            desc: "Garantir o controlo aduaneiro eficiente sobre a entrada, trânsito e saída de mercadorias, combatendo o contrabando e protegendo a integridade económica das nossas fronteiras.",
          },
          {
            num: "03",
            title: "Educação Fiscal",
            desc: "Promover campanhas informativas e simplificar os canais digitais para elevar a consciência fiscal dos cidadãos e das empresas sobre a importância dos impostos no desenvolvimento.",
          },
          {
            num: "04",
            title: "Estatística Comercial",
            desc: "Compilar, tratar e analisar de forma contínua os dados agregados sobre transações comerciais internacionais e arrecadação interna para apoiar as decisões macroeconómicas do Governo.",
          },
        ].map((item, idx) => (
          <div className="card space-y-3" key={idx}>
            <div
              className="card-icon"
              style={{ fontWeight: "bold", fontSize: "14px", color: "var(--sat-primary)" }}
            >
              {item.num}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}