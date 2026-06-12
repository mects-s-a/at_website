export default function OrganogramaTab() {
  return (
    <div className="space-y-6">
      <div className="section-label">Hierarquia Orgânica</div>
      <h2 className="section-title">Estrutura de Governação da AT</h2>
      <p className="section-desc">Árvore oficial de coordenação e dependência diretiva da instituição.</p>

      <div className="card" style={{ padding: '40px 20px', background: 'var(--white)' }}>
        <div className="orgchart">
          {/* Top Node */}
          <div className="org-node top">
            <strong>Presidente da AT</strong>
            <span>Gabinete de Governação Central</span>
          </div>

          <div className="org-connector" />

          {/* Órgão Consultivo */}
          <div className="org-node" style={{ borderColor: 'var(--gold)', minWidth: '260px' }}>
            <strong>Conselho Superior Tributário</strong>
            <span style={{ color: 'var(--teal)' }}>Órgão Consultivo Geral</span>
          </div>

          <div className="org-connector" />

          {/* Nível das Direções Gerais */}
          <div className="org-row">
            <div className="org-branch">
              <div className="org-node mid">
                <strong>Direcção Geral de Impostos (DGI)</strong>
                <span>Tributos Internos e Fiscalização</span>
              </div>
            </div>

            <div className="org-branch">
              <div className="org-node mid">
                <strong>Direcção Geral das Alfândegas (DGA)</strong>
                <span>Controlo Aduaneiro e Fronteiras</span>
              </div>
            </div>
          </div>

          <div className="org-connector" style={{ height: '32px' }} />
          <div className="org-hline" style={{ maxWidth: '80%' }} />
          <div className="org-connector" />

          {/* Serviços de Apoio Comum */}
          <div className="org-row" style={{ gap: '12px' }}>
            {["Recursos Humanos", "Planificação e Estudos", "Sistemas de Informação"].map((ds, i) => (
              <div className="org-node" style={{ minWidth: '180px', padding: '10px 16px' }} key={i}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)' }}>Direcção de {ds}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
