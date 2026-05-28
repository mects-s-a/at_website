// ─────────────────────────────────────────────────────────────────────────────
// CENTRAL NEWS DATA
// To add a new article, append an object to this array.
// Set `featured: true` on exactly 3 articles to show them on the homepage.
// ─────────────────────────────────────────────────────────────────────────────

export const articles = [
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
    featured: true,
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
    featured: true,
  },
  {
    id: 4,
    title: "Nova Plataforma de e-Declaração Lançada",
    summary:
      "A AT lança uma versão melhorada da plataforma e-Declaração com interface mais intuitiva e suporte multi-dispositivo.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    url: "https://edeclaracao.at.gov.mz/",
    date: "2025-01-15",
    category: "Tecnologia",
    featured: false,
  },
  {
    id: 5,
    title: "Campanha de Sensibilização Fiscal nas Províncias",
    summary:
      "A AT leva campanhas de educação tributária a todas as províncias do país, alcançando mais de 50 mil cidadãos.",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
    url: "#",
    date: "2025-01-05",
    category: "Campanhas",
    featured: false,
  },
  {
    id: 6,
    title: "Protocolo de Cooperação com a CPLP",
    summary:
      "Autoridade Tributária assina protocolo de cooperação técnica com países da Comunidade dos Países de Língua Portuguesa.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    url: "#",
    date: "2024-12-12",
    category: "Internacional",
    featured: false,
  },
];

export const featuredArticles = articles.filter((a) => a.featured);