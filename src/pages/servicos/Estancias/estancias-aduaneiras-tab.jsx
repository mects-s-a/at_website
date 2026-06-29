import { Building2, MapPin, Search } from "lucide-react";

export default function EstanciasAduaneirasTab() {
  const estancias = [
    { nome: "Delegação Provincial de Maputo", tipo: "Delegação", regiao: "Sul", local: "Av. 25 de Setembro, Maputo" },
    { nome: "Posto de Ressano Garcia", tipo: "Fronteira", regiao: "Sul", local: "Fronteira Sul, Moamba" },
    { nome: "Delegação Provincial de Sofala", tipo: "Delegação", regiao: "Centro", local: "Av. Samora Machel, Beira" },
    { nome: "Porto da Beira — Terminal Aduaneiro", tipo: "Terminal", regiao: "Centro", local: "Zona Portuária, Beira" },
    { nome: "Delegação Provincial de Nampula", tipo: "Delegação", regiao: "Norte", local: "Av. do Trabalho, Nampula" },
  ];

  return (
    <div className="space-y-6 mt-8">
      <div className="bg-white border border-slate-200 p-4 rounded-xl flex gap-3 shadow-sm">
        <Search className="text-slate-400 w-5 h-5 mt-2" />
        <input
          type="text"
          placeholder="Pesquisar por posto, região ou terminal..."
          className="w-full py-2 outline-none text-slate-700"
        />
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 font-bold text-slate-700">Nome da Estância</th>
              <th className="p-4 font-bold text-slate-700">Tipo</th>
              <th className="p-4 font-bold text-slate-700">Região</th>
              <th className="p-4 font-bold text-slate-700">Endereço</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {estancias.map((est, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 flex items-center gap-3 font-medium text-slate-800">
                  <Building2 className="w-4 h-4 text-blue-600" /> {est.nome}
                </td>
                <td className="p-4 text-slate-600">{est.tipo}</td>
                <td className="p-4 text-slate-600 font-semibold">{est.regiao}</td>
                <td className="p-4 text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {est.local}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}