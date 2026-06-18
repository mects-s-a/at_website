import { useLocation } from "react-router-dom";
import { Search, Download, Eye } from "lucide-react";

const geralLegis = {
  leis: [
    { id: "lei-org", sigla: "LOAT", nome: "Lei Orgânica da Autoridade Tributária de Moçambique", leis: ["Lei n.º 1/2006", "Revisão Lei n.º 12/2016"] },
    { id: "lei-systaf", sigla: "SISTAFE", nome: "Lei do Sistema de Administração Financeira do Estado", leis: ["Lei n.º 14/2020"] }
  ],
  decretos: [
    { id: "dec-at", sigla: "EAT", nome: "Estatuto de Pessoal da Autoridade Tributária", leis: ["Decreto n.º 58/2008"] },
    { id: "dec-reg", sigla: "Reg. LOAT", nome: "Regulamento da Lei Orgânica da AT", leis: ["Decreto n.º 6/2007"] }
  ],
  diplomas: [
    { id: "dip-org", sigla: "DM", nome: "Regulamento Interno das Unidades Orgânicas da AT", leis: ["Diploma Ministerial n.º 22/2010"] }
  ]
};

export default function GeralContent() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const activeCat = queryParams.get("cat") || "leis"; // 'leis' é o padrão inicial para Geral

  const items = geralLegis[activeCat] || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-border shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Pesquise na legislação geral..."
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg text-sm bg-muted/30 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white border border-border rounded-xl p-5 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2.5 py-1 bg-primary/10 text-primary rounded-md">{item.sigla}</span>
                  <span className="text-xs text-muted-foreground">Geral</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-3 leading-snug">{item.nome}</h3>
                <div className="space-y-1.5 mb-4">
                  {item.leis.map((l, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/40 px-2 py-1 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      {l}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-border mt-auto">
                <button className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium border border-border py-2 px-3 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"><Eye className="w-3.5 h-3.5" /> Ver Documento</button>
                <button className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium bg-primary text-primary-foreground py-2 px-3 rounded-lg hover:opacity-90"><Download className="w-3.5 h-3.5" /> PDF</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed rounded-xl text-muted-foreground text-sm">Nenhum documento disponível para esta categoria.</div>
      )}
    </div>
  );
}