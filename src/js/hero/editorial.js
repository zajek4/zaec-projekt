// Urednički hero (razina 2) — suzdržan pokret.
// Kadar se otvara od ruba ekrana s kojeg izlazi (desktop: zdesna; mobitel: odozgo); slika se smiri iz blagog
// približavanja. Pri scrollu slika klizi sporije od okvira (dubina), a oznaka kadra se gasi.
import { gsap, motionOK, portraitMQ } from './core.js';

export default function editorial(sec) {
  if (!motionOK()) return;
  const frame = sec.querySelector('.eh-frame');
  const img = sec.querySelector('.eh-img');
  const slate = sec.querySelector('.eh-slate');
  const parts = [sec.querySelector('.eh-head'), sec.querySelector('.eh-title'), sec.querySelector('.eh-body')].filter(Boolean);
  const sheet = sec.querySelectorAll('.eh-sheet-list li');
  const tall = portraitMQ.matches || window.innerWidth <= 760;

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  if (frame) tl.fromTo(frame, { clipPath: tall ? 'inset(0% 0% 100% 0%)' : 'inset(0% 0% 0% 100%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.25, clearProps: 'clipPath' }, 0);
  // nacrt se iscrtava sam (CSS, hero.css); slika se smiri iz blagog približavanja
  if (frame && img) tl.fromTo(img, { scale: 1.2 }, { scale: 1.08, duration: 1.9 }, 0);
  tl.from(parts, { opacity: 0, y: 22, duration: 1.1, stagger: 0.08, clearProps: 'opacity,transform' }, 0.12);
  if (slate) tl.from(slate, { opacity: 0, duration: 0.8, clearProps: 'opacity' }, 0.85);
  if (sheet.length) tl.from(sheet, { opacity: 0, y: 16, duration: 0.9, stagger: 0.05, clearProps: 'opacity,transform' }, 0.45);

  if (img) gsap.fromTo(img, { yPercent: -2.5 }, { yPercent: 3.5, ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: 'bottom top', scrub: 0.4 } });
  if (slate) gsap.to(slate, { autoAlpha: 0, ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: '30% top', scrub: true } });
}
