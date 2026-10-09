// ZAEC — globalno ponašanje (sve stranice).
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionOK = () => !reduceMQ.matches;
const header = document.querySelector('[data-header]');

/* ───────── analitika (dataLayer, bez kolačića dok se GTM ne doda) ───────── */
export function track(event, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
window.zaecTrack = track;
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-track]');
  if (el) track(el.dataset.track, { label: el.textContent.trim().slice(0, 60), href: el.getAttribute('href') || '' });
});

/* ───────── smooth scroll: Lenis (jedini engine) ───────── */
let lenis = null;
function initLenis() {
  if (!motionOK() || lenis) return;
  lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1, smoothWheel: true, syncTouch: false, anchors: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis && lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  window.zaecLenis = lenis;
}
function destroyLenis() {
  if (!lenis) return;
  lenis.destroy();
  lenis = null;
  window.zaecLenis = null;
}
initLenis();
reduceMQ.addEventListener('change', () => {
  root.classList.toggle('motion-ok', motionOK());
  motionOK() ? initLenis() : destroyLenis();
});

export function scrollToTarget(target, offset = -80) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset, duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 4) });
  else el.scrollIntoView({ behavior: motionOK() ? 'smooth' : 'auto', block: 'start' });
}
window.zaecScrollTo = scrollToTarget;

document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href*="#"]');
  if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
  const url = new URL(a.href, location.href);
  if (url.pathname !== location.pathname || !url.hash || url.hash.length < 2) return;
  const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
  if (!el) return;
  e.preventDefault();
  closeMenu();
  scrollToTarget(el, -(header?.offsetHeight || 72) - 8);
  history.pushState(null, '', url.hash);
  el.setAttribute('tabindex', '-1');
  setTimeout(() => el.focus({ preventScroll: true }), 900);
});

/* ───────── header: skrivanje, pozadina, tema ───────── */
let lastY = window.scrollY;
let ticking = false;
const nightZones = [...document.querySelectorAll('[data-header-theme="night"]')];
const defaultNight = header?.dataset.themeDefault === 'night';
const callBar = document.querySelector('[data-call-bar]');
// traka s upitom ne smije prekrivati formu ni podnožje: skriva se dok su u kadru
const barCovered = new Set();
if (callBar && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? barCovered.add(e.target) : barCovered.delete(e.target)));
    onScrollFrame();
  });
  document.querySelectorAll('main form, .site-footer, [data-callbar-hide]').forEach((el) => io.observe(el));
}
// granice "noćnih" zona i visina zaglavlja mjere se samo kad se raspored promijeni — scroll ne čita DOM
// (čitanje getBoundingClientRect nakon što je 3D engine upisao stilove oznaka prisiljava raspored svaku sličicu)
let zones = [];
let probe = 36;
function measureZones() {
  const sy = window.scrollY;
  zones = nightZones.map((z) => { const r = z.getBoundingClientRect(); return [r.top + sy, r.bottom + sy]; });
  probe = (header?.offsetHeight || 72) * 0.5;
}
measureZones();
new ResizeObserver(() => { measureZones(); onScrollFrame(); }).observe(document.body);

function onScrollFrame() {
  ticking = false;
  const y = window.scrollY;
  if (header) {
    header.classList.toggle('is-scrolled', y > 24);
    const goingDown = y > lastY + 4;
    const goingUp = y < lastY - 4;
    if (goingDown && y > 280 && !root.classList.contains('menu-open')) header.classList.add('is-hidden');
    else if (goingUp || y < 280) header.classList.remove('is-hidden');
    let night = defaultNight;
    const p = y + probe;
    for (const [t, b] of zones) if (t <= p && b >= p) { night = true; break; }
    header.classList.toggle('is-night', night);
  }
  if (callBar) callBar.classList.toggle('is-visible', y > window.innerHeight * 0.45 && !barCovered.size);
  lastY = y;
}
window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScrollFrame); } }, { passive: true });
onScrollFrame();

/* ───────── dropdown ───────── */
document.querySelectorAll('[data-sub]').forEach((li) => {
  const btn = li.querySelector('button');
  const set = (open) => { li.classList.toggle('is-open', open); btn.setAttribute('aria-expanded', String(open)); };
  btn.addEventListener('click', () => set(!li.classList.contains('is-open')));
  li.addEventListener('keydown', (e) => { if (e.key === 'Escape') { set(false); btn.focus(); } });
  document.addEventListener('click', (e) => { if (!li.contains(e.target)) set(false); });
  li.addEventListener('focusout', (e) => { if (!li.contains(e.relatedTarget)) set(false); });
});

