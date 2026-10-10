// Nacrt djelatnosti — zajednički crtački standard (design/02-heroji-djelatnosti.md, točka 3).
// Jedan list = jedan pravokutni pogled struke, noćna cijanotipija, jedno toplo svjetlo uz stvarnu pretragu.
// viewBox 1200 × 1000 (desktop, sidro desno: lijevih ~400 u je zona naslova), mobilni pogled je izrez iste crte.
// Pogledi: d (desktop, s oznakama, ključem i sastavnicom), m (mobilni izrez: svjetlo + jedna oznaka),
// t (sličica za kazalo na hubu: samo crtež, vlastiti <style> jer se učitava kao <img>).

export const W = 1200;
export const H = 1000;
export const TOTAL = 10; // listova u kompletu
export const READ_X = 508; // zona čitanja: od ovog x tekst se vidi na svakoj desktop širini
/**
 * Prag kadra za element lijevo od zone čitanja: list je desno poravnat (xMaxYMid slice), pa se vidi od
 * x = 1200 − 1000 · (š/v). Element s lijevim rubom x (uz 8 u zaliha) cijel je od omjera (1200 − x)/1000, zaokruženo
 * gore na 0,05 → klasa c-a75 … c-a120 (container query u hero.css, design/06 ponovni pregled).
 */
export const aspectClass = (x) => `c-a${Math.round(Math.max(0.7, Math.ceil(((1200 - (x - 8)) / 1000) * 20 - 1e-9) / 20) * 100)}`;
export const TB = [732, 836, 440, 112]; // sastavnica
// širina znaka u jedinicama crteža na 16 u (JetBrains Mono 0,6 em + razmak slova): oznake .08em, pretraga .02em
export const CH = { call: 10.9, web: 9.9 };

// pune crte se iscrtavaju (pathLength=1 → stroke-dashoffset 1 → 0); isprekidane i šrafure samo prozirnošću
const SOLID = new Set(['cut', 'cut-w', 'tile', 'ln-2', 'ln-dim', 'ln-lead', 'lamp-fill', 'lamp-ln', 'ln-frame']);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// koordinate na cijelu jedinicu (≈ 0,8 px na 1440), male vrijednosti (polumjeri točaka, zarezi) na desetinku
export const f = (n) => (Math.abs(n) < 20 ? Math.round(n * 10) / 10 : Math.round(n)).toString();
// klase koje u CSS-u već imaju fill: none — atribut se ne ponavlja na svakom elementu
const NOFILL = new Set(['ln-h', 'ln-2', 'ln-3', 'ln-beyond', 'cut-w', 'ln-con', 'ln-frame', 'lamp-ln', 'ln-dim', 'ln-lead', 'ln-sec']);
const fa = (cls, attrs) => (NOFILL.has(cls.split(' ')[0]) ? attrs.replace(' fill="none"', '') : attrs);
const pts = (list) => list.map(([x, y]) => `${f(x)} ${f(y)}`).join(' L');

