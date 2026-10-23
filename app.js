'use strict';

const CONFIG = {
  version: '0.0.2',
  date: '23 de octubre de 2026',
  baseUrl: 'https://github.com/espakodi/ekLibreELEC/releases/download/v0.0.2',
};

const PALETTES = [
  { id: 'teal', name: 'Teal', color: '#136b5e' },
  { id: 'indigo', name: 'Índigo', color: '#37548f' },
  { id: 'burgundy', name: 'Burdeos', color: '#8a3144' },
  { id: 'forest', name: 'Bosque', color: '#356b3f' },
  { id: 'terracotta', name: 'Terracota', color: '#a85534' },
  { id: 'noche', name: 'Noche', color: '#0288d1' },
];

const ICONS = {
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  pc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  vm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
  rpi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9" cy="9" r="1.5"/><circle cx="15" cy="9" r="1.5"/><circle cx="9" cy="15" r="1.5"/><circle cx="15" cy="15" r="1.5"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>',
  chip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2"/><line x1="9" y1="1" x2="9" y2="5"/><line x1="15" y1="1" x2="15" y2="5"/><line x1="9" y1="19" x2="9" y2="23"/><line x1="15" y1="19" x2="15" y2="23"/><line x1="1" y1="9" x2="5" y2="9"/><line x1="1" y1="15" x2="5" y2="15"/><line x1="19" y1="9" x2="23" y2="9"/><line x1="19" y1="15" x2="23" y2="15"/></svg>',
};

