// O nama — tipografija kao mjera.
// Špica (jednom): pali se jedini prozor studija → "Mali studio." uz njegovu malu kotu → pomoćne crte s tornja →
// kotna crta raste od tla do vrha šiljka i za sobom otkriva okomit naslov "Velika odgovornost." → 90 m.
// Bez kretanja: završno stanje (sve izmjereno i ispisano).
import { gsap, motionOK, portraitMQ, imagesReady } from './core.js';

export default function onama(sec) {
  if (!motionOK()) return;
  const scene = sec.querySelector('.sh-scene');
  const svg = sec.querySelector(portraitMQ.matches || window.innerWidth <= 760 ? '.on-type--m' : '.on-type--d');
  if (!scene || !svg) return;
  const len = +svg.dataset.len, base = +svg.dataset.base;
  const rect = svg.querySelector('[data-reveal-rect]');
  const dim = svg.querySelector('.on-dim');
  const parts = ['.on-small', '.on-ext', '.on-ticks', '.on-dim-label'].map((q) => svg.querySelector(q));
  const [small, ext, ticks, label] = parts;
  const win = sec.querySelector('.on-window');
  const after = [sec.querySelector('.on-aside'), sec.querySelector('.on-caption')].filter(Boolean);
  sec.classList.add('is-live');
  const st = { p: 0 };
  const set = () => {
    rect.setAttribute('y', (base - st.p * len - 2).toFixed(1));
    rect.setAttribute('height', (st.p * len + 42).toFixed(1));
    dim.style.strokeDashoffset = String(1 - st.p);
  };
  set();
  gsap.set([...parts, ...after].filter(Boolean), { opacity: 0 });
  imagesReady(scene).then(() => {
    gsap.timeline({ delay: 0.3 })
      .to(win, { opacity: 1, duration: 0.16, ease: 'none' })
      .to(win, { opacity: 0.4, duration: 0.07, ease: 'none' })
      .to(win, { opacity: 1, duration: 0.5, ease: 'power2.out' })
      .to(small, { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.2')
      .to([ext, ticks], { opacity: 1, duration: 0.6, ease: 'power2.out' }, '+=0.2')
      .to(st, { p: 1, duration: 2.1, ease: 'power3.inOut', onUpdate: set }, '-=0.25')
      .to(label, { opacity: 1, duration: 0.6 }, '-=0.5')
      .fromTo(after, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out', clearProps: 'transform' }, '-=0.9');
  });
}
