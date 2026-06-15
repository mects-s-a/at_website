// SobreATStyles.js
// All colour values are derived from the global CSS token system in index.css.
// --primary       : hsl(218 73% 38%)  → #1B4FAB  (Azul oficial AT)
// --secondary     : hsl(152 55% 45%)  → #33A068  (Verde accent)
// --foreground    : hsl(215 30% 12%)  → #151E2D
// --muted         : hsl(210 15% 94%)  → #EEF1F5
// --muted-fg      : hsl(215 15% 45%)  → #5C6B82
// --border        : hsl(210 15% 90%)  → #DDE3EC
// --background    : hsl(210 20% 98%)  → #F6F8FB
// --card          : #FFFFFF
// --gold (accent) : #C9A94B           (kept from brand, used sparingly)

const sobreATStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');

  :root {
    /* ── Brand tokens (mirrors index.css exactly) ── */
    --sat-primary:      #1B4FAB;   /* hsl(218 73% 38%) */
    --sat-primary-dark: #0F3278;   /* deeper navy for gradients / hover */
    --sat-primary-fg:   #FFFFFF;
    --sat-accent:       #33A068;   /* hsl(152 55% 45%) — green accent */
    --sat-gold:         #C9A94B;   /* eyebrow / highlight */
    --sat-fg:           #151E2D;   /* hsl(215 30% 12%) */
    --sat-muted-bg:     #EEF1F5;   /* hsl(210 15% 94%) */
    --sat-muted-fg:     #5C6B82;   /* hsl(215 15% 45%) */
    --sat-border:       #DDE3EC;   /* hsl(210 15% 90%) */
    --sat-bg:           #F6F8FB;   /* hsl(210 20% 98%) */
    --sat-card:         #FFFFFF;
    --sat-radius:       0.75rem;   /* matches --radius in index.css */

    /* ── Shadows (neutral, not blue-tinted) ── */
    --sat-shadow-sm: 0 1px 4px rgba(21,30,45,.06), 0 1px 2px rgba(21,30,45,.04);
    --sat-shadow-md: 0 4px 16px rgba(21,30,45,.10);
    --sat-shadow-lg: 0 12px 40px rgba(21,30,45,.14);
  }

  /* ═══════════════════════════════════════════
     LAYOUT SHELL
  ═══════════════════════════════════════════ */
  .sobre-at-container {
    font-family: 'Inter', sans-serif;
    background: var(--sat-bg);
    color: var(--sat-fg);
    min-height: 100vh;
  }

  .shell {
    display: flex;
    gap: 32px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  /* ═══════════════════════════════════════════
     SIDEBAR NAV
  ═══════════════════════════════════════════ */
  .sidebar {
    width: 256px;
    flex-shrink: 0;
  }

  .sidebar-inner {
    position: sticky;
    top: 88px;               /* clears the 80px sticky Navbar */
    background: var(--sat-card);
    border: 1px solid var(--sat-border);
    border-radius: var(--sat-radius);
    padding: 10px 0;
    box-shadow: var(--sat-shadow-sm);
    overflow: hidden;
  }

  .sidebar-section {
    padding: 10px 16px 5px;
    font-size: 10.5px;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: var(--sat-muted-fg);
    font-weight: 600;
  }

  .sidebar-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    cursor: pointer;
    font-size: 13.5px;
    font-weight: 500;
    color: var(--sat-muted-fg);
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    transition: background 0.15s, color 0.15s;
    border-left: 3px solid transparent;
    line-height: 1.4;
  }

  .sidebar-item:hover {
    background: var(--sat-muted-bg);
    color: var(--sat-primary);
  }

  .sidebar-item.active {
    background: var(--sat-muted-bg);
    color: var(--sat-primary);
    border-left-color: var(--sat-primary);
    font-weight: 600;
  }

  .sidebar-divider {
    height: 1px;
    background: var(--sat-border);
    margin: 6px 0;
  }

  /* ═══════════════════════════════════════════
     MAIN CONTENT AREA
  ═══════════════════════════════════════════ */
  .main-content {
    flex: 1;
    min-width: 0;
  }

  /* ═══════════════════════════════════════════
     PAGE HERO  — matches Navbar's primary blue
  ═══════════════════════════════════════════ */
  .page-hero {
    background: linear-gradient(
      135deg,
      var(--sat-primary-dark) 0%,
      var(--sat-primary)      65%,
      #2461C8               100%
    );
    border-radius: 14px;
    padding: 44px 44px 38px;
    margin-bottom: 32px;
    position: relative;
    overflow: hidden;
    box-shadow: var(--sat-shadow-lg);
  }

  /* subtle grid watermark — same as landing hero pattern */
  .page-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }

  .page-hero .eyebrow {
    font-size: 10.5px;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--sat-gold);
    font-weight: 700;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
  }

  .page-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(24px, 3.5vw, 34px);
    color: #FFFFFF;
    line-height: 1.22;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
  }

  .page-hero p {
    color: rgba(255,255,255,.76);
    font-size: 14.5px;
    max-width: 580px;
    line-height: 1.65;
    position: relative;
    z-index: 1;
  }

  /* ═══════════════════════════════════════════
     SECTION TYPOGRAPHY
  ═══════════════════════════════════════════ */
  .section-label {
    font-size: 10.5px;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: var(--sat-accent);
    font-weight: 700;
    margin-bottom: 5px;
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(20px, 2.8vw, 26px);
    color: var(--sat-fg);
    margin-bottom: 6px;
    line-height: 1.25;
  }

  .section-desc {
    font-size: 14px;
    color: var(--sat-muted-fg);
    line-height: 1.65;
    margin-bottom: 26px;
    max-width: 620px;
  }

  /* ═══════════════════════════════════════════
     CARDS
  ═══════════════════════════════════════════ */
  .card {
    background: var(--sat-card);
    border: 1px solid var(--sat-border);
    border-radius: var(--sat-radius);
    padding: 24px;
    box-shadow: var(--sat-shadow-sm);
    transition: box-shadow 0.22s, transform 0.22s, border-color 0.22s;
  }

  .card:hover {
    box-shadow: var(--sat-shadow-md);
    transform: translateY(-2px);
    border-color: rgba(27,79,171,.2);
  }

  .card-grid {
    display: grid;
    gap: 20px;
  }

  .card-grid.cols-2 { grid-template-columns: repeat(2, 1fr); }
  .card-grid.cols-3 { grid-template-columns: repeat(3, 1fr); }

  .card-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: var(--sat-muted-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    margin-bottom: 14px;
    color: var(--sat-primary);
  }

  .card h3 {
    font-size: 15px;
    font-weight: 600;
    color: var(--sat-fg);
    margin-bottom: 6px;
  }

  .card p {
    font-size: 13.5px;
    color: var(--sat-muted-fg);
    line-height: 1.6;
  }

  /* ═══════════════════════════════════════════
     ACCORDION
  ═══════════════════════════════════════════ */
  .accordion {
    border: 1px solid var(--sat-border);
    border-radius: var(--sat-radius);
    overflow: hidden;
    box-shadow: var(--sat-shadow-sm);
    background: var(--sat-card);
  }

  .acc-item {
    border-bottom: 1px solid var(--sat-border);
  }

  .acc-item:last-child { border-bottom: none; }

  .acc-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 22px;
    background: var(--sat-card);
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 14.5px;
    font-weight: 600;
    color: var(--sat-fg);
    text-align: left;
    transition: background 0.15s, color 0.15s;
  }

  .acc-trigger:hover {
    background: var(--sat-muted-bg);
  }

  .acc-trigger.open {
    color: var(--sat-primary);
    background: var(--sat-muted-bg);
  }

  .acc-arrow {
    transition: transform 0.22s;
    font-size: 10px;
    color: var(--sat-muted-fg);
    flex-shrink: 0;
  }

  .acc-body {
    padding: 0 22px 18px;
    background: var(--sat-card);
    font-size: 13.5px;
    color: var(--sat-muted-fg);
    line-height: 1.7;
  }

  /* ═══════════════════════════════════════════
     DOWNLOAD LIST
  ═══════════════════════════════════════════ */
  .download-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .download-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 20px;
    background: var(--sat-card);
    border: 1px solid var(--sat-border);
    border-radius: var(--sat-radius);
    box-shadow: var(--sat-shadow-sm);
    transition: box-shadow 0.2s, border-color 0.2s;
  }

  .download-item:hover {
    box-shadow: var(--sat-shadow-md);
    border-color: rgba(27,79,171,.18);
  }

  .download-icon {
    width: 42px;
    height: 42px;
    background: #FEF2F2;
    color: #EF4444;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    flex-shrink: 0;
  }

  .download-info {
    flex: 1;
    min-width: 0;
  }

  .download-info strong {
    display: block;
    font-size: 13.5px;
    font-weight: 600;
    color: var(--sat-fg);
    margin-bottom: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .download-info p {
    font-size: 12.5px;
    color: var(--sat-muted-fg);
    margin: 0 0 3px 0;
  }

  .download-info span {
    font-size: 11px;
    color: var(--sat-muted-fg);
    opacity: 0.75;
  }

  .download-btn {
    padding: 7px 16px;
    background: var(--sat-primary);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 12.5px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }

  .download-btn:hover {
    background: var(--sat-primary-dark);
  }

  /* ═══════════════════════════════════════════
     INFRASTRUCTURE KPI CARDS
  ═══════════════════════════════════════════ */
  .infra-card {
    background: linear-gradient(
      135deg,
      var(--sat-primary-dark),
      var(--sat-primary)
    );
    border-radius: var(--sat-radius);
    padding: 22px;
    color: #fff;
    position: relative;
    overflow: hidden;
    box-shadow: var(--sat-shadow-sm);
  }

  .infra-card::after {
    content: attr(data-num);
    position: absolute;
    right: 12px;
    bottom: -18px;
    font-size: 72px;
    font-weight: 700;
    opacity: 0.06;
    font-family: 'Playfair Display', serif;
    pointer-events: none;
  }

  .infra-card label {
    font-size: 10.5px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.68;
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
  }

  .infra-card .value {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    color: var(--sat-gold);
    font-weight: 700;
    line-height: 1;
  }

  .infra-card p {
    font-size: 12.5px;
    opacity: 0.78;
    margin-top: 5px;
    line-height: 1.5;
  }

  /* ═══════════════════════════════════════════
     DATA TABLES
  ═══════════════════════════════════════════ */
  .table-wrap {
    background: var(--sat-card);
    border: 1px solid var(--sat-border);
    border-radius: var(--sat-radius);
    overflow: hidden;
    box-shadow: var(--sat-shadow-sm);
    margin-top: 22px;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13.5px;
  }

  .data-table th {
    background: var(--sat-muted-bg);
    padding: 12px 16px;
    text-align: left;
    font-weight: 700;
    color: var(--sat-primary);
    border-bottom: 2px solid var(--sat-border);
    font-size: 12.5px;
    letter-spacing: 0.02em;
  }

  .data-table td {
    padding: 12px 16px;
    border-bottom: 1px solid var(--sat-border);
    color: var(--sat-muted-fg);
  }

  .data-table tr:last-child td { border-bottom: none; }

  .data-table tr:hover td {
    background: var(--sat-muted-bg);
  }

  /* ═══════════════════════════════════════════
     ORGANOGRAMA
  ═══════════════════════════════════════════ */
  .orgchart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 20px 0;
  }

  .org-node {
    background: var(--sat-card);
    border: 1.5px solid var(--sat-border);
    border-radius: var(--sat-radius);
    padding: 14px 24px;
    text-align: center;
    box-shadow: var(--sat-shadow-sm);
    min-width: 230px;
    transition: border-color 0.2s;
  }

  .org-node:hover { border-color: var(--sat-gold); }

  .org-node.top {
    background: var(--sat-primary-dark);
    border-color: var(--sat-primary-dark);
  }
  .org-node.top strong { color: #fff; font-size: 14px; }
  .org-node.top span  { color: rgba(255,255,255,.72); }

  .org-node.mid {
    background: var(--sat-primary);
    border-color: var(--sat-primary);
  }
  .org-node.mid strong { color: #fff; font-size: 13px; }
  .org-node.mid span  { color: rgba(255,255,255,.72); }

  .org-node strong { display: block; font-size: 13px; color: var(--sat-fg); }
  .org-node span   { font-size: 11.5px; color: var(--sat-muted-fg); margin-top: 3px; display: block; }

  .org-connector {
    width: 2px;
    height: 22px;
    background: var(--sat-border);
  }

  .org-row {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .org-branch {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .org-hline {
    width: 100%;
    height: 2px;
    background: var(--sat-border);
  }

  /* ═══════════════════════════════════════════
     FILTER CONTROLS
  ═══════════════════════════════════════════ */
  .filter-shell {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
    background: var(--sat-card);
    padding: 14px 20px;
    border-radius: var(--sat-radius);
    border: 1px solid var(--sat-border);
    box-shadow: var(--sat-shadow-sm);
    margin-bottom: 20px;
  }

  .search-input-wrap {
    position: relative;
    width: 100%;
  }

  .search-input-wrap input {
    width: 100%;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    padding: 9px 12px 9px 36px;
    border: 1px solid var(--sat-border);
    border-radius: 8px;
    background: var(--sat-card);
    color: var(--sat-fg);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .search-input-wrap input:focus {
    border-color: var(--sat-primary);
    box-shadow: 0 0 0 3px rgba(27,79,171,.1);
  }

  .region-btn-group {
    display: flex;
    gap: 4px;
    background: var(--sat-muted-bg);
    padding: 3px;
    border-radius: 8px;
    border: 1px solid var(--sat-border);
    width: 100%;
  }

  .region-btn {
    flex: 1;
    text-align: center;
    padding: 7px 14px;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
    border-radius: 6px;
    border: none;
    background: transparent;
    color: var(--sat-muted-fg);
    cursor: pointer;
    transition: all 0.15s;
    white-space: nowrap;
  }

  .region-btn.active {
    background: var(--sat-card);
    color: var(--sat-primary);
    box-shadow: var(--sat-shadow-sm);
    font-weight: 700;
  }

  /* ═══════════════════════════════════════════
     BREADCRUMB
  ═══════════════════════════════════════════ */
  .custom-breadcrumb {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12.5px;
    color: var(--sat-muted-fg);
    margin-bottom: 22px;
  }

  .custom-breadcrumb .current {
    color: var(--sat-primary);
    font-weight: 600;
  }

  /* ═══════════════════════════════════════════
     RESPONSIVE
  ═══════════════════════════════════════════ */
  @media (min-width: 640px) {
    .filter-shell        { flex-direction: row; }
    .search-input-wrap   { width: 280px; }
    .region-btn-group    { width: auto; }
  }

  @media (max-width: 768px) {
    .shell               { flex-direction: column; }
    .sidebar             { width: 100%; }
    .sidebar-inner       { display: flex; flex-wrap: wrap; position: static; padding: 8px 4px; }
    .sidebar-section     { display: none; }
    .sidebar-divider     { display: none; }
    .sidebar-item        { width: auto; flex: 1; min-width: 120px; justify-content: center; border-left: none; border-bottom: 2px solid transparent; }
    .sidebar-item.active { border-left-color: transparent; border-bottom-color: var(--sat-primary); }
    .page-hero           { padding: 30px 24px 26px; }
    .card-grid.cols-3    { grid-template-columns: repeat(2, 1fr); }
    .card-grid.cols-2    { grid-template-columns: 1fr; }
  }

  @media (max-width: 480px) {
    .card-grid.cols-3    { grid-template-columns: 1fr; }
  }
`;

export default sobreATStyles; 