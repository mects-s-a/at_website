import { useLocation } from "react-router-dom";
import { Search, Download, Eye } from "lucide-react";

const impostosLegis = {
  codigos: [
    { id: "irps", sigla: "IRPS", nome: "Imposto sobre o Rendimento de Pessoas Singulares", leis: ["Lei n.º 33/2007", "Decreto n.º 8/2008"] },
    { id: "irpc", sigla: "IRPC", nome: "Imposto sobre o Rendimento de Pessoas Colectivas", leis: ["Lei n.º 34/2007", "Lei n.º 19/2013"] },
    { id: "iva", sigla: "IVA", nome: "Imposto sobre o Valor Acrescentado", leis: ["Lei n.º 32/2007", "Decreto n.º 7/2008"] },
    { id: "ispc", sigla: "ISPC", nome: "Imposto Simplificado para Pequenos Contribuintes", leis: ["Lei n.º 5/2009", "Decreto n.º 14/2009"] },
  ],
  decretos: [
    { id: "ice", sigla: "ICE", nome: "Imposto sobre Consumos Específicos", leis: ["Lei n.º 7/2025", "Decreto n.º 12/2024"] },
    { id: "ts", sigla: "TS", nome: "Taxa de Selo", leis: ["Decreto n.º 6/2008", "Diploma Ministerial"] },
  ],
};

export default function FiscalContent() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const activeCat = queryParams.get("cat") || "codigos";
  const items = impostosLegis[activeCat] || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-border shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input type="text" placeholder="Pesquise por código, artigo ou palavra-chave..." className="w-full pl-10 pr-4 py-2 border border-border rounded-lg text-sm bg-muted/30 focus:outline-none focus:border-primary transition-colors" />
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Filtrar</button>
      </div>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((imp) => (
            <div key={imp.id} className="bg-white border border-border rounded-xl p-5 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2.5 py-1 bg-primary/10 text-primary rounded-md">{imp.sigla}</span>
                  <span className="text-xs text-muted-foreground">Moçambique</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-3 leading-snug">{imp.nome}</h3>
                <div className="space-y-1.5 mb-4">
                  {imp.leis.map((lei, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/40 px-2 py-1 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      {lei}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-border mt-auto">
                <button className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium border border-border py-2 px-3 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"><Eye className="w-3.5 h-3.5" /> Ver Código</button>
                <button className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium bg-primary text-primary-foreground py-2 px-3 rounded-lg hover:opacity-90 transition-opacity"><Download className="w-3.5 h-3.5" /> Baixar PDF</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed rounded-xl text-muted-foreground text-sm">Nenhum documento disponível para esta categoria específica.</div>
      )}
    </div>
  );
}