import { Search, BookOpen, Download } from "lucide-react";

export default function PautaAduaneiraTab() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 mt-8">
      {/* Busca Rápida */}
      <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Consulta da Pauta Aduaneira</h3>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Pesquisar por código, descrição ou taxa..." 
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            />
          </div>
          <button className="bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition-colors">
            Pesquisar
          </button>
        </div>
      </div>

      {/* Grid de Informação */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-xl">
          <BookOpen className="w-8 h-8 text-blue-700 mb-3" />
          <h4 className="font-bold text-slate-900">Classificação Tarifária</h4>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">Saiba como classificar corretamente a sua mercadoria segundo o Sistema Harmonizado de Designação e de Codificação de Mercadorias.</p>
        </div>
        <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-xl">
          <Download className="w-8 h-8 text-blue-700 mb-3" />
          <h4 className="font-bold text-slate-900">Descarregar a Pauta</h4>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">Obtenha a versão integral do documento da Pauta Aduaneira oficial em formato PDF para consulta offline.</p>
        </div>
      </div>
    </div>
  );
}