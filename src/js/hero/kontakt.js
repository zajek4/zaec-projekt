// Kontakt — "Vaše svjetlo je sljedeće".
// U nizu osvijetljenih kuća jedna je tamna. Svako ispravno ispunjeno polje pali jednu njezinu etažu (odozdo:
// ime, kontakt, djelatnost, usluga, poruka); slanje pali krunu na krovu i signal. Isto stanje prati mali
// mjerač u zaglavlju forme (na mobitelu je kuća iza stakla forme). Interakcija radi i uz smanjeno kretanje —
// tada bez treperenja. Bez JS-a forma radi klasično, a kuća ostaje tamna.
import { gsap, motionOK } from './core.js';

const FIELDS = ['ime', 'kontakt', 'djelatnost', 'usluga', 'poruka'];
const PHONE_RE = /^[+()\d\s/-]{6,}$/;
const MAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FILLED = {
  ime: (v) => v.trim().length >= 2,
  kontakt: (v) => PHONE_RE.test(v.trim()) || MAIL_RE.test(v.trim()),
  djelatnost: (v) => !!v,
  usluga: (v) => !!v,
  poruka: (v) => v.trim().length >= 12,
};
const NOTE = {
  start: 'Dva obavezna polja, ostalo po želji. Svako polje pali jednu etažu.',
  ready: 'Može se poslati. Ostala polja pale ostatak kuće.',
  full: 'Sve etaže svijetle. Pošaljite — pali se i kruna.',
  sent: 'Upit je stigao. Svjetlo je upaljeno.',
};

export default function kontakt(sec) {
  const form = sec.querySelector('form[data-contact-form]');
  if (!form) return;
  const motion = motionOK();
  const floors = [...sec.querySelectorAll('.kt-floor')];
  const meter = [...sec.querySelectorAll('.kt-meter i')]; // kruna, 4. … 1. kat, prizemlje
  const note = sec.querySelector('[data-meter-note]');
  const pin = sec.querySelector('[data-pin]');
  const pinText = pin?.textContent || '';
  const on = FIELDS.map(() => false);
  let sent = false;
  sec.classList.add('is-live');
  FIELDS.forEach((_, i) => sec.style.setProperty(`--f${i}`, '0'));
  sec.style.setProperty('--fc', '0');
  form.dataset.sentDelay = motion ? '2100' : '900';

  // broj etaže uz oznaku polja (veza polje ↔ kat)
  FIELDS.forEach((n, i) => {
    const el = form.elements[n];
    const lab = el && form.querySelector(`label[for="${el.id}"]`);
    if (lab && !lab.querySelector('.kt-n')) lab.insertAdjacentHTML('afterbegin', `<span class="kt-n" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>`);
  });

  const light = (prop, value) => {
    gsap.killTweensOf(sec, prop);
    if (!motion) { gsap.to(sec, { [prop]: value, duration: 0.3, ease: 'none' }); return; }
    if (value === 0) { gsap.to(sec, { [prop]: 0, duration: 0.5, ease: 'power2.out' }); return; }
    // fluorescentna cijev: dva kratka trzaja pa mirno svjetlo
    gsap.to(sec, { keyframes: [
      { [prop]: 0.75, duration: 0.05, ease: 'none' },
      { [prop]: 0.08, duration: 0.07, ease: 'none' },
      { [prop]: 0.9, duration: 0.05, ease: 'none' },
      { [prop]: 0.35, duration: 0.09, ease: 'none' },
      { [prop]: 1, duration: 0.45, ease: 'power2.out' },
    ] });
  };

  function render() {
    const n = on.filter(Boolean).length;
    floors.forEach((f, i) => f.classList.toggle('is-on', on[i]));
    on.forEach((v, i) => meter[meter.length - 1 - i]?.classList.toggle('is-on', v));
    meter[0]?.classList.toggle('is-on', sent);
    if (note) note.textContent = sent ? NOTE.sent : n === FIELDS.length ? NOTE.full : on[0] && on[1] ? NOTE.ready : NOTE.start;
    if (pin) pin.textContent = sent ? 'Vaš obrt · upaljeno' : n ? `Vaš obrt · ${n} / ${FIELDS.length} etaža` : pinText;
  }

  function check() {
    FIELDS.forEach((name, i) => {
      const el = form.elements[name];
      const v = !!el && FILLED[name](el.value || '');
      el?.closest('.field')?.classList.toggle('is-lit', v);
      if (v !== on[i]) { on[i] = v; light(`--f${i}`, v ? 1 : 0); }
    });
    render();
  }

  form.addEventListener('input', check);
  form.addEventListener('change', check);
  document.addEventListener('zaec:config', () => requestAnimationFrame(check));
  check();
  // priložena konfiguracija (form.js) može popuniti izbornike nakon ovoga
  setTimeout(check, 400);

  form.addEventListener('zaec:sent', () => {
    sent = true;
    FIELDS.forEach((_, i) => { if (!on[i]) { on[i] = true; light(`--f${i}`, 1); } });
    gsap.to(sec, { '--fc': 1, duration: motion ? 0.9 : 0.3, delay: motion ? 0.25 : 0, ease: 'power2.out' });
    sec.classList.add('is-sent');
    render();
  });

  // špica: kadar je već tu, tekst i forma ulaze mirno
  if (motion) {
    gsap.from(sec.querySelectorAll('.kt-head > *, .kt-more, .kt-card'), { opacity: 0, y: 18, duration: 1.1, ease: 'power3.out', stagger: 0.08, delay: 0.15, clearProps: 'opacity,transform' });
    gsap.from([...floors, sec.querySelector('.kt-pin')].filter(Boolean), { opacity: 0, duration: 0.9, ease: 'power2.out', stagger: 0.06, delay: 0.7, clearProps: 'opacity' });
  }

  // nastavak: koraci nakon upita pale se redom dok prolaze sredinom ekrana
  const after = sec.parentElement?.querySelector('.kt-after');
  if (after && motion) {
    after.classList.add('is-live');
    const steps = [...after.querySelectorAll('.kt-step')];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const k = steps.indexOf(en.target);
        steps.forEach((s, j) => { if (j <= k) s.classList.add('is-on'); });
      });
    }, { rootMargin: '0px 0px -42% 0px' });
    steps.forEach((s) => io.observe(s));
  }
}
