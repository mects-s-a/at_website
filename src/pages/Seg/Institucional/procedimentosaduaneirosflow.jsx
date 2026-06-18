import React from "react";
import { FileText, ClipboardCheck, Cpu, CreditCard, Search, Truck, ArrowDown } from "lucide-react";

export default function ProcedimentosAduaneirosFlow() {
  const etapas = [
    {
      num: "01",
      titulo: "Manifesto de Carga",
      actor: "Transportador",
      icon: Truck,
      cor: "bg-blue-50 text-blue-600 border-blue-100",
      desc: "Submissão eletrónica do manifesto de carga com a listagem de todas as mercadorias que entram no território nacional, antes ou logo após a chegada do meio de transporte."
    },
    {
      num: "02",
      titulo: "Registo da Declaração (DU)",
      actor: "Despachante Aduaneiro",
      icon: FileText,
      cor: "bg-amber-50 text-amber-600 border-amber-100",
      desc: "Submissão do Documento Único (DU) no sistema da Janela Única Electrónica (JUE), detalhando a classificação pauta, origem, valor e natureza jurídica das mercadorias."
    },
    {
      num: "03",
      titulo: "Triagem e Selecção de Canal",
      actor: "Sistema JUE (Automatizado)",
      icon: Cpu,
      cor: "bg-purple-50 text-purple-600 border-purple-100",
      desc: "Análise de risco automática pelo sistema. A carga é atribuída a um canal: Verde (saída imediata), Amarelo (exame documental), Vermelho (exame físico e documental) ou Cinzento."
    },
    {
      num: "04",
      titulo: "Pagamento de Direitos",
      actor: "Contribuinte / Banco",
      icon: CreditCard,
      cor: "bg-emerald-50 text-emerald-600 border-emerald-100",
      desc: "Liquidação dos direitos aduaneiros, IVA e demais imposições fiscais calculadas no DU através dos bancos comerciais integrados na rede da Janela Única."
    },
    {
      num: "05",
      titulo: "Verificação Aduaneira",
      actor: "Alfândegas (AT)",
      icon: Search,
      cor: "bg-indigo-50 text-indigo-600 border-indigo-100",
      desc: "Conformidade documental ou física das mercadorias realizada pelos peritos aduaneiros, validando se o declarado condiz estritamente com a carga real."
    },
    {
      num: "06",
      titulo: "Desalfandegamento e Saída",
      actor: "Recinto Aduaneiro / Terminal",
      icon: ClipboardCheck,
      cor: "bg-teal-50 text-teal-600 border-teal-100",
      desc: "Emissão da nota de saída e autorização final para o levantamento físico da mercadoria dos recintos aduaneiros ou portuários. Processo concluído."
    }
  ];

  return (
    <div className="w-full text-slate-700">
      
      {/* Cabeçalho do Fluxo */}
      <div className="mb-10">
        <div className="section-label">Guia Operacional</div>
        <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-1.5">
          Fluxo de Desalfandegamento Aduaneiro
        </h2>
        <p className="text-sm text-slate-500">
          Conheça o percurso sequencial obrigatório para a regularização e desalfandegamento seguro de mercadorias em Moçambique.
        </p>
      </div>

      {/* Linha de Passos Vertical */}
      <div className="relative border-l border-slate-200 ml-4 md:ml-6 space-y-6 pb-2">
        {etapas.map((etapa, index) => {
          const IconComponent = etapa.icon;
          return (
            <div key={index} className="relative pl-8 group">
              
              {/* Indicador do Passo */}
              <div className="absolute -left-[17px] top-1 bg-white border border-slate-200 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs text-slate-800 shadow-sm transition-colors group-hover:border-blue-600">
                {etapa.num}
              </div>

              {/* Caixa de Conteúdo */}
              <div className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-5 shadow-sm transition-all md:flex md:items-start md:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg border shrink-0 ${etapa.cor}`}>
                    <IconComponent className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 tracking-tight">
                      {etapa.titulo}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-xl">
                      {etapa.desc}
                    </p>
                  </div>
                </div>

                {/* Ator Responsável */}
                <div className="mt-3 md:mt-0 shrink-0">
                  <span className="inline-flex items-center text-[10px] font-bold uppercase px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 border border-slate-100">
                    👤 {etapa.actor}
                  </span>
                </div>
              </div>

              {/* Seta direcional vertical */}
              {index < etapas.length - 1 && (
                <div className="absolute -left-[9px] -bottom-[18px] text-slate-300 hidden md:block">
                  <ArrowDown className="w-4 h-4" />
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Nota de rodapé legal */}
      <div className="mt-8 text-center bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-500 italic">
        Nota: A seleção do canal de triagem na JUE baseia-se em critérios internacionais de gestão e análise de risco aduaneiro.
      </div>

    </div>
  );
}