// Procjena projekta: opseg (S/M/L/XL) + okvirni rok, bez javne cijene.

const TYPE = {
  landing: { name: 'Landing stranica', pts: 1, weeks: [1, 2], block: 'Landing' },
  web: { name: 'Web stranica', pts: 2, weeks: [2, 4], block: 'Web' },
  shop: { name: 'Webshop', pts: 3.6, weeks: [5, 8], block: 'Webshop' },
  redesign: { name: 'Redizajn', pts: 2.2, weeks: [3, 5], block: 'Redizajn' },
};
const FEAT = {
  galerija: { pts: 0.3, w: 0 },
  ga4: { pts: 0.4, w: 0 },
  ai: { pts: 0.5, w: 0.5 },
  seo: { pts: 0.8, w: 1 },
  gbp: { pts: 0.3, w: 0 },
  booking: { pts: 1.2, w: 1 },
  jezici: { pts: 0.9, w: 1 },
  blog: { pts: 0.4, w: 0.5 },
  kartice: { pts: 1.1, w: 1 },
  integracije: { pts: 1.6, w: 1.5 },
  tekstovi: { pts: 0.6, w: 1 },
  animacije: { pts: 0.9, w: 1 },
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
  w1 = Math.max(Math.ceil(w1), w0 + 1); // dio tjedna nije rok
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
  const live = $('[data-cfg-live]');

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

  function summaryLines(s, r, compact = false) {
    const size = s.type === 'landing' ? '1 landing stranica' : s.type === 'shop' ? `${s.products} proizvoda` : `${s.pages} ${stranica(s.pages)}`;
    const feats = s.features.map((f) => form.querySelector(`[value="${f}"]`)?.dataset.label).filter(Boolean);
    const short = s.features.map((f) => form.querySelector(`[value="${f}"]`)?.dataset.short).filter(Boolean);
    return [
      ['Projekt', `${TYPE[s.type].name} · ${size}`],
      ['Djelatnost', s.trade],
      ['Funkcije', feats.length ? (compact ? short : feats).join(', ') : 'osnovni paket'],
      ['Rok', s.deadline],
      ['Sadržaj', s.content],
      ['Procjena', `opseg ${r.tier} (${r.tierName}), ${r.weeks}`],
    ];
  }

  // Presjek zgrade: temelj (SEO + mjerenje), tijelo (vrsta projekta), katovi (funkcije) — svaki kat ima svoje
  // stalno mjesto (redoslijed popisa), pa novi kat nikad ne "upada" između drugih. Elementi se ne grade iznova:
  // postojeći katovi samo mijenjaju visinu, novi rastu iz nule, uklonjeni se skupljaju i tek onda nestaju.
  const featOrder = [...form.querySelectorAll('input[name="features"]')].map((i) => i.value);
  const bld = document.createElement('div');
  bld.className = 'cfg-bld';
  stack.appendChild(bld);
  const floors = new Map();
  const BASE_H = { landing: 22, web: 34, redesign: 34, shop: 44 };

  function floorEl(k, label, kind) {
    let el = floors.get(k);
    if (el) {
      clearTimeout(el._t);
      el.classList.remove('is-leave');
    } else {
      el = document.createElement('div');
      el.className = `cfg-fl cfg-fl--${kind}${reduce ? '' : ' is-enter'}`;
      el.dataset.k = k;
      el.innerHTML = '<b></b>';
      floors.set(k, el);
      if (!reduce) {
        requestAnimationFrame(() => requestAnimationFrame(() => {
          el.classList.remove('is-enter');
          el.classList.add('is-lit');
          el._lit = setTimeout(() => el.classList.remove('is-lit'), 1400);
        }));
      }
    }
    el.querySelector('b').textContent = label;
    return el;
  }

  function renderStack(s) {
    const want = [['_found', 'SEO + mjerenje', 'found', -2], ['_base', TYPE[s.type].block + (s.type === 'web' || s.type === 'redesign' ? ` · ${s.pages} str.` : ''), 'base', -1]];
    s.features.forEach((f) => {
      const el = form.querySelector(`[value="${f}"]`);
      want.push([f, el?.dataset.short || el?.dataset.label || f, 'feat', featOrder.indexOf(f)]);
    });
    const keep = new Set(want.map((w) => w[0]));
    want.forEach(([k, label, kind, ord]) => { const el = floorEl(k, label, kind); el._ord = ord; });
    floors.forEach((el, k) => {
      if (keep.has(k) || el.classList.contains('is-leave')) return;
      el.classList.add('is-leave');
      el._t = setTimeout(() => { el.remove(); floors.delete(k); }, reduce ? 0 : 520);
    });
    // visina kata: stog uvijek stane u kadar; promjena visine je ista tranzicija kao rast kata
    const nFeat = s.features.length;
    const fh = nFeat ? Math.max(9, Math.min(22, (148 - BASE_H[s.type]) / nFeat)) : 22;
    stack.style.setProperty('--fh', `${fh.toFixed(1)}px`);
    stack.style.setProperty('--bh', `${BASE_H[s.type]}px`);
    stack.classList.toggle('is-dense', fh < 15);
    [...floors.values()].sort((x, y) => x._ord - y._ord).forEach((el) => bld.appendChild(el));
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
    ul.innerHTML = summaryLines(s, r, true)
      .slice(0, 5)
      .map(([k, v]) => `<li><b>${k}</b><span>${v}</span></li>`)
      .join('');
    renderStack(s);
    const said = `Opseg ${r.tier}, ${r.tierName.toLowerCase()}, ${r.weeks}`;
    if (live && live.textContent !== said) live.textContent = said;
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
