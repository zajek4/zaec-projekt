// Zajednička infrastruktura heroja podstranica: kretanje, mjerenje, uspravna kompozicija, napredak scrolla.
// Režija pojedinog heroja živi u vlastitom modulu (izrada.js, onama.js, kontakt.js, editorial.js).
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };

const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
/** Smije li se scena kretati (JS uključen i bez "smanjenog kretanja"). */
export const motionOK = () => root.classList.contains('motion-ok') && !reduce.matches;
/** Uspravna kompozicija kadra (isto pravilo kao <source media> u inc/hero.php i CSS-u). */
export const portraitMQ = window.matchMedia('(max-aspect-ratio: 4/5)');

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => t * t * (3 - 2 * t);

/** Pričekaj da se slike u elementu dekodiraju (prijelazi ne smiju početi na praznom kadru). */
export function imagesReady(el, timeout = 2500) {
  const imgs = [...el.querySelectorAll('img')];
  const all = Promise.all(imgs.map((i) => (i.complete && i.naturalWidth ? (i.decode ? i.decode().catch(() => {}) : null) : new Promise((r) => { i.addEventListener('load', r, { once: true }); i.addEventListener('error', r, { once: true }); }))));
  return Promise.race([all, new Promise((r) => setTimeout(r, timeout))]);
}

/** Mjerenje samo kad se raspored promijeni (nikad u scroll petlji). */
export function onLayout(fn) {
  let raf = 0;
  const run = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(fn); };
  new ResizeObserver(run).observe(document.body);
  portraitMQ.addEventListener('change', run);
  return run;
}
