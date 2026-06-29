// ─────────────────────────────────────────────────────────────────────────────
// CENTRAL FORMS DATA
// Categories and their respective downloadable forms/documents.
// Based on form types available at at.gov.mz
// ─────────────────────────────────────────────────────────────────────────────

export const formCategories = [
  {
    id: "declaracoes-fiscais",
    label: "Declarações Fiscais",
    desc: "Modelos oficiais para declaração de impostos.",
    forms: [
      { title: "Modelo A — IVA", desc: "Imposto Sobre o Valor Acrescentado", size: "PDF", category: "IVA" },
      { title: "Modelo B — IVA (RTS)", desc: "Regime de Tributação Simplificada", size: "PDF", category: "IVA" },
      { title: "Modelo C — IVA", desc: "Declaração de Operações", size: "PDF", category: "IVA" },
      { title: "Modelo CIVA", desc: "Declaração de Operações Imobiliárias e Participações Sociais", size: "PDF", category: "IVA" },
      { title: "IVA — Imposto sobre o Valor Acrescentado", desc: "Formulário oficial do IVA", size: "PDF", category: "IVA" },
      { title: "Modelo 02 — Registo de Actividade", desc: "Declaração de Registo ou Alterações de Dados de Início de Actividade", size: "PDF", category: "Registo" },
      { title: "Modelo 35 MPC", desc: "Imposto Simplificado para Pequenos Contribuintes", size: "PDF", category: "ISPC" },
      { title: "Modelo O MA", desc: "Declaração de Compra e Venda de Imóveis, Veículos e Outros", size: "PDF", category: "Declaração" },
      { title: "REC-IMPOSTO", desc: "Formulário de Recuperação de Imposto", size: "PDF", category: "Recolha" },
      { title: "IRPS — Pessoas Singulares", desc: "Imposto Sobre o Rendimento de Pessoas Singulares", size: "PDF", category: "Rendimento" },
      { title: "IRPC — Pessoas Colectivas", desc: "Imposto Sobre o Rendimento de Pessoas Colectivas", size: "PDF", category: "Rendimento" },
      { title: "MPA-MPS 02/03 — IRPS", desc: "Modelo de Processo de Autoliquidação — IRPS", size: "PDF", category: "Rendimento" },
    ],
  },
  {
    id: "preco-transferencia",
    label: "Preço de Transferência",
    desc: "Formulários relacionados com preços de transferência.",
    forms: [
      { title: "MPS 01 — Anexo 1", desc: "Preço de Transferência", size: "PDF", category: "PT" },
      { title: "MPS 02 — Anexo 2", desc: "Declaração de Transferência", size: "PDF", category: "PT" },
      { title: "MPS 02 ANEXO 2", desc: "Declaração de Transferência (versão detalhada)", size: "PDF", category: "PT" },
    ],
  },
  {
    id: "formularios-aduaneiros",
    label: "Formulários Aduaneiros",
    desc: "Formulários para processos aduaneiros e controlo de mercadorias.",
    forms: [
      { title: "Documento de Aduanas", desc: "Formulário aduaneiro padrão", size: "PDF", category: "Aduaneiro" },
      { title: "Declaração Aduaneira (DU)", desc: "Declaração Única de importação/exportação", size: "PDF (450 KB)", category: "Declaração" },
      { title: "Pedido de Saída Antecipada", desc: "Autorização para retirada antecipada de mercadorias", size: "PDF (120 KB)", category: "Facilitação" },
      { title: "Formulário de Registo de Importador", desc: "Registo de operador económico importador", size: "PDF (310 KB)", category: "Registo" },
      { title: "Termo de Responsabilidade — Viaturas", desc: "Termo de responsabilidade para importação de viaturas", size: "PDF (200 KB)", category: "Viaturas" },
      { title: "Guia de Pagamento Aduaneiro", desc: "Guia oficial para pagamento de direitos aduaneiros", size: "PDF (180 KB)", category: "Pagamento" },
      { title: "Previsão de Consumo do Selo de Controlo", desc: "Previsão anual de consumo de selos", size: "PDF", category: "Selos" },
      { title: "Requisição do Selo de Controlo", desc: "Formulário para requisição de selos de controlo", size: "PDF", category: "Selos" },
      { title: "Ficha de Registo — Selo de Controlo", desc: "Ficha de registo para uso do selo de controlo", size: "PDF", category: "Selos" },
      { title: "Auto de Verificação Aduaneira", desc: "Auto de verificação de mercadorias", size: "PDF", category: "Verificação" },
      { title: "Formulário de Assistência Fiscal", desc: "Assistência fiscal administrativa mútua", size: "PDF (182 KB)", category: "Assistência", url: "https://www.at.gov.mz/por/Media/Processos-Aduaneiros/Formularios/Formulario-de-Assistencia-Fiscal" },
    ],
  },
  {
    id: "dupla-tributacao",
    label: "Dupla Tributação",
    desc: "Formulários para acordos de dupla tributação internacional.",
    forms: [
      { title: "Modelo 1 — Dupla Tributação", desc: "Formulário de dupla tributação", size: "PDF (86 KB)", category: "CDT" },
      { title: "Modelo 2 — Dupla Tributação", desc: "Formulário de dupla tributação", size: "PDF (94 KB)", category: "CDT" },
      { title: "Modelo 3 — Dupla Tributação", desc: "Formulário de dupla tributação", size: "PDF (81 KB)", category: "CDT" },
      { title: "Modelo 4 — Dupla Tributação", desc: "Formulário de dupla tributação", size: "PDF (82 KB)", category: "CDT" },
      { title: "Modelo 5 — Dupla Tributação", desc: "Formulário de dupla tributação", size: "PDF (82 KB)", category: "CDT" },
    ],
  },
  {
    id: "documentacao-institucional",
    label: "Documentação Institucional",
    desc: "Estatutos, planos estratégicos, relatórios e guias oficiais da AT.",
    forms: [
      { title: "Guia para o Contribuinte", desc: "Guia explicativo sobre obrigações e direitos do contribuinte", size: "PDF", category: "Guia" },
      { title: "Plano Estratégico da AT (2021–2025)", desc: "Metas plurianuais de arrecadação e modernização aduaneira", size: "PDF", category: "Estratégia" },
      { title: "Plano de Actividades e Orçamento Anual da AT 2024", desc: "Plano de actividades e orçamento anual", size: "PDF", category: "Plano" },
      { title: "MAPA 2024", desc: "Mapa de execução orçamental da AT", size: "PDF", category: "Execução" },
      { title: "Decreto nº 7/2006 de 16 de Maio", desc: "Estatuto orgânico estrutural da Autoridade Tributária de Moçambique", size: "PDF (2.4 MB)", category: "Estatuto" },
      { title: "Relatório de Actividades e Contas Anual", desc: "Balanço institucional consolidado da arrecadação de receitas", size: "PDF", category: "Relatório" },
      { title: "Código de Conduta dos Funcionários da AT", desc: "Normas de ética, transparência e integridade profissional", size: "PDF", category: "Ética" },
      { title: "Organograma Geral da AT", desc: "Estrutura orgânica oficial com todas as Direcções Gerais e Regionais", size: "PDF (170 KB)", category: "Estrutura" },
    ],
  },
  {
    id: "legislacao-publicacoes",
    label: "Legislação & Publicações",
    desc: "Boletins informativos, conjuntura fiscal e publicações institucionais.",
    forms: [
      { title: "Boletins Informativos", desc: "Publicações periódicas informativas da AT", size: "PDF", category: "Publicação" },
      { title: "Conjuntura Fiscal", desc: "Análise da conjuntura fiscal nacional", size: "PDF", category: "Publicação" },
      { title: "Calendário Fiscal", desc: "Calendário anual de obrigações fiscais", size: "PDF", category: "Publicação" },
      { title: "Brochuras", desc: "Material informativo e educativo fiscal", size: "PDF", category: "Publicação" },
      { title: "Folha da AT", desc: "Jornal institucional da Autoridade Tributária", size: "PDF", category: "Publicação" },
      { title: "Estatísticas Tributárias", desc: "Folheto de estatísticas tributárias anuais", size: "PDF", category: "Estatística" },
    ],
  },
];