export function builder(meta, view, tvb = meta.tvb) {
  const o = [];
  // izrezi (mobilni pogled, sličica): elementi potpuno izvan izreza se ne ispisuju (težina lista ≤ 20 kB)
  const vb = view === 'm' ? meta.mvb : view === 't' ? tvb || '240 120 960 720' : null;
  const [vx, vy, vw, vh] = vb ? vb.split(/\s+/).map(Number) : [];
  const away = (xs, ys) => !!vb && (Math.max(...xs) < vx - 24 || Math.min(...xs) > vx + vw + 24 || Math.max(...ys) < vy - 24 || Math.min(...ys) > vy + vh + 24);
  const b = {
    v: view,
    meta,
    o,
    P: (s) => o.push(s),
    // kratki ID-evi (na stranici je jedan list u dva pogleda; broj lista ih razlikuje)
    id: (name) => `${name}${meta.list}${view}`,
    url: (name) => `url(#${name}${meta.list}${view})`,
    pl: (cls) => (SOLID.has(cls.split(' ')[0]) ? ' pathLength="1"' : ''),
    path(list, cls, close = true, attrs = '') {
      if (typeof close === 'string') [close, attrs] = [true, close];
      if (away(list.map((q) => q[0]), list.map((q) => q[1]))) return;
      o.push(`<path class="${cls}"${b.pl(cls)} d="M${pts(list)}${close ? ' Z' : ''}"${fa(cls, attrs)}/>`);
    },
    d(dstr, cls, attrs = '') {
      o.push(`<path class="${cls}"${b.pl(cls)} d="${dstr}"${fa(cls, attrs)}/>`);
    },
    line(x1, y1, x2, y2, cls, attrs = '') {
      if (away([x1, x2], [y1, y2])) return;
      o.push(`<line class="${cls}"${b.pl(cls)} x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}"${fa(cls, attrs)}/>`);
    },
    rect(x, y, w, h, cls, attrs = '') {
      if (away([x, x + w], [y, y + h])) return;
      o.push(`<rect class="${cls}"${b.pl(cls)} x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}"${fa(cls, attrs)}/>`);
    },
    circle(cx, cy, r, cls, attrs = '') {
      if (away([cx - r, cx + r], [cy - r, cy + r])) return;
      o.push(`<circle class="${cls}"${b.pl(cls)} cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}"${fa(cls, attrs)}/>`);
    },
    poly(list, cls, attrs = '') {
      if (away(list.map((q) => q[0]), list.map((q) => q[1]))) return;
      o.push(`<polyline class="${cls}"${b.pl(cls)} points="${list.map(([x, y]) => `${f(x)},${f(y)}`).join(' ')}"${fa(cls, ' fill="none"' + attrs)}/>`);
    },
    text(x, y, s, cls, attrs = '') {
      o.push(`<text class="${cls}" x="${f(x)}" y="${f(y)}"${attrs}>${esc(s)}</text>`);
    },
    // skupina koraka iscrtavanja (nd-1 osi … nd-6 oznake)
    g(cls, fn) {
      o.push(`<g class="${cls}">`);
      fn();
      o.push('</g>');
    },

    /** Linearna kota s kosim zarezima i pomoćnim crtama do točaka. t = tekst, side = pomak teksta okomito na kotu. */
    dim(a, c, t, { side = -10, cls = '', ext = null } = {}) {
      const [x1, y1] = a;
      const [x2, y2] = c;
      const ang = Math.atan2(y2 - y1, x2 - x1);
      const deg = (ang * 180) / Math.PI;
      o.push(`<g class="dim${cls ? ' ' + cls : ''}">`);
      if (ext) for (const [p, q] of ext) b.line(p[0], p[1], q[0], q[1], 'ln-dim');
      b.line(x1, y1, x2, y2, 'ln-dim');
      for (const [x, y] of [a, c]) {
        const dx = 6 * Math.cos(ang + Math.PI / 4);
        const dy = 6 * Math.sin(ang + Math.PI / 4);
        b.line(x - dx, y - dy, x + dx, y + dy, 'ln-dim');
      }
      const mx = (x1 + x2) / 2 - side * Math.sin(ang);
      const my = (y1 + y2) / 2 + side * Math.cos(ang);
      const rot = deg > 90 || deg < -90 ? deg + 180 : deg;
      o.push(`<text class="t-dim" text-anchor="middle" transform="translate(${f(mx)} ${f(my)}) rotate(${f(rot)})">${esc(t)}</text>`);
      o.push('</g>');
    },

    /** Crta prekida (cik-cak) — kraj presječenog elementa koji se ne crta do kraja. */
    breakV(x, y1, y2) {
      const m = (y1 + y2) / 2;
      b.poly([[x, y1 - 10], [x, m - 8], [x - 6, m - 3], [x + 6, m + 3], [x, m + 8], [x, y2 + 10]], 'ln-2');
    },
    breakH(y, x1, x2) {
      const m = (x1 + x2) / 2;
      b.poly([[x1 - 10, y], [m - 8, y], [m - 3, y - 6], [m + 3, y + 6], [m + 8, y], [x2 + 10, y]], 'ln-2');
    },

    /**
     * Oznaka dijela: točka na dijelu, vodilica, "NN NAZIV" i ispod "→ dio weba". Oznaka čiji tekst počinje lijevo
     * od zone čitanja (x < 508 u) dobiva klasu c-wide: vidi se samo kad je kadar dovoljno širok da je pokaže cijelu.
     */
    callout(n, anchor, path, t1, t2, end = false, mpath = null) {
      if (view === 't') return;
      if (view === 'm' && meta.mobileCallout !== `c${n}`) return;
      if (view === 'm' && mpath) {
        end = mpath.end ?? end;
        path = mpath.p ?? mpath;
        t1 = mpath.t1 ?? t1; // kraći tekst za mobilni izrez (23 u)
        t2 = mpath.t2 ?? t2;
      }
      const [ax, ay] = anchor;
      const [lx, ly] = path[path.length - 1];
      const ta = end ? ' text-anchor="end"' : '';
      const tx = end ? lx - 8 : lx + 8;
      const tw = Math.max((t1.length + 4) * CH.call, (t2 || '').length * CH.web) * (17 / 16);
      const left = end ? tx - tw : tx;
      const wide = view === 'd' && left < READ_X;
      // prag za cijelu oznaku: tekst, vodilica i točka na dijelu
      const cls = wide ? ` c-wide ${aspectClass(Math.min(left, ax, ...path.map((p) => p[0])))}` : '';
      o.push(`<g class="call c${n}${cls}">`);
      b.circle(ax, ay, 3.5, 'dot');
      b.poly([anchor, ...path], 'ln-lead');
      o.push(`<text class="t-call"${ta} x="${f(tx)}" y="${f(ly + 5)}"><tspan class="t-n">${n}</tspan>  ${esc(t1)}</text>`);
      // drugi red ispod prvog: 20 u na 16 u, na mobilnih 23 u razmak raste s tekstom
      if (t2) o.push(`<text class="t-web"${ta} x="${f(tx)}" y="${f(ly + 5 + (view === 'm' ? 29 : 20))}">${esc(t2)}</text>`);
      o.push('</g>');
    },

    /**
     * Svjetlo: element u --lamp (crta ga list sam, klasom lamp-fill) + krug i oznaka "VRIJEME · SITUACIJA" s pretragom.
     * at = središte kruga; d = [x, y, 'up'|'down'] početak teksta na desktopu (zona čitanja x ≥ 508), m = isto za
     * mobilni izrez. Vodilica ide okomito do police ispod teksta, polica ispod cijelog teksta.
     */
    lamp({ at, r = 30, d, m }) {
      const [cx, cy] = at;
      const { time, search, searchShort } = meta.lamp;
      o.push('<g class="call lamp">');
      b.circle(cx, cy, r, 'halo');
      b.circle(cx, cy, 3.5, 'dot');
      const cfg = view === 'd' ? d : view === 'm' ? m : null;
      if (cfg) {
        const [lx, ly, dir = 'up'] = Array.isArray(cfg) ? cfg : [cfg.x, cfg.y, cfg.dir];
        const k = view === 'm' ? 23 / 16 : 17 / 16; // mobilni pogled 23 u; desktop računa s tabletnih 17 u
        const q = view === 'm' ? searchShort || search : search;
        const right = lx > cx;
        const w = Math.max(time.length * CH.call, (q.length + 2) * CH.web) * k;
        // 'h': vodoravna vodilica iz svjetla, tekst sjedi na njoj (kad je svjetlo na okomitoj crti)
        const h = dir === 'h';
        const shelf = h ? cy : ly + 10 * k;
        const ty = h ? cy - 10 * k : ly;
        const end = [right ? lx + w : lx, shelf];
        b.poly(h ? [[right ? cx + 8 : cx - 8, cy], end] : [[cx, dir === 'up' ? cy - 8 : cy + 8], [cx, shelf], end], 'ln-lead');
        b.text(lx, ty - 20 * k, time, 't-call');
        b.text(lx, ty, `„${q}“`, 't-web');
      }
      o.push('</g>');
    },

    /** Sastavnica (title block) u donjem desnom kutu: x 732–1172, y 836–948 (design/02, točka 4.3). */
    titleBlock() {
      if (view !== 'd') return;
      const [bx, by, bw, bh] = TB;
      o.push('<g class="nd nd-6 tb">');
      b.rect(bx, by, bw, bh, 'tb-bg');
      b.line(bx, by + 30, bx + bw, by + 30, 'ln-frame');
      b.line(bx + 310, by, bx + 310, by + 30, 'ln-frame');
      b.line(bx, by + 86, bx + bw, by + 86, 'ln-frame');
      // tbFs: veći tekst sastavnice gdje je kadar manji (hub); inline stil nadjačava tabletnih 17 u
      const st = meta.tbFs ? ` style="font-size:${meta.tbFs}px;letter-spacing:.02em"` : ''; // uži razmak: retci ostaju u okviru 440 u
      b.text(bx + 12, by + 21, 'ZAEC · NACRT DJELATNOSTI', 't-tb', st);
      b.text(bx + 322, by + 21, `LIST ${meta.list}/${String(TOTAL).padStart(2, '0')}`, 't-tb', st);
      b.text(bx + 12, by + 58, meta.name, 't-tb-b');
      b.text(bx + 12, by + 78, meta.view, 't-tb', st);
      b.text(bx + 12, by + 107, `WEB · ${meta.web}`, 't-tb', st);
      o.push('</g>');
    },

    /** Ključ (mala skica cjeline) — samo desktop; lijevo od zone čitanja dobiva c-wide kao oznake (design/06, 3). */
    key(fn) {
      if (view !== 'd') return;
      const i = o.length;
      o.push('<g class="nd nd-5 key">');
      fn();
      const xs = [...o.slice(i + 1).join(' ').matchAll(/\b(?:x|x1|x2)="(-?[\d.]+)"|[ML](-?[\d.]+)[ ,]/g)].map((m) => +(m[1] ?? m[2]));
      if (Math.min(...xs) < READ_X) o[i] = `<g class="nd nd-5 key c-wide ${aspectClass(Math.min(...xs))}">`;
      o.push('</g>');
    },
  };
  return b;
}

