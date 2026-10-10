// Procjena projekta: opseg (S/M/L/XL) + okvirni rok, bez javne cijene.
// Bodovi i tjedni su interni model za razvrstavanje u razinu; korisniku se nikad ne prikazuju kao cijena.

const TYPE = {
  landing: { name: 'Landing stranica', pts: 1, weeks: [1, 2], block: 'Landing' },
  web: { name: 'Web stranica', pts: 2, weeks: [2, 4], block: 'Web' },
  shop: { name: 'Webshop', pts: 3.6, weeks: [5, 8], block: 'Webshop' },
  redesign: { name: 'Redizajn', pts: 2.2, weeks: [3, 5], block: 'Redizajn' },
};
// Pisanje tekstova je samo u koraku 06 (prije se brojalo i kao funkcija i kao "Trebam pomoć").
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
  animacije: { pts: 0.9, w: 1 },
};
const CONTENT = {
  'Imam sve': { pts: 0, w0: 0, w1: 0 },
  'Imam dio': { pts: 0.2, w0: 0, w1: 0 },
  'Trebam pomoć s tekstovima': { pts: 0.5, w0: 1, w1: 1 },
};
const TIERS = [
  [2.1, 'S', 'Kompaktno', 'Jedna ponuda ili manji web s nekoliko stranica i jasnim putem do upita.'],
  [3.6, 'M', 'Poslovno', 'Poslovni web s više usluga i stranicom za svaku od njih.'],
  [5.6, 'L', 'Napredno', 'Web s posebnim funkcijama ili puno sadržaja, s više faza pregleda.'],
  [99, 'XL', 'Poseban opseg', 'Složen projekt: faze i opseg dogovaramo na kratkom razgovoru prije ponude.'],
];
const meterAt = (pts) => 18 + Math.min(1, pts / 7.5) * 82;

