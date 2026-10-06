// Kontakt — zgrada je forma.
// U nizu osvijetljenih kuća jedna je tamna; njezini prozori su polja forme. Svako ispravno ispunjeno polje
// pali svoj prozor (odozgo: ime, kontakt, djelatnost, usluga, poruka), a tekst u njemu postaje tinta na toplom
// staklu. Slanje (vrata) pali prizemlje i neonski natpis na krovu — naslov stranice.
// Interakcija radi i uz smanjeno kretanje — tada bez treperenja. Bez JS-a forma radi klasično, kuća ostaje tamna.
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
  ready: 'Može se poslati — vrata su otvorena. Ostali prozori po želji.',
  full: 'Svi prozori svijetle. Vrata šalju upit.',
  sent: 'Upit je stigao. Natpis na krovu je upaljen.',
};

export default function kontakt(sec) {
  const form = sec.querySelector('form[data-contact-form]');
  if (!form) return;
  const motion = motionOK();
  const note = sec.querySelector('.kt-how');
  const noteStart = note?.textContent || '';
  const on = FIELDS.map(() => false);
  let sent = false;
  sec.classList.add('is-live');
  FIELDS.forEach((_, i) => sec.style.setProperty(`--f${i}`, '0'));
  sec.style.setProperty('--fc', '0');
  sec.style.setProperty('--fg', '0');
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
    if (note) note.textContent = sent ? NOTE.sent : n === FIELDS.length ? NOTE.full : on[0] && on[1] ? NOTE.ready : noteStart;
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
    gsap.to(sec, { '--fg': 1, duration: motion ? 0.6 : 0.3, ease: 'power2.out' });
    gsap.to(sec, { '--fc': 1, duration: motion ? 0.9 : 0.3, delay: motion ? 0.35 : 0, ease: 'power2.out' });
    sec.classList.add('is-sent');
    render();
  });

  // špica: kadar je već tu; strane i natpisi polja ulaze mirno
  if (motion) {
    const sides = sec.querySelectorAll('.kt-side > *');
    if (sides.length) gsap.from(sides, { opacity: 0, y: 16, duration: 1.1, ease: 'power3.out', stagger: 0.07, delay: 0.2, clearProps: 'opacity,transform' });
    gsap.from(form.querySelectorAll('.field label'), { opacity: 0, duration: 0.8, ease: 'power2.out', stagger: 0.08, delay: 0.5, clearProps: 'opacity' });
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
