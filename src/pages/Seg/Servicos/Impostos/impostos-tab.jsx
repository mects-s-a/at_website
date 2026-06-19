import { useState } from "react";
import { ChevronDown, ChevronUp, FileText, Info } from "lucide-react";

export default function ImpostosTab() {
  const [openSection, setOpenSection] = useState("capitulo1");

  const toggleSection = (id) => setOpenSection(openSection === id ? null : id);

  return (
    <div className="space-y-6 mt-8">
      {/* Introdução */}
      <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-blue-900 mb-2">Imposto Simplificado para Pequenos Contribuintes (ISPC)</h3>
        <p className="text-sm text-blue-700 leading-relaxed">
          Regulamento aprovado pelo Decreto n.º 14/2009, de 14 de Abril.
        </p>
      </div>

      {/* Conteúdo em Acordeão */}
      <div className="space-y-4">
        
        {/* CAPÍTULO I */}
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <button onClick={() => toggleSection("capitulo1")} className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors">
            <span className="font-bold text-slate-800 text-sm">CAPÍTULO I - Disposições Gerais (Artigos 1.º a 9.º)</span>
            {openSection === "capitulo1" ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
          {openSection === "capitulo1" && (
            <div className="p-4 bg-slate-50 text-xs text-slate-700 leading-relaxed border-t border-slate-100 space-y-4">
              <div><strong className="block text-slate-900">Artigo 1.º - Âmbito de aplicação</strong> O presente regulamento estabelece a forma e os procedimentos de tributação do ISPC, e aplica-se às pessoas singulares ou colectivas que desenvolvam, em território nacional, actividades agrícolas, industriais ou comerciais, tais como a comercialização agrícola, o comércio ambulante, o comércio geral por grosso, a retalho e misto, e o comércio rural, incluindo em bancas, barracas, quiosques, cantinas, lojas e tendas, bem como a indústria transformadora e a prestação de serviços, incluindo os exportadores e os importadores, de pequena dimensão.</div>
              <div><strong className="block text-slate-900">Artigo 2.º - Incidência real</strong> O ISPC incide, nos termos da Lei n.º 5/2009, de 12 de Janeiro, sobre o volume de negócios realizado durante o ano fiscal, pelos sujeitos passivos referidos no artigo anterior, desde que: a) Em relação ao ano anterior, o volume de negócios seja igual ou inferior a 2.500.000,00MT; e b) Não sejam obrigados, para efeitos dos Impostos sobre o Rendimento, a possuir contabilidade organizada.</div>
              <div><strong className="block text-slate-900">Artigo 3.º - Isenção</strong> Estão isentos do ISPC os sujeitos passivos com um volume de negócios até 36 salários mínimos do salário mínimo mais elevado em 31 de Dezembro do ano anterior ao que respeitam os negócios. Sempre que a administração tributária disponha de indícios bastantes para concluir que os sujeitos passivos isentos ultrapassaram em determinado ano o limite de isenção, deve proceder a sua notificação para, no prazo de 15 dias, apresentar a declaração de alterações. O ISPC torna-se exigível a partir do mês seguinte ao da notificação.</div>
              <div><strong className="block text-slate-900">Artigo 4.º - Volume de negócios</strong> No início da actividade, o volume de negócios é a previsão efectuada pelo sujeito passivo, após confirmação da administração tributária. Para quem opta pelo ISPC vindo do IVA, IRPC ou IRPS, o volume é o valor das transmissões de bens e/ou prestações de serviços que serviu de base à fixação do rendimento colectável do ano anterior. O volume de negócios referido é relativo à globalidade das actividades exercidas pelo sujeito passivo.</div>
              <div><strong className="block text-slate-900">Artigo 5.º - Taxas</strong> As taxas são: Taxa anual de 75.000,00 MT ou 3% sobre o volume de negócios anual. Novos contribuintes que optem pela primeira vez beneficiam da redução da taxa em 50%, no primeiro ano do exercício. O ISPC não é incluído no preço de venda.</div>
              <div><strong className="block text-slate-900">Artigo 6.º - Indicação da taxa a aplicar</strong> Os sujeitos passivos devem indicar a taxa pretendida na declaração de início ou de alterações. A alteração da taxa escolhida pode ser feita até ao último dia útil de Dezembro.</div>
              <div><strong className="block text-slate-900">Artigo 7.º - Opção pelo ISPC</strong> Sujeitos enquadrados no IVA, IRPC ou IRPS (2.ª categoria) devem apresentar a declaração de alterações nas Direcções de Áreas Fiscais até ao último dia de Dezembro. A opção produz efeitos a partir de 1 de Janeiro do ano seguinte.</div>
              <div><strong className="block text-slate-900">Artigo 8.º - Período mínimo de permanência</strong> Os sujeitos passivos são obrigados a permanecer no ISPC por um período mínimo de dois anos, excepto se o volume de negócios ultrapassar o limite, obrigando ao enquadramento em outros regimes.</div>
              <div><strong className="block text-slate-900">Artigo 9.º - Cessação da permanência</strong> Cessa a permanência quando se comprovar que o limite anual de 2.500.000,00MT foi ultrapassado. A administração tributária deve notificar o sujeito passivo até ao último dia de Junho do ano da verificação.</div>
            </div>
          )}
        </div>

        {/* CAPÍTULO II */}
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <button onClick={() => toggleSection("capitulo2")} className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors">
            <span className="font-bold text-slate-800 text-sm">CAPÍTULO II - Determinação da matéria colectável, Liquidação e Pagamento (Artigos 10.º a 18.º)</span>
            {openSection === "capitulo2" ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
          {openSection === "capitulo2" && (
            <div className="p-4 bg-slate-50 text-xs text-slate-700 leading-relaxed border-t border-slate-100 space-y-4">
              <div><strong className="block text-slate-900">Artigo 10.º - Base tributável</strong> A base tributável é o volume de negócios realizado em cada trimestre do respectivo ano civil.</div>
              <div><strong className="block text-slate-900">Artigo 11.º - Competência para a liquidação</strong> A liquidação consiste no cálculo do imposto sobre o volume de negócios trimestral. É efectuada pelos próprios sujeitos passivos, em guia apropriada. Na falta, é efectuada pela administração tributária.</div>
              <div><strong className="block text-slate-900">Artigo 12.º - Rectificação do imposto</strong> Erros materiais ou de cálculo devem ser rectificados até ao fim do quinto ano seguinte à ocorrência do facto.</div>
              <div><strong className="block text-slate-900">Artigo 13.º - Liquidação adicional</strong> Procede-se a liquidação adicional em caso de imposto devido superior ao liquidado, erros de facto ou direito, omissões ou elementos apurados em fiscalização.</div>
              <div><strong className="block text-slate-900">Artigo 14.º - Caducidade do direito à liquidação</strong> O direito à liquidação caduca até ao fim do quinto ano seguinte ao da ocorrência do facto gerador.</div>
              <div><strong className="block text-slate-900">Artigo 15.º - Prazo de pagamento</strong> O pagamento é trimestral (Abril, Julho, Outubro, Janeiro). A taxa anual pode ser paga numa única prestação em Abril. A falta de pagamento nos prazos gera juros compensatórios.</div>
              <div><strong className="block text-slate-900">Artigo 16.º - Pagamento liquidado pelos serviços</strong> Em liquidações pela administração tributária, o prazo de pagamento é de 30 dias após notificação.</div>
              <div><strong className="block text-slate-900">Artigo 17.º - Local de pagamento</strong> Efectuado nas unidades da Autoridade Tributária (Direcções de Áreas Fiscais, postos de fronteira, fiscais e de cobrança).</div>
              <div><strong className="block text-slate-900">Artigo 18.º - Meios de pagamento</strong> Aceita-se moeda nacional, numerário, cheque, débito em conta, transferência ou vale postal. A extinção da dívida por cheque depende do recebimento efectivo da importância.</div>
            </div>
          )}
        </div>

        {/* CAPÍTULO III */}
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <button onClick={() => toggleSection("capitulo3")} className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors">
            <span className="font-bold text-slate-800 text-sm">CAPÍTULO III - Obrigações Acessórias (Artigos 19.º a 24.º)</span>
            {openSection === "capitulo3" ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
          {openSection === "capitulo3" && (
            <div className="p-4 bg-slate-50 text-xs text-slate-700 leading-relaxed border-t border-slate-100 space-y-4">
              <div><strong className="block text-slate-900">Artigo 19.º - Obrigações declarativas</strong> Os sujeitos passivos do ISPC são obrigados a apresentar as declarações de inicio, de alterações ou de cessação de actividade. A AT deve prestar assistência e esclarecimentos necessários no ato da receção.</div>
              <div><strong className="block text-slate-900">Artigo 20.º - Declaração de início, de alterações ou de cessação</strong> Devem ser entregues em duplicado. Prazos: 15 dias para alterações após ocorrência; 30 dias para cessação de actividade.</div>
              <div><strong className="block text-slate-900">Artigo 21.º - Declaração verbal</strong> Podem ser substituídas por declaração verbal, registada pela AT e confirmada pelo contribuinte, tendo valor legal equivalente às declarações escritas.</div>
              <div><strong className="block text-slate-900">Artigo 22.º - Obrigações especiais</strong> Sujeitos isentos devem apresentar até o último dia de Fevereiro, em duplicado, uma declaração de compras e vendas do ano anterior.</div>
              <div><strong className="block text-slate-900">Artigo 23.º - Comprovação de vendas</strong> Obrigatoriedade de emissão de talões de venda (modelo aprovado pela AT) se solicitados. Operações devem ser registadas diariamente em folhas de caixa num prazo de 30 dias.</div>
              <div><strong className="block text-slate-900">Artigo 24.º - Registo das operações</strong> Registo mensal de compras e vendas (montante global diário). Isentos registam as aquisições de bens e serviços. Utilizar modelos fornecidos pela AT.</div>
            </div>
          )}
        </div>

        {/* CAPÍTULO IV */}
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <button onClick={() => toggleSection("capitulo4")} className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors">
            <span className="font-bold text-slate-800 text-sm">CAPÍTULO IV - Disposições Finais (Artigos 25.º a 28.º)</span>
            {openSection === "capitulo4" ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
          {openSection === "capitulo4" && (
            <div className="p-4 bg-slate-50 text-xs text-slate-700 leading-relaxed border-t border-slate-100 space-y-4">
              <div><strong className="block text-slate-900">Artigo 25.º - Dever de fiscalização em geral</strong> O cumprimento das obrigações é fiscalizado pelos órgãos competentes, nos termos da Lei Geral Tributária e do Regulamento de Fiscalização. O regime específico é definido por Diploma do Ministro das Finanças.</div>
              <div><strong className="block text-slate-900">Artigo 26.º - Registo dos sujeitos passivos</strong> A AT organiza o registo com base nas declarações de início e de alterações, mantendo-o actualizado com base nos novos elementos declarados.</div>
              <div><strong className="block text-slate-900">Artigo 27.º - Classificação das actividades</strong> As actividades seguem a Classificação das Actividades Económicas (CAE) do Instituto Nacional de Estatística.</div>
              <div><strong className="block text-slate-900">Artigo 28.º - Normas supletivas</strong> Aplica-se supletivamente o disposto nos Códigos do IVA, IRPC, IRPS e demais legislação tributária aplicável no que não contrariar este regulamento.</div>
            </div>
          )}
        </div>

        {/* CAPÍTULO V */}
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <button onClick={() => toggleSection("capitulo5")} className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors">
            <span className="font-bold text-slate-800 text-sm">CAPÍTULO V - Disposições Transitórias (Artigo 29.º)</span>
            {openSection === "capitulo5" ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
          {openSection === "capitulo5" && (
            <div className="p-4 bg-slate-50 text-xs text-slate-700 leading-relaxed border-t border-slate-100 space-y-4">
              <div><strong className="block text-slate-900">Artigo 29.º - Opção pelo ISPC em 2009</strong> Excepcionalmente, para o ano de 2009, sujeitos integrados no IVA, IRPC e IRPS (2ª categoria) puderam optar pelo ISPC mediante entrega de declaração até ao último dia de Junho de 2009, com efeitos a partir do mês seguinte. Nestes casos, houve a obrigatoriedade de regularização da situação tributária anterior no prazo de 30 dias.</div>
            </div>
          )}
        </div>

      </div>

      {/* Aviso */}
      <div className="flex gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100 text-amber-800">
        <Info className="w-5 h-5 shrink-0" />
        <p className="text-xs font-medium">Nota: Para casos omissos ou procedimentos detalhados, consulte a legislação completa ou dirija-se a uma Direção de Área Fiscal.</p>
      </div>
    </div>
  );
}