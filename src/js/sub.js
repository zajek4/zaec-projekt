// Podstranice: paralaksa 3D ilustracije u heroju.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const motionOK = document.documentElement.classList.contains('motion-ok');
const art = document.querySelector('[data-parallax]');
if (art && motionOK) {
  const img = art.querySelector('img');
  gsap.fromTo(img, { y: 40, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, duration: 1.6, ease: 'expo.out', delay: 0.2 });
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
