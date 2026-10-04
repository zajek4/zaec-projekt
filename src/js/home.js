import '../css/home.css';
// Naslovnica: kino-uvod (world3), put posjetitelja, slojevi, usporedba, usluge, radovi, proces, progresivna forma.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitWords, track } from './site.js';
import { GATES, conversion } from './world3/gates.js';

const root = document.documentElement;
const reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionOK = () => root.classList.contains('motion-ok') && !reduceMQ.matches;
let world = null;

/* ───────── hero ───────── */
const title = document.querySelector('.hero-title');
splitWords(title);
const heroIn = document.querySelectorAll('[data-hero-in]');
if (motionOK()) {
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.2 });
  tl.to(heroIn[0], { opacity: 1, y: 0, duration: 1 })
    .add(() => title.classList.add('is-in'), 0.15)
    .to([...heroIn].slice(1), { opacity: 1, y: 0, duration: 1.2, stagger: 0.09 }, 0.6);
} else title.classList.add('is-in');
setTimeout(() => {
  title.classList.add('is-in');
  heroIn.forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
}, 3000);

/* ───────── put do upita (5 vrata) ───────── */
const pathEl = document.querySelector('[data-path]');
const gateBtns = [...document.querySelectorAll('[data-gate]')];
const gateLabels = [...document.querySelectorAll('[data-gate-label]')];
const numEl = document.querySelector('[data-path-num]');
const unitEl = document.querySelector('[data-path-unit]');
const funnel = [...document.querySelectorAll('[data-path-funnel] li')];
let gates = GATES.map(() => false);
let userTouched = false;
let shownNum = 0;

const plural = (n) => (n % 10 === 1 && n % 100 !== 11 ? 'upit' : 'upita');
function renderPath(animate = true) {
  gateBtns.forEach((b, i) => {
    b.setAttribute('aria-pressed', String(gates[i]));
    const rate = gates[i] ? GATES[i].good : GATES[i].bad;
    b.querySelector('[data-gate-rate]').textContent = `prolazi ${Math.round(rate * 100)} %`;
  });
  gateLabels.forEach((l, i) => l.classList.toggle('is-bad', !gates[i]));
  let n = 1000;
  funnel.forEach((li, i) => {
    n *= gates[i] ? GATES[i].good : GATES[i].bad;
    li.querySelector('i').style.setProperty('--w', String(n / 1000));
    li.querySelector('b').textContent = String(Math.round(n));
  });
  const target = Math.round(conversion(gates) * 1000);
  if (numEl) {
    if (animate && motionOK()) {
      const o = { v: shownNum };
      gsap.to(o, { v: target, duration: 0.9, ease: 'power3.out', onUpdate: () => { numEl.textContent = String(Math.round(o.v)); } });
    } else numEl.textContent = String(target);
    unitEl.textContent = plural(target);
  }
  shownNum = target;
  world?.setGates(gates);
}
gateBtns.forEach((b, i) => {
  b.addEventListener('click', () => {
    stopAutoplay();
    gates[i] = !gates[i];
    renderPath();
    track('flow_gate_toggle', { gate: GATES[i].key, on: gates[i] });
  });
  const focus = () => world?.setFocusGate(i);
  const blur = () => world?.setFocusGate(-1);
  b.addEventListener('pointerenter', focus);
  b.addEventListener('pointerleave', blur);
  b.addEventListener('focus', focus);
  b.addEventListener('blur', blur);
});
document.querySelectorAll('[data-path-preset]').forEach((b) => b.addEventListener('click', () => {
  stopAutoplay();
  gates = GATES.map(() => b.dataset.pathPreset === 'good');
  renderPath();
}));
renderPath(false);

// samostalna demonstracija dok posjetitelj ne dotakne kontrole
let autoTimer = 0;
let autoStep = -1;
let pathVisible = false;
function stopAutoplay() {
  userTouched = true;
  clearTimeout(autoTimer);
}
function autoTick() {
  if (userTouched || !pathVisible || !motionOK()) return;
  autoStep = (autoStep + 1) % 8;
  if (autoStep === 0) gates = GATES.map(() => false);
  else if (autoStep <= 5) gates[autoStep - 1] = true;
  renderPath();
  autoTimer = setTimeout(autoTick, autoStep === 0 ? 2600 : autoStep === 5 ? 4200 : autoStep > 5 ? 1200 : 1500);
}
if (pathEl) {
  new IntersectionObserver(([en]) => {
    pathVisible = en.isIntersecting;
    clearTimeout(autoTimer);
    if (pathVisible && !userTouched) autoTimer = setTimeout(autoTick, 1400);
  }, { threshold: 0.6 }).observe(pathEl);
}

