import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function SobreTab() {
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

  return (
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
  );
}
