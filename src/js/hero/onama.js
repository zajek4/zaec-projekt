// O nama — "Mali studio. Velika odgovornost."
// Špica (jednom, pri učitavanju): grad u mraku → pali se prozor studija → "Mali studio." → reflektori na
// tornju → iza tornja se dižu "Velika" i "odgovornost.". Scroll: slojevi se razdvajaju po dubini (toranj
// brže od naslova, naslov brže od grada), a signal s tornja silazi i nastavlja kao nit kroz "Zašto ZAEC".
import { gsap, ScrollTrigger, motionOK, portraitMQ, imagesReady, onLayout } from './core.js';

export default function onama(sec) {
  if (!motionOK()) return;
  const scene = sec.querySelector('.sh-scene');
  const bg = sec.querySelector('.sh-bg');
  const fg = sec.querySelector('.sh-fg');
  const win = sec.querySelector('.on-window');
  const small = sec.querySelector('.on-small');
  const a = sec.querySelector('.on-a');
  const b = sec.querySelector('.on-b');
  const aside = sec.querySelector('.on-aside');
  const cap = sec.querySelector('.on-caption');
  const signal = sec.querySelector('.on-signal');
  if (!scene || !a || !b) return;
  sec.classList.add('is-live');
  sec.style.setProperty('--lit', '0.2');

  imagesReady(scene).then(() => {
    const st = { lit: 0.2 };
    gsap.timeline({ delay: 0.25 })
      // prozor se pali s malim trzajem (stara žarulja), zatim mirno svijetli
      .to(win, { opacity: 1, duration: 0.18, ease: 'none' })
      .to(win, { opacity: 0.45, duration: 0.07, ease: 'none' })
      .to(win, { opacity: 1, duration: 0.6, ease: 'power2.out' })
      .fromTo(small, { opacity: 0, letterSpacing: '0.55em' }, { opacity: 1, letterSpacing: '0.18em', duration: 1.2, ease: 'expo.out' }, '-=0.35')
      .to(st, { lit: 1, duration: 1.9, ease: 'power2.inOut', onUpdate: () => sec.style.setProperty('--lit', st.lit.toFixed(3)) }, '-=0.55')
      .fromTo(a, { opacity: 0, yPercent: 40 }, { opacity: 1, yPercent: 0, duration: 1.5, ease: 'expo.out' }, '-=1.1')
      .fromTo(b, { opacity: 0, yPercent: 40 }, { opacity: 1, yPercent: 0, duration: 1.6, ease: 'expo.out' }, '-=1.3')
      .fromTo([aside, cap].filter(Boolean), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.12 }, '-=1.0');
  });

  // dubina: pomaci u postotku visine kadra
  const H = () => scene.getBoundingClientRect().height;
  gsap.timeline({ scrollTrigger: { trigger: sec, start: 'top top', end: 'bottom top', scrub: 0.4, invalidateOnRefresh: true } })
    .to(fg, { y: () => -H() * 0.085, ease: 'none' }, 0)
    .to([a, b], { y: () => -H() * 0.05, ease: 'none' }, 0)
    .to([bg, win, small], { y: () => -H() * 0.02, ease: 'none' }, 0)
    .to(signal, { scaleY: 1, ease: 'none', duration: 0.55 }, 0);

  // nit u sekciji "Zašto ZAEC": između stupca s naslovom i teksta
  const about = document.querySelector('.sh-onama ~ section .two-col');
  if (!about) return;
  const host = about.closest('section');
  const thread = document.createElement('span');
  thread.className = 'on-thread';
  thread.setAttribute('aria-hidden', 'true');
  host.append(thread);
  const place = () => {
    const cols = about.children;
    if (portraitMQ.matches || window.innerWidth <= 900 || cols.length < 2) { thread.hidden = true; return; }
    thread.hidden = false;
    const hr = host.getBoundingClientRect();
    const r1 = cols[0].getBoundingClientRect(), r2 = cols[1].getBoundingClientRect();
    thread.style.left = `${(r1.right + r2.left) / 2 - hr.left}px`;
  };
  onLayout(place);
  place();
  gsap.fromTo(thread, { '--thread': 0 }, { '--thread': 1, ease: 'none', scrollTrigger: { trigger: host, start: 'top 85%', end: 'center 45%', scrub: 0.5 } });
  void ScrollTrigger;
}
