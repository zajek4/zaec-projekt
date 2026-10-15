// Podstranice: paralaksa 3D ilustracije u heroju.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const motionOK = document.documentElement.classList.contains('motion-ok');
const art = document.querySelector('[data-parallax]');
if (art && motionOK) {
  const img = art.querySelector('img');
  // samo pomak i mjerilo (bez prozirnosti): slika je LCP i mora biti vidljiva od prvog iscrtavanja
  gsap.fromTo(img, { y: 28, scale: 0.97 }, { y: 0, scale: 1, duration: 1.4, ease: 'expo.out' });
  gsap.to(img, { yPercent: -10, ease: 'none', scrollTrigger: { trigger: art, start: 'top top', end: 'bottom top', scrub: true } });
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const rx = gsap.quickTo(img, 'rotationY', { duration: 1.2, ease: 'power3.out' });
    const ry = gsap.quickTo(img, 'rotationX', { duration: 1.2, ease: 'power3.out' });
    gsap.set(art, { perspective: 1200 });
    addEventListener('pointermove', (e) => {
      rx(((e.clientX / innerWidth) - 0.5) * 6);
      ry(-((e.clientY / innerHeight) - 0.5) * 4);
    }, { passive: true });
  }
}

/* Izrada: anatomija u noći — svaki dio stranice pali svoju etažu kule (prvi gornju, zadnji ulaz). Etaža je
   upaljena dok je njezin dio iznad 55 % visine prozora; skrol natrag je gasi. Bez kretanja kula je sagrađena. */
const tower = document.querySelector('[data-anat-tower]');
if (tower && motionOK) {
  const notes = [...tower.querySelectorAll('.anat-notes li[data-f]')];
  const words = [...tower.querySelectorAll('.at-w[data-f]')];
  const floors = [...new Set(notes.map((li) => +li.dataset.f))];
  floors.forEach((f) => tower.style.setProperty(`--f${f}`, '0'));
  tower.classList.add('is-live');
  const state = new Map();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.target.classList.toggle('is-lit', e.isIntersecting || e.boundingClientRect.top < 0));
    floors.forEach((f) => {
      const on = notes.some((li) => +li.dataset.f === f && li.classList.contains('is-lit'));
      if (state.get(f) === on) return;
      state.set(f, on);
      words.forEach((w) => +w.dataset.f === f && w.classList.toggle('is-lit', on));
      gsap.to(tower, { [`--f${f}`]: on ? 1 : 0, duration: on ? 0.9 : 0.4, ease: on ? 'expo.out' : 'power2.out', overwrite: 'auto' });
    });
  }, { rootMargin: '0px 0px -45% 0px' });
  notes.forEach((li) => io.observe(li));
}

/* Kontaktni arak hubova (kadrovi podstranica ispod heroja) kao slider. Na dodir je to običan vodoravni skrol;
   mišem bez ovoga nema kako do kadrova desno (traka je skrivena, kotačić skrola stranicu). Zato: strelice,
   povlačenje mišem i rub koji blijedi dok iza njega ima još kadrova. */
function initSheet(nav) {
  const list = nav.querySelector('.eh-sheet-list');
  const ctrl = nav.querySelector('.eh-sheet-nav');
  if (!list || !ctrl) return;
  const [prev, next] = ctrl.querySelectorAll('.eh-sheet-btn');
  const mouse = matchMedia('(hover: hover) and (pointer: fine)');
  const behavior = () => (motionOK ? 'smooth' : 'auto');

  const update = () => {
    const max = list.scrollWidth - list.clientWidth;
    const scrollable = max > 1;
    const start = list.scrollLeft <= 1;
    const end = list.scrollLeft >= max - 1;
    nav.classList.toggle('is-scrollable', scrollable);
    nav.classList.toggle('is-start', start);
    nav.classList.toggle('is-end', end);
    nav.classList.toggle('is-drag', scrollable && mouse.matches);
    ctrl.hidden = !(scrollable && mouse.matches);
    prev.disabled = start;
    next.disabled = end;
  };

  // korak: kadrovi koji cijeli stanu u vidljivi dio, manje jedan (ostaje kao orijentir); barem jedan kadar
  const step = () => {
    const items = list.children;
    if (items.length < 2) return list.clientWidth;
    const pitch = items[1].offsetLeft - items[0].offsetLeft;
    const pad = parseFloat(getComputedStyle(list).paddingLeft) || 0;
    return Math.max(1, Math.floor((list.clientWidth - pad) / pitch) - 1) * pitch;
  };
  const go = (dir) => list.scrollBy({ left: dir * step(), behavior: behavior() });
  prev.addEventListener('click', () => go(-1));
  next.addEventListener('click', () => go(1));

  // povlačenje mišem (dodir i olovka imaju svoj, nativni skrol)
  let drag = null;
  let moved = false;
  list.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0 || !nav.classList.contains('is-drag')) return;
    drag = { x: e.clientX, left: list.scrollLeft, id: e.pointerId };
    moved = false;
  });
  list.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x;
    if (!moved && Math.abs(dx) < 6) return;
    if (!moved) {
      moved = true;
      nav.classList.add('is-dragging');
      list.setPointerCapture(drag.id);
    }
    list.scrollLeft = drag.left - dx;
  });
  const release = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    drag = null;
    if (!moved) return;
    // poravnaj na najbliži kadar pa vrati snap (bez toga snap skoči bez animacije)
    const items = [...list.children];
    const pad = parseFloat(getComputedStyle(list).paddingLeft) || 0;
    const target = items.reduce((best, li) => {
      const x = li.offsetLeft - pad;
      return Math.abs(x - list.scrollLeft) < Math.abs(best - list.scrollLeft) ? x : best;
    }, 0);
    list.scrollTo({ left: target, behavior: behavior() });
    setTimeout(() => { moved = false; }, 0); // klik dolazi odmah iza pointerup; poslije toga klik opet radi
    setTimeout(() => nav.classList.remove('is-dragging'), motionOK ? 450 : 0);
  };
  list.addEventListener('pointerup', release);
  list.addEventListener('pointercancel', release);
  // klik koji završava povlačenje ne otvara stranicu
  list.addEventListener('click', (e) => {
    if (moved) { e.preventDefault(); e.stopPropagation(); }
  }, true);
  list.addEventListener('dragstart', (e) => nav.classList.contains('is-drag') && e.preventDefault());

  list.addEventListener('scroll', update, { passive: true });
  new ResizeObserver(update).observe(list);
  mouse.addEventListener?.('change', update);
  update();
}
document.querySelectorAll('[data-sheet]').forEach(initSheet);

/* ───────── heroji podstranica (potpisni + urednički) ───────── */
import izrada from './hero/izrada.js';
import kontakt from './hero/kontakt.js';
import editorial from './hero/editorial.js';

const HEROES = { izrada, kontakt, editorial };
document.querySelectorAll('[data-hero]').forEach((el) => HEROES[el.dataset.hero]?.(el));
