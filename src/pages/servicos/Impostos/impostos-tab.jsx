import { useState } from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";

export default function ImpostosTab() {
  const [openSections, setOpenSections] = useState({ capitulo1: true });

  const toggleSection = (id) => setOpenSections((p) => ({ ...p, [id]: !p[id] }));

  return (
    <div className="space-y-6 mt-8">
      <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-blue-900 mb-2">Imposto Simplificado para Pequenos Contribuintes (ISPC)</h3>
        <p className="text-sm text-blue-700 leading-relaxed">
          Regulamento aprovado pelo Decreto n.º 14/2009, de 14 de Abril.
        </p>
      </div>

      <div className="space-y-4">
        <Capitulo
          id="capitulo1"
          titulo="CAPÍTULO I — Disposições Gerais (Artigos 1.º a 9.º)"
          isOpen={openSections["capitulo1"]}
          toggle={toggleSection}
          artigos={[
            { n: "Artigo 1.º", t: "Âmbito de aplicação", d: "O presente regulamento estabelece a forma e os procedimentos de tributação do ISPC, e aplica-se às pessoas singulares ou colectivas que desenvolvam, em território nacional, actividades agrícolas, industriais ou comerciais, tais como a comercialização agrícola, o comércio ambulante, o comércio geral por grosso, a retalho e misto, e o comércio rural, incluindo em bancas, barracas, quiosques, cantinas, lojas e tendas, bem como a indústria transformadora e a prestação de serviços, incluindo os exportadores e os importadores, de pequena dimensão." },
            { n: "Artigo 2.º", t: "Incidência real", d: "O ISPC incide, nos termos da Lei n.º 5/2009, de 12 de Janeiro, sobre o volume de negócios realizado durante o ano fiscal, pelos sujeitos passivos referidos no artigo anterior, desde que: a) Em relação ao ano anterior, o volume de negócios seja igual ou inferior a 2.500.000,00 MT; e b) Não sejam obrigados, para efeitos dos Impostos sobre o Rendimento, a possuir contabilidade organizada." },
            { n: "Artigo 3.º", t: "Isenção", d: "Estão isentos do ISPC os sujeitos passivos com um volume de negócios até 36 salários mínimos do salário mínimo mais elevado em 31 de Dezembro do ano anterior ao que respeitam os negócios. Sempre que a administração tributária disponha de indícios bastantes para concluir que os sujeitos passivos isentos ultrapassaram em determinado ano o limite de isenção, deve proceder a sua notificação para, no prazo de 15 dias, apresentar a declaração de alterações. O ISPC torna-se exigível a partir do mês seguinte ao da notificação." },
            { n: "Artigo 4.º", t: "Volume de negócios", d: "No início da actividade, o volume de negócios é a previsão efectuada pelo sujeito passivo, após confirmação da administração tributária. Para quem opta pelo ISPC vindo do IVA, IRPC ou IRPS, o volume é o valor das transmissões de bens e/ou prestações de serviços que serviu de base à fixação do rendimento colectável do ano anterior. O volume de negócios referido é relativo à globalidade das actividades exercidas pelo sujeito passivo." },
            { n: "Artigo 5.º", t: "Taxas", d: "As taxas são: Taxa anual de 75.000,00 MT ou 3% sobre o volume de negócios anual. Novos contribuintes que optem pela primeira vez beneficiam da redução da taxa em 50%, no primeiro ano do exercício. O ISPC não é incluído no preço de venda." },
            { n: "Artigo 6.º", t: "Indicação da taxa a aplicar", d: "Os sujeitos passivos devem indicar a taxa pretendida na declaração de início ou de alterações. A alteração da taxa escolhida pode ser feita até ao último dia útil de Dezembro." },
            { n: "Artigo 7.º", t: "Opção pelo ISPC", d: "Sujeitos enquadrados no IVA, IRPC ou IRPS (2.ª categoria) devem apresentar a declaração de alterações nas Direcções de Áreas Fiscais até ao último dia de Dezembro. A opção produz efeitos a partir de 1 de Janeiro do ano seguinte." },
            { n: "Artigo 8.º", t: "Período mínimo de permanência", d: "Os sujeitos passivos são obrigados a permanecer no ISPC por um período mínimo de dois anos, excepto se o volume de negócios ultrapassar o limite, obrigando ao enquadramento em outros regimes." },
            { n: "Artigo 9.º", t: "Cessação da permanência", d: "Cessa a permanência quando se comprovar que o limite anual de 2.500.000,00 MT foi ultrapassado. A administração tributária deve notificar o sujeito passivo até ao último dia de Junho do ano da verificação." },
          ]}
        />

        <Capitulo
          id="capitulo2"
          titulo="CAPÍTULO II — Determinação da matéria colectável, Liquidação e Pagamento (Artigos 10.º a 18.º)"
          isOpen={openSections["capitulo2"]}
          toggle={toggleSection}
          artigos={[
            { n: "Artigo 10.º", t: "Base tributável", d: "A base tributável é o volume de negócios realizado em cada trimestre do respectivo ano civil." },
            { n: "Artigo 11.º", t: "Competência para a liquidação", d: "A liquidação consiste no cálculo do imposto sobre o volume de negócios trimestral. É efectuada pelos próprios sujeitos passivos, em guia apropriada. Na falta, é efectuada pela administração tributária." },
            { n: "Artigo 12.º", t: "Rectificação do imposto", d: "Erros materiais ou de cálculo devem ser rectificados até ao fim do quinto ano seguinte à ocorrência do facto." },
            { n: "Artigo 13.º", t: "Liquidação adicional", d: "Procede-se a liquidação adicional em caso de imposto devido superior ao liquidado, erros de facto ou direito, omissões ou elementos apurados em fiscalização." },
            { n: "Artigo 14.º", t: "Caducidade do direito à liquidação", d: "O direito à liquidação caduca até ao fim do quinto ano seguinte ao da ocorrência do facto gerador." },
            { n: "Artigo 15.º", t: "Prazo de pagamento", d: "O pagamento é trimestral (Abril, Julho, Outubro, Janeiro). A taxa anual pode ser paga numa única prestação em Abril. A falta de pagamento nos prazos gera juros compensatórios." },
            { n: "Artigo 16.º", t: "Pagamento liquidado pelos serviços", d: "Em liquidações pela administração tributária, o prazo de pagamento é de 30 dias após notificação." },
            { n: "Artigo 17.º", t: "Local de pagamento", d: "Efectuado nas unidades da Autoridade Tributária (Direcções de Áreas Fiscais, postos de fronteira, fiscais e de cobrança)." },
            { n: "Artigo 18.º", t: "Meios de pagamento", d: "Aceita-se moeda nacional, numerário, cheque, débito em conta, transferência ou vale postal. A extinção da dívida por cheque depende do recebimento efectivo da importância." },
          ]}
        />

        <Capitulo
          id="capitulo3"
          titulo="CAPÍTULO III — Obrigações Acessórias (Artigos 19.º a 24.º)"
          isOpen={openSections["capitulo3"]}
          toggle={toggleSection}
          artigos={[
            { n: "Artigo 19.º", t: "Obrigações declarativas", d: "Os sujeitos passivos do ISPC são obrigados a apresentar as declarações de início, de alterações ou de cessação de actividade. A AT deve prestar assistência e esclarecimentos necessários no ato da receção." },
            { n: "Artigo 20.º", t: "Declaração de início, de alterações ou de cessação", d: "Devem ser entregues em duplicado. Prazos: 15 dias para alterações após ocorrência; 30 dias para cessação de actividade." },
            { n: "Artigo 21.º", t: "Declaração verbal", d: "Podem ser substituídas por declaração verbal, registada pela AT e confirmada pelo contribuinte, tendo valor legal equivalente às declarações escritas." },
            { n: "Artigo 22.º", t: "Obrigações especiais", d: "Sujeitos isentos devem apresentar até o último dia de Fevereiro, em duplicado, uma declaração de compras e vendas do ano anterior." },
            { n: "Artigo 23.º", t: "Comprovação de vendas", d: "Obrigatoriedade de emissão de talões de venda (modelo aprovado pela AT) se solicitados. Operações devem ser registadas diariamente em folhas de caixa num prazo de 30 dias." },
            { n: "Artigo 24.º", t: "Registo das operações", d: "Registo mensal de compras e vendas (montante global diário). Isentos registam as aquisições de bens e serviços. Utilizar modelos fornecidos pela AT." },
          ]}
        />

        <Capitulo
          id="capitulo4"
          titulo="CAPÍTULO IV — Disposições Finais (Artigos 25.º a 28.º)"
          isOpen={openSections["capitulo4"]}
          toggle={toggleSection}
          artigos={[
            { n: "Artigo 25.º", t: "Dever de fiscalização em geral", d: "O cumprimento das obrigações é fiscalizado pelos órgãos competentes, nos termos da Lei Geral Tributária e do Regulamento de Fiscalização. O regime específico é definido por Diploma do Ministro das Finanças." },
            { n: "Artigo 26.º", t: "Registo dos sujeitos passivos", d: "A AT organiza o registo com base nas declarações de início e de alterações, mantendo-o actualizado com base nos novos elementos declarados." },
            { n: "Artigo 27.º", t: "Classificação das actividades", d: "As actividades seguem a Classificação das Actividades Económicas (CAE) do Instituto Nacional de Estatística." },
            { n: "Artigo 28.º", t: "Normas supletivas", d: "Aplica-se supletivamente o disposto nos Códigos do IVA, IRPC, IRPS e demais legislação tributária aplicável no que não contrariar este regulamento." },
          ]}
        />

        <Capitulo
          id="capitulo5"
          titulo="CAPÍTULO V — Disposições Transitórias (Artigo 29.º)"
          isOpen={openSections["capitulo5"]}
          toggle={toggleSection}
          artigos={[
            { n: "Artigo 29.º", t: "Opção pelo ISPC em 2009", d: "Excepcionalmente, para o ano de 2009, sujeitos integrados no IVA, IRPC e IRPS (2ª categoria) puderam optar pelo ISPC mediante entrega de declaração até ao último dia de Junho de 2009, com efeitos a partir do mês seguinte. Nestes casos, houve a obrigatoriedade de regularização da situação tributária anterior no prazo de 30 dias." },
          ]}
        />
      </div>

      <div className="flex gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100 text-amber-800">
        <Info className="w-5 h-5 shrink-0" />
        <p className="text-xs font-medium">Nota: Para casos omissos ou procedimentos detalhados, consulte a legislação completa ou dirija-se a uma Direção de Área Fiscal.</p>
      </div>
    </div>
  );
}

function Capitulo({ id, titulo, isOpen, toggle, artigos }) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button onClick={() => toggle(id)} className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors">
        <span className="font-bold text-slate-800 text-sm">{titulo}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-slate-50 text-xs text-slate-700 leading-relaxed border-t border-slate-100 space-y-4">
          {artigos.map((a, idx) => (
            <div key={idx}>
              <strong className="block text-slate-900">{a.n} — {a.t}</strong>
              {a.d}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}