const DOWNLOADS = [
  // PC
  {
    category: 'pc',
    title: 'VirtualBox (Máquina Virtual)',
    tag: 'Virtualización',
    desc: 'Probarlo en VirtualBox sin tocar tu ordenador ni particionar nada.',
    file: 'EspaKodi-PC-VirtualBox.ova',
    sha256: 'cca7fda69bfe024d73ad71ac6f3956a7961f31501b8269d48ff14557aec99012',
    icon: ICONS.vm,
    ext: '.ova',
    highlight: true,
  },
  {
    category: 'pc',
    title: 'PC Genérico x86_64',
    tag: 'PC / Laptop',
    desc: 'Instalarlo en cualquier PC o portátil convencional con procesador Intel o AMD.',
    file: 'EspaKodi-Generic.x86_64-12.2-0.0.2-20261022.img.gz',
    sha256: '9080ac5c6594977ab6ae4f75ff153e3d80e01d0480807bd6207164973718b87c',
    icon: ICONS.pc,
    ext: '.img.gz',
    highlight: true,
  },
  // Raspberry Pi
  {
    category: 'rpi',
    title: 'Raspberry Pi 4 y 400',
    tag: 'ARM64',
    desc: 'Optimizado para Raspberry Pi 4 Model B y el teclado Raspberry Pi 400.',
    file: 'EspaKodi-RPi4.aarch64-12.2-0.0.2-20261017.img.gz',
    sha256: '4f72a94e04cdc7490629884b797dd5cc178250e843a3f8d9106f50a6dd399d0d',
    icon: ICONS.rpi,
    ext: '.img.gz',
    highlight: true,
  },
  {
    category: 'rpi',
    title: 'Raspberry Pi 5',
    tag: 'ARM64',
    desc: 'Diseñado específicamente para la arquitectura y velocidad de Raspberry Pi 5.',
    file: 'EspaKodi-RPi5.aarch64-12.2-0.0.2-20261021.img.gz',
    sha256: '1bbad0f0353ce674188890e182c4c1fd7c3ed39ddef0d41f58fb25c0a315b7ee',
    icon: ICONS.rpi,
    ext: '.img.gz',
    highlight: true,
  },
  // Amlogic
  {
    category: 'amlogic',
    title: 'Banana Pi M2 Pro',
    tag: 'AMLGX',
    desc: 'Para la placa Banana Pi BPI-M2 Pro con SoC Amlogic S905X3.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-bananapi-m2-pro.img.gz',
    sha256: '7edf74ec43ba6365aa76413f32aa7fab9f0c0a1e1f17f0def05f0d5ffe8f4aeb',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Banana Pi M2S',
    tag: 'AMLGX',
    desc: 'Para la placa Banana Pi BPI-M2S con SoC A311D o S922X.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-bananapi-m2s.img.gz',
    sha256: 'de83014e94a2cbd973fa592964fbb05c323e808ca35277df4d98f3a283f30baf',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Banana Pi M5',
    tag: 'AMLGX',
    desc: 'Para la placa Banana Pi BPI-M5 con SoC Amlogic S905X3.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-bananapi-m5.img.gz',
    sha256: 'b7296c886597bfb77d669fa2eec187f1e007742343964c1bdbc3d6a3642cf3af',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'FriendlyElec NanoPi K2',
    tag: 'AMLGX',
    desc: 'Para la placa NanoPi K2 de FriendlyElec con procesador S905.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-nanopi-k2.img.gz',
    sha256: 'f101f966a2407ebc238793b19f2396ffdf3b2864ab2f1e9c95c39cb3f2542afa',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Hardkernel Odroid C2',
    tag: 'AMLGX',
    desc: 'Para la placa Hardkernel Odroid C2 con SoC Amlogic S905.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-odroid-c2.img.gz',
    sha256: '129f252f9fa67a30293a2e5de30b2346de52f1e0c9065233dcce6b944decad3d',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Hardkernel Odroid C4',
    tag: 'AMLGX',
    desc: 'Para la placa Hardkernel Odroid C4 con potente procesador S905X3.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-odroid-c4.img.gz',
    sha256: 'e6883f3a686b287991ea39a6d37bf3297da5d81b82630d0c97fac5b6b31a875a',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Hardkernel Odroid HC4',
    tag: 'AMLGX',
    desc: 'Para la placa y servidor NAS Odroid HC4 de Hardkernel.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-odroid-hc4.img.gz',
    sha256: '56c3b3b53f0ea07e2a1bc2e0b9641fc14cf55fbb95ab8614148a128c5a543d5f',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Hardkernel Odroid N2 / N2+',
    tag: 'AMLGX',
    desc: 'Para la placa de alto rendimiento Odroid N2 / N2+ con S922X.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-odroid-n2.img.gz',
    sha256: '18fe991cb5035b1f8ac92307eeda904a47e3c22c0f57bf91375e2fa90a48d82f',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Khadas VIM',
    tag: 'AMLGX',
    desc: 'Para la placa Khadas VIM (primera generación) con SoC S905X.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-khadas-vim.img.gz',
    sha256: '8bac1f9d3bd0d11035921d2855a4ccde410c4c6c0a77bc4aa97a6c658b189157',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Khadas VIM2',
    tag: 'AMLGX',
    desc: 'Para la placa Khadas VIM2 con procesador Amlogic S912.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-khadas-vim2.img.gz',
    sha256: '2d558b71712cad0755657ac8aec39d468c75ee9c6ad2b33460f895a0b3e2ad81',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Khadas VIM3',
    tag: 'AMLGX',
    desc: 'Para la placa Khadas VIM3 con SoC A311D.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-khadas-vim3.img.gz',
    sha256: '9f79d4a2450b3177afe42a9bf26af93c8b074995439adabf158630746a5b993d',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Khadas VIM3L',
    tag: 'AMLGX',
    desc: 'Para la versión HTPC Khadas VIM3L con SoC S905D3.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-khadas-vim3l.img.gz',
    sha256: '6d40497e408f8166337f3949860879a0809c068292900615c0c2d3cc7b5b10fd',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Libre Computer Alta',
    tag: 'AML-A311D-CC',
    desc: 'Para la placa Libre Computer AML-A311D-CC (Alta).',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-alta.img.gz',
    sha256: '00e1ebf8e692d238fca7c7dc8d57b3e1fc69e6a4d8641ee6dab9fcc4ee85c6d5',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Libre Computer La Frite',
    tag: 'AML-S805X-AC',
    desc: 'Para la placa Libre Computer AML-S805X-AC (La Frite).',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-lafrite.img.gz',
    sha256: '598ed38c0886d37209b7d558a70861a13f4bd59514f8435bfb00090bc44d603d',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Libre Computer Le Potato',
    tag: 'AML-S905X-CC',
    desc: 'Para la placa Libre Computer AML-S905X-CC (Le Potato).',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-lepotato.img.gz',
    sha256: 'd65e8e3222c58ced194641211ca9e9b315a220dfcfcea32061102e1c6fcbcc42',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Libre Computer Solitude',
    tag: 'AML-S905D3-CC',
    desc: 'Para la placa Libre Computer AML-S905D3-CC (Solitude).',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-solitude.img.gz',
    sha256: '6019f4ccd0e1af7259aa8cc82645b693a451b290465a3caa39149e7c0b372593',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Radxa Zero',
    tag: 'AMLGX',
    desc: 'Para la placa compacta Radxa Zero con SoC Amlogic S905Y2.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-radxa-zero.img.gz',
    sha256: '1a2cfcfd2d25ef3566dad31952affd5b876ed88b6fe2b992236ca54fbb8c07fe',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'Radxa Zero 2',
    tag: 'AMLGX',
    desc: 'Para la placa ultrarrápida Radxa Zero 2 con SoC A311D.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-radxa-zero2.img.gz',
    sha256: '48730a58d4e11539b710f5f51a26e74030fc9aaf5b481af9561379a353f1cd0d',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'WeTek Core 2',
    tag: 'AMLGX',
    desc: 'Para el media center WeTek Core 2.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-wetek-core2.img.gz',
    sha256: 'a84245256bd8d48b20f0b7e75f8cc2915b58077002f01a996fa24a8237a19f21',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'amlogic',
    title: 'WeTek Play 2',
    tag: 'AMLGX',
    desc: 'Para el decodificador híbrido WeTek Play 2 con sintonizador.',
    file: 'EspaKodi-AMLGX.aarch64-12.2-0.0.2-20261017-wetek-play2.img.gz',
    sha256: '284dbc3d4582525caf1be74b55f99566db15cd7c7dc77633f38a6416f33b8e6e',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
];

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function lsGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, val); } catch {}
}
function lsGetJSON(key, fallback) {
  try { const v = lsGet(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}

let activeCategory = 'all';
let searchQuery = '';

function boot() {
  initTheme();
  initPalette();
  initA11y();
  initDownloads();
  initClipboardButtons();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}

// --- Tema ---
function initTheme() {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  applyTheme();
  media.addEventListener('change', () => {
    if (!lsGet('theme')) applyTheme();
  });
  const themeBtn = $('#theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = resolvedTheme() === 'dark' ? 'light' : 'dark';
      lsSet('theme', next);
      applyTheme();
    });
  }
}

