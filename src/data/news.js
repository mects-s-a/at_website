// ─────────────────────────────────────────────────────────────────────────────
// CENTRAL NEWS DATA
// To add a new article, append an object to this array.
// Set `featured: true` on exactly 2 articles to show them on the homepage.
// ─────────────────────────────────────────────────────────────────────────────

export const articles = [
  {
    id: 1,
    title: '"O Governo continuará a apostar na Modernização da AT"',
    summary:
      "O Ministro da Economia e Finanças reafirmou o compromisso com a modernização da Autoridade Tributária de Moçambique, destacando investimentos em tecnologia e formação de quadros.",
    img: "https://base44.app/api/apps/6a10556912996cfabed12a84/files/mp/public/6a10556912996cfabed12a84/2e9dec550_amido.jpg",
    date: "2025-03-10",
    category: "Institucional",
    featured: true,
    content: `O Ministro da Economia e Finanças reafirmou, durante a cerimónia de abertura do Conselho Coordenador da Autoridade Tributária, o compromisso do Governo em continuar a apostar na modernização da AT como pilares fundamentais para a melhoria da arrecadação de receitas e o atendimento ao contribuinte.

## Investimento em Tecnologia

O Governador destacou os investimentos em tecnologia, formação de quadros e digitalização de serviços como prioridades para o biénio em curso. "A modernização da AT é uma prioridade do Governo. Continuaremos a investir em sistemas electrónicos que facilitem o cumprimento das obrigações fiscais por parte dos contribuintes", afirmou o Ministro.

A cerimónia contou com a presença de directores nacionais, representantes de províncias e parceiros de cooperação internacional, que discutiram estratégias para optimizar os processos de arrecadação e combater a evasão fiscal.

## Formação de Quadros

A formação contínua dos quadros da AT foi igualmente destacada como uma prioridade, com a promessa de investimento em capacitação técnica e tecnológica dos colaboradores em todas as delegações provinciais.

"Queremos uma AT cada vez mais próxima dos contribuintes, com serviços ágeis e transparentes", concluiu o Ministro, que visitou ainda algumas das novas instalações tecnológicas inauguradas recentemente.`,
  },
  {
    id: 2,
    title: "AT Exalta o Papel da Mulher Moçambicana",
    summary:
      "Celebrações do Dia da Mulher destacam o papel feminino na administração pública e na receita do Estado.",
    img: "https://base44.app/api/apps/6a10556912996cfabed12a84/files/mp/public/6a10556912996cfabed12a84/b979e7c2f_malhazine.jpeg",
    date: "2025-04-07",
    category: "Eventos",
    featured: true,
    content: `A Autoridade Tributária de Moçambique associou-se às celebrações do Dia da Mulher Moçambicana, exaltando o papel da mulher na administração pública e na arrecadação de receitas do Estado.

O evento, realizado na Escola Secundária Malhazine, contou com a participação de centenas de trabalhadoras da AT que celebraram as conquistas alcançadas ao longo dos anos.

## Igualdade de Género

A Directora-Geral sublinhou a importância da igualdade de género no local de trabalho e o contributo das mulheres para o desenvolvimento institucional da AT. "As mulheres são peças fundamentais na construção de uma AT mais eficiente e próxima dos contribuintes", realçou.

Durante a cerimónia, foram homenageadas trabalhadoras que se distinguiram pelo seu desempenho e dedicação ao serviço público, com a entrega de prémios e certificados de reconhecimento.

## Compromisso Futuro

A AT reafirmou o seu compromisso com a promoção da igualdade de género em todos os níveis da instituição, garantindo oportunidades iguais para homens e mulheres no acesso a cargos de direcção e formação profissional.`,
  },
  {
    id: 3,
    title: "AT busca soluções para melhor arrecadação de receitas",
    summary:
      "V Fórum Fiscal dos Operadores do Sector Extractivo discute estratégias de melhoria da arrecadação e combate à evasão fiscal.",
    img: "https://base44.app/api/apps/6a10556912996cfabed12a84/files/mp/public/6a10556912996cfabed12a84/e65bebe35_forum-fiscal.jpeg",
    date: "2025-02-20",
    category: "Fiscal",
    featured: false,
    content: `O V Fórum Fiscal dos Operadores do Sector Extractivo reuniu especialistas, autoridades fiscais e representantes do sector privado para discutir estratégias de melhoria da arrecadação e combate à evasão fiscal.

O evento abordou os desafios actuais da tributação no sector extractivo, um dos pilares da economia moçambicana, e procurou identificar soluções práticas para optimizar a arrecadação de receitas.

> "O sector extractivo representa uma parcela significativa das receitas do Estado. É fundamental garantir que a tributação seja justa, transparente e eficaz", referiu o representante da AT.

## Estratégias Discutidas

Entre os temas debatidos destacam-se a transparência na declaração de receitas, a fiscalização cruzada de operações e a modernização dos sistemas de controlo aduaneiro nas zonas mineiras.

O fórum contou ainda com a participação de peritos internacionais que partilharam experiências e boas práticas de outros países na tributação do sector extractivo.`,
  },
];

export const featuredArticles = articles.filter((a) => a.featured);