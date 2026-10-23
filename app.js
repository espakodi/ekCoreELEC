'use strict';

const CONFIG = {
  version: '0.0.1',
  date: '23 de octubre de 2026',
  baseUrl: 'https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1',
};

const PALETTES = [
  { id: 'burgundy', name: 'Burdeos', color: '#8a3144' },
  { id: 'terracotta', name: 'Terracota', color: '#a85534' },
  { id: 'teal', name: 'Teal', color: '#136b5e' },
  { id: 'indigo', name: 'Índigo', color: '#37548f' },
  { id: 'forest', name: 'Bosque', color: '#356b3f' },
  { id: 'noche', name: 'Noche', color: '#0288d1' },
];

const ICONS = {
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  tvbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  chip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2"/><line x1="9" y1="1" x2="9" y2="5"/><line x1="15" y1="1" x2="15" y2="5"/><line x1="9" y1="19" x2="9" y2="23"/><line x1="15" y1="19" x2="15" y2="23"/><line x1="1" y1="9" x2="5" y2="9"/><line x1="1" y1="15" x2="5" y2="15"/><line x1="19" y1="9" x2="23" y2="9"/><line x1="19" y1="15" x2="23" y2="15"/></svg>',
  tar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',
};

const DOWNLOADS = [
  // TV Box Genéricos
  {
    category: 'tvbox',
    title: 'TV Box Genérico (-ng)',
    tag: 'TV BOX · -NG',
    desc: 'Para la gran mayoría de TV boxes con chips S905X, S905D, S905W, S905X2, S905Y2, S922X, A311D, S905X3, S905D3 y S905X4. Requiere copiar el dtb.img a la raíz.',
    file: 'EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Generic.img.gz',
    sha256: '4387a2b836a02d6d0e8c0fbebbfca62ed088d98651ff3423682528a493ba41db',
    icon: ICONS.tvbox,
    ext: '.img.gz',
    highlight: true,
  },
  {
    category: 'tvbox',
    title: 'TV Box Genérico (-ne)',
    tag: 'TV BOX · -NE',
    desc: 'Para TV boxes modernos con procesadores S905X4, S905W2, S905Y4, S928X y A311D2 (kernel Linux 5.4). Requiere copiar el dtb.img a la raíz.',
    file: 'EspaKodi-Amlogic-ne.aarch64-21.3-Omega_devel_20260915194856-Generic.img.gz',
    sha256: '451ca9c1861a8382d80df6e82dbb26cc382a6bc3e07e1a3164d3a85ef81a3f81',
    icon: ICONS.tvbox,
    ext: '.img.gz',
    highlight: true,
  },
  // Placas Amlogic
  {
    category: 'placas',
    title: 'Hardkernel Odroid C4',
    tag: 'S905X3 · -NG',
    desc: 'Para la placa Hardkernel Odroid C4 con procesador Amlogic S905X3. Lista para arrancar sin paso de dtb.img.',
    file: 'EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Odroid_C4.img.gz',
    sha256: '31ece4f7ddbd67d6ba0ae8f8e548a6bfbb044c41bdcd208a8acdb9dd1302798d',
    icon: ICONS.chip,
    ext: '.img.gz',
    highlight: true,
  },
  {
    category: 'placas',
    title: 'Hardkernel Odroid HC4',
    tag: 'S905X3 · -NG',
    desc: 'Para la placa y servidor de almacenamiento NAS Hardkernel Odroid HC4 con chip S905X3.',
    file: 'EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Odroid_HC4.img.gz',
    sha256: 'd09019cf75bca5ce1bfbd114c7eb13dbcc122d489104935afa471578512d1d78',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'placas',
    title: 'Hardkernel Odroid N2 / N2+',
    tag: 'S922X · -NG',
    desc: 'Para la potente placa de desarrollo Hardkernel Odroid N2 y N2+ con procesador S922X.',
    file: 'EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Odroid_N2.img.gz',
    sha256: '59cf51daf34ed0e2aedf9b9a29db4a88fe6c5ca00e43daa7a9e99a621033f15c',
    icon: ICONS.chip,
    ext: '.img.gz',
    highlight: true,
  },
  {
    category: 'placas',
    title: 'Hardkernel Odroid N2L',
    tag: 'S922X · -NG',
    desc: 'Para la placa ligera Hardkernel Odroid N2L con SoC Amlogic S922X.',
    file: 'EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Odroid_N2L.img.gz',
    sha256: '23ea2434ebbdba7eba226c2f5fa08ba6eb5623add75383201a38acaed95e7201',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'placas',
    title: 'Khadas VIM1S',
    tag: 'S905Y4 · -NE',
    desc: 'Para la placa Khadas VIM1S con procesador Amlogic S905Y4 (familia aarch64 -ne).',
    file: 'EspaKodi-Amlogic-ne.aarch64-21.3-Omega_devel_20260915194856-Khadas_VIM1S.img.gz',
    sha256: 'a652eb900d82a385fccf75d429e826f27bd9f2ee1e16c68723c3fca3ce80c891',
    icon: ICONS.chip,
    ext: '.img.gz',
    highlight: true,
  },
  {
    category: 'placas',
    title: 'Khadas VIM4',
    tag: 'A311D2 · -NE',
    desc: 'Para la placa de gama alta Khadas VIM4 con procesador octa-core Amlogic A311D2.',
    file: 'EspaKodi-Amlogic-ne.aarch64-21.3-Omega_devel_20260915194856-Khadas_VIM4.img.gz',
    sha256: 'bfe9d5ede97cc73ff100442d02149250523df4a376078444cb67a2bbe947500c',
    icon: ICONS.chip,
    ext: '.img.gz',
    highlight: true,
  },
  {
    category: 'placas',
    title: 'Libre Computer La Frite',
    tag: 'S805X · -NG',
    desc: 'Para la placa Libre Computer AML-S805X-AC (La Frite). Arranca directamente.',
    file: 'EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-LaFrite.img.gz',
    sha256: '751533d795663b100aa63d061b40dc77b96843a7d8bb77dd2ae04edb95532057',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'placas',
    title: 'Libre Computer Le Potato',
    tag: 'S905X · -NG',
    desc: 'Para la placa Libre Computer AML-S905X-CC (Le Potato) con procesador S905X.',
    file: 'EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-LePotato.img.gz',
    sha256: 'c728c3ce9a80da4301bb363f60e3f1bfe71e3f2de1b24281dece95ace6dd5c4e',
    icon: ICONS.chip,
    ext: '.img.gz',
    highlight: true,
  },
  {
    category: 'placas',
    title: 'Radxa Zero',
    tag: 'S905Y2 · -NG',
    desc: 'Para la microplaca ultracompacta Radxa Zero con procesador Amlogic S905Y2.',
    file: 'EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Radxa_Zero.img.gz',
    sha256: 'ef5fe0efed99d26f9bcacd78b344277749b02e9ffc3fa4e1da5c6e169a2ce0ea',
    icon: ICONS.chip,
    ext: '.img.gz',
  },
  {
    category: 'placas',
    title: 'Radxa Zero 2',
    tag: 'A311D · -NG',
    desc: 'Para la placa ultrarrápida Radxa Zero 2 con procesador hexa-core Amlogic A311D.',
    file: 'EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Radxa_Zero2.img.gz',
    sha256: '45be7c3703c509b914679294e6437fcd367077aa46e281b70a95931fd3e38600',
    icon: ICONS.chip,
    ext: '.img.gz',
    highlight: true,
  },
  // Actualizaciones .tar
  {
    category: 'tar',
    title: 'Actualización manual (-ng)',
    tag: 'UPDATE · -NG',
    desc: 'Archivo .tar para actualizar dispositivos de la familia -ng ya instalados sin volver a grabar la tarjeta.',
    file: 'EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200.tar',
    sha256: '34aa10c3ed14fe4a2ba524c84eadf765a2f04abe9d57e4e9986db1cc91568b81',
    icon: ICONS.tar,
    ext: '.tar',
  },
  {
    category: 'tar',
    title: 'Actualización manual (-ne)',
    tag: 'UPDATE · -NE',
    desc: 'Archivo .tar para actualizar dispositivos de la familia -ne ya instalados sin volver a grabar la tarjeta.',
    file: 'EspaKodi-Amlogic-ne.aarch64-21.3-Omega_devel_20260915194856.tar',
    sha256: '9a8e000677afc15699d002a153f58127e3ec4edc58ac515cfbc9164935334598',
    icon: ICONS.tar,
    ext: '.tar',
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
  initBackToTop();
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
  const saved = lsGet('palette') || 'burgundy';
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
  const current = document.documentElement.getAttribute('data-palette') || 'burgundy';
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
        <article class="dl-card" data-cat="${item.category}">
          <div>
            <div class="dl-card-head">
              <div class="dl-title-wrap">
                <span class="dl-icon" aria-hidden="true">${item.icon}</span>
                <h3 class="dl-title">${item.title}</h3>
              </div>
              <span class="dl-tag-pill">${item.tag}</span>
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

// --- Botón volver arriba (ir al cielo) ---
function initBackToTop() {
  const btn = $('#btn-back-to-top');
  if (!btn) return;

  const toggleVisibility = () => {
    if (window.scrollY > 180) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  toggleVisibility();
}
