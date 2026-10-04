// Procjena projekta: opseg (S/M/L/XL) + okvirni rok, bez javne cijene.
import { gsap } from 'gsap';

const TYPE = {
  landing: { name: 'Landing stranica', pts: 1, weeks: [1, 2], block: 'Landing', c: '#2347ff' },
  web: { name: 'Web stranica', pts: 2, weeks: [2, 4], block: 'Web', c: '#2347ff' },
  shop: { name: 'Webshop', pts: 3.6, weeks: [5, 8], block: 'Webshop', c: '#2347ff' },
  redesign: { name: 'Redizajn', pts: 2.2, weeks: [3, 5], block: 'Redizajn', c: '#2347ff' },
};
const FEAT = {
  galerija: { pts: 0.3, w: 0, c: '#e2d3b0' },
  ga4: { pts: 0.4, w: 0, c: '#ffd166' },
  ai: { pts: 0.5, w: 0.5, c: '#a9bcff' },
  seo: { pts: 0.8, w: 1, c: '#7fb069' },
  gbp: { pts: 0.3, w: 0, c: '#9fc27c' },
  booking: { pts: 1.2, w: 1, c: '#ffb23f' },
  jezici: { pts: 0.9, w: 1, c: '#c8643b' },
  blog: { pts: 0.4, w: 0.5, c: '#d9cfbd' },
  kartice: { pts: 1.1, w: 1, c: '#1d7f47' },
  integracije: { pts: 1.6, w: 1.5, c: '#6b675e' },
  tekstovi: { pts: 0.6, w: 1, c: '#f3ede1' },
  animacije: { pts: 0.9, w: 1, c: '#7d93ff' },
};
const TIERS = [
  [2.1, 'S', 'Kompaktno'],
  [3.6, 'M', 'Poslovno'],
  [5.6, 'L', 'Napredno'],
  [99, 'XL', 'Poseban opseg'],
];

const tjedana = (n) => (n % 10 === 1 && n % 100 !== 11 ? 'tjedan' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'tjedna' : 'tjedana');
const stranica = (n) => (n % 10 === 1 && n % 100 !== 11 ? 'stranica' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'stranice' : 'stranica');

function compute(s) {
  const t = TYPE[s.type];
  let pts = t.pts;
  let w0 = t.weeks[0], w1 = t.weeks[1];
  if (s.type === 'web' || s.type === 'redesign') {
    const extra = Math.max(0, s.pages - 6);
    pts += extra * 0.14;
    w1 += Math.ceil(extra / 5);
    if (s.pages > 12) w0 += 1;
  }
  if (s.type === 'shop') {
    const add = { 'do 50': 0, '50–300': 0.8, '300+': 1.8 }[s.products] ?? 0;
    pts += add;
    w1 += Math.round(add);
  }
  s.features.forEach((f) => {
    if (s.type === 'shop' && f === 'kartice') return; // već u webshopu
    pts += FEAT[f].pts;
    w1 += FEAT[f].w;
  });
  if (s.content === 'Trebam pomoć') { pts += 0.5; w1 += 1; w0 += 1; }
  if (s.content === 'Djelomično') { pts += 0.2; }
  w1 = Math.max(w1, w0 + 1);
  const tier = TIERS.find(([max]) => pts < max);
  return { pts, tier: tier[1], tierName: tier[2], weeks: `${w0}–${w1} ${tjedana(w1)}`, meter: Math.min(1, pts / 7.5) };
}

export function initConfigurators() {
  document.querySelectorAll('[data-configurator]').forEach(init);
}

