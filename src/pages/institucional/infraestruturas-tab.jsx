import { useState } from "react";
import { Search } from "lucide-react";

const infraData = [
  { id: 1, name: "Delegação Provincial de Maputo",      type: "Delegação", region: "sul",    address: "Av. 25 de Setembro, Maputo" },
  { id: 2, name: "Fronteira de Ressano Garcia",         type: "Fronteira", region: "sul",    address: "Ressano Garcia, Moamba" },
  { id: 3, name: "Delegação Provincial de Sofala",      type: "Delegação", region: "centro", address: "Rua do Governador, Beira" },
  { id: 4, name: "Porto da Beira — Terminal Aduaneiro", type: "Terminal",  region: "centro", address: "Zona Portuária, Beira" },
  { id: 5, name: "Delegação Provincial de Nampula",     type: "Delegação", region: "norte",  address: "Av. do Trabalho, Nampula" },
  { id: 6, name: "Porto de Nacala",                     type: "Terminal",  region: "norte",  address: "Nacala Porto" },
];

export default function InfraestruturasTab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("todos");

  const filtered = infraData.filter(
    (item) =>
      (selectedRegion === "todos" || item.region === selectedRegion) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="section-label">Presença Nacional</div>
      <h2 className="section-title">Postos e Redes de Fiscalização</h2>
      <p className="section-desc">Visão macro sobre os pontos de atendimento e alfândegas operacionais.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="infra-card" data-num="11">
          <label>Delegações Principais</label>
          <div className="value">11</div>
          <p>Uma infraestrutura central activa em cada capital provincial.</p>
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

      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Pesquisar infraestrutura..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        <div className="flex items-center gap-1.5 p-1 bg-slate-200/60 rounded-lg w-full md:w-auto">
          {["todos", "sul", "centro", "norte"].map((r) => (
            <button
              key={r}
              onClick={() => setSelectedRegion(r)}
              className={`flex-1 md:flex-initial px-4 py-1.5 rounded-md text-xs font-medium capitalize transition-all whitespace-nowrap ${
                selectedRegion === r ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

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
            {filtered.length > 0 ? filtered.map((item) => (
              <tr key={item.id}>
                <td style={{ fontWeight: 600, color: "var(--sat-fg)" }}>{item.name}</td>
                <td>
                  <span style={{ fontSize: "11px", background: "var(--sat-muted-bg)", padding: "3px 8px", borderRadius: "12px", color: "var(--sat-primary)", fontWeight: 600 }}>
                    {item.type}
                  </span>
                </td>
                <td style={{ textTransform: "capitalize" }}>{item.region}</td>
                <td style={{ fontSize: "13px" }}>{item.address}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "24px", color: "var(--sat-muted-fg)" }}>
                  Nenhuma infraestrutura corresponde aos critérios selecionados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}