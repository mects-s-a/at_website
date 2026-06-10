// src/constants/nav.js
// Single source of truth for the institutional sidebar navigation.
// Import in App.jsx (sidebar rendering) and any page that needs breadcrumb info.

export const NAV = [
  {
    section: "Institucional",
    items: [
      { id: "sobre-at",       label: "Sobre AT",                   path: "/sobre-at" },
      { id: "atribuicoes",    label: "Atribuições e Competências", path: "/atribuicoes-e-competencias" },
      { id: "organograma",    label: "Organograma",                path: "/organograma" },
      { id: "infraestrutura", label: "Infraestrutura",             path: "/infraestrutura" },
    ],
  },
  {
    section: "Serviços Aduaneiros",
    items: [
      { id: "procedimentos-aduaneiros", label: "Procedimentos Aduaneiros", path: "/procedimentos-aduaneiros" },
      { id: "pauta",                    label: "Pauta Aduaneira",          path: "/pauta-aduaneira" },
      { id: "formularios-aduaneiros",   label: "Formulários Aduaneiros",   path: "/formularios-aduaneiros" },
      { id: "estancias",                label: "Estâncias Aduaneiras",     path: "/estancias-aduaneiras" },
    ],
  },
  {
    section: "Serviços Tributários",
    items: [
      { id: "impostos",            label: "Impostos",            path: "/impostos" },
      { id: "formularios-fiscais", label: "Formulários Fiscais", path: "/formularios-fiscais" },
      { id: "calendario-fiscal",   label: "Calendário Fiscal",   path: "/calendario-fiscal" },
    ],
  },
  {
    section: "Legislação",
    items: [
      { id: "leg-geral",     label: "Legislação Geral",     path: "/legislacao-geral" },
      { id: "leg-fiscal",    label: "Legislação Fiscal",    path: "/legislacao-fiscal" },
      { id: "leg-aduaneira", label: "Legislação Aduaneira", path: "/legislacao-aduaneira" },
    ],
  },
  {
    section: "Informações",
    items: [
      { id: "comunicado",    label: "Comunicado de Imprensa",    path: "/comunicado-de-imprensa" },
      { id: "concursos",     label: "Concursos Públicos",        path: "/concursos-publicos" },
      { id: "planos",        label: "Planos",                    path: "/planos" },
      { id: "boletins",      label: "Boletins Informativos",     path: "/boletins-informativos" },
      { id: "branqueamento", label: "Branqueamento de Capitais", path: "/branqueamento-de-capitais" },
    ],
  },
];