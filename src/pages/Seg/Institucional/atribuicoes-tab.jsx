import React from "react";

export default function AtribuicoesTab() {
  const competencias = [
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
  ];

  return (
    <div className="space-y-10">
      
      {/* Cabeçalho da Secção */}
      <div>
        <div className="section-label">Escopo Legal</div>
        <h2 className="text-2xl font-bold text-slate-900 mt-3 tracking-tight">Competências Institucionais</h2>
        <p className="text-sm text-slate-500 mt-1.5 max-w-2xl leading-relaxed">
          Eixos pilares determinados pelo decreto regulamentador de governança fiscal que definem a atuação estratégica da Autoridade Tributária.
        </p>
      </div>

      {/* Grid de Cartões Numéricos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {competencias.map((item, idx) => (
          <div 
            className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 transition-all duration-200 hover:bg-white hover:border-slate-200 hover:shadow-sm space-y-4 flex flex-col h-full group" 
            key={idx}
          >
            
            {/* Numeração em Destaque com efeito Hover no texto */}
            <div className="text-2xl font-black tracking-tight text-blue-600/80 bg-blue-50/50 border border-blue-100/60 w-12 h-12 rounded-xl flex items-center justify-center shadow-inner group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-200">
              {item.num}
            </div>
            
            {/* Bloco de Conteúdo */}
            <div className="space-y-1.5 flex-1">
              <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}