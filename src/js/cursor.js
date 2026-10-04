// Pokazivač: prsten koji prati miš i reagira na interaktivne elemente.
// Samo fini pokazivač + dopušten pokret. Sistemski kursor ostaje vidljiv (pristupačnost).
import { gsap } from 'gsap';

export function initCursor() {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!fine.matches || reduce.matches) return;

  const el = document.createElement('div');
  el.className = 'cursor';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = '<span class="cursor-ring"></span><span class="cursor-label"></span>';
  document.body.appendChild(el);
  const label = el.querySelector('.cursor-label');
  const qx = gsap.quickTo(el, 'x', { duration: 0.45, ease: 'power3.out' });
  const qy = gsap.quickTo(el, 'y', { duration: 0.45, ease: 'power3.out' });
  let shown = false;
  const INTERACTIVE = 'a, button, [role="tab"], summary, label.goal, .cmp-range, [data-cursor], .sys-layer';
  const TEXT = 'input:not([type="range"]):not([type="checkbox"]):not([type="radio"]), textarea, select';

  function onMove(e) {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    if (!shown) {
      gsap.set(el, { x: e.clientX, y: e.clientY });
      el.classList.add('is-on');
      shown = true;
    }
    qx(e.clientX);
    qy(e.clientY);
  }
  function onOver(e) {
    const t = e.target;
    if (!(t instanceof Element)) return;
    const text = t.closest(TEXT);
    const hit = !text && t.closest(INTERACTIVE);
    el.classList.toggle('is-hidden', !!text);
    el.classList.toggle('is-hot', !!hit);
    const txt = hit && hit.getAttribute('data-cursor');
    label.textContent = txt || '';
    el.classList.toggle('has-label', !!txt);
    el.classList.toggle('is-dark', !!t.closest('.paper') && !t.closest('.sec--night'));
  }
  const hide = () => { el.classList.remove('is-on'); shown = false; };
  window.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerover', onOver, { passive: true });
  document.addEventListener('pointerleave', hide);
  window.addEventListener('blur', hide);
  document.addEventListener('pointerdown', () => el.classList.add('is-down'));
  document.addEventListener('pointerup', () => el.classList.remove('is-down'));
  reduce.addEventListener('change', () => { if (reduce.matches) el.remove(); });
}
