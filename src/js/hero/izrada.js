// Izrada web stranica — naslov je zgrada.
// 1) Špica: nacrt se pojavi, skener se sam, jednom, digne od tla do crte iznad istaknute riječi: „donose UPITE.“
//    i ulaz s gumbom su sagrađeni, pa je obećanje naslova čitljivo u prvom ekranu (design/03, 4.1).
// 2) Scroll (pinano): skener nastavlja prema vrhu; ispod crte je etaža sagrađena (toplo staklo, riječ kao natpis
//    na staklu), iznad crte je nacrt (obris riječi). Na vrhu je naslov pročitan i zgrada sagrađena — pin se pušta.
// Crta skenera široka je kao kula (+8 % sa svake strane), da ne prelazi uvodni tekst (design/03, 4.3).
import { ScrollTrigger, motionOK, portraitMQ, gsap, lerp, smooth, imagesReady, onLayout } from './core.js';

export default function izrada(sec) {
  if (!motionOK()) return; // bez kretanja ostaje završno stanje iz HTML-a/CSS-a
  const meta = JSON.parse(sec.dataset.meta || '{}');
  if (!meta.d || !meta.m) return;
  const stage = sec.querySelector('.sh-stage');
  const scene = sec.querySelector('.sh-scene');
  const real = sec.querySelector('.sh-real');
  const svgs = { d: sec.querySelector('.it-type--d'), m: sec.querySelector('.it-type--m') };
  sec.classList.add('is-live');

  let comp = 'd', M = meta.d, start = 100, end = 0, sceneTop = 0, sceneH = 1, built = 0, cut = 100;
  function measure() {
    comp = portraitMQ.matches || window.innerWidth <= 760 ? 'm' : 'd';
    M = meta[comp];
    start = M.promise - 0.2; // crta iznad istaknute riječi
    end = M.end - 0.4; // vrh atike
    const s = stage.getBoundingClientRect(), r = scene.getBoundingClientRect();
    sceneTop = r.top - s.top; sceneH = r.height;
    const tw = ((M.right - M.left) / 100) * r.width;
    stage.style.setProperty('--scan-l', `${(r.left - s.left + (M.left / 100) * r.width - 0.08 * tw).toFixed(1)}px`);
    stage.style.setProperty('--scan-w', `${(1.16 * tw).toFixed(1)}px`);
    apply(cut);
  }
  function apply(c) {
    cut = c;
    real.style.setProperty('--cut', c.toFixed(3));
    stage.style.setProperty('--scan-y', `${(sceneTop + (c / 100) * sceneH).toFixed(1)}px`);
    const svg = svgs[comp];
    if (!svg) return;
    const y = (c / 100) * M.h;
    svg.querySelector('[data-up]').setAttribute('height', y.toFixed(1));
    const dn = svg.querySelector('[data-dn]');
    dn.setAttribute('y', y.toFixed(1));
    dn.setAttribute('height', (M.h - y).toFixed(1));
  }

  stage.style.setProperty('--scan-x', '0');
  onLayout(() => { measure(); ScrollTrigger.refresh(); });
  measure();
  apply(100);

  // 1) špica
  imagesReady(scene).then(() => {
    sec.classList.add('is-in');
    const intro = { c: 100, x: 0 };
    gsap.timeline({ delay: 0.2 })
      .to(intro, { x: 1, duration: 0.6, ease: 'expo.out', onUpdate: () => stage.style.setProperty('--scan-x', intro.x.toFixed(3)) }, 0)
      .to(intro, { c: start, duration: 0.9, ease: 'expo.out', onUpdate: () => { if (built === 0) apply(intro.c); } }, 0.1);
  });

  // 2) gradnja: etaža po etaža, do vrha
  ScrollTrigger.create({
    trigger: sec,
    start: 'top top',
    end: () => `+=${window.innerHeight * (comp === 'm' ? 0.9 : 1.1)}`,
    scrub: 0.5,
    onUpdate: (self) => {
      built = self.progress;
      if (built > 0.001) apply(lerp(start, end, smooth(built)));
      sec.classList.toggle('is-building', built > 0.02 && built < 0.98);
    },
  });
}