/* ───────── sustav: aktivni sloj ───────── */
const layerEls = [...document.querySelectorAll('[data-layer]')];
let activeLayer = -1;
let hoverLayer = -1;
const syncLayer = () => world?.setLayerHover(hoverLayer >= 0 ? hoverLayer : activeLayer);
const layerIO = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    activeLayer = +en.target.dataset.layer;
    layerEls.forEach((el, i) => el.classList.toggle('is-active', i === activeLayer));
    syncLayer();
  });
}, { rootMargin: '-46% 0px -46% 0px' });
layerEls.forEach((el, i) => {
  layerIO.observe(el);
  el.addEventListener('pointerenter', () => { hoverLayer = i; syncLayer(); });
  el.addEventListener('pointerleave', () => { hoverLayer = -1; syncLayer(); });
  el.addEventListener('focus', () => { hoverLayer = i; syncLayer(); });
  el.addEventListener('blur', () => { hoverLayer = -1; syncLayer(); });
});

/* ───────── filmska traka ───────── */
const railLinks = [...document.querySelectorAll('[data-rail] a')];
const railTargets = railLinks.map((a) => document.querySelector(a.getAttribute('href')));
const paper = document.querySelector('.paper');
const hero = document.getElementById('uvod');
const finalSec = document.getElementById('kontakt');
let railTick = false;
function updateRail() {
  railTick = false;
  const mid = innerHeight * 0.5;
  let active = -1;
  railTargets.forEach((t, i) => {
    if (!t) return;
    const r = t.getBoundingClientRect();
    if (r.top <= mid && r.bottom >= mid) active = i;
  });
  railLinks.forEach((a, i) => a.classList.toggle('is-active', i === active));
  const inside = (el) => { if (!el) return false; const r = el.getBoundingClientRect(); return r.top < innerHeight * 0.92 && r.bottom > innerHeight * 0.08; };
  document.body.classList.toggle('rail-hide', active < 0 || inside(paper) || inside(finalSec) || (hero && hero.getBoundingClientRect().bottom > mid));
}
addEventListener('scroll', () => { if (!railTick) { railTick = true; requestAnimationFrame(updateRail); } }, { passive: true });
updateRail();

/* ───────── lijepo vs učinkovito ───────── */
const cmp = document.querySelector('[data-compare]');
if (cmp) {
  const range = cmp.querySelector('[data-compare-range]');
  const set = (v) => cmp.style.setProperty('--pos', `${v}%`);
  let touched = false;
  range.addEventListener('input', () => { touched = true; set(range.value); });
  range.addEventListener('change', () => track('compare_slider', { pos: +range.value }));
  if (motionOK()) {
    new IntersectionObserver(([en], io) => {
      if (!en.isIntersecting || touched) return;
      io.disconnect();
      const o = { v: 50 };
      gsap.timeline({ delay: 0.4 })
        .to(o, { v: 18, duration: 1.1, ease: 'power3.inOut', onUpdate: () => !touched && set(o.v) })
        .to(o, { v: 82, duration: 1.4, ease: 'power3.inOut', onUpdate: () => !touched && set(o.v) })
        .to(o, { v: 50, duration: 1, ease: 'power3.inOut', onUpdate: () => !touched && set(o.v), onComplete: () => { if (!touched) range.value = '50'; } });
    }, { threshold: 0.55 }).observe(cmp);
  }
}

