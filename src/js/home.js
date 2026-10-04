import '../css/home.css';
// Naslovnica: intro, 3D svijet, djelatnosti, brojač upita, noćne obavijesti, proces.
import { gsap } from 'gsap';
import { splitWords } from './site.js';

const root = document.documentElement;
const motionOK = () => root.classList.contains('motion-ok');

/* ───────── hero intro ───────── */
const title = document.querySelector('.hero-title');
splitWords(title);
if (motionOK()) {
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.15 });
  tl.to('.hero-kicker', { opacity: 1, y: 0, duration: 1 })
    .add(() => title.classList.add('is-in'), 0.1)
    .to('.hero-lead', { opacity: 1, y: 0, duration: 1.1 }, 0.55)
    .to('.hero-cta', { opacity: 1, y: 0, duration: 1.1 }, 0.68)
    .to('.hero-trust', { opacity: 1, y: 0, duration: 1.1 }, 0.8)
    .to('.hero-legend', { opacity: 1, y: 0, duration: 1.1 }, 1.0);
} else {
  title.classList.add('is-in');
}
// sigurnosna mreža: sadržaj nikad ne ostaje skriven ako animacije kasne
setTimeout(() => {
  title.classList.add('is-in');
  document.querySelectorAll('[data-hero-in]').forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
}, 2600);

/* ───────── djelatnosti (tabovi) ───────── */
const tabs = [...document.querySelectorAll('.trade-tab')];
const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')));
const progress = document.querySelector('[data-trade-progress]');
let world = null;
let current = 0;
let auto = true;
let cycleTween = null;

function selectTrade(i, { focus = false, user = false } = {}) {
  current = (i + tabs.length) % tabs.length;
  tabs.forEach((t, k) => {
    const on = k === current;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    panels[k].hidden = !on;
  });
  if (focus) tabs[current].focus();
  if (motionOK()) gsap.fromTo(panels[current].children, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.04, ease: 'power3.out' });
  world?.setTrade(+tabs[current].dataset.trade, tabs[current].dataset.sign);
  if (user) stopAuto();
  else startCycle();
}
function startCycle() {
  cycleTween?.kill();
  if (!auto || !motionOK()) return;
  cycleTween = gsap.fromTo(progress, { scaleX: 0 }, { scaleX: 1, duration: 5, ease: 'none', onComplete: () => tradesVisible && selectTrade(current + 1) });
  if (!tradesVisible) cycleTween.pause();
}
function stopAuto() {
  auto = false;
  cycleTween?.kill();
  gsap.to(progress, { scaleX: 0, duration: 0.3 });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => selectTrade(i, { user: true }));
  t.addEventListener('keydown', (e) => {
    const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (k) { e.preventDefault(); selectTrade(current + k, { focus: true, user: true }); }
    if (e.key === 'Home') { e.preventDefault(); selectTrade(0, { focus: true, user: true }); }
    if (e.key === 'End') { e.preventDefault(); selectTrade(tabs.length - 1, { focus: true, user: true }); }
  });
});
const tradesEl = document.querySelector('[data-trades]');
tradesEl?.addEventListener('pointerenter', () => cycleTween?.pause());
tradesEl?.addEventListener('pointerleave', () => tradesVisible && cycleTween?.resume());
tradesEl?.addEventListener('focusin', () => cycleTween?.pause());
let tradesVisible = false;
new IntersectionObserver(([en]) => {
  tradesVisible = en.isIntersecting;
  if (!cycleTween) startCycle();
  if (tradesVisible) cycleTween?.resume(); else cycleTween?.pause();
}, { threshold: 0.3 }).observe(document.getElementById('djelatnosti'));

/* ───────── brojač i noćne obavijesti ───────── */
const countEl = document.querySelector('[data-lead-count]');
const notif = document.querySelector('[data-notif]');
const notifText = document.querySelector('[data-notif-text]');
const msgs = ['Servis klime · Osijek, Retfala', 'Montaža 2 klime · Čepin', 'Čišćenje klime · Tenja', 'Hitno: klima curi · Osijek, Gornji grad', 'Ponuda za ured · Višnjevac'];
let count = 0, msgI = 0, chapterId = 'hero', notifTimer = 0, lastNotif = 0;
function onArrive(target) {
  if (target !== 'W') return;
  count++;
  if (countEl) countEl.textContent = String(count);
  if (chapterId === 'night' && notif && performance.now() - lastNotif > 2600) {
    lastNotif = performance.now();
    notifText.textContent = msgs[msgI++ % msgs.length];
    notif.classList.add('is-shown');
    clearTimeout(notifTimer);
    notifTimer = setTimeout(() => notif.classList.remove('is-shown'), 2100);
  }
}

/* ───────── proces + rail ───────── */
const steps = [...document.querySelectorAll('[data-step]')];
function onChapter(id) {
  chapterId = id;
  document.body.dataset.chapter = id;
  const m = /^p(\d)$/.exec(id || '');
  steps.forEach((s, i) => s.classList.toggle('is-active', !!m && +m[1] - 1 === i));
}
// bez 3D-a: aktivni korak po vidljivosti
const stepIO = new IntersectionObserver((entries) => {
  if (world) return;
  entries.forEach((en) => en.isIntersecting && steps.forEach((s) => s.classList.toggle('is-active', s === en.target)));
}, { rootMargin: '-45% 0px -45% 0px' });
steps.forEach((s) => stepIO.observe(s));

const railLinks = [...document.querySelectorAll('[data-rail] a')];
const railTargets = railLinks.map((a) => document.querySelector(a.getAttribute('href')));
const railIO = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const i = railTargets.indexOf(en.target);
    railLinks.forEach((a, k) => a.classList.toggle('is-active', k === i));
  });
}, { rootMargin: '-50% 0px -50% 0px' });
railTargets.forEach((t) => t && railIO.observe(t));
// sakrij rail iznad neprozirnih sekcija
const sheets = [...document.querySelectorAll('.sheet')];
const sheetIO = new IntersectionObserver(() => {
  const covered = sheets.some((s) => { const r = s.getBoundingClientRect(); return r.top < innerHeight * 0.5 && r.bottom > innerHeight * 0.5; });
  document.body.classList.toggle('rail-hide', covered);
}, { threshold: [0, 0.25, 0.5, 0.75, 1] });
sheets.forEach((s) => sheetIO.observe(s));

/* ───────── 3D svijet (lijeno) ───────── */
function webglOK() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGL2RenderingContext && c.getContext('webgl2'));
  } catch (e) { return false; }
}
async function bootWorld() {
  if (!webglOK()) { root.classList.add('no-webgl'); return; }
  const canvas = document.querySelector('[data-world-canvas]');
  try {
    await document.fonts?.ready;
    const { createWorld } = await import('./world/world.js');
    world = createWorld({
      canvas,
      labelsRoot: document.querySelector('[data-world-labels]'),
      onArrive,
      onChapter,
      onReady: () => root.classList.add('world-ready'),
    });
    world.setTrade(+tabs[current].dataset.trade, tabs[current].dataset.sign);
    window.zaecWorld = world;
  } catch (err) {
    console.warn('[ZAEC] 3D svijet nije pokrenut:', err);
    root.classList.add('no-webgl');
  }
}
const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 200));
if (document.readyState === 'complete') idle(bootWorld, { timeout: 1200 });
else addEventListener('load', () => idle(bootWorld, { timeout: 1200 }), { once: true });
