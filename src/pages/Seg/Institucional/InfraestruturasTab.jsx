import { useState } from "react";
import { Search } from "lucide-react";

const infraData = [
  { id: 1, name: "Delegação Provincial de Maputo", type: "Delegação", region: "sul", address: "Av. 25 de Setembro, Maputo" },
  { id: 2, name: "Fronteira de Ressano Garcia", type: "Fronteira", region: "sul", address: "Ressano Garcia, Moamba" },
  { id: 3, name: "Delegação Provincial de Sofala", type: "Delegação", region: "centro", address: "Rua do Governador, Beira" },
  { id: 4, name: "Porto da Beira - Terminal Aduaneiro", type: "Terminal", region: "centro", address: "Zona Portuária, Beira" },
  { id: 5, name: "Delegação Provincial de Nampula", type: "Delegação", region: "norte", address: "Av. do Trabalho, Nampula" },
  { id: 6, name: "Porto de Nacala", type: "Terminal", region: "norte", address: "Nacala Porto" },
];

export default function InfraestuturasTab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("todos");

  const filteredInfra = infraData.filter(item =>
    (selectedRegion === "todos" || item.region === selectedRegion) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
  );
}
