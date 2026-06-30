// atstyles.js - shared styles for Institucional and Servicos pages
const sobreATStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');

  :root {
    --sat-primary:      #1B4FAB;
    --sat-primary-dark: #0F3278;
    --sat-primary-fg:   #FFFFFF;
    --sat-accent:       #33A068;
    --sat-gold:         #C9A94B;
    --sat-fg:           #151E2D;
    --sat-muted-bg:     #EEF1F5;
    --sat-muted-fg:     #5C6B82;
    --sat-border:       #C7D2E4;
    --sat-bg:           #F6F8FB;
    --sat-card:         #FFFFFF;
    --sat-radius:       0.75rem;
    --sat-shadow-sm:    0 1px 4px rgba(21,30,45,.06), 0 1px 2px rgba(21,30,45,.04);
    --sat-shadow-md:    0 4px 16px rgba(21,30,45,.10);
    --sat-shadow-lg:    0 12px 40px rgba(21,30,45,.14);
  }

  .sobre-at-container {
    font-family: 'Inter', sans-serif;
    background: var(--sat-bg);
    color: var(--sat-fg);
    min-height: 100vh;
  }

  .shell {
    display: flex;
    gap: 32px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 24px;
  }

  .main-content { flex: 1; min-width: 0; }

  .page-hero {
    background: linear-gradient(135deg, var(--sat-primary-dark) 0%, var(--sat-primary) 65%, #2461C8 100%);
    border-radius: 14px;
    padding: 44px 44px 38px;
    margin-bottom: 32px;
    position: relative;
    overflow: hidden;
    box-shadow: var(--sat-shadow-lg);
  }

  .page-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }

  .page-hero .eyebrow {
    font-size: 11px;
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
    color: #fff;
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

  .card-grid { display: grid; gap: 20px; }
  .card-grid.cols-2 { grid-template-columns: repeat(2, 1fr); }
  .card-grid.cols-3 { grid-template-columns: repeat(3, 1fr); }

  .card-icon {
    width: 44px; height: 44px;
    border-radius: 10px;
    background: var(--sat-muted-bg);
    display: flex; align-items: center; justify-content: center;
    font-size: 19px; margin-bottom: 14px;
    color: var(--sat-primary);
  }

  .card h3 { font-size: 15px; font-weight: 600; color: var(--sat-fg); margin-bottom: 6px; }
  .card p  { font-size: 13.5px; color: var(--sat-muted-fg); line-height: 1.6; }

  .download-list { display: flex; flex-direction: column; gap: 12px; }

  .download-item {
    display: flex; align-items: center; gap: 16px;
    padding: 16px 20px;
    background: var(--sat-card);
    border: 1px solid var(--sat-border);
    border-radius: var(--sat-radius);
    box-shadow: var(--sat-shadow-sm);
    transition: box-shadow 0.2s, border-color 0.2s;
  }

  .download-item:hover { box-shadow: var(--sat-shadow-md); border-color: rgba(27,79,171,.18); }

  .download-icon {
    width: 42px; height: 42px;
    background: #FEF2F2; color: #EF4444;
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 17px; flex-shrink: 0;
  }

  .download-info { flex: 1; min-width: 0; }
  .download-info strong { display: block; font-size: 13.5px; font-weight: 600; color: var(--sat-fg); margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .download-info p      { font-size: 12.5px; color: var(--sat-muted-fg); margin: 0 0 3px 0; }
  .download-info span   { font-size: 11px; color: var(--sat-muted-fg); opacity: 0.75; }

  .download-btn {
    padding: 7px 16px;
    background: var(--sat-primary); color: #fff;
    border: none; border-radius: 8px;
    font-family: 'Inter', sans-serif; font-size: 12.5px; font-weight: 600;
    cursor: pointer; transition: background 0.15s;
    white-space: nowrap; display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;
  }
  .download-btn:hover { background: var(--sat-primary-dark); }

  .filter-shell { margin-bottom: 24px; }

  .search-input-wrap { position: relative; }

  .search-input-wrap input {
    width: 100%;
    padding: 12px 16px 12px 40px;
    border: 1px solid var(--sat-border);
    border-radius: var(--sat-radius);
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    background: var(--sat-card);
    color: var(--sat-fg);
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .search-input-wrap input:focus {
    border-color: var(--sat-primary);
    box-shadow: 0 0 0 3px rgba(27, 79, 171, 0.1);
  }
  .search-input-wrap input::placeholder {
    color: var(--sat-muted-fg);
    opacity: 0.6;
  }

  .download-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  @media (max-width: 768px) {
    .download-grid { grid-template-columns: 1fr; }
  }

  .info-card {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 20px;
    background: var(--sat-card);
    border: 1px solid var(--sat-border);
    border-radius: var(--sat-radius);
    box-shadow: var(--sat-shadow-sm);
    transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
  }
  .info-card:hover {
    box-shadow: var(--sat-shadow-md);
    border-color: rgba(27,79,171,.18);
    transform: translateY(-2px);
  }
  .info-card-icon {
    width: 42px; height: 42px;
    background: #EFF4FF; color: var(--sat-primary);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .info-card-body { flex: 1; min-width: 0; }
  .info-card-body h4 { font-size: 14px; font-weight: 600; color: var(--sat-fg); margin-bottom: 4px; line-height: 1.4; }
  .info-card-body p { font-size: 12.5px; color: var(--sat-muted-fg); line-height: 1.5; margin-bottom: 6px; }
  .info-card-meta { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
  .info-badge {
    font-size: 10.5px; font-weight: 700;
    padding: 3px 8px; border-radius: 5px;
    background: var(--sat-muted-bg); color: var(--sat-muted-fg);
  }
  .info-badge.gold { background: rgba(201,169,75,.12); color: var(--sat-gold); border: 1px solid rgba(201,169,75,.25); }
  .info-badge.primary { background: rgba(27,79,171,.08); color: var(--sat-primary); }

  .concurso-card {
    background: var(--sat-card);
    border: 1px solid var(--sat-border);
    border-radius: var(--sat-radius);
    box-shadow: var(--sat-shadow-sm);
    overflow: hidden;
    transition: box-shadow 0.2s, border-color 0.2s;
  }
  .concurso-card:hover { box-shadow: var(--sat-shadow-md); border-color: rgba(27,79,171,.18); }
  .concurso-header {
    padding: 16px 20px;
    background: rgba(27,79,171,.04);
    border-bottom: 1px solid var(--sat-border);
    display: flex; align-items: center; justify-content: space-between; gap: 12px;
  }
  .concurso-body { padding: 16px 20px; }
  .concurso-row { display: flex; gap: 8px; padding: 6px 0; border-bottom: 1px solid rgba(221,227,236,.5); font-size: 13px; }
  .concurso-row:last-child { border-bottom: none; }
  .concurso-label { font-weight: 600; color: var(--sat-fg); min-width: 140px; flex-shrink: 0; }
  .concurso-value { color: var(--sat-muted-fg); }

  .infra-card {
    background: linear-gradient(135deg, var(--sat-primary-dark), var(--sat-primary));
    border-radius: var(--sat-radius);
    padding: 22px; color: #fff;
    position: relative; overflow: hidden;
    box-shadow: var(--sat-shadow-sm);
  }

  .infra-card::after {
    content: attr(data-num);
    position: absolute; right: 12px; bottom: -18px;
    font-size: 72px; font-weight: 700; opacity: 0.06;
    font-family: 'Playfair Display', serif; pointer-events: none;
  }

  .infra-card label { font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase; opacity: 0.68; display: block; margin-bottom: 5px; font-weight: 600; }
  .infra-card .value { font-family: 'Playfair Display', serif; font-size: 32px; color: var(--sat-gold); font-weight: 700; line-height: 1; }
  .infra-card p { font-size: 12.5px; opacity: 0.78; margin-top: 5px; line-height: 1.5; }

  .table-wrap {
    background: var(--sat-card);
    border: 1px solid var(--sat-border);
    border-radius: var(--sat-radius);
    overflow: hidden; box-shadow: var(--sat-shadow-sm); margin-top: 22px;
  }

  .data-table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
  .data-table th { background: var(--sat-muted-bg); padding: 12px 16px; text-align: left; font-weight: 700; color: var(--sat-primary); border-bottom: 2px solid var(--sat-border); font-size: 12.5px; letter-spacing: 0.02em; }
  .data-table td { padding: 12px 16px; border-bottom: 1px solid var(--sat-border); color: var(--sat-muted-fg); }
  .data-table tr:last-child td { border-bottom: none; }
  .data-table tr:hover td { background: var(--sat-muted-bg); }

  .custom-breadcrumb {
    display: flex; align-items: center; gap: 5px;
    font-size: 12.5px; color: var(--sat-muted-fg); margin-bottom: 22px;
  }
  .custom-breadcrumb .current { color: var(--sat-primary); font-weight: 600; }

  @media (max-width: 900px) {
    .shell { flex-direction: column; }
    .page-hero { padding: 30px 24px 26px; }
    .card-grid.cols-3 { grid-template-columns: repeat(2, 1fr); }
    .card-grid.cols-2 { grid-template-columns: 1fr; }
  }

  @media (max-width: 480px) {
    .card-grid.cols-3 { grid-template-columns: 1fr; }
  }
`;

export default sobreATStyles;