function resolvedTheme() {
  const pref = lsGet('theme');
  if (pref === 'light' || pref === 'dark') return pref;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark';
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', resolvedTheme());
}

// --- Paletas ---
function initPalette() {
  const saved = lsGet('palette') || 'teal';
  if (PALETTES.some((p) => p.id === saved)) applyPalette(saved);

  const pop = $('#palette-pop');
  if (!pop) return;

  pop.innerHTML = `
    <p class="popover-title">Paleta de color</p>
    ${PALETTES.map((p) => `
      <button class="swatch" type="button" role="menuitemradio" data-palette="${p.id}">
        <span class="dot" style="background:${p.color}"></span>${p.name}
        <span class="check">${ICONS.check}</span>
      </button>`).join('')}
  `;
  markPalette();

  pop.querySelectorAll('[data-palette]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyPalette(btn.dataset.palette);
      lsSet('palette', btn.dataset.palette);
      markPalette();
      togglePopover($('#palette-btn'), pop, false);
    });
  });

  bindPopover($('#palette-btn'), pop);
}

function applyPalette(id) {
  document.documentElement.setAttribute('data-palette', id);
}

function markPalette() {
  const current = document.documentElement.getAttribute('data-palette') || 'teal';
  const pop = $('#palette-pop');
  if (!pop) return;
  pop.querySelectorAll('[data-palette]').forEach((btn) => {
    btn.setAttribute('aria-checked', String(btn.dataset.palette === current));
  });
}

// --- Accesibilidad ---
function initA11y() {
  const saved = new Set(lsGetJSON('a11y', []));
  const root = document.documentElement;

  $$('[data-a11y]').forEach((btn) => {
    const cls = btn.dataset.a11y;
    const on = saved.has(cls);
    root.classList.toggle(cls, on);
    btn.setAttribute('aria-pressed', String(on));

    btn.addEventListener('click', () => {
      const active = root.classList.toggle(cls);
      btn.setAttribute('aria-pressed', String(active));
      const current = new Set(lsGetJSON('a11y', []));
      active ? current.add(cls) : current.delete(cls);
      lsSet('a11y', JSON.stringify([...current]));
    });
  });

  bindPopover($('#a11y-btn'), $('#a11y-panel'));
}

// --- Popovers ---
function bindPopover(btn, pop) {
  if (!btn || !pop) return;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePopover(btn, pop, pop.hasAttribute('hidden'));
  });
  pop.addEventListener('click', (e) => e.stopPropagation());
}

function togglePopover(btn, pop, show) {
  if (show) closeAllPopovers();
  pop.toggleAttribute('hidden', !show);
  btn.setAttribute('aria-expanded', String(show));
}

