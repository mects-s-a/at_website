import { useState } from "react";
import { 
  Building2, ShieldCheck, MapPin, FileText, 
  Download, Search, ChevronRight, Users, 
  Network, Globe, Phone, Mail, Clock, ArrowRight
} from "lucide-react";

export default function SobreAT() {
  const [activeTab, setActiveTab] = useState("sobre");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("todos");

  // Função para o Accordion da História baseado nas classes do documento de design
  const toggleAccordion = (e) => {
    const trigger = e.currentTarget;
    const body = trigger.nextElementSibling;
    const isOpen = trigger.classList.contains("open");
    
    trigger.classList.toggle("open", !isOpen);
    if (body) {
      body.style.display = isOpen ? "none" : "block";
    }
    
    const arrow = trigger.querySelector(".acc-arrow");
    if (arrow) {
      arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
    }
  };

  // Dados estruturados das Infraestruturas
  const infraData = [
    { id: 1, name: "Delegação Provincial de Maputo", type: "Delegação", region: "sul", address: "Av. 25 de Setembro, Maputo" },
    { id: 2, name: "Fronteira de Ressano Garcia", type: "Fronteira", region: "sul", address: "Ressano Garcia, Moamba" },
    { id: 3, name: "Delegação Provincial de Sofala", type: "Delegação", region: "centro", address: "Rua do Governador, Beira" },
    { id: 4, name: "Porto da Beira - Terminal Aduaneiro", type: "Terminal", region: "centro", address: "Zona Portuária, Beira" },
    { id: 5, name: "Delegação Provincial de Nampula", type: "Delegação", region: "norte", address: "Av. do Trabalho, Nampula" },
    { id: 6, name: "Porto de Nacala", type: "Terminal", region: "norte", address: "Nacala Porto" },
  ];

  const filteredInfra = infraData.filter(item => 
    (selectedRegion === "todos" || item.region === selectedRegion) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sobre-at-container">
      {/* Injeção dos Design Tokens e Estilos Customizados */}
      
      
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --blue-deep: #0B2D6E;
          --blue-mid: #1A4FAF;
          --blue-light: #2E72D4;
          --teal: #00897B;
          --teal-light: #26A69A;
          --gold: #C9A94B;
          --cream: #F7F5F0;
          --smoke: #EEF2F9;
          --ink: #111827;
          --muted: #5B6B85;
          --border: #D8E2F0;
          --white: #FFFFFF;
          --radius: 12px;
          --shadow-sm: 0 2px 8px rgba(11,45,110,.08);
          --shadow-md: 0 6px 24px rgba(11,45,110,.12);
          --shadow-lg: 0 16px 48px rgba(11,45,110,.18);
        }

        .sobre-at-container {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          color: var(--ink);
          min-height: 100vh;
          padding: 0;
          margin: 0;
        }

        .shell {
          display: flex;
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        /* Sidebar Nav */
        .sidebar {
          width: 260px;
          flex-shrink: 0;
        }

        .sidebar-inner {
          position: sticky;
          top: 32px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 12px 0;
          box-shadow: var(--shadow-sm);
          overflow: hidden;
        }

        .sidebar-section {
          padding: 10px 18px 6px;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 600;
        }

        .sidebar-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 18px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          color: var(--muted);
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          transition: all 0.18s;
          border-left: 3px solid transparent;
        }

        .sidebar-item:hover {
          background: var(--smoke);
          color: var(--blue-mid);
        }

        .sidebar-item.active {
          background: var(--smoke);
          color: var(--blue-mid);
          border-left-color: var(--blue-mid);
          font-weight: 600;
        }

        .sidebar-divider {
          height: 1px;
          background: var(--border);
          margin: 8px 0;
        }

        .main-content {
          flex: 1;
          min-width: 0;
        }

        /* Page Hero */
        .page-hero {
          background: linear-gradient(135deg, var(--blue-deep) 0%, var(--blue-mid) 60%, var(--blue-light) 100%);
          border-radius: 16px;
          padding: 48px 48px 40px;
          margin-bottom: 36px;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .page-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .page-hero .eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 600;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }

        .page-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 4vw, 36px);
          color: var(--white);
          line-height: 1.2;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }

        .page-hero p {
          color: rgba(255, 255, 255, 0.78);
          font-size: 15px;
          max-width: 620px;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }

        /* Section Headings */
        .section-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--teal);
          font-weight: 600;
          margin-bottom: 6px;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 3vw, 28px);
          color: var(--ink);
          margin-bottom: 8px;
        }

        .section-desc {
          font-size: 14.5px;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 640px;
        }

        /* Cards Design */
        .card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 26px;
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.25s, transform 0.25s;
        }

        .card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .card-grid {
          display: grid;
          gap: 24px;
        }

        .card-grid.cols-2 { grid-template-columns: repeat(2, 1fr); }
        .card-grid.cols-3 { grid-template-columns: repeat(3, 1fr); }

        .card-icon {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          background: var(--smoke);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-bottom: 16px;
          color: var(--blue-mid);
        }

        .card h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 8px;
        }

        .card p {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
        }

        /* Accordion Design */
        .accordion {
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          background: var(--white);
        }

        .acc-item {
          border-bottom: 1px solid var(--border);
        }

        .acc-item:last-child {
          border-bottom: none;
        }

        .acc-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          background: var(--white);
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: var(--ink);
          text-align: left;
          transition: background 0.15s;
        }

        .acc-trigger:hover {
          background: var(--smoke);
        }

        .acc-trigger.open {
          color: var(--blue-mid);
          background: var(--smoke);
        }

        .acc-arrow {
          transition: transform 0.25s;
          font-size: 11px;
          color: var(--muted);
        }

        .acc-body {
          padding: 0 24px 20px;
          background: var(--white);
          font-size: 14px;
          color: var(--muted);
          line-height: 1.7;
        }

        /* Download List Design */
        .download-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .download-item {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 18px 24px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.2s;
        }

        .download-item:hover {
          box-shadow: var(--shadow-md);
        }

        .download-icon {
          width: 44px;
          height: 44px;
          background: #FEECE8;
          color: #EF4444;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .download-info {
          flex: 1;
        }

        .download-info strong {
          display: block;
          font-size: 14px;
          color: var(--ink);
          margin-bottom: 3px;
        }

        .download-info p {
          font-size: 13px;
          color: var(--muted);
          margin: 0 0 4px 0;
        }

        .download-info span {
          font-size: 11.5px;
          color: var(--muted);
          opacity: 0.8;
        }

        .download-btn {
          padding: 8px 18px;
          background: var(--blue-mid);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .download-btn:hover {
          background: var(--blue-deep);
        }

        /* Infrastructure - Premium KPI Cards */
        .infra-card {
          background: linear-gradient(135deg, var(--blue-deep), var(--blue-mid));
          border-radius: var(--radius);
          padding: 24px;
          color: white;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .infra-card::after {
          content: attr(data-num);
          position: absolute;
          right: 14px;
          bottom: -16px;
          font-size: 76px;
          font-weight: 700;
          opacity: 0.07;
          font-family: 'Playfair Display', serif;
        }

        .infra-card label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.7;
          display: block;
          margin-bottom: 6px;
        }

        .infra-card .value {
          font-family: 'Playfair Display', serif;
          font-size: 34px;
          color: var(--gold);
          font-weight: 700;
        }

        .infra-card p {
          font-size: 13px;
          opacity: 0.8;
          margin-top: 4px;
          line-height: 1.5;
        }

        /* Data Tables Design */
        .table-wrap {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          margin-top: 24px;
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        .data-table th {
          background: var(--smoke);
          padding: 14px 18px;
          text-align: left;
          font-weight: 600;
          color: var(--blue-deep);
          border-bottom: 2px solid var(--border);
        }

        .data-table td {
          padding: 14px 18px;
          border-bottom: 1px solid var(--border);
          color: var(--muted);
        }

        .data-table tr:last-child td {
          border-bottom: none;
        }

        .data-table tr:hover td {
          background: var(--smoke);
        }

        /* Organograma Structure Trees */
        .orgchart {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          padding: 20px 0;
        }

        .org-node {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: var(--radius);
          padding: 16px 26px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          min-width: 240px;
          transition: border-color 0.2s;
        }

        .org-node:hover {
          border-color: var(--gold);
        }

        .org-node.top {
          background: var(--blue-deep);
          border-color: var(--blue-deep);
        }

        .org-node.top strong { color: var(--white); font-size: 14.5px; }
        .org-node.top span { color: rgba(255, 255, 255, 0.75); }

        .org-node.mid {
          background: var(--blue-mid);
          border-color: var(--blue-mid);
        }

        .org-node.mid strong { color: var(--white); font-size: 13.5px; }
        .org-node.mid span { color: rgba(255, 255, 255, 0.75); }

        .org-node strong { display: block; font-size: 13.5px; color: var(--ink); }
        .org-node span { font-size: 12px; color: var(--muted); margin-top: 3px; display: block; }

        .org-connector {
          width: 2px;
          height: 24px;
          background: var(--border);
        }

        .org-row {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: center;
          position: relative;
        }

        .org-branch {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .org-hline {
          width: 100%;
          height: 2px;
          background: var(--border);
          margin: 0;
        }

        /* Controls Components */
        .filter-shell {
          display: flex;
          flex-direction: column;
          sm-flex-direction: row;
          gap: 16px;
          align-items: center;
          justify-content: space-between;
          background: var(--white);
          padding: 16px 24px;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          margin-bottom: 24px;
        }

        .search-input-wrap {
          position: relative;
          width: 100%;
        }

        .search-input-wrap input {
          width: 100%;
          font-size: 13.5px;
          padding: 10px 14px 10px 38px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: var(--white);
          color: var(--ink);
          outline: none;
          transition: border-color 0.2s;
        }

        .search-input-wrap input:focus {
          border-color: var(--blue-light);
        }

        .region-btn-group {
          display: flex;
          gap: 4px;
          background: var(--smoke);
          padding: 4px;
          border-radius: 8px;
          border: 1px solid var(--border);
          width: 100%;
        }

        .region-btn {
          flex: 1;
          text-align: center;
          padding: 8px 16px;
          font-size: 12.5px;
          font-weight: 500;
          border-radius: 6px;
          border: none;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          text-transform: capitalize;
          transition: all 0.15s;
          white-space: nowrap;
        }

        .region-btn.active {
          background: var(--white);
          color: var(--blue-deep);
          box-shadow: var(--shadow-sm);
          font-weight: 600;
        }

        /* Breadcrumb context */
        .custom-breadcrumb {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--muted);
          margin-bottom: 24px;
        }
        .custom-breadcrumb .current {
          color: var(--blue-deep);
          font-weight: 600;
        }

        @media (min-width: 640px) {
          .filter-shell { flex-direction: row; }
          .search-input-wrap { width: 300px; }
          .region-btn-group { width: auto; }
        }

        @media (max-width: 768px) {
          .shell { flex-direction: column; }
          .sidebar { width: 100%; }
          .sidebar-inner { display: flex; flex-wrap: wrap; position: static; }
          .sidebar-section { display: none; }
          .sidebar-divider { display: none; }
          .sidebar-item { width: auto; flex: 1; min-width: 130px; justify-content: center; }
        }
      `}</style>

































      <div className="shell">
        
        {/* ── BARRA LATERAL (SIDEBAR NAV) ── */}
        <aside className="sidebar">
          <div className="sidebar-inner">
            <div className="sidebar-section">Institucional</div>
            
            <button 
              onClick={() => setActiveTab("sobre")}
              className={`sidebar-item ${activeTab === "sobre" ? "active" : ""}`}
            >
              <Building2 className="w-4 h-4" /> Sobre a AT
            </button>

            <button 
              onClick={() => setActiveTab("atribuicoes")}
              className={`sidebar-item ${activeTab === "atribuicoes" ? "active" : ""}`}
            >
              <ShieldCheck className="w-4 h-4" /> Atribuições
            </button>
            
            <button 
              onClick={() => setActiveTab("organograma")}
              className={`sidebar-item ${activeTab === "organograma" ? "active" : ""}`}
            >
              <Network className="w-4 h-4" /> Organograma
            </button>

            <button 
              onClick={() => setActiveTab("infraestruturas")}
              className={`sidebar-item ${activeTab === "infraestruturas" ? "active" : ""}`}
            >
              <MapPin className="w-4 h-4" /> Infraestruturas
            </button>

            <div className="sidebar-divider" />
            <div className="sidebar-section">Documentação</div>

            <button 
              onClick={() => setActiveTab("legislacao")}
              className={`sidebar-item ${activeTab === "legislacao" ? "active" : ""}`}
            >
              <FileText className="w-4 h-4" /> Legislação & Planos
            </button>
          </div>
        </aside>






















































        {/* ── CONTEÚDO PRINCIPAL DINÂMICO ── */}
        <main className="main-content">
          
          {/* Breadcrumb Elegante */}
          <div className="custom-breadcrumb">
            <span>Início</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span>Institucional</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="current">
              {activeTab === "sobre" && "Sobre a AT"}
              {activeTab === "atribuicoes" && "Atribuições e Competências"}
              {activeTab === "organograma" && "Organograma"}
              {activeTab === "infraestruturas" && "Infraestruturas"}
              {activeTab === "legislacao" && "Legislação & Planos"}
            </span>
          </div>

          {/* PREMIUM PAGE HERO (BANNER UNIFICADO) */}
          <div className="page-hero">
            <div className="eyebrow">Autoridade Tributária de Moçambique</div>
            <h1>
              {activeTab === "sobre" && "Sobre a Instituição"}
              {activeTab === "atribuicoes" && "Atribuições Estratégicas"}
              {activeTab === "organograma" && "Organograma Institucional"}
              {activeTab === "infraestruturas" && "Infraestruturas & Delegações"}
              {activeTab === "legislacao" && "Biblioteca Digital Oficial"}
            </h1>
            <p>
              {activeTab === "sobre" && "Conheça o organismo do Estado responsável pela administração tributária e aduaneira nacional, instituído para impulsionar o crescimento sustentável."}
              {activeTab === "atribuicoes" && "Explore o escopo legal de atuação, competências regulamentares e as responsabilidades essenciais confiadas à nossa governação."}
              {activeTab === "organograma" && "Veja o encadeamento hierárquico, coordenação operacional e a árvore estrutural das Direcções Gerais da AT."}
              {activeTab === "infraestruturas" && "Localize instantaneamente delegações provinciais, terminais de carga internacionais e postos de fiscalização fronteiriça digitalizados."}
              {activeTab === "legislacao" && "Consulte e descarregue regulamentos normativos, relatórios anuais de prestação de contas e diretrizes estratégicas vigentes."}
            </p>
          </div>

          {/* ABA 1: SOBRE A AT */}
          {activeTab === "sobre" && (
            <div className="space-y-10">
              <div>
                <div className="section-label">Valores Nucleares</div>
                <h2 className="section-title">Missão, Visão & Princípios</h2>
                <p className="section-desc">Nossas diretrizes estratégicas determinam um compromisso sólido com a transparência e integridade fiscal moçambicana.</p>
                
                <div className="card-grid cols-3">
                  {[
                    { icon: "🎯", title: "Missão", body: "Arrecadar as receitas do Estado, assegurando a aplicação da política tributária e aduaneira, com vista ao financiamento do desenvolvimento sustentável do país." },
                    { icon: "🔭", title: "Visão", body: "Ser uma administração tributária e aduaneira de referência, reconhecida pela excelência, integridade e serviço ao cidadão e às empresas." },
                    { icon: "⚖️", title: "Valores", body: "Integridade, Transparência, Profissionalismo, Orientação ao contribuinte, Responsabilidade e estrito Comprometimento com a legalidade." },
                  ].map((c, i) => (
                    <div className="card" key={i}>
                      <div className="card-icon">{c.icon}</div>
                      <h3>{c.title}</h3>
                      <p>{c.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* História via Accordion de Design Premium */}
              <div>
                <div className="section-label">Linha do Tempo</div>
                <h2 className="section-title">Duas Décadas de Modernização</h2>
                <p className="section-desc">A evolução tecnológica e estrutural que transformou o panorama fiscal e aduaneiro nacional.</p>
                
                <div className="accordion">
                  {[
                    { q: "2006: Criação da AT", a: "A AT foi criada pelo Decreto nº 7/2006 de 16 de Maio, unificando a Direcção Geral das Alfândegas e a Direcção Geral de Impostos numa única entidade sob tutela ministerial." },
                    { q: "2009 - 2015: Modernização dos Sistemas", a: "Implementação e expansão do sistema e-Tributação; lançamento do NUIT online; expansão da rede de postos de fronteira digitalizados para maior controle de fluxos comerciais." },
                    { q: "2016 -2020: Expansão de Serviços Digitais", a: "Lançamento do Portal do Contribuinte, submissão da e-Declaração e integração total com os sistemas da Janela Única Electrónica (JUE)." },
                    { q: "2021 - 2026: Era da Transformação Digital", a: "Massificação do sistema de factura electrónica, consolidação do atendimento unificado via Call Center 1266 e posicionamento da AT como referência regional em governação digital." },
                  ].map((it, i) => (
                    <div key={i} className="acc-item">
                      <button className="acc-trigger" onClick={toggleAccordion}>
                        <span>{it.q}</span>
                        <span className="acc-arrow">▼</span>
                      </button>
                      <div className="acc-body" style={{ display: "none" }}>
                        {it.a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contactos em Grid de Cards */}
              <div>
                <div className="section-label">Canais de Contacto</div>
                <h2 className="section-title">Atendimento Unificado</h2>
                <p className="section-desc">Fale conosco diretamente ou visite os nossos canais de apoio oficial ao contribuinte.</p>
                
                <div className="card-grid cols-2">
                  {[
                    { icon: <MapPin className="w-5 h-5" />, label: "Sede Central", val: "Avenida 25 de Setembro, Nº 1235, Maputo" },
                    { icon: <Phone className="w-5 h-5" />, label: "Linha do Contribuinte", val: "1266 (Chamada Gratuita Nacional)" },
                    { icon: <Mail className="w-5 h-5" />, label: "Correio Electrónico", val: "linhadocontribuinte@at.gov.mz" },
                    { icon: <Clock className="w-5 h-5" />, label: "Horário de Funcionamento", val: "Segunda a Sexta: 07h30 – 15h30" },
                  ].map((c, i) => (
                    <div className="card flex items-center gap-4" style={{ padding: '20px' }} key={i}>
                      <div className="card-icon" style={{ marginBottom: 0, shrink: 0 }}>{c.icon}</div>
                      <div>
                        <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>{c.label}</div>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginTop: '2px' }}>{c.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ABA 2: ATRIBUIÇÕES E COMPETÊNCIAS */}
          {activeTab === "atribuicoes" && (
            <div className="space-y-6">
              <div className="section-label">Escopo Legal</div>
              <h2 className="section-title">Competências Institucionais</h2>
              <p className="section-desc">Eixos pilares determinados pelo decreto regulamentador de governança fiscal.</p>

              <div className="card-grid cols-2">
                {[
                  { num: "01", title: "Justiça e Fiscalidade", desc: "Assegurar a aplicação rigorosa, justa e equitativa das leis fiscais e aduaneiras em todo o território nacional, minimizando a evasão e promovendo a conformidade voluntária." },
                  { num: "02", title: "Controlo de Fronteiras", desc: "Garantir o controlo aduaneiro eficiente sobre a entrada, trânsito e saída de mercadorias, combatendo o contrabando e protegendo a integridade económica das nossas fronteiras." },
                  { num: "03", title: "Educação Fiscal", desc: "Promover campanhas informativas e simplificar os canais digitais para elevar a consciência fiscal dos cidadãos e das empresas sobre a importância dos impostos no desenvolvimento." },
                  { num: "04", title: "Estatística Comercial", desc: "Compilar, tratar e analisar de forma contínua os dados agregados sobre transações comerciais internacionais e arrecadação interna para apoiar as decisões macroeconómicas do Governo." },
                ].map((item, idx) => (
                  <div className="card space-y-3" key={idx}>
                    <div className="card-icon" style={{ fontWeight: 'bold', fontSize: '14px', color: 'var(--blue-mid)' }}>{item.num}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ABA 3: ORGANOGRAMA ESTRUTURADO PREMIUM */}
          {activeTab === "organograma" && (
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
          )}

          {/* ABA 4: INFRAESTRUTURAS COM PREMIUM KPI E TABELA */}
          {activeTab === "infraestruturas" && (
            <div className="space-y-6">
              <div className="section-label">Presença Nacional</div>
              <h2 className="section-title">Postos e Redes de Fiscalização</h2>
              <p className="section-desc">Visão macro sobre os pontos de atendimento e alfândegas operacionais.</p>

              {/* KPI Cards Estilo Premium do PDF */}
              <div className="card-grid cols-3">
                <div className="infra-card" data-num="11">
                  <label>Delegações Principais</label>
                  <div className="value">11</div>
                  <p>Uma infraestrutura central ativa em cada capital provincial.</p>
                </div>
                <div className="infra-card" data-num="45">
                  <label>Fronteiras Integradas</label>
                  <div className="value">45+</div>
                  <p>Postos aduaneiros digitais conectados em tempo real.</p>
                </div>
                <div className="infra-card" data-num="12">
                  <label>Terminais de Carga</label>
                  <div className="value">12</div>
                  <p>Portos secos e hubs de triagem alfandegária internacional.</p>
                </div>
              </div>

              {/* Filtros e Pesquisa */}
              <div className="filter-shell">
                <div className="search-input-wrap">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input 
                    type="text" 
                    placeholder="Pesquisar infraestrutura..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="region-btn-group">
                  {["todos", "sul", "centro", "norte"].map((region) => (
                    <button
                      key={region}
                      onClick={() => setSelectedRegion(region)}
                      className={`region-btn ${selectedRegion === region ? "active" : ""}`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              {/* Listagem em Tabela Estruturada do Design original */}
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Nome da Infraestrutura</th>
                      <th>Tipo</th>
                      <th>Região</th>
                      <th>Endereço Local</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInfra.length > 0 ? (
                      filteredInfra.map((item) => (
                        <tr key={item.id}>
                          <td style={{ fontWeight: 600, color: 'var(--ink)' }}>{item.name}</td>
                          <td>
                            <span style={{ fontSize: '11px', background: 'var(--smoke)', padding: '3px 8px', borderRadius: '12px', color: 'var(--blue-mid)', fontWeight: 600 }}>
                              {item.type}
                            </span>
                          </td>
                          <td style={{ textTransform: 'capitalize' }}>{item.region}</td>
                          <td style={{ fontSize: '13px' }}>{item.address}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" style={{ textAlign: 'center', padding: '24px', color: 'var(--muted)' }}>
                          Nenhuma infraestrutura corresponde aos critérios selecionados.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ABA 5: LEGISLAÇÃO E REPOSITÓRIO DIGITAL */}
          {activeTab === "legislacao" && (
            <div className="space-y-6">
              <div className="section-label">Biblioteca Digital</div>
              <h2 className="section-title">Documentos Normativos & Estatutos</h2>
              <p className="section-desc">Transparência jurídica e acesso público à legislação fiscal governamental.</p>

              <div className="download-list">
                {[
                  { title: "Decreto nº 7/2006 de 16 de Maio", desc: "Decreto de criação oficial e aprovação do estatuto orgânico estrutural da Autoridade Tributária de Moçambique.", size: "PDF (2.4 MB)", category: "Estatuto" },
                  { title: "Plano Estratégico da AT (2022–2026)", desc: "Metas plurianuais de arrecadação, diretrizes de governação digital e eixos estratégicos de modernização aduaneira.", size: "PDF (4.1 MB)", category: "Estratégia" },
                  { title: "Relatório de Actividades e Contas Anual", desc: "Balanço institucional consolidado da arrecadação interna de receitas estatais e execução orçamental.", size: "PDF (3.8 MB)", category: "Relatório" },
                  { title: "Código de Conduta dos Funcionários da AT", desc: "Normas de ética, transparência, integridade profissional e deveres exigidos no exercício de funções públicas.", size: "PDF (1.2 MB)", category: "Ética" },
                ].map((doc, i) => (
                  <div className="download-item" key={i}>
                    <div className="download-icon">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="download-info">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <strong>{doc.title}</strong>
                        <span style={{ fontSize: '10px', background: 'var(--cream)', color: 'var(--gold)', border: '1px solid var(--border)', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold', uppercase: true }}>
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
          )}

        </main>
      </div>
    </div>
  );
}