// zajedničke šrafure; listovi dodaju svoje kroz meta.defs(b)
function defs(b) {
  const p = [
    `<pattern id="${b.id('hz')}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" class="ln-h"/></pattern>`,
    `<pattern id="${b.id('hz2')}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><line x1="0" y1="0" x2="0" y2="8" class="ln-h"/></pattern>`,
    `<pattern id="${b.id('wool')}" width="20" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(-40)"><path d="M0 8 Q5 0 10 8 T20 8" class="ln-h" fill="none"/></pattern>`,
    `<pattern id="${b.id('dots')}" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="0.9" class="nib"/><circle cx="7" cy="6" r="0.7" class="nib"/></pattern>`,
    `<pattern id="${b.id('wool-v')}" width="16" height="20" patternUnits="userSpaceOnUse"><path d="M8 0 Q0 5 8 10 T8 20" class="ln-h" fill="none"/></pattern>`,
    `<pattern id="${b.id('grid')}" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" class="ln-grid" fill="none"/></pattern>`,
  ];
  if (b.meta.defs) p.push(...b.meta.defs(b));
  // samo uzorci koje list stvarno koristi
  const body = b.o.join('\n');
  return `<defs>${p.filter((x) => body.includes(`url(#${x.match(/id="([^"]+)"/)[1]})`)).join('')}</defs>`;
}

// stilovi za sličicu (<img> ne vidi CSS stranice): isti standard bez teksta, crte dvostruko deblje (180 px)
const THUMB_CSS = `svg{--sheet:#0d1631;--l:#e3e9ff;--lamp:#ffcf8a}
.sheet{fill:var(--sheet)}.ln-grid{stroke:rgba(227,233,255,.05);stroke-width:2}
.ln-con{stroke:var(--l);stroke-opacity:.16;stroke-width:1.5;stroke-dasharray:14 6 2 6;fill:none}
.cut{stroke:var(--l);stroke-width:4}.cut-w{stroke:var(--l);stroke-width:4.4;fill:none}
.ln-h{stroke:var(--l);stroke-opacity:.5;stroke-width:1.6;fill:none}.wool{stroke:none;opacity:.55}
.ln-2{stroke:var(--l);stroke-opacity:.8;stroke-width:2.4;fill:none}
.ln-3{stroke:var(--l);stroke-opacity:.6;stroke-width:1.6;stroke-dasharray:6 4;fill:none}
.ln-beyond{stroke:var(--l);stroke-opacity:.45;stroke-width:2;stroke-dasharray:8 6;fill:none}
.tile{stroke:var(--l);stroke-width:3.2;fill:var(--sheet)}
.lamp-fill{stroke:var(--lamp);stroke-width:3.6;fill:rgba(255,207,138,.22)}.lamp-ln{stroke:var(--lamp);stroke-width:4;fill:none}
.ln-dim,.ln-lead,.ln-frame,.ln-sec{stroke:var(--l);stroke-opacity:.7;stroke-width:1.6;fill:none}.nib{fill:var(--l);opacity:.8}
.water{fill:rgba(227,233,255,.08);stroke:none}.mask{fill:var(--sheet);stroke:none}.ln-tile{stroke:var(--l);stroke-opacity:.1;stroke-width:1.6}.wall{fill:var(--l);fill-opacity:.4;stroke:var(--l);stroke-width:2.4}.halo{fill:var(--lamp);opacity:.12}.dot{fill:var(--lamp)}
.dim,.call:not(.lamp),.key,.tb,text{display:none}`;

// uzastopni pravokutnici i crte iste klase bez vlastitih atributa (zidovi, šrafure, sjedala) postaju jedan <path>
const RECT = /^<rect class="([\w-]+)" x="(-?[\d.]+)" y="(-?[\d.]+)" width="([\d.]+)" height="([\d.]+)"\/>$/;
const LINE = /^<line class="([\w-]+)" x1="(-?[\d.]+)" y1="(-?[\d.]+)" x2="(-?[\d.]+)" y2="(-?[\d.]+)"\/>$/;
function merge(lines) {
  const out = [];
  let run = null;
  const flush = () => {
    if (!run) return;
    out.push(run.n === 1 ? run.first : `<path class="${run.cls}" d="${run.d}"/>`);
    run = null;
  };
  for (const ln of lines) {
    const r = RECT.exec(ln);
    const l = r ? null : LINE.exec(ln);
    const m = r || l;
    if (!m || SOLID.has(m[1])) { flush(); out.push(ln); continue; }
    const key = `${r ? 'r' : 'l'}:${m[1]}`;
    const seg = r ? `M${m[2]} ${m[3]}h${m[4]}v${m[5]}h-${m[4]}z` : `M${m[2]} ${m[3]}L${m[4]} ${m[5]}`;
    if (run && run.key === key) { run.d += seg; run.n++; }
    else { flush(); run = { key, cls: m[1], d: seg, n: 1, first: ln }; }
  }
  flush();
  return out;
}

// sličica u kontaktnom arku (180 × 135 px): izrez 4:3 širok 480 u, centriran na svjetlo (design/06, 13);
// list bez kruga svjetla (kazalo) zadržava svoj tvb
function thumbBox(o, fallback) {
  const m = o.join(' ').match(/<circle class="halo"[^>]*? cx="(-?[\d.]+)" cy="(-?[\d.]+)"/);
  if (!m) return fallback || '240 120 960 720';
  const [w, h] = [480, 360];
  const x = Math.round(Math.min(Math.max(+m[1] - w / 2, 0), W - w));
  const y = Math.round(Math.min(Math.max(+m[2] - h / 2, 0), H - h));
  return `${x} ${y} ${w} ${h}`;
}

export function render(sheet, view) {
  const { meta } = sheet;
  // sličica: izrez se računa iz položaja svjetla na cijelom listu, pa se crta samo ono što je u izrezu
  let tvb = meta.tvb;
  if (view === 't') {
    const pre = builder(meta, 'd');
    sheet.draw(pre);
    tvb = thumbBox(pre.o, meta.tvb);
  }
  const b = builder(meta, view, tvb);
  b.P(`<rect class="sheet" x="-200" y="-200" width="${W + 400}" height="${H + 400}"/><rect x="-200" y="-200" width="${W + 400}" height="${H + 400}" fill="${b.url('grid')}"/>`);
  sheet.draw(b);
  if (view !== 't') b.titleBlock();
  const vb = view === 'd' ? `0 0 ${W} ${H}` : view === 'm' ? meta.mvb : tvb || '240 120 960 720';
  const par = view === 'd' ? 'xMaxYMid slice' : 'xMidYMid slice';
  const head =
    view === 'd'
      ? `<svg class="d" xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" preserveAspectRatio="${par}" role="img" aria-labelledby="${b.id('nt')} ${b.id('nd')}"><title id="${b.id('nt')}">${esc(meta.title)}</title><desc id="${b.id('nd')}">${esc(meta.desc)}</desc>`
      : view === 'm'
        ? `<svg class="m" xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" preserveAspectRatio="${par}" aria-hidden="true" focusable="false">`
        : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" preserveAspectRatio="${par}"><style>${THUMB_CSS}</style>`;
  const d = defs(b);
  return [head, d, ...merge(b.o), '</svg>'].join('\n');
}