const tjedana = (n) => (n % 10 === 1 && n % 100 !== 11 ? 'tjedan' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'tjedna' : 'tjedana');
const stranica = (n) => (n % 10 === 1 && n % 100 !== 11 ? 'stranica' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'stranice' : 'stranica');
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function compute(s) {
  const t = TYPE[s.type];
  let pts = t.pts;
  let w0 = t.weeks[0], w1 = t.weeks[1];
  const drivers = []; // [udio u bodovima, opis]: što opseg najviše pomiče
  if (s.type === 'web' || s.type === 'redesign') {
    const extra = Math.max(0, s.pages - 6);
    pts += extra * 0.14;
    w1 += Math.ceil(extra / 5);
    if (s.pages > 12) w0 += 1;
    if (extra) drivers.push([extra * 0.14, `${s.pages}${s.pages >= 20 ? '+' : ''} ${stranica(s.pages)}`]);
  }
  if (s.type === 'shop') {
    const add = { 'do 50': 0, '50–300': 0.8, '300+': 1.8 }[s.products] ?? 0;
    pts += add;
    w1 += Math.round(add);
    if (add) drivers.push([add, `${s.products} proizvoda`]);
  }
  s.features.forEach((f) => {
    if (!FEAT[f]) return;
    if (s.type === 'shop' && f === 'kartice') return; // već u webshopu
    pts += FEAT[f].pts;
    w1 += FEAT[f].w;
    drivers.push([FEAT[f].pts, f]);
  });
  const c = CONTENT[s.content] || CONTENT['Imam dio'];
  pts += c.pts; w0 += c.w0; w1 += c.w1;
  if (c.pts >= 0.5) drivers.push([c.pts, 'Pomoć s tekstovima']);
  w0 = Math.max(w0, Math.ceil(w1 / 2)); // veći opseg ne može imati najkraći rok osnovnog paketa
  w1 = Math.max(Math.ceil(w1), w0 + 1); // dio tjedna nije rok
  const tier = TIERS.find(([max]) => pts < max);
  drivers.sort((a, b) => b[0] - a[0]);
  return { pts, tier: tier[1], tierName: tier[2], tierDesc: tier[3], weeks: `${w0}–${w1} ${tjedana(w1)}`, meter: meterAt(pts), drivers };
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
  const pagesOut = $('[data-pages-out]');
  const prods = $('[data-products]');
  const rangeWrap = $('[data-range-wrap]');
  const landingNote = $('[data-landing-note]');
  const sizeLegend = $('[data-size-legend]');
  const sizeHelp = $('[data-size-help]');
  const other = $('[data-other]');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const live = $('[data-cfg-live]');
  const ans = (k) => root.querySelector(`[data-ans="${k}"]`);
  // ?djelatnost= prihvaća ključ sektora, slug stranice djelatnosti ili stari tab (mapa dolazi iz registra)
  let sectorMap = {};
  try { sectorMap = JSON.parse(root.dataset.sectors || '{}'); } catch (e) {}
  let pageLabel = ''; // "Klima i grijanje" kad je procjena otvorena sa stranice djelatnosti

  // oznake razina na mjeraču: gdje počinju M, L i XL
  root.querySelectorAll('.cfg-meter i').forEach((el, i) => { el.style.left = `${meterAt(TIERS[i][0]).toFixed(1)}%`; });

  function read() {
    const fd = new FormData(form);
    return {
      type: fd.get('type') || 'web',
      trade: fd.get('trade') || '',
      tradeOther: (fd.get('trade_other') || '').toString().trim().slice(0, 60),
      pages: +fd.get('pages') || 6,
      products: fd.get('products') || 'do 50',
      features: fd.getAll('features'),
      deadline: fd.get('deadline') || 'Fleksibilno',
      content: fd.get('content') || 'Imam dio',
    };
  }

  const featEl = (f) => form.querySelector(`input[name="features"][value="${f}"]`);
  const tradeEl = (v) => v && form.querySelector(`input[name="trade"][value="${CSS.escape(v)}"]`);

  function tradeText(s, short = false) {
    const el = tradeEl(s.trade);
    if (!el) return 'nije odabrano';
    if (s.trade === 'ostalo') return s.tradeOther ? `${el.dataset.name} (${s.tradeOther})` : el.dataset.name;
    return (short ? el.dataset.short : el.dataset.name) + (pageLabel && el.dataset.pre ? ` · ${pageLabel}` : '');
  }
  const sizeText = (s) => (s.type === 'landing' ? '1 landing stranica' : s.type === 'shop' ? `${s.products} proizvoda` : `${s.pages}${s.pages >= 20 ? '+' : ''} ${stranica(s.pages)}`);

  function summaryLines(s, r, compact = false) {
    const feats = s.features.map((f) => featEl(f)?.dataset[compact ? 'short' : 'label']).filter(Boolean);
    return [
      ['Projekt', `${TYPE[s.type].name} · ${sizeText(s)}`],
      ['Djelatnost', tradeText(s)],
      ['Funkcije', feats.length ? feats.join(', ') : 'osnovni paket'],
      ['Rok', s.deadline],
      ['Sadržaj', s.content],
      ['Procjena', `opseg ${r.tier} (${r.tierName}), ${r.weeks}`],
    ];
  }

  // Presjek zgrade: temelj (SEO + mjerenje), tijelo (vrsta projekta), katovi (funkcije) — svaki kat ima svoje
  // stalno mjesto (redoslijed popisa), pa novi kat nikad ne "upada" između drugih. Elementi se ne grade iznova:
  // postojeći katovi samo mijenjaju visinu, novi rastu iz nule, uklonjeni se skupljaju i tek onda nestaju.
  // Isti presjek crta se i u kartici u heroju Cijena (data-cfg-mirror): svaki stog ima svoje katove.
  const featOrder = [...form.querySelectorAll('input[name="features"]')].map((i) => i.value);
  const BASE_H = { landing: 22, web: 34, redesign: 34, shop: 44 };

  const makeStack = (stack) => {
    const bld = document.createElement('div');
    bld.className = 'cfg-bld';
    stack.appendChild(bld);
    const floors = new Map();

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

    return function renderStack(s) {
      const want = [['_found', 'SEO + mjerenje', 'found', -2], ['_base', TYPE[s.type].block + (s.type === 'web' || s.type === 'redesign' ? ` · ${s.pages} str.` : ''), 'base', -1]];
      s.features.forEach((f) => {
        const el = featEl(f);
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
    };
  };
  const mirrors = root.id ? [...document.querySelectorAll(`[data-cfg-mirror="${CSS.escape(root.id)}"]`)] : [];
  const stacks = [stack, ...mirrors.map((m) => m.querySelector('[data-stack]'))].filter(Boolean).map(makeStack);
  mirrors.forEach((m) => {
    m.querySelectorAll('.cfg-meter i').forEach((el, i) => { el.style.left = `${meterAt(TIERS[i][0]).toFixed(1)}%`; });
    const types = m.querySelector('[data-est-types]');
    if (!types) return;
    types.hidden = false;
    // vrsta u kartici je prvo pitanje procjene: mijenja isti odabir u obrascu ispod
    types.addEventListener('click', (e) => {
      const b = e.target.closest('[data-type]');
      const r = b && form.querySelector(`input[name="type"][value="${CSS.escape(b.dataset.type)}"]`);
      if (!r || r.checked) return;
      r.checked = true;
      r.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });

  const driverText = (d) => (FEAT[d] ? featEl(d)?.dataset.short || d : d);

  function update() {
    const s = read();
    const isLanding = s.type === 'landing', isShop = s.type === 'shop';
    rangeWrap.hidden = isLanding || isShop;
    prods.hidden = !isShop;
    landingNote.hidden = !isLanding;
    if (other) other.hidden = s.trade !== 'ostalo';
    sizeLegend.textContent = isShop ? 'Koliko proizvoda?' : isLanding ? 'Opseg' : 'Koliko stranica?';
    if (sizeHelp) sizeHelp.parentElement.hidden = isShop || isLanding;
    pagesOut.textContent = `${s.pages}${s.pages >= 20 ? '+' : ''} ${stranica(s.pages)}`;
    const r = compute(s);

    // odgovori u zaglavljima koraka
    ans('type').textContent = TYPE[s.type].name;
    const tr = ans('trade');
    tr.textContent = tradeText(s, true);
    tr.classList.toggle('is-empty', !s.trade);
    ans('size').textContent = sizeText(s);
    ans('features').textContent = s.features.length ? `${s.features.length} odabrano` : 'osnovni paket';
    ans('deadline').textContent = s.deadline;
    ans('content').textContent = s.content;

    $('[data-tier]').textContent = r.tier;
    $('[data-tier-name]').textContent = r.tierName;
    $('[data-tier-desc]').textContent = r.tierDesc;
    $('[data-weeks]').textContent = r.weeks;
    $('[data-meter]').style.width = `${Math.round(r.meter)}%`;
    $('[data-urgent]').hidden = s.deadline !== 'Hitno';
    const drv = r.drivers.slice(0, 3);
    $('[data-drivers-wrap]').hidden = !drv.length;
    $('[data-drivers]').innerHTML = drv.map((d) => `<li>${esc(driverText(d[1]))}</li>`).join('');
    const noTrade = !s.trade;
    $('[data-summary]').innerHTML = summaryLines(s, r, true)
      .slice(0, 5)
      .map(([k, v]) => {
        const empty = k === 'Djelatnost' && noTrade;
        return `<li${empty ? ' class="is-empty"' : ''}><b>${k}</b><span>${esc(v)}${empty ? ' <button type="button" class="cfg-fix" data-fix="trade">Odaberite</button>' : ''}</span></li>`;
      })
      .join('');
    stacks.forEach((render) => render(s));
    mirrors.forEach((m) => {
      m.querySelector('[data-tier]').textContent = r.tier;
      m.querySelector('[data-tier-name]').textContent = r.tierName;
      m.querySelector('[data-weeks]').textContent = r.weeks;
      m.querySelector('[data-meter]').style.width = `${Math.round(r.meter)}%`;
      m.querySelectorAll('[data-type]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.type === s.type)));
    });
    const dt = $('[data-dock-tier]'), dw = $('[data-dock-weeks]');
    if (dt) { dt.textContent = r.tier; dw.textContent = r.weeks; }
    const said = `Opseg ${r.tier}, ${r.tierName.toLowerCase()}, ${r.weeks}`;
    if (live && live.textContent !== said) live.textContent = said;
    root._summary = summaryLines(s, r).map(([k, v]) => `${k}: ${v}`).join('\n');
    root._state = s;
  }

  form.addEventListener('input', update);
  form.addEventListener('change', update);
  update();

  // predodaberi sektor iz URL-a (?djelatnost=instalacije | klima-i-grijanje | Klima)
  const pre = new URLSearchParams(location.search).get('djelatnost');
  if (pre) {
    const [sector, label] = sectorMap[pre] || [pre, ''];
    const r = tradeEl(sector);
    if (r) {
      r.checked = true;
      r.dataset.pre = '1';
      pageLabel = label;
      form.querySelectorAll('input[name="trade"]').forEach((o) => o !== r && o.addEventListener('change', () => { delete r.dataset.pre; }, { once: true }));
      update();
    }
  }

  // "Odaberite" u sažetku vodi na korak 02
  root.addEventListener('click', (e) => {
    if (!e.target.closest('[data-fix]')) return;
    const step = $('[data-step="trade"]');
    window.zaecScrollTo ? window.zaecScrollTo(step, -110) : step.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    setTimeout(() => step.querySelector('input[name="trade"]')?.focus({ preventScroll: true }), reduce ? 0 : 700);
  });

  // mobitel i tablet: traka s rezultatom dok je procjena na ekranu, a panel s rezultatom nije
  const dock = $('[data-cfg-dock]');
  const out = $('[data-cfg-out]');
  if (dock && out && 'IntersectionObserver' in window) {
    const narrow = matchMedia('(max-width: 1100px)');
    let inForm = false, outVis = false;
    const sync = () => {
      const on = inForm && !outVis && narrow.matches;
      dock.classList.toggle('is-on', on);
      document.documentElement.classList.toggle('cfg-docked', on);
    };
    new IntersectionObserver(([en]) => { inForm = en.isIntersecting; sync(); }, { rootMargin: '-35% 0px -35% 0px' }).observe(form);
    new IntersectionObserver(([en]) => { outVis = en.isIntersecting; sync(); }, { threshold: 0.2 }).observe(out);
    narrow.addEventListener?.('change', sync);
    $('[data-dock-go]')?.addEventListener('click', () => {
      window.zaecScrollTo ? window.zaecScrollTo(out, -80) : out.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
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
