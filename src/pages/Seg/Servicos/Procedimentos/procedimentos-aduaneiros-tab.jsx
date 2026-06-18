import { useState } from "react";
import { FileText, Car, Clock, Layers, ArrowUpRight, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function ProcedimentosAduaneirosContent() {
  const [openSection, setOpenSection] = useState("carga-geral");

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const procedimentos = [
    {
      id: "carga-geral",
      icon: FileText,
      title: "Importação de Carga Geral",
      subtitle: "Regime Comum",
      desc: "Procedimento aplicável à importação de mercadorias diversas destinadas ao consumo ou comércio geral. Requer a submissão formal do manifesto de carga, faturas fiscais originais, documentos de transporte (BL/AWB) e licenciamentos regulamentares necessários.",
    },
    {
      id: "viaturas",
      icon: Car,
      title: "Importação de Viaturas",
      subtitle: "Regime Específico",
      desc: "Regras específicas para a importação de veículos automóveis e motociclos, novos ou usados. Abrange o cálculo especializado de direitos aduaneiros com base nas tabelas de depreciação e cilindrada, homologação documental obrigatória e conformidade com as regras de inspeção na origem.",
    },
    {
      id: "saidas-antecipadas",
      icon: Clock,
      title: "Saídas Antecipadas",
      subtitle: "Facilitação de Comércio",
      desc: "Mecanismo de facilitação aduaneira que autoriza a retirada imediata de mercadorias dos recintos portuários ou aeroportuários antes do desalfandegamento formal completo. Destina-se tipicamente a produtos perecíveis, medicamentos urgentes ou mediante a constituição prévia de caução.",
    },
    {
      id: "embarques-parciais",
      icon: Layers,
      title: "Embarques Parciais - Faltas à Descarga",
      subtitle: "Regularização de Manifesto",
      desc: "Procedimento aplicável na ocorrência de fracionamento de remessas ou constatação de discrepâncias físicas (faltas ou excessos de volumes) em relação ao manifesto marítimo ou aéreo original submetido pela transportadora.",
    },
    {
      id: "prestacao-garantia",
      icon: ArrowUpRight,
      title: "Saída de Mercadoria mediante Prestação de Garantia",
      subtitle: "Regime Suspensivo",
      desc: "Permite o levantamento temporário ou definitivo da carga sob litígio, contestação de valorização aduaneira, ou trânsito internacional, salvaguardando o crédito fiscal do Estado através do depósito de garantias bancárias ou fianças idóneas.",
    },
  ];

  return (
    <div className="space-y-6 mt-8">
      <div className="space-y-3">
        {procedimentos.map((item) => {
          const Icon = item.icon;
          const isOpen = openSection === item.id;
          return (
            <div key={item.id} className={`border rounded-xl transition-all duration-200 bg-white ${isOpen ? "border-primary/30 shadow-sm ring-1 ring-primary/5" : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/40"}`}>
              <button onClick={() => toggleSection(item.id)} className="w-full flex items-center justify-between p-5 text-left focus:outline-none">
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-lg border transition-colors ${isOpen ? "bg-primary text-white border-primary" : "bg-slate-50 text-slate-600 border-slate-100"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">{item.subtitle}</span>
                    <h3 className="text-sm md:text-base font-bold text-slate-800 tracking-tight mt-0.5">{item.title}</h3>
                  </div>
                </div>
                <div className="text-slate-400 p-1">{isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}</div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 border-t border-slate-100" : "max-h-0"}`}>
                <div className="p-5 bg-slate-50/40 text-xs md:text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-3 p-4 bg-amber-50/60 border border-amber-100 rounded-xl text-amber-800">
        <AlertCircle className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
        <div className="text-xs md:text-sm leading-relaxed font-medium">
          <span className="font-bold">Nota:</span> Todos os procedimentos estão sujeitos à apresentação da documentação legal complementar, legislação aduaneira em vigor e podem variar conforme o tipo de mercadoria.
        </div>
      </div>
    </div>
  );
}