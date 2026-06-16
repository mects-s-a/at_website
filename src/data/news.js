// ─────────────────────────────────────────────────────────────────────────────
// CENTRAL NEWS DATA
// To add a new article, append an object to this array.
// Set `featured: true` on up to 3 articles to show them on the homepage.
// ─────────────────────────────────────────────────────────────────────────────

export const articles = [
  
  {
    id: 4,
    title: "Atendimento Humanizado e Controlo Eficaz das Receitas no Centro das Atenções do Presidente da AT",
    summary:
      "Durante visita de trabalho à Delegação de Maputo, Aníbal Mbalango defendeu a empatia no atendimento ao contribuinte aliada ao rigor na fiscalização e proteção das receitas do Estado.",
    img: "/src/components/Media/Content/PAT TIMAR web_050744.png",
    url: "/noticias/atendimento-humanizado",
    date: "2026-06-04",
    category: "Institucional",
    featured: true,
  },
  {
    id: 5,
    title: "Presidente da AT Partilha o 'ABC dos Impostos' com Petizes da Escola 16 de Junho",
    summary:
      "Em alusão ao Dia Internacional da Criança, a AT promoveu uma ação educativa de cidadania fiscal para explicar a importância dos tributos no desenvolvimento socioeconómico de Moçambique.",
    img: "/src/components/Media/Dia da Criança - AT/PAT 1 de Junho_094712.png",
    url: "/noticias/abc-dos-impostos",
    date: "2026-06-03",
    category: "Eventos",
    featured: true,
  },  
  {
    id: 1,
    title: '"O Governo continuará a apostar na Modernização da AT"',
    summary:
      "O Ministro da Economia e Finanças reafirmou o compromisso com a modernização da Autoridade Tributária de Moçambique, destacando investimentos em tecnologia e formação de quadros.",
    img: "https://at-mocambique.tributo670.workers.dev/Imagens/Amido.jpg",
    url: "https://at-mocambique.tributo670.workers.dev/noticia-amido.html",
    date: "2025-03-10",
    category: "Institucional",
    featured: true,
  },
  {
    id: 2,
    title: "AT Exalta o Papel da Mulher Moçambicana",
    summary:
      "Celebrações do Dia da Mulher destacam o papel feminino na administração pública e na receita do Estado.",
    img: "https://at-mocambique.tributo670.workers.dev/Imagens/Esc%20Sec%20Malhazine%201.jpeg",
    url: "https://at-mocambique.tributo670.workers.dev/7%20de%20abril.html",
    date: "2025-04-07",
    category: "Eventos",
    featured: false,
  },
  {
    id: 3,
    title: "AT busca soluções para melhor arrecadação de receitas",
    summary:
      "V Fórum Fiscal dos Operadores do Sector Extractivo discute estratégias de melhoria da arrecadação e combate à evasão fiscal.",
    img: "https://at-mocambique.tributo670.workers.dev/Imagens/V%20F%C3%B3rum%20Fiscal%20dos%20Operadores%20do%20Sector%20Extractivo%201.jpeg",
    url: "https://at-mocambique.tributo670.workers.dev/AT%20BUSACA.html",
    date: "2025-02-20",
    category: "Fiscal",
    featured: false,
  },
];

export const featuredArticles = articles.filter((a) => a.featured);



