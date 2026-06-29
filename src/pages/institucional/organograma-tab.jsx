import { Download, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { useState } from "react";

const PDF_URL = "https://media.base44.com/files/public/6a10556912996cfabed12a84/dc72f6af5_OrganogramaGeraldaAT.pdf";

// Full org chart data from the official PDF
const ORG = {
  directionais: [
    {
      label: "DG Alfândegas (DGA)",
      color: "bg-blue-700",
      subs: [
        "Dir. G. Adj. para a área das Org. e Métodos",
        "Dir. G. Adj. para a área das Operações",
        "Dir. G. Adj. para a área de Invest. e Inteligência",
        "Dir. G. Adj. para a área de Org. M. e e-Tributação",
        "Dir. de Regimes e Valores Aduaneiros",
        "Dir. de Ordem e Disciplina Paramilitar",
        "Dir. de Normação e Procedimentos Aduaneiros",
        "Dir. de Contencioso Aduaneiro",
        "Dir. de Auditoria, Investigação e Inteligência",
      ],
    },
    {
      label: "DG Impostos (DGI)",
      color: "bg-indigo-700",
      subs: [
        "Dir. G. Adj. para a área das UGC's",
        "Dir. G. Adj. para a área das Operações",
        "Dir. de Reembolsos",
        "Dir. de Normação Tributária",
        "Dir. de Controlo de Cobrança, Cadastro e Benefícios Fiscais",
        "Dir. de Contencioso Tributário",
        "Dir. de Auditoria e Fiscalização Tributária",
      ],
    },
    {
      label: "DGS Comuns (DGSC)",
      color: "bg-slate-700",
      subs: [
        "Dir. G. Adj. para a área de F. e R. Humanos",
        "Dir. G. Adj. para a área das Finanças",
        "Dir. G. Adj. para a área de L. e Tec. de Informação",
        "Dir. G. Adj. para a área Aduaneira",
        "Dir. de Recursos Humanos",
        "Dir. de Logística e Infra-Estrutura",
        "Dir. de Tecnologia e Informação e Comunicação",
        "Dir. de Formação",
        "Dir. de Finanças",
        "Dir. de Asseguramento Geral",
      ],
    },
    {
      label: "GC Interno (GCI)",
      color: "bg-amber-700",
      subs: [
        "Dir. G. Adj. para a área Fiscal",
        "Dir. G. Adj. para a área R. Legislativa",
        "Dir. de Irregularidade de Pessoal e Anti-Corrupção",
        "Dir. de Controlo e Inspecção e Auditoria",
      ],
    },
    {
      label: "GPEC Internacional (GPECI)",
      color: "bg-teal-700",
      subs: [
        "Dir. G. Adj. para a área de P. T. C de Receita e Recursos Naturais",
        "Dir. de Planeamento e Estudos",
        "Dir. De Análise e Previsão da Receita",
        "Dir. de Política Tributária",
        "Dir. de Cooperação Internacional",
      ],
    },
  ],
  regional: [
    {
      label: "Direcção Regional Sul (DRS)",
      delegacoes: [
        "Deleg. Provincial de Maputo Cidade",
        "Deleg. Provincial de Maputo Província",
        "Deleg. Provincial de Gaza",
        "Deleg. Provincial de Inhambane",
      ],
    },
    {
      label: "Direcção Regional Centro (DRC)",
      delegacoes: [
        "Deleg. Provincial de Sofala",
        "Deleg. Provincial de Manica",
        "Deleg. Provincial de Tete",
        "Deleg. Provincial de Zambézia",
      ],
    },
    {
      label: "Direcção Regional Norte (DRN)",
      delegacoes: [
        "Deleg. Provincial de Nampula",
        "Deleg. Provincial de Niassa",
        "Deleg. Provincial de Cabo Delgado",
      ],
    },
  ],
};

function OrgNode({ label, role, className = "" }) {
  return (
    <div className={`rounded-lg border px-3 py-2 text-center shadow-sm min-w-[160px] ${className}`}>
      <div className="text-xs font-semibold leading-tight">{label}</div>
      {role && <div className="text-[10px] opacity-70 mt-0.5">{role}</div>}
    </div>
  );
}

function Connector({ horizontal = false }) {
  if (horizontal) return <div className="h-px bg-slate-300 flex-1" />;
  return <div className="w-px h-5 bg-slate-300 mx-auto" />;
}

export default function OrganogramaTab() {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="section-label">Hierarquia Orgânica</div>
          <h2 className="text-2xl font-bold text-slate-900 mt-3 tracking-tight">Estrutura de Governação da AT</h2>
          <p className="text-sm text-slate-500 mt-1.5 max-w-xl">
            Árvore oficial de coordenação e dependência diretiva da instituição, conforme o Organograma Geral publicado.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button onClick={() => setZoom(z => Math.max(0.5, z - 0.1))} className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition text-slate-600" title="Reduzir"><ZoomOut className="w-4 h-4" /></button>
          <span className="text-xs text-slate-500 w-10 text-center">{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom(z => Math.min(2, z + 0.1))} className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition text-slate-600" title="Ampliar"><ZoomIn className="w-4 h-4" /></button>
          <button onClick={() => setZoom(1)} className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition text-slate-600" title="Repor"><RotateCcw className="w-4 h-4" /></button>
          <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition">
            <Download className="w-3.5 h-3.5" /> PDF Oficial
          </a>
        </div>
      </div>

      {/* Scrollable org chart */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-auto">
        <div style={{ transform: `scale(${zoom})`, transformOrigin: "top center", transition: "transform 0.2s", padding: "32px 24px", minWidth: "900px" }}>

          {/* Top governance tier */}
          <div className="flex flex-col items-center gap-0">
            <div className="flex items-start justify-center gap-6 flex-wrap">
              <OrgNode label="Conselho Superior Tributário (CST)" role="Órgão Deliberativo Superior" className="bg-slate-800 text-white border-slate-700" />
              <OrgNode label="Conselho de Fiscalidade (CF)" role="Órgão Consultivo" className="bg-slate-700 text-white border-slate-600" />
            </div>
            <Connector />
            <OrgNode label="Presidente (P. AT)" role="Órgão Executivo Máximo" className="bg-blue-900 text-white border-blue-800 min-w-[200px]" />
            <Connector />
            <div className="flex items-start justify-center gap-6 flex-wrap">
              <OrgNode label="Conselho Directivo" className="bg-blue-800 text-white border-blue-700" />
              <OrgNode label="Gabinete de Comunicação e Imagem" className="bg-slate-100 text-slate-700 border-slate-200" />
              <OrgNode label="Gabinete do Presidente" className="bg-slate-100 text-slate-700 border-slate-200" />
            </div>
          </div>

          {/* Horizontal line */}
          <div className="relative flex items-center justify-center my-5">
            <div className="absolute left-0 right-0 h-px bg-slate-300" />
            <div className="w-px h-5 bg-slate-300 relative z-10 bg-white" />
          </div>

          {/* 5 Main Directorates */}
          <div className="flex gap-3 justify-center flex-wrap lg:flex-nowrap">
            {ORG.directionais.map((dir, i) => (
              <div key={i} className="flex flex-col items-center min-w-[160px] max-w-[200px] flex-1">
                <div className={`${dir.color} text-white rounded-lg px-3 py-2.5 text-center w-full shadow-sm`}>
                  <div className="text-xs font-bold leading-tight">{dir.label}</div>
                </div>
                <div className="w-px h-4 bg-slate-300" />
                <div className="w-full border border-slate-200 rounded-lg bg-slate-50 divide-y divide-slate-100">
                  {dir.subs.map((sub, j) => (
                    <div key={j} className="px-2.5 py-1.5 text-[10px] text-slate-600 leading-tight">{sub}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Regional tier */}
          <div className="relative flex items-center justify-center my-5">
            <div className="absolute left-0 right-0 h-px bg-slate-300" />
          </div>

          <div className="flex gap-4 justify-center flex-wrap lg:flex-nowrap">
            {ORG.regional.map((reg, i) => (
              <div key={i} className="flex flex-col items-center min-w-[180px] flex-1 max-w-[220px]">
                <div className="bg-blue-600 text-white rounded-lg px-3 py-2.5 text-center w-full shadow-sm">
                  <div className="text-xs font-bold">{reg.label}</div>
                </div>
                <div className="w-px h-4 bg-slate-300" />
                <div className="w-full border border-slate-200 rounded-lg bg-white divide-y divide-slate-100">
                  {reg.delegacoes.map((d, j) => (
                    <div key={j} className="px-2.5 py-1.5 text-[10px] text-slate-600 leading-tight">{d}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* PDF embed for reference */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <p className="text-xs text-slate-500 mb-3 font-medium">📄 Organograma Oficial (PDF) — visualização em linha:</p>
        <iframe
          src={`${PDF_URL}#toolbar=0&navpanes=0`}
          className="w-full rounded-lg border border-slate-200"
          style={{ height: "600px" }}
          title="Organograma Geral da AT"
        />
      </div>
    </div>
  );
}