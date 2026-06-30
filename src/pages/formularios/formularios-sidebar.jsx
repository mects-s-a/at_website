import { ReceiptText, Anchor, Building2, BookOpen, FileText, ChevronDown } from "lucide-react";

export const SECTIONS = [
  {
    id: "fiscal",
    label: "Formulários Fiscais",
    icon: ReceiptText,
    cats: ["declaracoes-fiscais", "preco-transferencia", "dupla-tributacao"],
  },
  {
    id: "aduaneiro",
    label: "Formulários Aduaneiros",
    icon: Anchor,
    cats: ["formularios-aduaneiros"],
  },
  {
    id: "institucional",
    label: "Documentação Institucional",
    icon: Building2,
    cats: ["documentacao-institucional"],
  },
  {
    id: "publicacoes",
    label: "Publicações",
    icon: BookOpen,
    cats: ["legislacao-publicacoes"],
  },
];

export default function FormulariosSidebar({ formCategories, activeTab, setActiveTab, openSections, toggleSection }) {
  return (
    <aside className="w-72 shrink-0 select-none">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden sticky top-24">
        <div className="px-5 pt-4 pb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
          Categorias
        </div>

        {SECTIONS.map((section) => {
          const Icon = section.icon;
          const isOpen = openSections[section.id];
          return (
            <div key={section.id} className="border-b border-slate-100 last:border-0">
              <button
                onClick={() => toggleSection(section.id)}
                className="group flex items-center justify-between w-full px-5 py-3.5 text-left transition-all hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-[13.5px] font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">{section.label}</span>
                </div>
                <ChevronDown className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
              </button>

              <div className={`transition-all duration-200 overflow-hidden pl-9 pr-4 space-y-0.5 ${isOpen ? "max-h-60 py-2 opacity-100" : "max-h-0 opacity-0"}`}>
                {section.cats.map((catId) => {
                  const cat = formCategories.find((c) => c.id === catId);
                  if (!cat) return null;
                  const isActive = activeTab === catId;
                  return (
                    <button
                      key={catId}
                      onClick={() => setActiveTab(catId)}
                      className={`flex items-center gap-2 w-full px-3 py-2 text-left text-[13px] rounded-lg transition-all border-l-2 ${
                        isActive
                          ? "border-blue-600 text-blue-600 font-semibold bg-blue-50/60"
                          : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5 shrink-0 opacity-60" />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="px-5 py-4 mt-1 border-t border-slate-100 bg-slate-50/50">
          <p className="text-xs text-slate-500 leading-relaxed">
            Para consultas, ligue para{" "}
            <span className="font-bold text-blue-600">1266</span>{" "}
            (linha gratuita nacional).
          </p>
        </div>
      </div>
    </aside>
  );
}