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

/* ───────── heroji podstranica (potpisni + urednički) ───────── */
import izrada from './hero/izrada.js';
import onama from './hero/onama.js';
import kontakt from './hero/kontakt.js';
import editorial from './hero/editorial.js';

const HEROES = { izrada, onama, kontakt, editorial };
document.querySelectorAll('[data-hero]').forEach((el) => HEROES[el.dataset.hero]?.(el));