/* ───────── mobilni izbornik ───────── */
const menuBtn = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-mobile-menu]');
// dok je izbornik otvoren, sve iza njega je inert (tipkovnica i čitač ekrana ostaju u izborniku);
// gumb izbornika ostaje dostupan jer ga zatvara
let inerted = [];
function setInert(on) {
  inerted.forEach((el) => (el.inert = false));
  inerted = [];
  if (!on) return;
  const keep = (el) => el === menu || el.contains(menuBtn);
  for (const el of document.body.children) if (!keep(el) && !el.inert) inerted.push(el);
  const inner = menuBtn?.parentElement;
  if (inner) for (const el of inner.children) if (el !== menuBtn && !el.inert) inerted.push(el);
  inerted.forEach((el) => (el.inert = true));
}
function openMenu() {
  root.classList.add('menu-open');
  menuBtn?.setAttribute('aria-expanded', 'true');
  setInert(true);
  header?.classList.remove('is-hidden');
  lenis?.stop();
  document.body.style.overflow = 'hidden';
  if (motionOK()) gsap.fromTo(menu.querySelectorAll('.mm-main li, .mm-sub li, .mm-foot > *'), { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.04, duration: 0.8, ease: 'expo.out', delay: 0.18 });
  setTimeout(() => menu.querySelector('a')?.focus(), 250);
}
function closeMenu() {
  if (!root.classList.contains('menu-open')) return;
  root.classList.remove('menu-open');
  menuBtn?.setAttribute('aria-expanded', 'false');
  setInert(false);
  lenis?.start();
  document.body.style.overflow = '';
}
menuBtn?.addEventListener('click', () => (root.classList.contains('menu-open') ? closeMenu() : openMenu()));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && root.classList.contains('menu-open')) { closeMenu(); menuBtn.focus(); } });
menu?.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });
window.matchMedia('(min-width: 1101px)').addEventListener('change', (e) => e.matches && closeMenu());

/* ───────── razdvajanje naslova po riječima (pristupačno, bez dupliciranja teksta) ───────── */
export function splitWords(el) {
  if (!el || el.dataset.splitDone) return;
  el.dataset.splitDone = '1';
  const label = el.textContent.replace(/\s+/g, ' ').trim();
  let i = 0;
  const walk = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const parts = child.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        let glued = null;
        parts.forEach((p, k) => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(' ')); return; }
          const w = document.createElement('span');
          w.className = 'split-w';
          const inner = document.createElement('span');
          inner.style.setProperty('--i', String(i++));
          inner.textContent = p;
          w.appendChild(inner);
          frag.appendChild(w);
          if (k === 0) glued = w; // npr. zarez odmah iza <em>riječi</em>
        });
        const prev = child.previousSibling;
        child.replaceWith(frag);
        // interpunkcija ne smije pasti u novi red odvojeno od riječi ispred sebe
        if (glued && prev && prev.nodeType === 1 && prev.tagName !== 'BR') {
          const nb = document.createElement('span');
          nb.className = 'split-nb';
          prev.before(nb);
          nb.append(prev, glued);
        }
      } else if (child.nodeType === 1 && child.tagName !== 'BR') {
        walk(child);
      }
    });
  };
  // riječi se razdvajaju na mjestu (tekst ostaje jednom u DOM-u — tražilice ne vide dvostruki naslov),
  // a čitači zaslona dobivaju cijeli naslov kao jedan izraz preko aria-label
  walk(el);
  el.setAttribute('aria-label', label);
  el.classList.add('split');
}

/* ───────── reveal na scroll ───────── */
const revealIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('is-in');
        revealIO.unobserve(en.target);
      }
    });
  },
  { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
);
export function observeReveals(scope = document) {
  scope.querySelectorAll('[data-split]').forEach((el) => {
    splitWords(el);
    if (el.dataset.split !== 'manual') revealIO.observe(el);
  });
  scope.querySelectorAll('[data-reveal]').forEach((el) => revealIO.observe(el));
}
if (motionOK()) observeReveals();
else document.querySelectorAll('[data-split],[data-reveal]').forEach((el) => el.classList.add('is-in'));

/* stagger djece unutar [data-stagger] */
document.querySelectorAll('[data-stagger]').forEach((group) => {
  const step = parseFloat(group.dataset.stagger) || 0.08;
  [...group.querySelectorAll(':scope > [data-reveal]')].forEach((c, idx) => c.style.setProperty('--d', `${idx * step}s`));
});

/* ───────── magnetski gumbi (samo fini pokazivač) ───────── */
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const qx = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
    const qy = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
    el.addEventListener('pointermove', (e) => {
      if (!motionOK()) return;
      const r = el.getBoundingClientRect();
      qx((e.clientX - r.left - r.width / 2) * 0.22);
      qy((e.clientY - r.top - r.height / 2) * 0.3);
    });
    el.addEventListener('pointerleave', () => { qx(0); qy(0); });
  });
}

/* ───────── ScrollTrigger osvježi nakon fontova ───────── */
document.fonts?.ready.then(() => ScrollTrigger.refresh());
window.addEventListener('load', () => ScrollTrigger.refresh());

export { gsap, ScrollTrigger, lenis };

/* ───────── privola (Consent Mode v2) — samo kad je GTM uključen ───────── */
const consentBox = document.querySelector('[data-consent]');
if (consentBox) {
  let stored = null;
  try { stored = JSON.parse(localStorage.getItem('zaec-consent') || 'null'); } catch (e) {}
  if (!stored) consentBox.hidden = false;
  consentBox.addEventListener('click', (e) => {
    const b = e.target.closest('[data-consent-choice]');
    if (!b) return;
    const c = b.dataset.consentChoice;
    const v = { a: c !== 'deny', m: c === 'all' };
    try { localStorage.setItem('zaec-consent', JSON.stringify(v)); } catch (err) {}
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: v.a ? 'granted' : 'denied',
        ad_storage: v.m ? 'granted' : 'denied',
        ad_user_data: v.m ? 'granted' : 'denied',
        ad_personalization: v.m ? 'granted' : 'denied',
      });
    }
    track('consent_update', { analytics: v.a, marketing: v.m });
    consentBox.hidden = true;
  });
  document.querySelectorAll('[data-consent-open]').forEach((b) => b.addEventListener('click', () => { consentBox.hidden = false; }));
}
