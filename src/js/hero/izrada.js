// Izrada web stranica — "Od nacrta do zgrade".
// 1) Špica: nacrt se pojavi, skener se upali na vrhu prizemlja (temelj = upit već stoji).
// 2) Scroll: skener se diže etažu po etažu; ispod crte je zgrada sagrađena, a naslov ispunjen.
// 3) Kad je zgrada gotova, kadar se zatvori oko nje (desktop) ili utiša (mobitel), a sedam dijelova
//    stranice prolazi pored nje — svaki ističe svoju etažu.
import { gsap, ScrollTrigger, motionOK, portraitMQ, clamp, lerp, smooth, imagesReady, onLayout } from './core.js';

export default function izrada(sec) {
  if (!motionOK()) return; // bez kretanja ostaje završno stanje iz CSS-a
  const meta = JSON.parse(sec.dataset.meta || '{}');
  if (!meta.d || !meta.m) return;
  const stage = sec.querySelector('.sh-stage');
  const frame = sec.querySelector('.sh-frame');
  const scene = sec.querySelector('.sh-scene');
  const real = sec.querySelector('.sh-real');
  const scan = sec.querySelector('.sh-scan');
  const scanLabel = sec.querySelector('[data-scan-label]');
  const title = sec.querySelector('.sh-title');
  const em = title.querySelector('em');
  const copy = sec.querySelector('.sh-copy');
  const floors = [...sec.querySelectorAll('.sh-floor')];
  const items = [...sec.querySelectorAll('.sh-anat-list li')];
  const hl = sec.querySelector('.sh-hl');
  floors.forEach((f, i) => f.style.setProperty('--k', i));
  sec.classList.add('is-live');
  // na uspravnom ekranu uvod ne smije prekriti temelj zgrade: isti element seli u nastavak scene (nacrt)
  const lead = sec.querySelector('.sh-lead');
  const leadHome = lead?.parentElement;
  const leadSlot = sec.querySelector('[data-lead-slot]');
  const placeLead = () => {
    if (!lead || !leadSlot) return;
    if (portraitMQ.matches || window.innerWidth <= 760) { if (lead.parentElement !== leadSlot) leadSlot.append(lead); }
    else if (lead.parentElement !== leadHome) leadHome.prepend(lead);
  };
  placeLead();

  let M = portraitMQ.matches ? meta.m : meta.d;
  let start = 0, end = 0;
  let sceneTop = 0, sceneH = 1, tTop = 0, tH = 1, eTop = 0, eH = 1;
  let cut = 100;
  let built = 0; // 0…1 (gradnja); intro postavlja cut na temelj

  function measure() {
    placeLead();
    M = portraitMQ.matches ? meta.m : meta.d;
    start = M.levels[0].top - 0.25; // prizemlje (upit) je sagrađeno od početka
    end = M.crown - 3.5;
    const s = stage.getBoundingClientRect();
    const r = scene.getBoundingClientRect();
    // scena je u pozornici; transformacije okvira (zatvaranje) ne smiju ući u mjerenje
    const sc = gsap.getProperty(frame, 'scale') || 1;
    sceneTop = (r.top - s.top) / sc; sceneH = r.height / sc;
    const t = title.getBoundingClientRect();
    tTop = t.top - s.top; tH = t.height || 1;
    if (em) { const e = em.getBoundingClientRect(); eTop = e.top - s.top; eH = e.height || 1; }
    // skener mora proći i kroz naslov (na mobitelu je naslov iznad krune)
    end = Math.min(M.crown - 3.5, ((tTop - 18 - sceneTop) / sceneH) * 100);
    apply(cut);
  }

  function apply(c) {
    cut = c;
    real.style.setProperty('--cut', c.toFixed(3));
    const y = sceneTop + (c / 100) * sceneH;
    stage.style.setProperty('--scan-y', `${y.toFixed(1)}px`);
    title.style.setProperty('--fill', `${clamp(((y - tTop) / tH) * 100, -2, 102).toFixed(2)}%`);
    if (em) em.style.setProperty('--fill-em', `${clamp(((y - eTop) / eH) * 100, -2, 102).toFixed(2)}%`);
    let level = 0;
    floors.forEach((f, i) => {
      const on = c <= M.levels[i].top + 0.4;
      f.classList.toggle('is-built', on);
      if (on) level = i + 1;
    });
    if (scanLabel && built > 0.02) {
      const cur = floors[Math.max(0, level - 1)];
      scanLabel.textContent = level >= floors.length ? 'Sagrađeno · 07 / 07 — od upita do izloga' : `Etaža ${String(level).padStart(2, '0')} / 07 — ${cur?.querySelector('b')?.textContent || ''}`;
    } else if (scanLabel) scanLabel.textContent = 'Skrolajte — gradimo od temelja';
  }

  // 1) špica
  imagesReady(scene).then(() => {
    sec.classList.add('is-in');
    const intro = { c: 100, x: 0 };
    gsap.timeline({ delay: 0.25 })
      .to(intro, { x: 1, duration: 1.1, ease: 'expo.out', onUpdate: () => stage.style.setProperty('--scan-x', intro.x.toFixed(3)) }, 0)
      .to(intro, { c: start, duration: 1.4, ease: 'power3.inOut', onUpdate: () => { if (built === 0) apply(intro.c); } }, 0.15);
  });
  stage.style.setProperty('--scan-x', '0');
  apply(100);

  const run = onLayout(() => { measure(); ScrollTrigger.refresh(); });
  measure();

  // 2) gradnja: 0 → 1,2 visine ekrana
  ScrollTrigger.create({
    trigger: sec,
    start: 'top top',
    end: () => `+=${window.innerHeight * 1.2}`,
    scrub: 0.5,
    onUpdate: (self) => {
      built = self.progress;
      if (built > 0.001) apply(lerp(start, end, smooth(built)));
      sec.classList.toggle('is-building', built > 0.02);
    },
  });

  // 3) zatvaranje kadra oko zgrade i odlazak naslova (desktop) / utišavanje scene (mobitel)
  const mm = gsap.matchMedia();
  mm.add({ wide: '(min-aspect-ratio: 4/5) and (min-width: 761px)', tall: '(max-aspect-ratio: 4/5), (max-width: 760px)' }, (ctx) => {
    const { wide } = ctx.conditions;
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sec, start: () => `top+=${window.innerHeight * (wide ? 1.15 : 1.0)} top`, end: () => `+=${window.innerHeight * (wide ? 0.5 : 0.3)}`, scrub: 0.6 },
    });
    if (wide) {
      // okvir se zatvara na desni stupac, točno oko zgrade (zgrada je u kadru desno, ne pomiče se)
      const box = () => {
        const vw = window.innerWidth, vh = window.innerHeight;
        const s = scene.getBoundingClientRect();
        const bl = s.left + (M.left / 100) * s.width, br = s.left + (M.right / 100) * s.width;
        const cx = (bl + br) / 2;
        const half = Math.min(vw * 0.23, (br - bl) * 1.45);
        return { l: Math.max(vw * 0.5, cx - half), r: Math.max(vw * 0.03, vw - (cx + half)), t: vh * 0.1, b: vh * 0.07 };
      };
      tl.fromTo(frame, { clipPath: 'inset(0px 0px 0px 0px round 0px)' }, {
        clipPath: () => { const b = box(); return `inset(${b.t}px ${b.r}px ${b.b}px ${b.l}px round 22px)`; },
        ease: 'power2.inOut', immediateRender: false,
      }, 0)
        .to(frame, { scale: 0.94, transformOrigin: () => { const b = box(); return `${((window.innerWidth - b.r + b.l) / 2 / window.innerWidth) * 100}% 50%`; }, ease: 'power2.inOut' }, 0)
        .to(copy, { autoAlpha: 0, y: -40, ease: 'power2.in', duration: 0.6 }, 0)
        .to(scan, { autoAlpha: 0, duration: 0.3 }, 0);
    } else {
      tl.to(frame, { opacity: 0.32, ease: 'none' }, 0).to(copy, { autoAlpha: 0, y: -30, ease: 'power2.in', duration: 0.6 }, 0).to(scan, { autoAlpha: 0, duration: 0.3 }, 0);
    }
    return () => { gsap.set([frame, copy, scan], { clearProps: 'all' }); };
  });

  // dijelovi stranice ističu svoju etažu
  const setHL = (i) => {
    if (!hl) return;
    if (i < 0) { hl.classList.remove('is-on'); return; }
    const L = M.levels[i];
    hl.style.setProperty('--hlt', L.top);
    hl.style.setProperty('--hlb', L.bottom);
    hl.classList.add('is-on');
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      items.forEach((li) => li.classList.toggle('is-on', li === en.target));
      setHL(+en.target.dataset.level);
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  items.forEach((li) => io.observe(li));
  ScrollTrigger.create({ trigger: sec.querySelector('.sh-anat') || sec, start: 'top bottom', end: 'bottom top', onLeaveBack: () => { setHL(-1); items.forEach((li) => li.classList.remove('is-on')); } });
  void run;
}