/* ───────── usluge kao sustav ───────── */
const map = document.querySelector('[data-svc-map]');
if (map) {
  const svg = map.querySelector('[data-svc-links]');
  const nodes = [...map.querySelectorAll('[data-svc]')];
  const byKey = Object.fromEntries(nodes.map((n) => [n.dataset.svc, n]));
  const pairs = [];
  const seen = new Set();
  nodes.forEach((n) => (n.dataset.links || '').split(' ').filter(Boolean).forEach((k) => {
    const id = [n.dataset.svc, k].sort().join('|');
    if (!byKey[k] || seen.has(id)) return;
    seen.add(id);
    pairs.push({ a: n, b: byKey[k], path: null, id });
  }));
  const NS = 'http://www.w3.org/2000/svg';
  function draw() {
    const box = map.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
    pairs.forEach((p) => {
      if (!p.path) { p.path = document.createElementNS(NS, 'path'); svg.appendChild(p.path); }
      const ra = p.a.getBoundingClientRect(), rb = p.b.getBoundingClientRect();
      let [l, r] = ra.left <= rb.left ? [ra, rb] : [rb, ra];
      const sameCol = Math.abs(ra.left - rb.left) < 10;
      let d;
      if (sameCol) {
        const x = l.right - box.left - 6, y1 = l.top + l.height / 2 - box.top, y2 = r.top + r.height / 2 - box.top;
        const bulge = 26 + Math.abs(y2 - y1) * 0.18;
        d = `M${x},${y1} C${x + bulge},${y1} ${x + bulge},${y2} ${x},${y2}`;
      } else {
        const x1 = l.right - box.left, y1 = l.top + l.height / 2 - box.top, x2 = r.left - box.left, y2 = r.top + r.height / 2 - box.top;
        const mx = (x1 + x2) / 2;
        d = `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
      }
      p.path.setAttribute('d', d);
    });
  }
  function focus(n) {
    map.classList.toggle('is-focus', !!n);
    const links = n ? new Set((n.dataset.links || '').split(' ')) : new Set();
    nodes.forEach((m) => {
      m.classList.toggle('is-hot', m === n);
      m.classList.toggle('is-link', !!n && links.has(m.dataset.svc));
    });
    pairs.forEach((p) => p.path?.classList.toggle('is-hot', !!n && (p.a === n || p.b === n)));
  }
  nodes.forEach((n) => {
    n.addEventListener('pointerenter', () => focus(n));
    n.addEventListener('focus', () => focus(n));
  });
  map.addEventListener('pointerleave', () => focus(null));
  map.addEventListener('focusout', (e) => { if (!map.contains(e.relatedTarget)) focus(null); });
  new ResizeObserver(draw).observe(map);
  draw();
}

/* ───────── radovi: otkrivanje + paralaksa ───────── */
const caseIO = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (en.isIntersecting) { en.target.classList.add('is-in'); caseIO.unobserve(en.target); }
}), { threshold: 0.25 });
document.querySelectorAll('[data-case]').forEach((c) => {
  caseIO.observe(c);
  const img = c.querySelector('[data-case-img]');
  if (img && motionOK()) {
    gsap.fromTo(img, { yPercent: -12 }, { yPercent: 0, ease: 'none', scrollTrigger: { trigger: c, start: 'top bottom', end: 'bottom top', scrub: true } });
  }
});
if (!motionOK()) document.querySelectorAll('[data-case]').forEach((c) => c.classList.add('is-in'));

/* ───────── proces ───────── */
const steps = [...document.querySelectorAll('[data-proc-step]')];
const procNum = document.querySelector('[data-proc-num]');
const procBar = document.querySelector('[data-proc-bar]');
const stepIO = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (!en.isIntersecting) return;
  const i = +en.target.dataset.procStep;
  steps.forEach((s, k) => s.classList.toggle('is-active', k === i));
  if (procNum) procNum.textContent = String(i + 1).padStart(2, '0');
  procBar?.style.setProperty('--p', String((i + 1) / steps.length));
}), { rootMargin: '-45% 0px -45% 0px' });
steps.forEach((s) => stepIO.observe(s));
steps[0]?.classList.add('is-active');

/* ───────── progresivna forma ───────── */
const gform = document.querySelector('[data-goal-form]');
if (gform) {
  const next = gform.querySelector('[data-gform-next]');
  const picked = gform.querySelector('[data-gform-picked]');
  const you = document.querySelector('[data-you-name]');
  const youInput = gform.querySelector('[data-you-input]');
  const goals = () => [...gform.querySelectorAll('input[name="ciljevi[]"]:checked')].map((i) => i.value);
  const open = (focus = true) => {
    gform.classList.add('is-open');
    if (focus) setTimeout(() => youInput?.focus({ preventScroll: true }), 60);
    window.zaecLenis ? window.zaecLenis.resize?.() : null;
    ScrollTrigger.refresh();
    world?.refresh();
  };
  gform.addEventListener('change', (e) => {
    if (e.target.name !== 'ciljevi[]') return;
    const n = goals().length;
    picked.textContent = n ? `Odabrano: ${n}` : '';
  });
  next?.addEventListener('click', () => {
    open();
    track('form_goals', { goals: goals().join(', ') || 'nije odabrano' });
  });
  youInput?.addEventListener('input', () => {
    const v = youInput.value.trim();
    if (you) you.textContent = v ? v.slice(0, 40) : 'Vaša tvrtka';
  });
  let cfg = null;
  try { cfg = JSON.parse(sessionStorage.getItem('zaec-config') || 'null'); } catch (e) { cfg = null; }
  if (cfg || gform.querySelector('.cform-status.is-error')) open(false);
}

/* ───────── 3D svijet (lijeno) ───────── */
function webglOK() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGL2RenderingContext && c.getContext('webgl2'));
  } catch (e) { return false; }
}
async function bootWorld() {
  if (window.zaecWorld) return; // zaštita od dvostrukog pokretanja
  if (!webglOK()) { root.classList.add('no-webgl'); return; }
  const canvas = document.querySelector('[data-stage-canvas]');
  if (!canvas) return;
  try {
    await document.fonts?.ready;
    const { createWorld3 } = await import('./world3/index.js');
    world = createWorld3({
      canvas,
      labelsRoot: document.querySelector('[data-stage-labels]'),
      onReady: () => root.classList.add('stage-ready'),
    });
    world.setGates(gates);
    syncLayer();
    window.zaecWorld = world;
  } catch (err) {
    console.warn('[ZAEC] 3D svijet nije pokrenut:', err);
    root.classList.add('no-webgl');
  }
}
const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 150));
if (document.readyState === 'complete') idle(bootWorld, { timeout: 900 });
else addEventListener('load', () => idle(bootWorld, { timeout: 900 }), { once: true });
