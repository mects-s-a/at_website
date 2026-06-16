import { useState } from "react";
import {
  ChevronRight, MapPin, Phone, Mail, Clock,
  Search, FileText, Download,
} from "lucide-react";
import sobreATStyles from "./SobreATStyles";
import InstitucionalSidebar from "./InstitucionalSidebar";

// ── Tab components ────────────────────────────────────────────────────────────

function SobreTab() {
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
    <div className="space-y-10">
      <div>
        <div className="section-label">Valores Nucleares</div>
        <h2 className="section-title">Missão, Visão & Princípios</h2>
        <p className="section-desc">Nossas diretrizes estratégicas determinam um compromisso sólido com a transparência e integridade fiscal moçambicana.</p>
        <div className="card-grid cols-3">
          {[
            { icon: "🎯", title: "Missão", body: "Arrecadar as receitas do Estado, assegurando a aplicação da política tributária e aduaneira, com vista ao financiamento do desenvolvimento sustentável do país." },
            { icon: "🔭", title: "Visão",  body: "Ser uma administração tributária e aduaneira de referência, reconhecida pela excelência, integridade e serviço ao cidadão e às empresas." },
            { icon: "⚖️", title: "Valores",body: "Integridade, Transparência, Profissionalismo, Orientação ao contribuinte, Responsabilidade e estrito Comprometimento com a legalidade." },
          ].map((c, i) => (
            <div className="card" key={i}>
              <div className="card-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="section-label">Linha do Tempo</div>
        <h2 className="section-title">Duas Décadas de Modernização</h2>
        <p className="section-desc">A evolução tecnológica e estrutural que transformou o panorama fiscal e aduaneiro nacional.</p>
        <div className="accordion">
          {[
            { q: "2006: Criação da AT", a: "A AT foi criada pelo Decreto nº 7/2006 de 16 de Maio, unificando a Direcção Geral das Alfândegas e a Direcção Geral de Impostos numa única entidade sob tutela ministerial." },
            { q: "2009 - 2015: Modernização dos Sistemas", a: "Implementação e expansão do sistema e-Tributação; lançamento do NUIT online; expansão da rede de postos de fronteira digitalizados para maior controle de fluxos comerciais." },
            { q: "2016 - 2020: Expansão de Serviços Digitais", a: "Lançamento do Portal do Contribuinte, submissão da e-Declaração e integração total com os sistemas da Janela Única Electrónica (JUE)." },
            { q: "2021 - 2026: Era da Transformação Digital", a: "Massificação do sistema de factura electrónica, consolidação do atendimento unificado via Call Center 1266 e posicionamento da AT como referência regional em governação digital." },
          ].map((it, i) => (
            <div key={i} className="acc-item">
              <button className="acc-trigger" onClick={toggleAccordion}>
                <span>{it.q}</span>
                <span className="acc-arrow">▼</span>
              </button>
              <div className="acc-body" style={{ display: "none" }}>{it.a}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="section-label">Canais de Contacto</div>
        <h2 className="section-title">Atendimento Unificado</h2>
        <p className="section-desc">Fale conosco diretamente ou visite os nossos canais de apoio oficial ao contribuinte.</p>
        <div className="card-grid cols-2">
          {[
            { icon: <MapPin className="w-5 h-5" />, label: "Sede Central",            val: "Avenida 25 de Setembro, Nº 1235, Maputo" },
            { icon: <Phone  className="w-5 h-5" />, label: "Linha do Contribuinte",   val: "1266 (Chamada Gratuita Nacional)" },
            { icon: <Mail   className="w-5 h-5" />, label: "Correio Electrónico",     val: "linhadocontribuinte@at.gov.mz" },
            { icon: <Clock  className="w-5 h-5" />, label: "Horário de Funcionamento",val: "Segunda a Sexta: 07h30 – 15h30" },
          ].map((c, i) => (
            <div className="card flex items-center gap-4" style={{ padding: "20px" }} key={i}>
              <div className="card-icon" style={{ marginBottom: 0, flexShrink: 0 }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: "11px", textTransform: "uppercase", color: "var(--sat-muted-fg)", fontWeight: 600 }}>{c.label}</div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--sat-fg)", marginTop: "2px" }}>{c.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AtribuicoesTab() {
  return (
    <div className="space-y-6">
      <div className="section-label">Escopo Legal</div>
      <h2 className="section-title">Competências Institucionais</h2>
      <p className="section-desc">Eixos pilares determinados pelo decreto regulamentador de governança fiscal.</p>
      <div className="card-grid cols-2">
        {[
          { num: "01", title: "Justiça e Fiscalidade",  desc: "Assegurar a aplicação rigorosa, justa e equitativa das leis fiscais e aduaneiras em todo o território nacional, minimizando a evasão e promovendo a conformidade voluntária." },
          { num: "02", title: "Controlo de Fronteiras", desc: "Garantir o controlo aduaneiro eficiente sobre a entrada, trânsito e saída de mercadorias, combatendo o contrabando e protegendo a integridade económica das nossas fronteiras." },
          { num: "03", title: "Educação Fiscal",        desc: "Promover campanhas informativas e simplificar os canais digitais para elevar a consciência fiscal dos cidadãos e das empresas sobre a importância dos impostos no desenvolvimento." },
          { num: "04", title: "Estatística Comercial",  desc: "Compilar, tratar e analisar de forma contínua os dados agregados sobre transações comerciais internacionais e arrecadação interna para apoiar as decisões macroeconómicas do Governo." },
        ].map((item, idx) => (
          <div className="card space-y-3" key={idx}>
            <div className="card-icon" style={{ fontWeight: "bold", fontSize: "14px", color: "var(--sat-primary)" }}>{item.num}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrganogramaTab() {
  return (
    <div className="space-y-6">
      <div className="section-label">Hierarquia Orgânica</div>
      <h2 className="section-title">Estrutura de Governação da AT</h2>
      <p className="section-desc">Árvore oficial de coordenação e dependência diretiva da instituição.</p>
      <div className="card" style={{ padding: "40px 20px" }}>
        <div className="orgchart">
          <div className="org-node top">
            <strong>Presidente da AT</strong>
            <span>Gabinete de Governação Central</span>
          </div>
          <div className="org-connector" />
          <div className="org-node" style={{ borderColor: "var(--sat-gold)", minWidth: "260px" }}>
            <strong>Conselho Superior Tributário</strong>
            <span style={{ color: "var(--sat-accent)" }}>Órgão Consultivo Geral</span>
          </div>
          <div className="org-connector" />
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
          <div className="org-connector" style={{ height: "32px" }} />
          <div className="org-hline" style={{ maxWidth: "80%" }} />
          <div className="org-connector" />
          <div className="org-row" style={{ gap: "12px" }}>
            {["Recursos Humanos", "Planificação e Estudos", "Sistemas de Informação"].map((ds, i) => (
              <div className="org-node" style={{ minWidth: "180px", padding: "10px 16px" }} key={i}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--sat-fg)" }}>Direcção de {ds}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfraestruturasTab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("todos");

  const infraData = [
    { id: 1, name: "Delegação Provincial de Maputo",      type: "Delegação", region: "sul",    address: "Av. 25 de Setembro, Maputo" },
    { id: 2, name: "Fronteira de Ressano Garcia",         type: "Fronteira", region: "sul",    address: "Ressano Garcia, Moamba" },
    { id: 3, name: "Delegação Provincial de Sofala",      type: "Delegação", region: "centro", address: "Rua do Governador, Beira" },
    { id: 4, name: "Porto da Beira - Terminal Aduaneiro", type: "Terminal",  region: "centro", address: "Zona Portuária, Beira" },
    { id: 5, name: "Delegação Provincial de Nampula",     type: "Delegação", region: "norte",  address: "Av. do Trabalho, Nampula" },
    { id: 6, name: "Porto de Nacala",                     type: "Terminal",  region: "norte",  address: "Nacala Porto" },
  ];

  const filtered = infraData.filter(item =>
    (selectedRegion === "todos" || item.region === selectedRegion) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="section-label">Presença Nacional</div>
      <h2 className="section-title">Postos e Redes de Fiscalização</h2>
      <p className="section-desc">Visão macro sobre os pontos de atendimento e alfândegas operacionais.</p>
      <div className="card-grid cols-3">
        <div className="infra-card" data-num="11"><label>Delegações Principais</label><div className="value">11</div><p>Uma infraestrutura central ativa em cada capital provincial.</p></div>
        <div className="infra-card" data-num="45"><label>Fronteiras Integradas</label><div className="value">45+</div><p>Postos aduaneiros digitais conectados em tempo real.</p></div>
        <div className="infra-card" data-num="12"><label>Terminais de Carga</label><div className="value">12</div><p>Portos secos e hubs de triagem alfandegária internacional.</p></div>
      </div>
      <div className="filter-shell">
        <div className="search-input-wrap">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
          <input type="text" placeholder="Pesquisar infraestrutura..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className="region-btn-group">
          {["todos", "sul", "centro", "norte"].map((r) => (
            <button key={r} onClick={() => setSelectedRegion(r)} className={`region-btn ${selectedRegion === r ? "active" : ""}`}>{r}</button>
          ))}
        </div>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Nome da Infraestrutura</th><th>Tipo</th><th>Região</th><th>Endereço Local</th></tr></thead>
          <tbody>
            {filtered.length > 0 ? filtered.map((item) => (
              <tr key={item.id}>
                <td style={{ fontWeight: 600, color: "var(--sat-fg)" }}>{item.name}</td>
                <td><span style={{ fontSize: "11px", background: "var(--sat-muted-bg)", padding: "3px 8px", borderRadius: "12px", color: "var(--sat-primary)", fontWeight: 600 }}>{item.type}</span></td>
                <td style={{ textTransform: "capitalize" }}>{item.region}</td>
                <td style={{ fontSize: "13px" }}>{item.address}</td>
              </tr>
            )) : (
              <tr><td colSpan="4" style={{ textAlign: "center", padding: "24px", color: "var(--sat-muted-fg)" }}>Nenhuma infraestrutura corresponde aos critérios selecionados.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LegislacaoTab() {
  const documents = [
    { title: "Decreto nº 7/2006 de 16 de Maio",         desc: "Decreto de criação oficial e aprovação do estatuto orgânico estrutural da Autoridade Tributária de Moçambique.", size: "PDF (2.4 MB)", category: "Estatuto"  },
    { title: "Plano Estratégico da AT (2022–2026)",      desc: "Metas plurianuais de arrecadação, diretrizes de governação digital e eixos estratégicos de modernização aduaneira.", size: "PDF (4.1 MB)", category: "Estratégia"},
    { title: "Relatório de Actividades e Contas Anual",  desc: "Balanço institucional consolidado da arrecadação interna de receitas estatais e execução orçamental.", size: "PDF (3.8 MB)", category: "Relatório" },
    { title: "Código de Conduta dos Funcionários da AT", desc: "Normas de ética, transparência, integridade profissional e deveres exigidos no exercício de funções públicas.", size: "PDF (1.2 MB)", category: "Ética"     },
  ];
  return (
    <div className="space-y-6">
      <div className="section-label">Biblioteca Digital</div>
      <h2 className="section-title">Documentos Normativos & Estatutos</h2>
      <p className="section-desc">Transparência jurídica e acesso público à legislação fiscal governamental.</p>
      <div className="download-list">
        {documents.map((doc, i) => (
          <div className="download-item" key={i}>
            <div className="download-icon"><FileText className="w-5 h-5" /></div>
            <div className="download-info">
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <strong>{doc.title}</strong>
                <span style={{ fontSize: "10px", background: "var(--sat-muted-bg)", color: "var(--sat-gold)", border: "1px solid var(--sat-border)", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold" }}>{doc.category}</span>
              </div>
              <p>{doc.desc}</p>
              <span>{doc.size}</span>
            </div>
            <button className="download-btn"><Download className="w-4 h-4" /> Descarregar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComingSoonTab({ title }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: "rgba(27,79,171,0.08)" }}>
        <span style={{ fontSize: "26px" }}>🗂️</span>
      </div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "var(--sat-fg)", marginBottom: "8px" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "var(--sat-muted-fg)", maxWidth: "340px", lineHeight: "1.6" }}>
        Esta secção está em desenvolvimento. O conteúdo será disponibilizado em breve.
      </p>
    </div>
  );
}

// ── Hero / breadcrumb maps ────────────────────────────────────────────────────
const HERO = {
  sobre:           { title: "Sobre a Instituição",          desc: "Conheça o organismo do Estado responsável pela administração tributária e aduaneira nacional, instituído para impulsionar o crescimento sustentável." },
  atribuicoes:     { title: "Atribuições e Competências",   desc: "Explore o escopo legal de atuação, competências regulamentares e as responsabilidades essenciais confiadas à nossa governação." },
  organograma:     { title: "Organograma Institucional",    desc: "Veja o encadeamento hierárquico, coordenação operacional e a árvore estrutural das Direcções Gerais da AT." },
  infraestruturas: { title: "Infraestruturas & Delegações", desc: "Localize delegações provinciais, terminais de carga internacionais e postos de fiscalização fronteiriça." },
  legislacao:      { title: "Legislação & Planos",          desc: "Consulte e descarregue regulamentos normativos, relatórios anuais de prestação de contas e diretrizes estratégicas vigentes." },
  relatorios:      { title: "Relatórios e Publicações",     desc: "Aceda aos relatórios anuais, publicações institucionais e estudos técnicos da Autoridade Tributária." },
  conduta:         { title: "Código de Conduta",            desc: "Consulte as normas de conduta e ética que regem os funcionários da Autoridade Tributária de Moçambique." },
};
const BREADCRUMB = {
  sobre: "Sobre a AT", atribuicoes: "Atribuições e Competências",
  organograma: "Organograma", infraestruturas: "Infraestruturas",
  legislacao: "Legislação & Planos", relatorios: "Relatórios e Publicações", conduta: "Código de Conduta",
};

// ── Shell ─────────────────────────────────────────────────────────────────────
export default function SobreAT() {
  const [activeTab, setActiveTab] = useState("sobre");
  const hero = HERO[activeTab];

  return (
    <div className="sobre-at-container">
      <style>{sobreATStyles}</style>
      <div className="shell">
        <InstitucionalSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="main-content">
          <div className="custom-breadcrumb">
            <span>Início</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span>Institucional</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="current">{BREADCRUMB[activeTab]}</span>
          </div>
          <div className="page-hero">
            <div className="eyebrow">Autoridade Tributária de Moçambique</div>
            <h1>{hero.title}</h1>
            <p>{hero.desc}</p>
          </div>
          {activeTab === "sobre"           && <SobreTab />}
          {activeTab === "atribuicoes"     && <AtribuicoesTab />}
          {activeTab === "organograma"     && <OrganogramaTab />}
          {activeTab === "infraestruturas" && <InfraestruturasTab />}
          {activeTab === "legislacao"      && <LegislacaoTab />}
          {activeTab === "relatorios"      && <ComingSoonTab title="Relatórios e Publicações" />}
          {activeTab === "conduta"         && <ComingSoonTab title="Código de Conduta" />}
        </main>
      </div>
    </div>
  );
}