function closeAllPopovers() {
  $$('.popover').forEach((pop) => {
    pop.setAttribute('hidden', '');
  });
  $$('[aria-expanded="true"]').forEach((btn) => {
    btn.setAttribute('aria-expanded', 'false');
  });
}

document.addEventListener('click', closeAllPopovers);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAllPopovers();
});

// --- Descargas, Filtros y Hashes ---
function initDownloads() {
  const grid = $('#downloads-grid');
  const searchInput = $('#search-input');
  const filterTabs = $$('.tab-btn');

  function render() {
    const filtered = DOWNLOADS.filter((item) => {
      const matchCat = (activeCategory === 'all' || item.category === activeCategory);
      if (!matchCat) return false;
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.file.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.sha256.toLowerCase().includes(q)
      );
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <p>No se encontraron imágenes para <strong>"${escapeHtml(searchQuery)}"</strong>.</p>
        </div>`;
      return;
    }

    grid.innerHTML = filtered.map((item) => {
      const downloadUrl = `${CONFIG.baseUrl}/${item.file}`;
      return `
        <article class="dl-card ${item.highlight ? 'highlight-card' : ''}" data-cat="${item.category}">
          <div>
            <div class="dl-card-head">
              <div class="dl-title-wrap">
                <span class="dl-icon" aria-hidden="true">${item.icon}</span>
                <h3 class="dl-title">${item.title}</h3>
              </div>
              <span class="dl-tag-pill ${item.highlight ? 'accent-pill' : ''}">${item.tag}</span>
            </div>
            <p class="dl-desc" style="margin-top: 10px;">${item.desc}</p>
          </div>

          <div style="display:flex; flex-direction:column; gap:12px;">
            <div class="dl-file-info">
              <span class="dl-filename" title="${item.file}">${item.file}</span>
              <span class="dl-file-ext">${item.ext}</span>
            </div>

            <div class="dl-actions">
              <a class="btn-dl-main" href="${downloadUrl}" download="${item.file}" title="Descargar ${item.file}">
                ${ICONS.download}
                <span>Descargar</span>
              </a>
              <button class="btn-copy-icon" type="button" data-copy-url="${downloadUrl}" aria-label="Copiar enlace directo de descarga" title="Copiar enlace de descarga">
                ${ICONS.copy}
              </button>
            </div>

            <div class="hashes">
              <div class="hash">
                <span class="hash-label">SHA-256</span>
                <code class="hash-value" title="${item.sha256}">${item.sha256}</code>
                <button class="btn-copy-hash" type="button" data-copy-hash="${item.sha256}" aria-label="Copiar suma SHA-256" title="Copiar SHA-256">
                  ${ICONS.copy}
                  <span>Copiar</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    bindDownloadButtons();
  }

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category;
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      render();
    });
  }

  render();
}

function bindDownloadButtons() {
  $$('[data-copy-url]').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const url = btn.dataset.copyUrl;
      const ok = await copyText(url);
      if (ok) {
        showToast('Enlace de descarga copiado al portapapeles');
        const oldIcon = btn.innerHTML;
        btn.innerHTML = ICONS.check;
        btn.style.borderColor = 'var(--primary)';
        btn.style.color = 'var(--primary-strong)';
        setTimeout(() => {
          btn.innerHTML = oldIcon;
          btn.style.borderColor = '';
          btn.style.color = '';
        }, 1800);
      }
    });
  });

  $$('[data-copy-hash]').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const hash = btn.dataset.copyHash;
      const ok = await copyText(hash);
      if (ok) {
        showToast('Hash SHA-256 copiado al portapapeles');
        const oldHtml = btn.innerHTML;
        btn.innerHTML = `${ICONS.check} <span>Copiado</span>`;
        btn.style.borderColor = 'var(--primary)';
        btn.style.color = 'var(--primary-strong)';
        setTimeout(() => {
          btn.innerHTML = oldHtml;
          btn.style.borderColor = '';
          btn.style.color = '';
        }, 1800);
      }
    });
  });
}

function initClipboardButtons() {
  $$('.btn-copy-code').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const codeId = btn.dataset.targetCode;
      const codeEl = $(`#${codeId}`);
      if (!codeEl) return;
      const ok = await copyText(codeEl.textContent.trim());
      if (ok) {
        showToast('Comando copiado al portapapeles');
        const originalText = btn.innerHTML;
        btn.innerHTML = `${ICONS.check} Copiado`;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 1800);
      }
    });
  });
}

async function copyText(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {}
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    ta.remove();
    return true;
  } catch {
    ta.remove();
    return false;
  }
}

let toastTimer = null;
function showToast(msg) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }[m]));
}