function init(root) {
  if (root.dataset.ready) return;
  root.dataset.ready = '1';
  const form = root.querySelector('form');
  const $ = (sel) => root.querySelector(sel);
  const stack = $('[data-stack]');
  const pages = $('[data-pages]');
  const pagesOut = $('[data-pages-out]');
  const prods = $('[data-products]');
  const rangeWrap = $('[data-range-wrap]');
  const landingNote = $('[data-landing-note]');
  const sizeLegend = $('[data-size-legend]');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lastBlocks = [];

  function read() {
    const fd = new FormData(form);
    return {
      type: fd.get('type') || 'web',
      trade: fd.get('trade') || '',
      pages: +fd.get('pages') || 6,
      products: fd.get('products') || 'do 50',
      features: fd.getAll('features'),
      deadline: fd.get('deadline') || 'Fleksibilno',
      content: fd.get('content') || 'Djelomično',
    };
  }

  function summaryLines(s, r) {
    const size = s.type === 'landing' ? '1 landing stranica' : s.type === 'shop' ? `${s.products} proizvoda` : `${s.pages} ${stranica(s.pages)}`;
    const feats = s.features.map((f) => form.querySelector(`[value="${f}"]`)?.dataset.label).filter(Boolean);
    return [
      ['Projekt', `${TYPE[s.type].name} · ${size}`],
      ['Djelatnost', s.trade],
      ['Funkcije', feats.length ? feats.join(', ') : 'osnovni paket'],
      ['Rok', s.deadline],
      ['Sadržaj', s.content],
      ['Procjena', `opseg ${r.tier} (${r.tierName}), ${r.weeks}`],
    ];
  }

  function renderStack(s) {
    const blocks = [{ k: 'base', label: TYPE[s.type].block + (s.type === 'web' || s.type === 'redesign' ? ` · ${s.pages} str.` : ''), c: '#2347ff' }];
    s.features.forEach((f) => {
      const el = form.querySelector(`[value="${f}"]`);
      blocks.push({ k: f, label: el?.dataset.label.split(/[ /(]/)[0] || f, c: FEAT[f].c });
    });
    blocks.push({ k: 'seo', label: 'SEO + mjerenje', c: '#141414' });
    const keys = blocks.map((b) => b.k).join('|');
    if (keys === lastBlocks.join('|')) {
      const first = stack.querySelector('.cfg-block b');
      if (first) first.textContent = blocks[0].label;
      return;
    }
    const prevKeys = new Set(lastBlocks);
    lastBlocks = blocks.map((b) => b.k);
    stack.innerHTML = '';
    const n = blocks.length;
    const step = Math.min(24, 150 / n);
    blocks.slice().reverse().forEach((b, idx) => {
      const level = n - 1 - idx;
      const el = document.createElement('div');
      el.className = 'cfg-block';
      el.style.setProperty('--c', b.c);
      el.style.bottom = `${18 + level * step}px`;
      el.style.zIndex = String(level + 1);
      el.innerHTML = `<i class="t"></i><i class="f"></i><i class="r"></i><b>${b.label}</b>`;
      if (['#e2d3b0', '#f3ede1', '#d9cfbd', '#ffb23f', '#9fc27c'].includes(b.c)) el.querySelector('b').style.color = '#141414';
      stack.appendChild(el);
      if (!reduce && !prevKeys.has(b.k)) gsap.from(el, { y: -70, opacity: 0, duration: 0.7, ease: 'bounce.out', delay: 0.04 });
    });
  }

  function update() {
    const s = read();
    const isLanding = s.type === 'landing', isShop = s.type === 'shop';
    rangeWrap.hidden = isLanding || isShop;
    prods.hidden = !isShop;
    landingNote.hidden = !isLanding;
    sizeLegend.textContent = isShop ? 'Koliko proizvoda?' : isLanding ? 'Opseg' : 'Koliko stranica?';
    pagesOut.textContent = `${s.pages}${s.pages >= 20 ? '+' : ''} ${stranica(s.pages)}`;
    const r = compute(s);
    $('[data-tier]').textContent = r.tier;
    $('[data-tier-name]').textContent = r.tierName;
    $('[data-weeks]').textContent = r.weeks;
    $('[data-meter]').style.width = `${Math.round(18 + r.meter * 82)}%`;
    $('[data-urgent]').hidden = s.deadline !== 'Hitno';
    const ul = $('[data-summary]');
    ul.innerHTML = summaryLines(s, r)
      .slice(0, 5)
      .map(([k, v]) => `<li><b>${k}</b><span>${v}</span></li>`)
      .join('');
    renderStack(s);
    root._summary = summaryLines(s, r).map(([k, v]) => `${k}: ${v}`).join('\n');
    root._state = s;
  }

  form.addEventListener('input', update);
  form.addEventListener('change', update);
  update();

  // predodaberi djelatnost iz URL-a (?djelatnost=Klima)
  const pre = new URLSearchParams(location.search).get('djelatnost');
  if (pre) {
    const r = form.querySelector(`input[name="trade"][value="${CSS.escape(pre)}"]`);
    if (r) { r.checked = true; update(); }
  }

  $('[data-cfg-send]').addEventListener('click', () => {
    update();
    const payload = { summary: root._summary, trade: root._state.trade, type: root._state.type };
    try { sessionStorage.setItem('zaec-config', JSON.stringify(payload)); } catch (e) {}
    window.zaecTrack?.('configurator_complete', { tier: root._summary.match(/opseg (\w+)/)?.[1] });
    document.dispatchEvent(new CustomEvent('zaec:config', { detail: payload }));
    const target = root.dataset.formTarget || '/kontakt/#upit';
    const hash = target.split('#')[1];
    const local = hash && document.getElementById(hash);
    if (local && (target.startsWith('#') || new URL(target, location.href).pathname === location.pathname)) {
      window.zaecScrollTo ? window.zaecScrollTo(local, -90) : local.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => local.querySelector('input:not([type=hidden]):not([tabindex="-1"])')?.focus({ preventScroll: true }), 1100);
    } else {
      location.href = target;
    }
  });
}
