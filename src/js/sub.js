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

/* ───────── heroji podstranica (potpisni + urednički) ───────── */
import izrada from './hero/izrada.js';
import kontakt from './hero/kontakt.js';
import editorial from './hero/editorial.js';

const HEROES = { izrada, kontakt, editorial };
document.querySelectorAll('[data-hero]').forEach((el) => HEROES[el.dataset.hero]?.(el));
