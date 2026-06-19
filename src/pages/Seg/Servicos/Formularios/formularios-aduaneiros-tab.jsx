import { FileDown, FileText } from "lucide-react";

export default function FormulariosAduaneirosTab() {
  const formularios = [
    { nome: "Declaração Aduaneira (DU)", tipo: "PDF", tamanho: "450 KB" },
    { nome: "Pedido de Saída Antecipada", tipo: "PDF", tamanho: "120 KB" },
    { nome: "Formulário de Registo de Importador", tipo: "PDF", tamanho: "310 KB" },
    { nome: "Termo de Responsabilidade - Viaturas", tipo: "PDF", tamanho: "200 KB" },
    { nome: "Guia de Pagamento Aduaneiro", tipo: "PDF", tamanho: "180 KB" },
  ];

  return (
    <div className="space-y-6 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {formularios.map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">{item.nome}</h4>
                <p className="text-xs text-slate-500">{item.tipo} • {item.tamanho}</p>
              </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              <FileDown className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}