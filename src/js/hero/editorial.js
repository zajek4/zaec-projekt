// Urednički hero (razina 2) — suzdržan pokret.
// Ulaz (kadar se otvara od ruba s kojeg izlazi, tekst se digne, slika se smiri kad se učita) je u CSS-u od prvog
// iscrtavanja (hero.css, „Ulaz heroja“), pa ne čeka ovu skriptu i ne trepće kad ona stigne. Ovdje ostaje samo ono
// što ovisi o scrollu: slika klizi sporije od okvira (dubina), a oznaka kadra se gasi. Prijelom ispred naglašene
// riječi naslova je inline u predlošku (zaec_hero_em_fit u inc/hero.php), da stigne prije prvog iscrtavanja.
import { gsap, motionOK } from './core.js';

export default function editorial(sec) {
  if (!motionOK()) return;
  const img = sec.querySelector('.eh-img');
  const slate = sec.querySelector('.eh-slate');
  // paralaksa je transform (translate); mirovanje slike je zasebno svojstvo scale u CSS-u, pa se ne sudaraju
  if (img) gsap.fromTo(img, { yPercent: -2.5 }, { yPercent: 3.5, ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: 'bottom top', scrub: 0.4 } });
  // fromTo: skripta može stići dok CSS ulaz oznaku još drži prozirnom, pa početnu vrijednost ne čita iz stila
  if (slate) gsap.fromTo(slate, { autoAlpha: 1 }, { autoAlpha: 0, ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: '30% top', scrub: true } });
}
