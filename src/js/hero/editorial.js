// Urednički hero (razina 2) — suzdržan pokret.
// Kadar se otvara od ruba ekrana s kojeg izlazi (desktop: zdesna; mobitel: odozgo); slika se smiri iz blagog
// približavanja. Pri scrollu slika klizi sporije od okvira (dubina), a oznaka kadra se gasi.
import { gsap, motionOK } from './core.js';

/** Složeni raspored (kadar od ruba do ruba iznad naslova): isti uvjet kao u hero.css i sizes u editorial.php. */
const stackedMQ = window.matchMedia('(max-aspect-ratio: 4/5), (max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 1/1)');

/** Naglašena riječ naslova ostaje na papiru: u kadru je difference boji zlatno, a zlatno je svjetlo (design/02).
 *  Ako bi riječ ušla u kadar, prijelom ide ispred nje (najviše redak više; design/09, B): s kadrom desno riječ
 *  počinje redak uz lijevi rub, a u složenom rasporedu prelazi iz prvog retka (na rubu kadra) na papir. */
function emOnPaper(sec) {
  const title = sec.querySelector('.eh-title');
  const em = title?.querySelector('em');
  const frame = sec.querySelector('.eh-frame');
  // tamni hero (noćni papir): naglasak je zlatan i izvan kadra, pa prijelom ništa ne mijenja
  if (!em || !frame || sec.classList.contains('eh--dark')) return;
  let w = 0;
  const fit = () => {
    if (window.innerWidth === w) return; // samo promjena širine (traka preglednika na mobitelu mijenja visinu)
    w = window.innerWidth;
    title.querySelector('br.eh-br')?.remove();
    const F = frame.getBoundingClientRect();
    const T = title.getBoundingClientRect();
    const rects = [...em.getClientRects()];
    // okomito: barem trećina kutije retka (drugi redak u složenom rasporedu kadar dira samo kutijom, ne slovima)
    const inFrame = rects.some((q) => q.right > F.left + 2 && q.left < F.right && Math.min(q.bottom, F.bottom) - Math.max(q.top, F.top) > q.height / 3);
    // riječ koja već počinje redak ne pomaže prijelom
    if (inFrame && rects[0] && rects[0].left > T.left + 2) {
      const br = document.createElement('br');
      br.className = 'eh-br';
      em.before(br);
    }
  };
  document.fonts.ready.then(fit);
  window.addEventListener('resize', fit);
}

export default function editorial(sec) {
  emOnPaper(sec);
  if (!motionOK()) return;
  const frame = sec.querySelector('.eh-frame');
  const img = sec.querySelector('.eh-img');
  const slate = sec.querySelector('.eh-slate');
  const parts = [sec.querySelector('.eh-head'), sec.querySelector('.eh-title'), sec.querySelector('.eh-body')].filter(Boolean);
  const sheet = sec.querySelectorAll('.eh-sheet-list li');
  const tall = stackedMQ.matches;

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
