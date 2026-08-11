/* ============================================================
   ZAEC v4.1 — main.module.js
   Redoslijed: UI prvo (uvijek radi), 3D kao nadogradnja (try/catch)
   ============================================================ */
import * as THREE from './vendor/three.module.min.js';
import { OrbitControls } from './vendor/OrbitControls.module.js';

(function () {
  'use strict';

  var doc = document;
  var WIN = window;
  doc.documentElement.classList.add('js');

  var prefersReducedMotion = WIN.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isCoarse = WIN.matchMedia('(pointer: coarse)').matches;
  var mqDesktop = WIN.matchMedia('(min-width: 901px)');
  var LOW = (WIN.navigator.hardwareConcurrency || 8) < 4 || isCoarse;
  if (prefersReducedMotion) doc.documentElement.classList.add('no-anim');

  function $(s, c) { return (c || doc).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function smooth(t) { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function easeIO(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  var HAS_GSAP = !!(WIN.gsap && WIN.ScrollTrigger);
  if (HAS_GSAP) { gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); }

  /* ============================================================
     MICRO TWEEN ENGINE (nezavisan o GSAP-u)
  ============================================================ */
  var _tws = [];
  function tw(obj, key, to, dur, ease, delayMs, done) {
    for (var i = _tws.length - 1; i >= 0; i--) {
      if (_tws[i].o === obj && _tws[i].k === key) _tws.splice(i, 1);
    }
    _tws.push({ o: obj, k: key, from: obj[key], to: to, st: performance.now() + (delayMs || 0), ms: Math.max(dur * 1000, 1), e: ease || easeIO, dn: done || null });
  }
  function twStep(now) {
    for (var i = _tws.length - 1; i >= 0; i--) {
      var t = _tws[i];
      if (now < t.st) continue;
      var p = (now - t.st) / t.ms;
      if (p >= 1) { t.o[t.k] = t.to; _tws.splice(i, 1); if (t.dn) t.dn(); }
      else { t.o[t.k] = t.from + (t.to - t.from) * t.e(p); }
    }
  }

  // globalni UI sat — teweens + autoplay
  var _uiLast = performance.now();
  /* marquee trake reagiraju na elan scrollanja (playbackRate) */
  var mqAnims = [], mqBoost = 0;
  function mqStep(dt) {
    if (!mqAnims.length) return;
    mqBoost = Math.max(0, mqBoost - dt * 0.9);
    var rate = 0.55 + mqBoost * 2.4;
    for (var i = 0; i < mqAnims.length; i++) mqAnims[i].playbackRate = rate;
  }
  if (!prefersReducedMotion) {
    $$('.mq-track').forEach(function (tr) {
      if (!tr.getAnimations) return;
      tr.getAnimations().forEach(function (a) { mqAnims.push(a); });
    });
    WIN.addEventListener('scroll', function () { mqBoost = Math.min(1.4, mqBoost + 0.07); }, { passive: true });
  }

  function uiLoop(now) {
    var dt = Math.min((now - _uiLast) / 1000, 0.1);
    _uiLast = now;
    twStep(now);
    if (occCtl) occCtl.tick(dt, now);
    mqStep(dt);
    requestAnimationFrame(uiLoop);
  }

  /* ============================================================
     TOAST
  ============================================================ */
  var toastEl = $('#toast'), toastT = null;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 2800);
  }

  /* ============================================================
     3D HANDLE — UI ga koristi, ali ne ovisi o njemu
  ============================================================ */
  var H = { impl: null };

  /* ============================================================
     PRELOADER
  ============================================================ */
  var preloader = $('#preloader');
  var preloaderDone = false;
  function finishPreloader() {
    if (preloaderDone || !preloader) return;
    preloaderDone = true;
    if (prefersReducedMotion || !HAS_GSAP) {
      preloader.style.display = 'none';
      onLoaded();
      return;
    }
    var st = { v: 0 };
    var fill = $('#plFill'), num = $('#plNum'), track = $('.pl-track');
    gsap.to(st, {
      v: 100, duration: 1.5, ease: 'power1.inOut',
      onUpdate: function () {
        var r = Math.round(st.v);
        if (fill) fill.style.width = st.v + '%';
        if (num) num.textContent = ('00' + r).slice(-3);
        if (track) track.setAttribute('aria-valuenow', r);
      },
      onComplete: function () {
        gsap.to(preloader, {
          yPercent: -100, duration: 0.75, ease: 'power3.inOut', delay: 0.05,
          onComplete: function () { preloader.style.display = 'none'; onLoaded(); }
        });
      }
    });
  }
  var loadedFired = false;
  function onLoaded() {
    if (loadedFired) return;
    loadedFired = true;
    doc.body.classList.add('loaded');
    if (occCtl) occCtl.start();
    if (HAS_GSAP) ScrollTrigger.refresh();
  }
  if (doc.readyState === 'complete') { finishPreloader(); }
  else {
    WIN.addEventListener('load', finishPreloader);
    setTimeout(finishPreloader, 3200); // failsafe
  }

  /* ============================================================
     LENIS + ANCHORI
  ============================================================ */
  var lenis = null;
  var NAV_OFFSET = 72; // fiksni header
  if (WIN.Lenis && !prefersReducedMotion && HAS_GSAP) {
    lenis = new Lenis({ duration: 0.95, smoothWheel: true, anchors: false, touchMultiplier: 1.4 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(500, 33);
  }

  function yOf(el) {
    if (!el || el === WIN || typeof el === 'number') return el || 0;
    var r = el.getBoundingClientRect();
    return Math.max(0, r.top + (WIN.pageYOffset || doc.documentElement.scrollTop || 0) - NAV_OFFSET);
  }

  function scrollToEl(target) {
    var y = yOf(target);
    if (lenis) {
      try { lenis.scrollTo(y, { offset: 0, duration: 1.25, immediate: false }); return; } catch (err) { /* fall through */ }
    }
    if (HAS_GSAP && WIN.ScrollToPlugin) {
      gsap.to(WIN, { scrollTo: { y: y, autoKill: true }, duration: 1.05, ease: 'power2.inOut' });
      return;
    }
    if (HAS_GSAP) {
      gsap.to(WIN, { scrollTo: y, duration: 1.05, ease: 'power2.inOut' });
      return;
    }
    try {
      WIN.scrollTo({ top: y, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    } catch (e2) {
      WIN.scrollTo(0, y);
    }
  }

  function resolveHashTarget(href) {
    if (!href) return null;
    // allow full URL with hash (off-front anchors rewritten to /#id)
    var hash = href;
    var i = href.indexOf('#');
    if (i >= 0) hash = href.slice(i);
    if (!hash || hash === '#') return null;
    if (hash === '#top') return 0;
    try {
      return doc.querySelector(hash);
    } catch (err) {
      return null;
    }
  }

  // Capture-phase: pokrije nav, footer, rail, CTA, dinamičke linkove
  doc.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('#') === -1) return;
    // vanjski origin s hashom — samo ako je ista stranica
    if (/^https?:\/\//i.test(href)) {
      try {
        var u = new URL(href, WIN.location.href);
        if (u.origin !== WIN.location.origin) return;
        // druga putanja (npr. /blog/#x) — pusti browser
        var path = u.pathname.replace(/\/+$/, '') || '/';
        var here = WIN.location.pathname.replace(/\/+$/, '') || '/';
        if (path !== here && path !== '/') return;
        // home hash s druge podstranice
        if (path === '/' && here !== '/') return; // off-front: full navigation
      } catch (errU) { return; }
    }
    var target = resolveHashTarget(href);
    if (target === null) return;
    e.preventDefault();
    closeMenu();
    scrollToEl(target);
    // update URL hash without jump
    var h = (href.indexOf('#') >= 0) ? href.slice(href.indexOf('#')) : '';
    if (h && WIN.history && WIN.history.pushState) {
      try { WIN.history.pushState(null, '', h); } catch (errH) { /* ignore */ }
    }
  }, false);

  // initial hash (npr. /#upit nakon redirecta forme)
  function scrollHashOnLoad() {
    var h = WIN.location.hash;
    if (!h || h.length < 2) return;
    var t = resolveHashTarget(h);
    if (t === null) return;
    // čekaj layout / fontove
    setTimeout(function () { scrollToEl(t); }, 60);
    setTimeout(function () { scrollToEl(t); if (HAS_GSAP && WIN.ScrollTrigger) ScrollTrigger.refresh(); }, 400);
  }
  if (doc.readyState === 'complete') scrollHashOnLoad();
  else WIN.addEventListener('load', scrollHashOnLoad);

  /* ============================================================
     NAV + MOBILNI IZBORNIK + TEMA
  ============================================================ */
  var nav = $('#nav'), burger = $('#burger'), mobileMenu = $('#mobileMenu');
  function onScrollNav() { if (nav) nav.classList.toggle('scrolled', WIN.scrollY > 24); }
  WIN.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.setAttribute('inert', '');
    BODY.classList.remove('menu-open');
  }
  if (burger) {
    burger.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      mobileMenu.setAttribute('aria-hidden', String(!open));
      if (open) mobileMenu.removeAttribute('inert');
      else mobileMenu.setAttribute('inert', '');
      BODY.classList.toggle('menu-open', open);
    });
  }
  WIN.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  if ('IntersectionObserver' in WIN) {
    var themeIO = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        var dark = en.target.getAttribute('data-theme') !== 'light';
        doc.body.classList.toggle('on-dark', dark);
        doc.body.classList.toggle('on-light', !dark);
      });
    }, { rootMargin: '-42% 0px -52% 0px', threshold: 0 });
    $$('[data-theme]').forEach(function (s) { themeIO.observe(s); });
  }

  /* ============================================================
     LIJEVI RAIL — brojač sekcija + napredak
  ============================================================ */
  (function () {
    var rail = $('#rail'); if (!rail) return;
    var fill = $('#railFill'), pct = $('#railPct');
    var links = $$('.rail-dots a', rail);
    function onScroll() {
      var max = doc.documentElement.scrollHeight - WIN.innerHeight;
      var p = max > 0 ? clamp(WIN.scrollY / max, 0, 1) : 0;
      if (fill) fill.style.transform = 'scaleY(' + p + ')';
    }
    WIN.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if ('IntersectionObserver' in WIN) {
      var map = {};
      links.forEach(function (l) { map[l.getAttribute('data-target')] = l; });
      var navLinks = $$('.nav-links a[href]');
      function setNavCurrent(id) {
        navLinks.forEach(function (link) {
          var href = link.getAttribute('href') || '';
          var hashIndex = href.indexOf('#');
          var target = hashIndex >= 0 ? href.slice(hashIndex + 1) : '';
          link.classList.toggle('is-current', target === id);
        });
      }
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (en) {
          if (!en.isIntersecting) return;
          var id = en.target.id;
          if (!map[id]) return;
          links.forEach(function (l) { l.classList.remove('on'); });
          map[id].classList.add('on');
          setNavCurrent(id);
          if (pct) pct.textContent = $('span', map[id]).textContent;
        });
      }, { rootMargin: '-44% 0px -44% 0px', threshold: 0 });
      ['hero', 'za-koga', 'poznato', 'metoda', 'proces', 'ekran', 'cijene', 'radovi', 'klijenti', 'faq', 'upit'].forEach(function (id) {
        var el = doc.getElementById(id);
        if (el) io.observe(el);
      });
    }
  })();

  /* ============================================================
     CROSSHAIR CURSOR
  ============================================================ */
  var cursor = $('#cursor');
  if (!isCoarse && cursor && HAS_GSAP && !prefersReducedMotion) {
    doc.body.classList.add('cursor-on');
    var cx = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power2.out' });
    var cy = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power2.out' });
    var cs = gsap.quickTo(cursor, 'scale', { duration: 0.25, ease: 'power2.out' });
    var cr = gsap.quickTo(cursor, 'rotation', { duration: 0.25, ease: 'power2.out' });
    WIN.addEventListener('mousemove', function (e) { cx(e.clientX); cy(e.clientY); }, { passive: true });
    doc.addEventListener('mouseover', function (e) {
      if (e.target.closest('a, button, select, input, textarea, .occ-tab, .svc-mini, .faq-q')) { cs(1.65); cr(45); }
    });
    doc.addEventListener('mouseout', function (e) {
      if (e.target.closest('a, button, select, input, textarea, .occ-tab, .svc-mini, .faq-q')) { cs(1); cr(0); }
    });
  }

  /* ============================================================
     MAGNETIC CTA — samo desktop, mali pomak bez scroll-jackinga
  ============================================================ */
  (function () {
    if (!HAS_GSAP || prefersReducedMotion || isCoarse) return;
    $$('.btn-signal, .f-submit').forEach(function (button) {
      var moveX = gsap.quickTo(button, 'x', { duration: .32, ease: 'power3.out' });
      var moveY = gsap.quickTo(button, 'y', { duration: .32, ease: 'power3.out' });
      button.addEventListener('pointermove', function (e) {
        var rect = button.getBoundingClientRect();
        moveX(((e.clientX - rect.left) / rect.width - .5) * 6);
        moveY(((e.clientY - rect.top) / rect.height - .5) * 4);
      }, { passive: true });
      button.addEventListener('pointerleave', function () { moveX(0); moveY(0); }, { passive: true });
    });
  })();

  /* ============================================================
     REVEAL + COUNTUP + PARALAX (data-plx)
  ============================================================ */
  if (HAS_GSAP && !prefersReducedMotion) {
    // JEDAN batch reveal — manje ScrollTrigger instanci = glatkiji scroll
    var revealSel = '.sec-head, .pain-grid, .m-points, .timeline, .pricing-tracks, .plan-band, .price-notes, .projects, .trust-strip, .faq-list, .form-wrap, .call-card, .bridge, .bp-wrap, .ps-wrap, .ek-points, .ph-stage';
    $$(revealSel).forEach(function (el) {
      el.classList.add('rv');
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.75, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true, fastScrollEnd: true }
      });
    });

    // Samo eksplicitni data-plx, bez auto-parallax na svakom dekoru (to je ubijalo FPS)
    $$('[data-plx]').forEach(function (el) {
      if (el.closest('.pin-stage')) return;
      if (el.closest('#ekran')) return; // ekran ima vlastiti FX
      var v = clamp(parseFloat(el.getAttribute('data-plx')) || 24, 8, 36);
      gsap.fromTo(el, { y: v * 0.35 }, {
        y: -v * 0.35, ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section, footer') || el.parentElement,
          start: 'top bottom', end: 'bottom top', scrub: true
        }
      });
    });

    // spin samo na 1-2 drafting elementa, ne svima
    $$('[data-spin]').forEach(function (el) {
      if (el.closest('#ekran')) return;
      var amt = clamp(Math.abs(parseFloat(el.getAttribute('data-spin')) || 8), 4, 12);
      if ((el.getAttribute('data-spin') || '').indexOf('-') === 0) amt = -amt;
      gsap.fromTo(el, { rotation: -amt }, {
        rotation: amt, ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section') || el.parentElement,
          start: 'top bottom', end: 'bottom top', scrub: true
        }
      });
    });
  }

  $$('[data-count]').forEach(function (el) {
    var n = parseInt(el.getAttribute('data-count'), 10);
    if (prefersReducedMotion || !HAS_GSAP) { el.textContent = n; return; }
    var obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 92%', once: true,
      onEnter: function () {
        gsap.to(obj, { v: n, duration: 1.5, ease: 'power2.out', onUpdate: function () { el.textContent = Math.round(obj.v); } });
      }
    });
  });

  /* ============================================================
     DJELATNOSTI — podaci
  ============================================================ */
  var OCC_DEFAULT = [
    { title: 'Za klimatizaciju', sub: 'Servis, montaža i čišćenje. Klijent mora odmah pronaći što radite, gdje dolazite i kako do termina.', q: 'Na webu: usluge · područje rada · poziv/WhatsApp · upit za termin' },
    { title: 'Za vodoinstalatere', sub: 'Kod curenja se ne čita roman. Hitni kontakt, područje rada i vrsta intervencije moraju biti jasni u nekoliko sekundi.', q: 'Na webu: hitni poziv · intervencije · fotografija problema · lokalne stranice' },
    { title: 'Za električare', sub: 'Od sitnog kvara do instalacija i atesta — jasno odvojimo usluge, reference i područje na koje izlazite.', q: 'Na webu: usluge · reference/certifikati · područje rada · brzi upit' },
    { title: 'Za krovopokrivače i limare', sub: 'Krov se prodaje povjerenjem: izvedeni radovi, materijali, područje rada i jednostavan put do procjene.', q: 'Na webu: prije/poslije · vrste krova · reference · zahtjev za ponudu' },
    { title: 'Za građevinu i adaptacije', sub: 'Kupac želi vidjeti što preuzimate, kako izgleda proces i možete li pokazati stvarne projekte prije prvog poziva.', q: 'Na webu: projekti · usluge · proces · upit prema opsegu projekta' },
    { title: 'Za smještaj i turizam', sub: 'Gost mora brzo vidjeti smještaj, lokaciju, sadržaje i najjednostavniji način rezervacije.', q: 'Na webu: sobe · galerija · karta · booking/upit · više jezika' },
    { title: 'Za trgovine i webshopove', sub: 'Proizvod mora biti lako pronaći, razumjeti i kupiti — posebno na mobitelu.', q: 'Na webu: katalog/webshop · filteri · dostava i plaćanje · analitika' },
    { title: 'Za ostale usluge i struke', sub: 'Odvjetnik, računovođa, ordinacija, studio, škola… Ako klijenti prije odluke uvijek pitaju isto, stranica može dati jasan odgovor i uputiti na poziv ili upit.', q: 'Na webu: usluge · cijene/okvir · FAQ · jasan CTA — bez generičkog paketa' }
  ];

  var OCC = (WIN.ZAEC_HOME && Array.isArray(WIN.ZAEC_HOME.occupations) && WIN.ZAEC_HOME.occupations.length === 8) ? WIN.ZAEC_HOME.occupations : OCC_DEFAULT;

  /* ============================================================
     KONTROLER DJELATNOSTI (UI-first — radi i bez 3D-a)
  ============================================================ */
  var occCtl = (function () {
    var tabs = $$('.occ-tab');
    var elIdx = $('#occIdx'), elTitle = $('#occTitle'), elSub = $('#occSub'), elQuery = $('#occQuery');
    var swapWrap = $('#occSwap');
    var bar = $('#occBarFill'), card = $('#occCard'), controlsWrap = $('#occControls');
    var cur = 0, started = false;
    var prog = 0, pauseUntil = 0, manualPaused = false, phaseAllows = true, heroInView = true;

    function cycleMs() { return mqDesktop.matches ? 4000 : 5000; }

    function paint(i) {
      var o = OCC[i];
      elIdx.textContent = pad2(i + 1);
      elTitle.textContent = o.title;
      elSub.textContent = o.sub;
      elQuery.textContent = o.q;
      if (swapWrap) {
        swapWrap.classList.remove('swap');
        void swapWrap.offsetWidth;
        swapWrap.classList.add('swap');
      }
      if (card) {
        card.classList.remove('is-refresh');
        void card.offsetWidth;
        card.classList.add('is-refresh');
        setTimeout(function () { card.classList.remove('is-refresh'); }, 420);
      }
    }

    function setActive(i, user) {
      cur = ((i % OCC.length) + OCC.length) % OCC.length;
      prog = 0;
      if (bar) bar.style.transform = 'scaleX(0)';
      if (user) pauseUntil = performance.now() + 15000;
      tabs.forEach(function (t, k) {
        t.classList.toggle('active', k === cur);
        t.setAttribute('aria-selected', String(k === cur));
      });
      paint(cur);
      if (H.impl && (phaseAllows || user || !mqDesktop.matches)) { try { H.impl.showOcc(cur); } catch (e) { /* 3D nije kritičan */ } }
    }

    function tick(dt, now) {
      if (!started || prefersReducedMotion) return;
      if (!heroInView || !phaseAllows || manualPaused || now < pauseUntil) return;
      if (doc.hidden) return;
      prog += (dt * 1000) / cycleMs();
      if (bar) bar.style.transform = 'scaleX(' + clamp(prog, 0, 1) + ')';
      if (prog >= 1) setActive(cur + 1, false);
    }

    tabs.forEach(function (t, k) {
      t.addEventListener('click', function () {
        setActive(k, true);
      });
      t.addEventListener('mouseenter', function () { pauseUntil = performance.now() + 15000; });
    });
    if (card) card.addEventListener('mouseenter', function () { pauseUntil = performance.now() + 15000; });

    // Suptilni HUD tilt prati miš samo u slobodnoj, desktop varijanti.
    if (card && HAS_GSAP && !prefersReducedMotion && !isCoarse) {
      gsap.set(card, { transformPerspective: 900 });
      var occRX = gsap.quickTo(card, 'rotationX', { duration: 0.36, ease: 'power3.out' });
      var occRY = gsap.quickTo(card, 'rotationY', { duration: 0.36, ease: 'power3.out' });
      card.addEventListener('pointermove', function (e) {
        var rect = card.getBoundingClientRect();
        var nx = clamp((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2), -1, 1);
        var ny = clamp((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2), -1, 1);
        occRY(nx * 2.6);
        occRX(-ny * 2.1);
      }, { passive: true });
      card.addEventListener('pointerleave', function () { occRX(0); occRY(0); }, { passive: true });
    }

    if ('IntersectionObserver' in WIN && $('#heroPinSpace')) {
      new IntersectionObserver(function (es) { heroInView = es[0].isIntersecting; }, { threshold: 0.12 }).observe($('#heroPinSpace'));
    }

    WIN.addEventListener('keydown', function (e) {
      var tag = (e.target && e.target.tagName) || '';
      if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
      if (e.code === 'Space' && heroInView) {
        e.preventDefault();
        manualPaused = !manualPaused;
        toast(manualPaused ? 'Automatska izmjena pauzirana (Space za nastavak).' : 'Automatska izmjena nastavljena.');
      }
      if (e.code === 'ArrowRight' && heroInView) setActive(cur + 1, true);
      if (e.code === 'ArrowLeft' && heroInView) setActive(cur - 1, true);
    });

    return {
      start: function () { if (!started) { started = true; setActive(0, false); } },
      setPhase: function (isA) {
        if (phaseAllows === isA) return;
        phaseAllows = isA;
        prog = 0;
        if (bar) bar.style.transform = 'scaleX(0)';
        if (controlsWrap) {
          // Marketing/content layer remains visible during axonometry. The
          // automatic cycle pauses, but manual tabs keep working and may
          // preview an occupation overlay over the technical exploded view.
          controlsWrap.classList.toggle('is-axon', !isA);
        }
        if (H.impl) {
          try {
            if (isA) H.impl.showOcc(cur); // restore selected occupation immediately on reverse scroll
            else H.impl.showOcc(-1);
          } catch (e) {}
        }
      },
      tick: tick
    };
  })();

  requestAnimationFrame(uiLoop);
  if (prefersReducedMotion) occCtl.start();

  /* ============================================================
     PROCES — fill + aktivni koraci sheme
  ============================================================ */
  (function () {
    var cells = $$('.ps-cell');
    function setStep(idx) {
      cells.forEach(function (c, k) {
        c.classList.toggle('on', k === idx);
        c.classList.toggle('done', k < idx);
      });
    }
    if (HAS_GSAP && $('#tlFill')) {
      setStep(0);
      gsap.fromTo('#tlFill', { scaleY: 0 }, {
        scaleY: 1, ease: 'none',
        scrollTrigger: {
          trigger: '#timeline', start: 'top 75%', end: 'bottom 55%', scrub: 0.4,
          onUpdate: function (self) {
            var p = self.progress;
            var idx = Math.min(3, Math.floor(Math.min(p, 0.9999) * 4));
            setStep(idx);
          }
        }
      });
    } else { setStep(3); cells.forEach(function (c, k) { if (k < 3) c.classList.add('done'); }); }
  })();

  /* ============================================================
     CAROUSEL
  ============================================================ */
  (function () {
    var track = $('#carTrack'); if (!track) return;
    var dots = $$('#carDots button');
    var total = $$('.quote-card', track).length;
    if (!total) return;
    var idx = 0;
    function go(i) {
      idx = ((i % total) + total) % total;
      track.style.transform = 'translateX(' + (-idx * 100) + '%)';
      dots.forEach(function (d, k) { var active = k === idx; d.classList.toggle('active', active); d.setAttribute('aria-selected', String(active)); });
    }
    $('#carPrev').addEventListener('click', function () { go(idx - 1); });
    $('#carNext').addEventListener('click', function () { go(idx + 1); });
    dots.forEach(function (d, k) { d.addEventListener('click', function () { go(k); }); });
  })();

  /* ============================================================
     FAQ (prvo pitanje otvoreno)
  ============================================================ */
  $$('.faq-item').forEach(function (item, k) {
    var btn = $('.faq-q', item), ans = $('.faq-a', item);
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      ans.style.maxHeight = open ? ans.scrollHeight + 'px' : '0px';
    });
    if (k === 0) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      WIN.addEventListener('load', function () { ans.style.maxHeight = ans.scrollHeight + 'px'; });
      setTimeout(function () { if (item.classList.contains('open')) ans.style.maxHeight = ans.scrollHeight + 'px'; }, 1200);
    }
  });

  /* ============================================================
     CIJENE → PAKET
  ============================================================ */
  $$('.plan-cta').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pkg = btn.getAttribute('data-package') || '';
      var hidden = $('#fPaket');
      if (hidden) hidden.value = pkg;
      toast('Paket odabran: ' + pkg + '.');
    });
  });

  /* ============================================================
     FORMA — WordPress admin-post handler + no-JS fallback
  ============================================================ */
  (function () {
    var form = $('#inquiryForm'); if (!form) return;
    var success = $('#formSuccess');
    var status = $('#formStatus');
    var cfg = WIN.ZAEC_WP || {};

    // plan CTA → prefill package + scroll to form
    $$('a.plan-cta, .plan-cta').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var pkg = btn.getAttribute('data-package') || '';
        var hid = $('#fPaket');
        if (hid && pkg) hid.value = pkg;
      });
    });

    function setErr(id, bad) {
      var f = $(id);
      if (f) {
        var field = f.closest('.f-field');
        if (field) field.classList.toggle('error', bad);
        f.setAttribute('aria-invalid', bad ? 'true' : 'false');
      }
      return !bad;
    }

    function resetButton(btn) {
      form.classList.remove('is-sending');
      if (!btn) return;
      btn.disabled = false;
      var span = btn.querySelector('span');
      if (span) span.textContent = cfg.submitLabel || 'Pošalji upit';
    }

    function showSuccess(msg) {
      if (msg && success) {
        var heading = success.querySelector('h3');
        if (heading) heading.textContent = msg;
      }
      if (status) status.textContent = msg || 'Upit je stigao.';
      if (HAS_GSAP && !prefersReducedMotion) {
        gsap.to(form, { opacity: 0, y: -14, duration: 0.4, ease: 'power2.in', onComplete: function () {
          form.style.display = 'none';
          if (success) {
            success.hidden = false;
            requestAnimationFrame(function () {
              success.classList.add('drawn');
              try { success.focus({ preventScroll: true }); } catch (e) {}
            });
          }
        }});
      } else {
        form.style.display = 'none';
        if (success) {
          success.hidden = false;
          success.classList.add('drawn');
          try { success.focus({ preventScroll: true }); } catch (e2) {}
        }
      }
    }

    /**
     * Admin-ajax ponekad vrati prazan odgovor, -1 ili HTML notice prije JSON-a.
     * Parsiramo text ručno kako korisnik ne bi dobio generičnu SyntaxError poruku.
     */
    function parseAjaxResponse(response) {
      return response.text().then(function (text) {
        var raw = (text || '').trim();
        var payload = null;
        try {
          payload = raw ? JSON.parse(raw) : null;
        } catch (parseError) {
          var invalidMessage = '0' === raw
            ? (cfg.ajaxActionMessage || 'Kontakt forma trenutno nije povezana s AJAX handlerom. Provjerite aktivnu temu.')
            : ('-1' === raw || 403 === response.status
              ? (cfg.nonceMessage || 'Sigurnosna provjera je zastarjela. Osvježavamo obrazac…')
              : (cfg.invalidResponse || 'Server nije vratio valjan odgovor. Pokušajte ponovno.'));
          var invalid = new Error(invalidMessage);
          invalid.status = response.status;
          invalid.raw = raw;
          invalid.retryNonce = '-1' === raw || 403 === response.status;
          throw invalid;
        }

        if (!payload || typeof payload !== 'object' || typeof payload.success === 'undefined') {
          var malformed = new Error('0' === raw
            ? (cfg.ajaxActionMessage || 'Kontakt forma trenutno nije povezana s AJAX handlerom. Provjerite aktivnu temu.')
            : (cfg.invalidResponse || 'Server nije vratio valjan odgovor. Pokušajte ponovno.'));
          malformed.status = response.status;
          malformed.raw = raw;
          malformed.retryNonce = 403 === response.status;
          throw malformed;
        }

        if (!payload.success) {
          var message = payload.data && payload.data.message
            ? payload.data.message
            : (payload.message || 'Slanje nije uspjelo.');
          var failed = new Error(message);
          failed.status = response.status;
          failed.raw = raw;
          failed.retryNonce = 403 === response.status || /sigurnosna provjera/i.test(message);
          throw failed;
        }

        return payload;
      });
    }

    function refreshInquiryNonce() {
      var nonceData = new FormData();
      nonceData.append('action', 'zaec_refresh_nonce');
      return fetch(cfg.ajaxUrl, {
        method: 'POST',
        body: nonceData,
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json' }
      })
        .then(parseAjaxResponse)
        .then(function (payload) {
          var nonce = payload.data && payload.data.nonce ? payload.data.nonce : '';
          if (!nonce) throw new Error(cfg.nonceMessage || 'Novi sigurnosni ključ nije dostupan. Osvježite stranicu.');
          var field = form.querySelector('input[name="zaec_nonce"]');
          if (field) field.value = nonce;
        });
    }

    function postInquiry(retriedNonce) {
      var fd = new FormData(form);
      fd.set('action', 'zaec_inquiry');
      return fetch(cfg.ajaxUrl, {
        method: 'POST',
        body: fd,
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          return parseAjaxResponse(response);
        })
        .catch(function (error) {
          if (!retriedNonce && error && error.retryNonce) {
            return refreshInquiryNonce().then(function () { return postInquiry(true); });
          }
          throw error;
        });
    }

    // Ako je forma već poslana preko native redirecta, samo prikaži success state.
    if (success && !success.hidden) success.classList.add('drawn');

    form.addEventListener('submit', function (e) {
      // Bez AJAX konfiguracije ostavi native admin-post.php put netaknutim.
      if (!WIN.fetch || !WIN.FormData || !cfg.ajaxUrl) return;
      if (form.classList.contains('is-sending')) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      var imeEl = $('#fIme'), konEl = $('#fKontakt'), djelEl = $('#fDjelatnost');
      var ime = imeEl ? imeEl.value.trim() : '';
      var kontakt = konEl ? konEl.value.trim() : '';
      var djel = djelEl ? djelEl.value : '';
      var okKontakt = /@/.test(kontakt)
        ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(kontakt)
        : /^[+0-9][0-9\s\-/()]{5,}$/.test(kontakt);
      var ok = true;
      ok = setErr('#fIme', ime.length < 2) && ok;
      ok = setErr('#fKontakt', !okKontakt) && ok;
      ok = setErr('#fDjelatnost', !djel) && ok;
      if (!ok) {
        form.classList.remove('shake'); void form.offsetWidth; form.classList.add('shake');
        if (status) status.textContent = 'Provjerite označena polja.';
        var firstBad = form.querySelector('.f-field.error input, .f-field.error select');
        if (firstBad) firstBad.focus();
        return;
      }

      var btn = $('#fSubmit');
      form.classList.add('is-sending');
      if (btn) {
        btn.disabled = true;
        var btnSpan = btn.querySelector('span');
        if (btnSpan) btnSpan.textContent = cfg.sendingLabel || 'Šaljemo…';
      }
      if (status) status.textContent = cfg.sendingMessage || 'Šaljemo upit…';

      postInquiry(false)
        .then(function (payload) {
          var msg = payload.data && payload.data.message
            ? payload.data.message
            : (cfg.successMessage || 'Upit je stigao.');
          showSuccess(msg);
        })
        .catch(function (error) {
          resetButton(btn);
          var message = error && error.message
            ? error.message
            : 'Slanje nije uspjelo. Pokušajte ponovno ili nazovite.';
          if (status) status.textContent = message;
          toast(message);
          if (WIN.console && WIN.console.warn && error && error.raw) {
            WIN.console.warn('[ZAEC inquiry response]', error.status, error.raw.slice(0, 240));
          }
        });
    });
  })();

  /* ============================================================
     UPIT PARTICLES (2D)
  ============================================================ */
  (function () {
    var cv = $('#upitParticles'); if (!cv) return;
    var ctx = cv.getContext('2d');
    var W = 0, Hh = 0, dpr = Math.min(WIN.devicePixelRatio || 1, 1.5);
    var pts = [], visible = false, raf = null, t = 0;
    function resize() {
      var r = cv.parentElement.getBoundingClientRect();
      W = r.width; Hh = r.height;
      cv.width = W * dpr; cv.height = Hh * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function seed() {
      pts = [];
      var n = LOW ? 22 : 46;
      for (var i = 0; i < n; i++) pts.push({ x: Math.random() * W, y: Math.random() * Hh, s: 0.4 + Math.random() * 1.1, v: 0.08 + Math.random() * 0.3, o: 0.15 + Math.random() * 0.4 });
    }
    function frame() {
      if (!visible) { raf = null; return; }
      t += 0.016;
      ctx.clearRect(0, 0, W, Hh);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.y -= p.v; p.x += Math.sin(t * 0.6 + i) * 0.12;
        if (p.y < -4) { p.y = Hh + 4; p.x = Math.random() * W; }
        ctx.globalAlpha = p.o * (0.7 + 0.3 * Math.sin(t * 1.4 + i * 2.1));
        ctx.fillStyle = '#7dd3ff';
        ctx.fillRect(p.x, p.y, p.s * 2, p.s * 2);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }
    function oneFrame() { resize(); seed(); t = 1; visible = true; frame(); visible = false; }
    if ('IntersectionObserver' in WIN && !prefersReducedMotion) {
      new IntersectionObserver(function (es) {
        visible = es[0].isIntersecting;
        if (visible && !raf) { resize(); seed(); raf = requestAnimationFrame(frame); }
      }, { threshold: 0.05 }).observe(cv);
      WIN.addEventListener('resize', function () { if (visible) { resize(); seed(); } });
    } else if (prefersReducedMotion) { setTimeout(oneFrame, 800); }
  })();

  /* ============================================================
     BLUEPRINT 2D CANVAS (Metoda)
  ============================================================ */
  (function () {
    var cv = $('#bpCanvas'); if (!cv) return;
    var ctx = cv.getContext('2d');
    var LW = 900, LH = 675;
    var progress = prefersReducedMotion ? 1 : 0;
    var strokes = [], labels = [];
    function st(pts, t0, t1, dash, acc) { strokes.push({ p: pts, t0: t0, t1: t1, dash: !!dash, acc: !!acc }); }
    function rect(x, y, w, h, t0, t1, dash, acc) { st([[x, y], [x + w, y], [x + w, y + h], [x, y + h], [x, y]], t0, t1, dash, acc); }
    function lbl(x, y, s, t0) { labels.push({ x: x, y: y, s: s, t0: t0 }); }

    rect(110, 60, 680, 560, 0.00, 0.07);
    st([[110, 96], [790, 96]], 0.05, 0.08);
    [130, 146, 162].forEach(function (x) { st([[x - 4, 78], [x + 4, 78]], 0.06, 0.08); st([[x, 74], [x, 82]], 0.06, 0.08); });
    rect(190, 70, 300, 16, 0.06, 0.09, true);
    rect(130, 112, 640, 44, 0.09, 0.15);
    rect(146, 122, 26, 24, 0.13, 0.16);
    for (var k = 0; k < 4; k++) { st([[320 + k * 68, 130], [320 + k * 68 + 44, 130]], 0.14 + k * 0.008, 0.18 + k * 0.008); st([[320 + k * 68, 140], [320 + k * 68 + 30, 140]], 0.14 + k * 0.008, 0.18 + k * 0.008); }
    rect(676, 122, 74, 24, 0.16, 0.2, false, true);
    lbl(130, 106, 'NAV', 0.15);
    rect(130, 172, 640, 120, 0.19, 0.26);
    st([[152, 200], [420, 200]], 0.24, 0.29); st([[152, 222], [340, 222]], 0.26, 0.31);
    st([[152, 244], [380, 244]], 0.29, 0.33, true); st([[152, 258], [310, 258]], 0.3, 0.34, true);
    rect(152, 268, 96, 16, 0.31, 0.35, false, true); rect(258, 268, 96, 16, 0.32, 0.36);
    lbl(130, 166, 'HERO', 0.26);
    var tx = [130, 350, 570];
    tx.forEach(function (x, i) {
      rect(x, 308, 200, 80, 0.36 + i * 0.03, 0.42 + i * 0.03);
      st([[x + 14, 328], [x + 140, 328]], 0.4 + i * 0.03, 0.44 + i * 0.03, true);
      st([[x + 14, 344], [x + 170, 344]], 0.41 + i * 0.03, 0.45 + i * 0.03, true);
      st([[x + 14, 360], [x + 120, 360]], 0.42 + i * 0.03, 0.46 + i * 0.03, true);
    });
    lbl(130, 302, 'TEKST', 0.4);
    [130, 294, 458, 622].forEach(function (x, i) { rect(x, 404, 148, 60, 0.47 + i * 0.02, 0.53 + i * 0.02); st([[x, 464], [x + 148, 404]], 0.5 + i * 0.02, 0.54 + i * 0.02, true); });
    lbl(130, 398, 'GALERIJA', 0.5);
    rect(130, 480, 640, 52, 0.56, 0.62);
    st([[152, 506], [340, 506]], 0.6, 0.64, true);
    rect(618, 494, 130, 24, 0.61, 0.66, false, true);
    lbl(130, 474, 'CTA', 0.6);
    rect(130, 548, 640, 56, 0.66, 0.72);
    tx.forEach(function (x, i) { st([[x + 14, 570], [x + 100, 570]], 0.7 + i * 0.02, 0.74 + i * 0.02, true); st([[x + 14, 584], [x + 70, 584]], 0.71 + i * 0.02, 0.75 + i * 0.02, true); });
    lbl(130, 542, 'FOOTER', 0.7);
    st([[86, 60], [86, 620]], 0.76, 0.84, true); st([[78, 60], [94, 60]], 0.82, 0.85, true); st([[78, 620], [94, 620]], 0.82, 0.85, true);
    st([[110, 36], [790, 36]], 0.78, 0.86, true); st([[110, 28], [110, 44]], 0.84, 0.87, true); st([[790, 28], [790, 44]], 0.84, 0.87, true);
    labels.push({ x: 420, y: 30, s: '1440 PX', t0: 0.86, dim: true });
    labels.push({ x: 40, y: 345, s: '2480', t0: 0.87, dim: true, rot: true });

    function drawPoly(p, frac, dash, acc) {
      var total = 0, segs = [];
      for (var i = 0; i < p.length - 1; i++) {
        var dx = p[i + 1][0] - p[i][0], dy = p[i + 1][1] - p[i][1];
        var len = Math.sqrt(dx * dx + dy * dy);
        segs.push(len); total += len;
      }
      var target = frac * total, acc2 = 0;
      ctx.beginPath();
      ctx.moveTo(p[0][0], p[0][1]);
      for (i = 0; i < p.length - 1; i++) {
        if (acc2 + segs[i] <= target) { ctx.lineTo(p[i + 1][0], p[i + 1][1]); acc2 += segs[i]; }
        else {
          var r = (target - acc2) / segs[i];
          ctx.lineTo(p[i][0] + (p[i + 1][0] - p[i][0]) * r, p[i][1] + (p[i + 1][1] - p[i][1]) * r);
          break;
        }
      }
      ctx.setLineDash(dash ? [6, 6] : []);
      ctx.strokeStyle = acc ? 'rgba(77,128,255,0.95)' : 'rgba(125,211,255,0.85)';
      ctx.stroke();
    }

    function draw() {
      var w = cv.clientWidth * (WIN.devicePixelRatio || 1), h = cv.clientHeight * (WIN.devicePixelRatio || 1);
      if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
      var s = Math.min(w / LW, h / LH);
      ctx.setTransform(s, 0, 0, s, (w - LW * s) / 2, (h - LH * s) / 2);
      ctx.clearRect(-100, -100, LW + 200, LH + 200);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(125,211,255,0.06)';
      ctx.setLineDash([]);
      ctx.beginPath();
      for (var x = 0; x <= LW; x += 24) { ctx.moveTo(x, 0); ctx.lineTo(x, LH); }
      for (var y = 0; y <= LH; y += 24) { ctx.moveTo(0, y); ctx.lineTo(LW, y); }
      ctx.stroke();
      ctx.lineWidth = 1.3;
      strokes.forEach(function (s2) {
        var f = clamp((progress - s2.t0) / (s2.t1 - s2.t0), 0, 1);
        if (f > 0) drawPoly(s2.p, f, s2.dash, s2.acc);
      });
      ctx.setLineDash([]);
      labels.forEach(function (l) {
        var f = clamp((progress - l.t0) / 0.05, 0, 1);
        if (f <= 0) return;
        ctx.globalAlpha = f;
        ctx.fillStyle = l.dim ? 'rgba(163,163,157,0.9)' : 'rgba(125,211,255,0.9)';
        ctx.font = (l.dim ? '500 12px' : '600 13px') + ' "IBM Plex Mono", monospace';
        if (l.rot) { ctx.save(); ctx.translate(l.x, l.y); ctx.rotate(-Math.PI / 2); ctx.fillText(l.s, 0, 0); ctx.restore(); }
        else { ctx.fillText(l.s, l.x, l.y); }
        ctx.globalAlpha = 1;
      });
    }

    if (HAS_GSAP && !prefersReducedMotion) {
      ScrollTrigger.create({
        trigger: '.bp-wrap', start: 'top 85%', end: 'bottom 55%', scrub: 0.4,
        onUpdate: function (self) { progress = self.progress; draw(); }
      });
    } else { progress = 1; }
    draw();
    WIN.addEventListener('resize', draw);
  })();

  /* ============================================================
     HOLOGRAMSKA KUĆA (Villa N) — nadogradnja, ne uvjet
  ============================================================ */
  try {
    H.impl = buildHolo();
  } catch (err) {
    doc.documentElement.classList.add('no-3d');
    H.impl = null;
  }

  function buildHolo() {
    var wrap = $('#holoWrap'), canvas = $('#holoCanvas');
    if (!wrap || !canvas || doc.documentElement.classList.contains('no-3d')) return null;
    if (prefersReducedMotion && !HAS_GSAP) { /* dopusti statični render */ }

    var HOLO = 0x7dd3ff;
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(WIN.devicePixelRatio || 1, isCoarse ? 1.55 : (LOW ? 1.4 : 1.75)));
    var scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0e0e0d, 18, 32);
    var camera = new THREE.PerspectiveCamera(32, 1, 0.1, 80);
    camera.position.set(10.4, 5.2, 13.2);

    var controls = new OrbitControls(camera, canvas);
    controls.target.set(-0.05, 2.35, 0.0);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minPolarAngle = 1.05;
    controls.maxPolarAngle = 1.42;
    controls.autoRotate = !prefersReducedMotion;
    controls.autoRotateSpeed = 0.55;
    controls.enabled = mqDesktop.matches;
    var controlsDragging = false;
    controls.addEventListener('start', function () { controlsDragging = true; controls.autoRotate = false; });
    controls.addEventListener('end', function () { controlsDragging = false; });

    /* ---------- geometrijski helperi ---------- */
    function S(a, x1, y1, z1, x2, y2, z2) { a.push(x1, y1, z1, x2, y2, z2); }
    function B(a, cx, cy, cz, sx, sy, sz) {
      var x0 = cx - sx / 2, x1 = cx + sx / 2, y0 = cy - sy / 2, y1 = cy + sy / 2, z0 = cz - sz / 2, z1 = cz + sz / 2;
      S(a, x0, y0, z0, x1, y0, z0); S(a, x1, y0, z0, x1, y0, z1); S(a, x1, y0, z1, x0, y0, z1); S(a, x0, y0, z1, x0, y0, z0);
      S(a, x0, y1, z0, x1, y1, z0); S(a, x1, y1, z0, x1, y1, z1); S(a, x1, y1, z1, x0, y1, z1); S(a, x0, y1, z1, x0, y1, z0);
      S(a, x0, y0, z0, x0, y1, z0); S(a, x1, y0, z0, x1, y1, z0); S(a, x1, y0, z1, x1, y1, z1); S(a, x0, y0, z1, x0, y1, z1);
    }
    function PL(a, pts, close) {
      for (var i = 0; i < pts.length - 1; i++) S(a, pts[i][0], pts[i][1], pts[i][2], pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
      if (close) { var f = pts[0], l = pts[pts.length - 1]; S(a, l[0], l[1], l[2], f[0], f[1], f[2]); }
    }
    function ARC(a, cx, cy, cz, r, normal, n, a0, a1) {
      var prev = null;
      for (var i = 0; i <= n; i++) {
        var t = a0 + (a1 - a0) * (i / n), p;
        if (normal === 'y') p = [cx + Math.cos(t) * r, cy, cz + Math.sin(t) * r];
        else if (normal === 'z') p = [cx + Math.cos(t) * r, cy + Math.sin(t) * r, cz];
        else p = [cx, cy + Math.cos(t) * r, cz + Math.sin(t) * r];
        if (prev) S(a, prev[0], prev[1], prev[2], p[0], p[1], p[2]);
        prev = p;
      }
    }
    function mat(color, op, additive) {
      return new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: op, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending, depthWrite: false });
    }

    var root = new THREE.Group(); scene.add(root);
    /* massRoot = kuća + overlayi djelatnosti (isti scale/offset — inače klima/voda "pobjegnu") */
    var massRoot = new THREE.Group();
    root.add(massRoot);
    massRoot.scale.setScalar(0.78);
    // gore = bolje vidljivi temelji; blago desno jer je krilo lijevo
    massRoot.position.set(0.15, 0.22, 0);
    var houseRoot = new THREE.Group(); massRoot.add(houseRoot);

    /* ============================================================
       KUĆA "VILLA N" · v3 — medium-class blueprint
       Inspiracija: arhitektonski wireframe (više volumena, složeni krov,
       lučni trijem, erker, dormeri). Ostaje line-art / hologram DNA.
       Glavni korpus X±2.35 / Z±2.25 · krilo lijevo · greben ~6.15
       ============================================================ */
    var L = [[], [], [], [], [], []]; // 0 temelj · 1 konstrukcija · 2 stolarija · 3 prilaz/ulaz · 4 krov · 5 dormeri/svjetlarnici

    /* --- helperi: ploča (posta) i okviri s falcem --- */
    function slab(arr, x0, x1, z0, z1, yt, yb) {
      PL(arr, [[x0, yt, z0], [x1, yt, z0], [x1, yt, z1], [x0, yt, z1]], true);
      PL(arr, [[x0, yb, z0], [x1, yb, z0], [x1, yb, z1], [x0, yb, z1]], true);
      S(arr, x0, yt, z0, x0, yb, z0); S(arr, x1, yt, z0, x1, yb, z0);
      S(arr, x1, yt, z1, x1, yb, z1); S(arr, x0, yt, z1, x0, yb, z1);
    }
    // prozor na ravnini z=const (dir=+1 sprijeda)
    function winZ(cx, cy, w, h, z, dir, mullions) {
      PL(L[2], [[cx - w / 2, cy - h / 2, z], [cx + w / 2, cy - h / 2, z], [cx + w / 2, cy + h / 2, z], [cx - w / 2, cy + h / 2, z]], true);
      var o = 0.05, zi = z + dir * 0.005;
      PL(L[2], [[cx - w / 2 + o, cy - h / 2 + o, zi], [cx + w / 2 - o, cy - h / 2 + o, zi], [cx + w / 2 - o, cy + h / 2 - o, zi], [cx - w / 2 + o, cy + h / 2 - o, zi]], true);
      if (mullions !== false) {
        S(L[2], cx, cy - h / 2 + o, zi, cx, cy + h / 2 - o, zi);
        S(L[2], cx - w / 2 + o, cy, zi, cx + w / 2 - o, cy, zi);
      }
      S(L[2], cx - w / 2 - 0.07, cy - h / 2, z, cx + w / 2 + 0.07, cy - h / 2, z); // podvižnik
    }
    // prozor na ravnini x=const
    function winX(x, cy, cz, w, h, dir, mullions) {
      PL(L[2], [[x, cy - h / 2, cz - w / 2], [x, cy - h / 2, cz + w / 2], [x, cy + h / 2, cz + w / 2], [x, cy + h / 2, cz - w / 2]], true);
      var o = 0.05, xi = x + dir * 0.005;
      PL(L[2], [[xi, cy - h / 2 + o, cz - w / 2 + o], [xi, cy - h / 2 + o, cz + w / 2 - o], [xi, cy + h / 2 - o, cz + w / 2 - o], [xi, cy + h / 2 - o, cz - w / 2 + o]], true);
      if (mullions !== false) {
        S(L[2], xi, cy, cz - w / 2 + o, xi, cy, cz + w / 2 - o);
        S(L[2], xi, cy - h / 2 + o, cz, xi, cy + h / 2 - o, cz);
      }
      S(L[2], x, cy - h / 2, cz - w / 2 - 0.07, x, cy - h / 2, cz + w / 2 + 0.07);
    }
    // vrata na frontnoj ravnini
    function doorZ(cx, z, w, h, panels, baseY) {
      var y0 = baseY || 0, y1 = y0 + h;
      var x0 = cx - w / 2, x1 = cx + w / 2;
      PL(L[2], [[x0, y0, z], [x1, y0, z], [x1, y1, z], [x0, y1, z]], true);
      var o = 0.05, zi = z + 0.005;
      PL(L[2], [[x0 + o, y0 + o, zi], [x1 - o, y0 + o, zi], [x1 - o, y1 - o, zi], [x0 + o, y1 - o, zi]], true);
      if (panels) {
        S(L[2], x0 + o, y0 + h * 0.36, zi, x1 - o, y0 + h * 0.36, zi);
        S(L[2], x0 + o, y0 + h * 0.68, zi, x1 - o, y0 + h * 0.68, zi);
      }
      S(L[2], x1 - 0.12, y0 + h * 0.52, zi, x1 - 0.12, y0 + h * 0.42, zi);
    }
    // trokrilni bay (erker) na z=front
    function bayZ(cx, y0, y1, zWall, depth, w) {
      // čist pravokutni erker (manje križanja linija od poligonalnog)
      var x0 = cx - w / 2, x1 = cx + w / 2, z1 = zWall + depth;
      PL(L[1], [[x0, y0, zWall], [x1, y0, zWall], [x1, y0, z1], [x0, y0, z1]], true);
      PL(L[1], [[x0, y1, zWall], [x1, y1, zWall], [x1, y1, z1], [x0, y1, z1]], true);
      S(L[1], x0, y0, z1, x0, y1, z1); S(L[1], x1, y0, z1, x1, y1, z1);
      S(L[1], x0, y0, zWall, x0, y1, zWall); S(L[1], x1, y0, zWall, x1, y1, zWall);
      var cy = (y0 + y1) / 2, hh = (y1 - y0) * 0.7, ww = w * 0.72;
      // jedan čist prozor naprijed + bočni uski
      winZ(cx, cy, ww, hh, z1 + 0.01, 1, true);
      winX(x0 - 0.01, cy, zWall + depth * 0.5, depth * 0.55, hh * 0.85, -1, true);
      winX(x1 + 0.01, cy, zWall + depth * 0.5, depth * 0.55, hh * 0.85, 1, true);
    }

    /* L0 — temelji, terasa, staze */
    slab(L[0], -2.55, 2.55, -2.45, 2.45, 0.0, -0.38);           // glavna ploča
    slab(L[0], -4.05, -2.55, -1.75, 2.0, 0.0, -0.38);           // krilo / trijem ploča
    slab(L[0], -1.55, 0.35, 2.45, 3.45, 0.0, -0.16);             // staza ulaza
    slab(L[0], 0.55, 2.05, 2.45, 3.05, 0.0, -0.12);               // terasa uz erker
    // kotne / blueprint oznake uz temelj
    S(L[0], -2.55, -0.38, 2.55, -2.55, -0.38, 2.85);
    S(L[0], 2.55, -0.38, 2.55, 2.55, -0.38, 2.85);
    S(L[0], -2.55, -0.38, 2.7, 2.55, -0.38, 2.7);
    S(L[0], -2.7, 0, -2.45, -2.7, -0.38, -2.45);
    S(L[0], 2.7, 0, -2.45, 2.7, -0.38, -2.45);

    /* L1 — zidovi: glavni korpus + krilo + balkon + zabati */
    // etaže
    var Y1 = 2.28, Y2 = 4.45;
    // glavni korpus tlocrt
    var mx0 = -2.35, mx1 = 2.35, mz0 = -2.25, mz1 = 2.25;
    PL(L[1], [[mx0, 0, mz0], [mx1, 0, mz0], [mx1, 0, mz1], [mx0, 0, mz1]], true);
    PL(L[1], [[mx0, Y1, mz0], [mx1, Y1, mz0], [mx1, Y1, mz1], [mx0, Y1, mz1]], true);
    PL(L[1], [[mx0, Y2, mz0], [mx1, Y2, mz0], [mx1, Y2, mz1], [mx0, Y2, mz1]], true);
    [[mx0, mz0], [mx1, mz0], [mx1, mz1], [mx0, mz1]].forEach(function (p) {
      S(L[1], p[0], 0, p[1], p[0], Y2, p[1]);
    });
    // srednja letača na fasadi (vijenci)
    S(L[1], mx0, Y1, mz1, mx1, Y1, mz1);
    S(L[1], mx0, Y1, mz0, mx1, Y1, mz0);
    S(L[1], mx0, Y1, mz0, mx0, Y1, mz1);
    S(L[1], mx1, Y1, mz0, mx1, Y1, mz1);

    // lijevo krilo (niže, s lučnim trijemom)
    var wx0 = -3.95, wx1 = -2.35, wz0 = -1.55, wz1 = 1.9, wY = 2.9;
    PL(L[1], [[wx0, 0, wz0], [wx1, 0, wz0], [wx1, 0, wz1], [wx0, 0, wz1]], true);
    PL(L[1], [[wx0, wY, wz0], [wx1, wY, wz0], [wx1, wY, wz1], [wx0, wY, wz1]], true);
    [[wx0, wz0], [wx1, wz0], [wx1, wz1], [wx0, wz1]].forEach(function (p) {
      S(L[1], p[0], 0, p[1], p[0], wY, p[1]);
    });
    // lučni trijem na prednjoj strani krila (2 luka)
    (function () {
      var zf = wz1, yArch = 2.35, r = 0.62;
      [-3.4, -2.8].forEach(function (cx) {
        // stupovi
        S(L[1], cx - r, 0, zf, cx - r, yArch - r, zf);
        S(L[1], cx + r, 0, zf, cx + r, yArch - r, zf);
        ARC(L[1], cx, yArch - r, zf, r, 'z', 16, 0, Math.PI);
        // unutarnji falc luka
        ARC(L[1], cx, yArch - r, zf + 0.01, r - 0.08, 'z', 14, 0.08, Math.PI - 0.08);
      });
      // greda iznad lukova
      S(L[1], wx0, yArch + 0.08, zf, wx1, yArch + 0.08, zf);
      S(L[1], wx0, wY, zf, wx1, wY, zf);
    })();

    // balkon — konzolna ploča + oštrija ograda
    PL(L[1], [[-1.05, Y1 + 0.06, mz1], [1.35, Y1 + 0.06, mz1], [1.35, Y1 + 0.06, mz1 + 0.78], [-1.05, Y1 + 0.06, mz1 + 0.78]], true);
    PL(L[1], [[-1.05, Y1 - 0.08, mz1], [1.35, Y1 - 0.08, mz1], [1.35, Y1 - 0.08, mz1 + 0.78], [-1.05, Y1 - 0.08, mz1 + 0.78]], true);
    S(L[1], -1.05, Y1 + 0.06, mz1 + 0.78, -1.05, Y1 - 0.08, mz1 + 0.78);
    S(L[1], 1.35, Y1 + 0.06, mz1 + 0.78, 1.35, Y1 - 0.08, mz1 + 0.78);
    [-1.05, 0.15, 1.35].forEach(function (px) {
      S(L[1], px, Y1 + 0.06, mz1 + 0.75, px, Y1 + 1.0, mz1 + 0.75);
      S(L[1], px, Y1 + 0.06, mz1, px, Y1 + 1.0, mz1);
    });
    S(L[1], -1.05, Y1 + 1.0, mz1, -1.05, Y1 + 1.0, mz1 + 0.75);
    S(L[1], 1.35, Y1 + 1.0, mz1, 1.35, Y1 + 1.0, mz1 + 0.75);
    S(L[1], -1.05, Y1 + 1.0, mz1 + 0.75, 1.35, Y1 + 1.0, mz1 + 0.75);
    S(L[1], -1.05, Y1 + 0.52, mz1 + 0.75, 1.35, Y1 + 0.52, mz1 + 0.75);

    // zabati glavnog krova (asimetrični osjećaj: greben malo pomaknut)
    var ridgeX = 0.0, ridgeY = 6.05;
    PL(L[1], [[mx0, Y2, mz1], [ridgeX, ridgeY, mz1], [mx1, Y2, mz1]]);
    PL(L[1], [[mx0, Y2, mz0], [ridgeX, ridgeY, mz0], [mx1, Y2, mz0]]);
    S(L[1], ridgeX, Y2, mz1, ridgeX, ridgeY, mz1);
    S(L[1], ridgeX, Y2, mz0, ridgeX, ridgeY, mz0);

    // erker volumen (konstrukcija)
    bayZ(1.45, 0.2, Y1 - 0.15, mz1, 0.55, 1.3);

    /* L2 — stolarija · usklađene visine i ritam
       GF: prag ~0.85, h=1.20 → cy=1.45
       KAT: prag ~Y1+0.55, h=1.20 → cy≈3.43
       bočni parovi simetrični po Z */
    var gfCy = 1.45, gfH = 1.20, gfW = 1.05;
    var upCy = Y1 + 0.55 + gfH / 2, upH = gfH, upW = 1.0;

    // ulaz u krilu
    doorZ(-3.1, wz1 + 0.01, 0.86, 2.05, true, 0.0);
    // prednja fasada: dnevni prozor (lijevo) + erker nosi svoje prozore
    winZ(-0.95, gfCy, 1.25, gfH, mz1 + 0.01, 1, true);
    // kat: francuska vrata + bočni prozor — ista visina
    doorZ(0.1, mz1 + 0.01, 0.9, 1.95, false, Y1 + 0.06);
    winZ(1.05, upCy, 0.9, upH, mz1 + 0.01, 1, true);
    // zabatni okulus (centar grebena)
    ARC(L[2], ridgeX, 5.25, mz1 + 0.01, 0.24, 'z', 16, 0, Math.PI * 2);
    ARC(L[2], ridgeX, 5.25, mz1 + 0.01, 0.1, 'z', 12, 0, Math.PI * 2);

    // stražnja fasada — 2×2 jednaka mreža
    winZ(-1.15, gfCy, gfW, gfH, mz0 - 0.01, -1, true);
    winZ(1.15, gfCy, gfW, gfH, mz0 - 0.01, -1, true);
    winZ(-1.15, upCy, upW, upH, mz0 - 0.01, -1, true);
    winZ(1.15, upCy, upW, upH, mz0 - 0.01, -1, true);

    // lijeva strana (iznad krila) — samo kat, simetričan par
    winX(mx0 - 0.01, upCy, -0.9, upW, upH, -1, true);
    winX(mx0 - 0.01, upCy, 0.9, upW, upH, -1, true);
    // desna strana — GF + kat, simetrični parovi
    winX(mx1 + 0.01, gfCy, -0.9, gfW, gfH, 1, true);
    winX(mx1 + 0.01, gfCy, 0.9, gfW, gfH, 1, true);
    winX(mx1 + 0.01, upCy, -0.9, upW, upH, 1, true);
    winX(mx1 + 0.01, upCy, 0.9, upW, upH, 1, true);
    // krilo — jedan bočni + jedan stražnji, ista GF visina
    winX(wx0 - 0.01, gfCy, 0.15, 0.95, gfH, -1, true);
    winZ(-3.25, gfCy, 0.85, gfH * 0.85, wz0 - 0.01, -1, true);

    /* L3 — stepenice, nadstrešnica, ograde, klupa, lampioni */
    // stepenice ulaza (3 stube)
    slab(L[3], -3.55, -2.65, 1.9, 2.4, 0.18, 0.0);
    slab(L[3], -3.55, -2.65, 2.4, 2.85, 0.12, 0.0);
    slab(L[3], -3.55, -2.65, 2.85, 3.2, 0.06, 0.0);
    // rukohvat
    S(L[3], -2.68, 0.18, 1.95, -2.68, 0.92, 1.95);
    S(L[3], -2.68, 0.92, 1.95, -2.68, 0.92, 3.15);
    S(L[3], -2.68, 0.06, 3.15, -2.68, 0.92, 3.15);
    // nadstrešnica nad ulazom krila
    PL(L[3], [[-3.75, 2.5, 1.9], [-2.45, 2.5, 1.9], [-2.45, 2.5, 2.65], [-3.75, 2.5, 2.65]], true);
    PL(L[3], [[-3.75, 2.4, 1.9], [-2.45, 2.4, 1.9], [-2.45, 2.4, 2.65], [-3.75, 2.4, 2.65]], true);
    S(L[3], -3.65, 2.4, 2.6, -3.65, 2.1, 1.92);
    S(L[3], -2.55, 2.4, 2.6, -2.55, 2.1, 1.92);
    // stepenice terase uz erker
    slab(L[3], 0.7, 1.9, 2.45, 2.85, 0.1, 0.0);
    // (klupa uklonjena — širila je bounding box i rezala rub canvasa)
    // lampion uz ulaz
    S(L[3], -2.48, 0, 2.45, -2.48, 1.8, 2.45);
    B(L[3], -2.48, 1.9, 2.45, 0.16, 0.26, 0.16);
    ARC(L[3], -2.48, 1.65, 2.45, 0.09, 'y', 10, 0, Math.PI * 2);

    /* L4 — složeno krovište (glavni + krilo + grebeni + oluci + dimnjak) */
    // glavne krovne plohe (asimetrični greben)
    PL(L[4], [[mx0 - 0.22, Y2 - 0.08, mz0 - 0.28], [ridgeX, ridgeY, mz0 - 0.28], [ridgeX, ridgeY, mz1 + 0.28], [mx0 - 0.22, Y2 - 0.08, mz1 + 0.28]], true);
    PL(L[4], [[mx1 + 0.22, Y2 - 0.08, mz0 - 0.28], [ridgeX, ridgeY, mz0 - 0.28], [ridgeX, ridgeY, mz1 + 0.28], [mx1 + 0.22, Y2 - 0.08, mz1 + 0.28]], true);
    S(L[4], ridgeX, ridgeY, mz0 - 0.32, ridgeX, ridgeY, mz1 + 0.32);
    // poprečne letve na plohama
    [0.28, 0.5, 0.72].forEach(function (tt) {
      var xl = mx0 - 0.22 + (ridgeX - (mx0 - 0.22)) * tt;
      var xr = mx1 + 0.22 + (ridgeX - (mx1 + 0.22)) * tt;
      var yl = (Y2 - 0.08) + (ridgeY - (Y2 - 0.08)) * tt;
      S(L[4], xl, yl, mz0 - 0.28, xl, yl, mz1 + 0.28);
      S(L[4], xr, yl, mz0 - 0.28, xr, yl, mz1 + 0.28);
    });
    // krov krila (niži, greben uz glavni zid)
    var wRidgeY = 3.85;
    PL(L[4], [[wx0 - 0.12, wY - 0.05, wz0 - 0.15], [wx1, wRidgeY, wz0 - 0.15], [wx1, wRidgeY, wz1 + 0.15], [wx0 - 0.12, wY - 0.05, wz1 + 0.15]], true);
    PL(L[4], [[wx1, wY - 0.05, wz0 - 0.15], [wx1, wRidgeY, wz0 - 0.15], [wx1, wRidgeY, wz1 + 0.15], [wx1, wY - 0.05, wz1 + 0.15]], true);
    S(L[4], wx1, wRidgeY, wz0 - 0.16, wx1, wRidgeY, wz1 + 0.16);
    // oluci
    S(L[4], mx0 - 0.22, Y2 - 0.12, mz1 + 0.32, mx1 + 0.22, Y2 - 0.12, mz1 + 0.32);
    S(L[4], mx0 - 0.22, Y2 - 0.12, mz0 - 0.32, mx1 + 0.22, Y2 - 0.12, mz0 - 0.32);
    S(L[4], mx1 + 0.28, Y2 - 0.08, mz1 + 0.28, mx1 + 0.28, 0.08, mz1 + 0.28);
    S(L[4], mx1 + 0.28, 0.08, mz1 + 0.28, mx1 + 0.28, 0.08, mz1 + 0.5);
    S(L[4], mx0 - 0.28, Y2 - 0.08, mz0 - 0.28, mx0 - 0.28, 0.08, mz0 - 0.28);
    // dimnjak s kapom (desna krovna ploha)
    var chx0 = 1.05, chx1 = 1.55, chz0 = -1.05, chz1 = -0.55, chy0 = 5.15, chy1 = 6.35;
    PL(L[4], [[chx0, chy0, chz0], [chx1, chy0, chz0], [chx1, chy0, chz1], [chx0, chy0, chz1]], true);
    PL(L[4], [[chx0, chy1, chz0], [chx1, chy1, chz0], [chx1, chy1, chz1], [chx0, chy1, chz1]], true);
    [[chx0, chz0], [chx1, chz0], [chx1, chz1], [chx0, chz1]].forEach(function (p) {
      S(L[4], p[0], chy0, p[1], p[0], chy1, p[1]);
    });
    PL(L[4], [[chx0 - 0.08, chy1, chz0 - 0.08], [chx1 + 0.08, chy1, chz0 - 0.08], [chx1 + 0.08, chy1, chz1 + 0.08], [chx0 - 0.08, chy1, chz1 + 0.08]], true);
    PL(L[4], [[chx0 - 0.08, chy1 + 0.1, chz0 - 0.08], [chx1 + 0.08, chy1 + 0.1, chz0 - 0.08], [chx1 + 0.08, chy1 + 0.1, chz1 + 0.08], [chx0 - 0.08, chy1 + 0.1, chz1 + 0.08]], true);

    /* L5 — krovni prozori + 2 čista dormera (stabilna geometrija) */
    // Velux na desnoj krovnoj plohi
    [-1.2, 0.2, 1.35].forEach(function (zc) {
      function P(tt, zz) {
        var xEave = mx1 + 0.22;
        var x = xEave + (ridgeX - xEave) * tt;
        var y = (Y2 - 0.08) + (ridgeY - (Y2 - 0.08)) * tt + 0.05;
        return [x, y, zz];
      }
      var t1 = 0.34, t2 = 0.52, hw = 0.26;
      PL(L[5], [P(t1, zc - hw), P(t1, zc + hw), P(t2, zc + hw), P(t2, zc - hw)], true);
      var dt = 0.035, dw = 0.045;
      PL(L[5], [P(t1 + dt, zc - hw + dw), P(t1 + dt, zc + hw - dw), P(t2 - dt, zc + hw - dw), P(t2 - dt, zc - hw + dw)], true);
      var a = P((t1 + t2) / 2, zc - hw), b = P((t1 + t2) / 2, zc + hw);
      S(L[5], a[0], a[1], a[2], b[0], b[1], b[2]);
    });
    // Dva mansardna dormera na prednjoj strehi (pravokutni volumen + zabat)
    function cleanDormer(cx, zFace) {
      var w = 0.64, d = 0.42, y0 = Y2 + 0.02, y1 = Y2 + 0.7, yA = Y2 + 0.98;
      var x0 = cx - w / 2, x1 = cx + w / 2, z0 = zFace, z1 = zFace + d;
      PL(L[5], [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1]], true);
      PL(L[5], [[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]], true);
      S(L[5], x0, y0, z0, x0, y1, z0); S(L[5], x1, y0, z0, x1, y1, z0);
      S(L[5], x0, y0, z1, x0, y1, z1); S(L[5], x1, y0, z1, x1, y1, z1);
      // samo prednji zabat + greben (bez stražnjih dijagonala koje se križaju s krovom)
      S(L[5], x0, y1, z1, cx, yA, z1); S(L[5], x1, y1, z1, cx, yA, z1);
      S(L[5], cx, yA, z1, cx, yA, z0 + d * 0.35);
      var pw = 0.36, ph = 0.42, py = (y0 + y1) / 2 + 0.02;
      PL(L[5], [[cx - pw / 2, py - ph / 2, z1 + 0.01], [cx + pw / 2, py - ph / 2, z1 + 0.01], [cx + pw / 2, py + ph / 2, z1 + 0.01], [cx - pw / 2, py + ph / 2, z1 + 0.01]], true);
      S(L[5], cx, py - ph / 2, z1 + 0.01, cx, py + ph / 2, z1 + 0.01);
    }
    cleanDormer(-0.95, mz1 + 0.01);
    cleanDormer(1.05, mz1 + 0.01);

        var anchors = [
      new THREE.Vector3(-2.2, 0.15, 2.4), new THREE.Vector3(1.9, 2.35, 2.2),
      new THREE.Vector3(-1.9, 3.2, 0.8), new THREE.Vector3(-3.5, 1.35, 1.85),
      new THREE.Vector3(0.9, 5.2, 1.4), new THREE.Vector3(1.55, 5.0, 1.0)
    ];
    var explodeDirs = [
      new THREE.Vector3(0.12, -1.45, 0.18), new THREE.Vector3(-0.3, 0.32, -0.2),
      new THREE.Vector3(-1.35, 1.05, 0.75), new THREE.Vector3(-1.2, 0.7, 0.55),
      new THREE.Vector3(0.2, 2.15, -0.12), new THREE.Vector3(1.15, 2.45, 0.45)
    ];

    /* ---------- mreže ---------- */
    var layerGroups = [], layerRecs = [], nodePts = [];
    function segMesh(arr, parent, recs, color, op) {
      var geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3));
      var m = mat(color || HOLO, op != null ? op : 0.85);
      var mesh = new THREE.LineSegments(geo, m);
      parent.add(mesh);
      recs.push({ mat: m, base: m.opacity });
      return { mesh: mesh, geo: geo, mat: m };
    }
    function withGlow(arr, parent, recs, chroma) {
      var r = segMesh(arr, parent, recs);
      var g = segMesh(arr, parent, recs);
      g.mesh.scale.setScalar(1.008);
      g.mat.blending = THREE.AdditiveBlending;
      g.mat.opacity = recs[recs.length - 1].base = 0.22;
      if (chroma && !LOW) {
        var c1 = segMesh(arr, parent, recs); c1.mesh.position.x = 0.014;
        c1.mat.color.setHex(0x35e0ff); c1.mat.blending = THREE.AdditiveBlending; c1.mat.opacity = recs[recs.length - 1].base = 0.12;
        var c2 = segMesh(arr, parent, recs); c2.mesh.position.x = -0.014;
        c2.mat.color.setHex(0xff5ad2); c2.mat.blending = THREE.AdditiveBlending; c2.mat.opacity = recs[recs.length - 1].base = 0.1;
      }
      return r;
    }

    for (var li = 0; li < 6; li++) {
      var grp = new THREE.Group();
      houseRoot.add(grp);
      layerGroups.push(grp);
      var recs = [];
      withGlow(L[li], grp, recs, true);
      layerRecs.push(recs);
      nodePts = nodePts.concat(L[li]);
    }

    var ptsGeo = new THREE.BufferGeometry();
    ptsGeo.setAttribute('position', new THREE.Float32BufferAttribute(nodePts, 3));
    var ptsMat = new THREE.PointsMaterial({ color: HOLO, size: 2.4, sizeAttenuation: false, transparent: true, opacity: 0.65, depthWrite: false });
    houseRoot.add(new THREE.Points(ptsGeo, ptsMat));

    // underglow
    var glowCv = doc.createElement('canvas'); glowCv.width = glowCv.height = 256;
    var gctx = glowCv.getContext('2d');
    var grad = gctx.createRadialGradient(128, 128, 8, 128, 128, 128);
    grad.addColorStop(0, 'rgba(125,211,255,0.5)');
    grad.addColorStop(0.55, 'rgba(125,211,255,0.12)');
    grad.addColorStop(1, 'rgba(125,211,255,0)');
    gctx.fillStyle = grad; gctx.fillRect(0, 0, 256, 256);
    var underglow = new THREE.Mesh(
      new THREE.PlaneGeometry(6.8, 5.6),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(glowCv), transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    underglow.rotation.x = -Math.PI / 2;
    underglow.position.set(0, -0.28, 0);
    massRoot.add(underglow);

    /* ============================================================
       OVERLAYI DJELATNOSTI
    ============================================================ */
    var overlaysRoot = new THREE.Group();
    massRoot.add(overlaysRoot);

    function textSprite(text, wPx, hPx, fontPx) {
      var cv2 = doc.createElement('canvas'); cv2.width = wPx; cv2.height = hPx;
      var c2 = cv2.getContext('2d');
      c2.font = '600 ' + fontPx + 'px "IBM Plex Mono", monospace';
      c2.textAlign = 'center'; c2.textBaseline = 'middle';
      c2.shadowColor = 'rgba(125,211,255,0.9)'; c2.shadowBlur = 16;
      c2.fillStyle = '#aee6ff';
      c2.fillText(text, wPx / 2, hPx / 2);
      return new THREE.CanvasTexture(cv2);
    }

    /* višestruke točke protoka po polilinjama */
    function makeFlow(paths, color, size) {
      var total = 0;
      paths.forEach(function (p) { total += p.dots; });
      var geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(total * 3), 3));
      var pmat = new THREE.PointsMaterial({ color: color, size: size || 5, sizeAttenuation: false, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
      var segs = paths.map(function (p) {
        var lens = [], tot = 0;
        for (var i = 0; i < p.pts.length - 1; i++) {
          var dd = Math.hypot(p.pts[i + 1][0] - p.pts[i][0], p.pts[i + 1][1] - p.pts[i][1], p.pts[i + 1][2] - p.pts[i][2]);
          lens.push(dd); tot += dd;
        }
        return { pts: p.pts, lens: lens, tot: tot, dots: p.dots, speed: p.speed || 0.5, off: p.off || 0 };
      });
      var pts = new THREE.Points(geo, pmat);
      function dyn(t) {
        var a = geo.attributes.position.array, k = 0;
        segs.forEach(function (sp) {
          for (var d = 0; d < sp.dots; d++) {
            var ph = (((t * sp.speed + sp.off + d / sp.dots) % 1) + 1) % 1;
            var dist = ph * sp.tot, acc = 0, r = 0, i = 0;
            for (i = 0; i < sp.lens.length; i++) {
              if (dist <= acc + sp.lens[i]) { r = (dist - acc) / sp.lens[i]; break; }
              acc += sp.lens[i];
            }
            if (i >= sp.lens.length) { i = sp.lens.length - 1; r = 1; }
            a[k * 3] = lerp(sp.pts[i][0], sp.pts[i + 1][0], r);
            a[k * 3 + 1] = lerp(sp.pts[i][1], sp.pts[i + 1][1], r);
            a[k * 3 + 2] = lerp(sp.pts[i][2], sp.pts[i + 1][2], r);
            k++;
          }
        });
        geo.attributes.position.needsUpdate = true;
      }
      return { pts: pts, mat: pmat, dyn: dyn };
    }

    function rr2(c, x, y, w, h, r) {
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    }

    function buildOverlays() {
      var OV = [];

      /* 0 · KLIMATIZACIJA — jedinice na bočnim zidovima + strujanje zraka */
      (function () {
        var g = new THREE.Group(); overlaysRoot.add(g);
        var recs = [], parts = [], dyn = [];
        var units = [
          { p: [2.42, 1.4, 0.1], s: 1 },
          { p: [-2.42, 3.15, 0.1], s: -1 }
        ];
        units.forEach(function (u) {
          var arr = [];
          B(arr, u.p[0], u.p[1], u.p[2], 0.3, 0.55, 0.95);
          ARC(arr, u.p[0] + u.s * 0.16, u.p[1], u.p[2] - 0.18, 0.16, 'x', 14, 0, Math.PI * 2);
          S(arr, u.p[0] + u.s * 0.16, u.p[1] + 0.12, u.p[2] + 0.12, u.p[0] + u.s * 0.16, u.p[1] + 0.12, u.p[2] + 0.38);
          S(arr, u.p[0] + u.s * 0.16, u.p[1], u.p[2] + 0.12, u.p[0] + u.s * 0.16, u.p[1], u.p[2] + 0.38);
          S(arr, u.p[0] + u.s * 0.16, u.p[1] - 0.12, u.p[2] + 0.12, u.p[0] + u.s * 0.16, u.p[1] - 0.12, u.p[2] + 0.38);
          parts.push(withGlow(arr, g, recs, false));
          u.p = [u.p[0], u.p[1], u.p[2]];
        });
        var perUnit = LOW ? 10 : 22, total = perUnit * units.length;
        var pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(total * 3), 3));
        var home = [], vel = [];
        units.forEach(function (u, ui) {
          for (var i = 0; i < perUnit; i++) {
            home.push([u.p[0] + u.s * (0.3 + Math.random() * 0.3), u.p[1] - 0.1 - Math.random() * 0.5, u.p[2] + (Math.random() - 0.5) * 0.8]);
            vel.push([u.s * (0.5 + Math.random() * 0.7), -0.14 - Math.random() * 0.22, (Math.random() - 0.5) * 0.16]);
          }
        });
        var pMat = new THREE.PointsMaterial({ color: HOLO, size: 3, sizeAttenuation: false, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false });
        g.add(new THREE.Points(pGeo, pMat));
        recs.push({ mat: pMat, base: 0.5 });
        [[0.05, 3.25], [1.05, 3.25]].forEach(function (w) {
          var pm = new THREE.MeshBasicMaterial({ color: 0x4db8ff, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false });
          var pl = new THREE.Mesh(new THREE.PlaneGeometry(0.88, 1.72), pm);
          pl.position.set(w[0], w[1], 2.24);
          g.add(pl); recs.push({ mat: pm, base: 0.1 });
        });
        dyn.push(function (t, dt) {
          var arr2 = pGeo.attributes.position.array;
          for (var i = 0; i < total; i++) {
            var j = i * 3;
            if (arr2[j] === 0 && arr2[j + 1] === 0 && arr2[j + 2] === 0) { arr2[j] = home[i][0]; arr2[j + 1] = home[i][1]; arr2[j + 2] = home[i][2]; }
            arr2[j] += vel[i][0] * dt; arr2[j + 1] += vel[i][1] * dt; arr2[j + 2] += vel[i][2] * dt;
            if (Math.abs(arr2[j] - home[i][0]) > 1.5 || arr2[j + 1] < home[i][1] - 1.3) { arr2[j] = home[i][0]; arr2[j + 1] = home[i][1]; arr2[j + 2] = home[i][2]; }
          }
          pGeo.attributes.position.needsUpdate = true;
        });
        OV.push({ g: g, recs: recs, parts: parts, dyn: dyn, st: { v: 0, ap: -1 } });
      })();

      /* 1 · VODOVOD — mreža cijevi + protok u više grana + kapaljka */
      (function () {
        var g = new THREE.Group(); overlaysRoot.add(g);
        var recs = [], parts = [], dyn = [];
        var arr = [];
        S(arr, -0.9, -0.5, -1.4, -0.9, 3.95, -1.4);
        S(arr, -0.9, 0.45, -1.4, 0.9, 0.45, -1.4);
        S(arr, 0.9, 0.45, -1.4, 0.9, 1.1, -1.4);
        S(arr, 0.9, 1.1, -1.4, 0.9, 1.1, -1.05); S(arr, 0.9, 1.1, -1.05, 0.9, 0.92, -1.05);
        S(arr, -0.9, 2.3, -1.4, 0.4, 2.3, -1.4);
        S(arr, 0.4, 2.3, -1.4, 0.4, 3.05, -1.4);
        S(arr, 0.4, 3.05, -1.4, 0.4, 3.05, -1.08); S(arr, 0.4, 3.05, -1.08, 0.4, 2.9, -1.08);
        // grana prema kupaonici (drugi zid)
        S(arr, -0.9, 1.45, -1.4, -1.75, 1.45, -1.4);
        S(arr, -1.75, 1.45, -1.4, -1.75, 1.45, 0.6);
        S(arr, -1.75, 1.45, 0.6, -1.75, 1.04, 0.6);
        // mala slavina
        S(arr, -1.75, 1.04, 0.6, -1.62, 1.04, 0.6); S(arr, -1.75, 1.12, 0.6, -1.75, 1.04, 0.6);
        ARC(arr, -0.9, 1.2, -1.4, 0.09, 'z', 10, 0, Math.PI * 2);
        ARC(arr, -0.9, 2.8, -1.4, 0.09, 'z', 10, 0, Math.PI * 2);
        B(arr, -1.6, 0.5, -1.6, 0.5, 1.0, 0.5);
        S(arr, -1.35, 1.0, -1.55, -0.95, 1.2, -1.4);
        parts.push(withGlow(arr, g, recs, false));
        var flow = makeFlow([
          { pts: [[-0.9, -0.5, -1.4], [-0.9, 0.45, -1.4], [0.9, 0.45, -1.4], [0.9, 1.1, -1.4], [0.9, 1.1, -1.05]], dots: 3, speed: 0.34 },
          { pts: [[-0.9, 0.45, -1.4], [-0.9, 2.3, -1.4], [0.4, 2.3, -1.4], [0.4, 3.05, -1.4], [0.4, 3.05, -1.08]], dots: 2, speed: 0.4, off: 0.31 },
          { pts: [[-0.9, 1.45, -1.4], [-1.75, 1.45, -1.4], [-1.75, 1.45, 0.6], [-1.75, 1.04, 0.6]], dots: 2, speed: 0.5, off: 0.62 }
        ], 0xd6f1ff, 4.5);
        g.add(flow.pts); recs.push({ mat: flow.mat, base: 0.9 });
        dyn.push(flow.dyn);
        // kapaljka sa slavine + prasak
        var dripGeo = new THREE.BufferGeometry();
        dripGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(3), 3));
        var dripMat = new THREE.PointsMaterial({ color: 0xd6f1ff, size: 4, sizeAttenuation: false, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false });
        g.add(new THREE.Points(dripGeo, dripMat)); recs.push({ mat: dripMat, base: 0.95 });
        var splash = [];
        S(splash, -1.83, 0.03, 0.52, -1.67, 0.03, 0.68); S(splash, -1.83, 0.03, 0.68, -1.67, 0.03, 0.52); S(splash, -1.75, 0.03, 0.6, -1.75, 0.15, 0.6);
        var splashM = segMesh(splash, g, recs, 0xd6f1ff, 0.0);
        var splashOp = 0;
        dyn.push(function (t, dt) {
          var cy = (t * 0.6) % 1;
          var a = dripGeo.attributes.position.array;
          a[0] = -1.75; a[1] = lerp(1.0, 0.05, cy * cy); a[2] = 0.6;
          dripGeo.attributes.position.needsUpdate = true;
          if (cy > 0.95 && splashOp < 0.2) splashOp = 0.9;
          splashOp = Math.max(0, splashOp - 3.4 * dt);
          splashM.mat.opacity = 0.12 + splashOp;
        });
        OV.push({ g: g, recs: recs, parts: parts, dyn: dyn, st: { v: 0, ap: -1 } });
      })();

      /* 2 · ELEKTRIKA — razvodi po lijevom zidu + impuls + sijalice */
      (function () {
        var g = new THREE.Group(); overlaysRoot.add(g);
        var recs = [], parts = [], dyn = [];
        var arr = [], x = -2.36;
        S(arr, x, 0.35, -1.9, x, 0.35, 1.9);
        S(arr, x, 1.9, -1.9, x, 1.9, 1.9);
        S(arr, x, 2.6, -1.9, x, 2.6, 1.9);
        S(arr, x, 4.14, -1.9, x, 4.14, 1.9);
        [-1.4, -0.4, 0.6].forEach(function (zc) {
          B(arr, x, 0.3, zc, 0.02, 0.13, 0.13);
          S(arr, x, 0.06, zc, x, 0.35, zc);
        });
        B(arr, x, 2.55, -1.0, 0.02, 0.13, 0.13); B(arr, x, 2.55, 0.9, 0.02, 0.13, 0.13);
        S(arr, x, 2.6, -1.0, x, 2.32, -1.0); S(arr, x, 2.6, 0.9, x, 2.32, 0.9);
        ARC(arr, x, 1.1, 1.6, 0.07, 'x', 10, 0, Math.PI * 2);
        S(arr, x, 1.17, 1.6, x, 1.9, 1.6);
        ARC(arr, x, 3.3, 1.6, 0.07, 'x', 10, 0, Math.PI * 2);
        S(arr, x, 3.37, 1.6, x, 4.14, 1.6);
        B(arr, x, 1.55, -1.7, 0.1, 0.44, 0.34);
        S(arr, x, 1.77, -1.7, x, 1.9, -1.7);
        S(arr, x, 1.5, -1.58, x, 1.5, -1.82); S(arr, x, 1.62, -1.58, x, 1.62, -1.82);
        /* prsten razvoda oko cijele kuće — prednji, desni i stražnji zid (izbjegava vrata) */
        var zf = 2.26, xr2 = 2.36, zb = -2.26;
        S(arr, x, 0.35, 1.9, x, 0.35, zf); S(arr, x, 0.35, zf, -1.63, 0.35, zf);   // lijevo → prednje (do vrata)
        S(arr, -0.67, 0.35, zf, 1.9, 0.35, zf);                                    // prednji zid, desno od vrata
        S(arr, 1.9, 0.35, zf, xr2, 0.35, zf); S(arr, xr2, 0.35, zf, xr2, 0.35, 1.9);
        S(arr, xr2, 0.35, 1.9, xr2, 0.35, -1.9);                                   // desni zid
        S(arr, xr2, 0.35, -1.9, xr2, 0.35, zb); S(arr, xr2, 0.35, zb, 1.9, 0.35, zb);
        S(arr, 1.9, 0.35, zb, -1.9, 0.35, zb);                                     // stražnji zid
        S(arr, -1.9, 0.35, zb, x, 0.35, zb); S(arr, x, 0.35, zb, x, 0.35, -1.9);   // stražnji → lijevo
        /* utičnice s padovima na svim zidovima */
        [0.55, 1.75].forEach(function (xc) { B(arr, xc, 0.3, zf, 0.13, 0.13, 0.02); S(arr, xc, 0.06, zf, xc, 0.35, zf); });
        B(arr, xr2, 0.3, -0.5, 0.02, 0.13, 0.13); S(arr, xr2, 0.06, -0.5, xr2, 0.35, -0.5);
        B(arr, 0.4, 0.3, zb, 0.13, 0.13, 0.02); S(arr, 0.4, 0.06, zb, 0.4, 0.35, zb);
        /* zidne svjetiljke — prednja uz ulaz + desna strana */
        S(arr, -0.55, 0.35, zf, -0.55, 1.15, zf);
        ARC(arr, -0.55, 1.22, zf, 0.07, 'z', 10, 0, Math.PI * 2);
        S(arr, -0.55, 1.29, zf, -0.55, 1.36, zf);
        S(arr, xr2, 0.35, 1.2, xr2, 1.5, 1.2);
        ARC(arr, xr2, 1.57, 1.2, 0.07, 'x', 10, 0, Math.PI * 2);
        parts.push(withGlow(arr, g, recs, false));
        // impulsi — po svim zidovima odjednom
        var flow2 = makeFlow([
          { pts: [[x, 0.35, -1.9], [x, 0.35, 1.9], [x, 1.9, 1.9], [x, 1.9, -1.9], [x, 0.35, -1.9]], dots: 2, speed: 0.28 },
          { pts: [[x, 1.9, 1.6], [x, 1.17, 1.6]], dots: 1, speed: 0.7, off: 0.15 },
          { pts: [[x, 4.14, 1.6], [x, 3.37, 1.6]], dots: 1, speed: 0.7, off: 0.5 },
          { pts: [[x, 2.6, -1.0], [x, 2.32, -1.0]], dots: 1, speed: 0.85, off: 0.35 },
          { pts: [[x, 2.6, 0.9], [x, 2.32, 0.9]], dots: 1, speed: 0.85, off: 0.7 },
          { pts: [[x, 4.14, -1.9], [x, 4.14, 1.9]], dots: 1, speed: 0.4, off: 0.6 },
          { pts: [[-0.67, 0.35, zf], [1.9, 0.35, zf], [xr2, 0.35, zf], [xr2, 0.35, -1.9], [xr2, 0.35, zb], [1.9, 0.35, zb]], dots: 2, speed: 0.2, off: 0.1 },
          { pts: [[1.9, 0.35, zb], [-1.9, 0.35, zb], [x, 0.35, zb], [x, 0.35, -1.9]], dots: 1, speed: 0.28, off: 0.55 },
          { pts: [[-0.55, 0.35, zf], [-0.55, 1.15, zf]], dots: 1, speed: 0.85, off: 0.2 },
          { pts: [[xr2, 0.35, 1.2], [xr2, 1.5, 1.2]], dots: 1, speed: 0.85, off: 0.68 }
        ], 0xffb84d, 4.5);
        g.add(flow2.pts); recs.push({ mat: flow2.mat, base: 0.95 });
        dyn.push(flow2.dyn);
        // iskra na razvodnom ormariću
        var spark = [];
        S(spark, x - 0.07, 1.85, -1.62, x - 0.07, 1.85, -1.78); S(spark, x - 0.07, 1.93, -1.7, x - 0.07, 1.77, -1.7);
        var sparkM = segMesh(spark, g, recs, 0xffb84d, 0.0);
        dyn.push(function (t) {
          sparkM.mat.opacity = Math.max(0, Math.sin(t * 6.5) - 0.875) * 6.4;
        });
        var bulbs = [];
        [[-0.55, 1.245, 2.26, 'z'], [2.165, 1.595, 1.2, 'x'], [-0.55, 3.62, 2.225, 'z'], [0.6, 3.62, 2.225, 'z']].forEach(function (w) {
          var barr = [];
          ARC(barr, w[0], w[1], w[2], 0.11, w[3], 12, 0, Math.PI * 2);
          var bm = mat(0xffe9b0, 0.2, true);
          var geo2 = new THREE.BufferGeometry();
          geo2.setAttribute('position', new THREE.Float32BufferAttribute(barr, 3));
          g.add(new THREE.LineSegments(geo2, bm));
          bulbs.push(bm);
        });
        dyn.push(function (t) {
          bulbs.forEach(function (bm, k) { bm.opacity = 0.15 + 0.6 * Math.pow(Math.max(0, Math.sin(t * 1.5 - k * 1.2)), 3); });
        });
        OV.push({ g: g, recs: recs, parts: parts, dyn: dyn, st: { v: 0, ap: -1 } });
      })();

      /* 3 · KROVOPOKRIVAČI — crijep od strehe prema grebenu + snijeg */
      (function () {
        var g = new THREE.Group(); overlaysRoot.add(g);
        var recs = [], parts = [], dyn = [];
        var tiles = [];
        var rows = 6, cols = 10, zw = 4.7 / cols;
        for (var r = 0; r < rows; r++) {
          var t1 = r / rows, t2 = (r + 0.9) / rows;
          [1, -1].forEach(function (side) {
            var x1 = side * (2.35 - 2.35 * t1), y1 = 4.28 + 1.6 * t1;
            var x2 = side * (2.35 - 2.35 * t2), y2 = 4.28 + 1.6 * t2;
            S(tiles, side * (Math.abs(x1) + 0.02), y1, -2.35, side * (Math.abs(x1) + 0.02), y1, 2.35);
            for (var c = 0; c < cols; c++) {
              var z1 = -2.35 + c * zw, z2 = z1 + zw * 0.9;
              S(tiles, x1 + side * 0.02, y1, z1, x2 + side * 0.02, y2, z1);
              S(tiles, x1 + side * 0.02, y1, z2, x2 + side * 0.02, y2, z2);
            }
          });
        }
        parts.push(withGlow(tiles, g, recs, false));
        var ch = [];
        B(ch, 1.0, 5.75, -0.9, 0.5, 1.12, 0.5);
        B(ch, 1.0, 6.36, -0.9, 0.64, 0.1, 0.64);
        segMesh(ch, g, recs, 0xaee6ff, 1.0);
        var n = LOW ? 40 : 90;
        var sGeo = new THREE.BufferGeometry();
        var spos = new Float32Array(n * 3), sv = [];
        for (var i = 0; i < n; i++) {
          spos[i * 3] = -3.4 + Math.random() * 6.8;
          spos[i * 3 + 1] = 5.9 + Math.random() * 2.6;
          spos[i * 3 + 2] = -2.8 + Math.random() * 5.6;
          sv.push(0.5 + Math.random() * 0.7);
        }
        sGeo.setAttribute('position', new THREE.BufferAttribute(spos, 3));
        var sMat = new THREE.PointsMaterial({ color: 0xd9f2ff, size: 2, sizeAttenuation: false, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
        g.add(new THREE.Points(sGeo, sMat));
        recs.push({ mat: sMat, base: 0.55 });
        dyn.push(function (t, dt) {
          var a = sGeo.attributes.position.array;
          for (var i2 = 0; i2 < n; i2++) {
            a[i2 * 3 + 1] -= sv[i2] * dt;
            a[i2 * 3] += Math.sin(t * 1.2 + i2) * 0.12 * dt;
            if (a[i2 * 3 + 1] < 4.1) { a[i2 * 3 + 1] = 8.5; a[i2 * 3] = -3.4 + Math.random() * 6.8; }
          }
          sGeo.attributes.position.needsUpdate = true;
        });
        OV.push({ g: g, recs: recs, parts: parts, dyn: dyn, st: { v: 0, ap: -1 } });
      })();

      /* 4 · GRAĐEVINA — čisti temelj: iskop, armatura, ploča zasja, laser-nivelir */
      (function () {
        var g = new THREE.Group(); overlaysRoot.add(g);
        var recs = [], parts = [], dyn = [];
        // jama iskopa oko kuće
        var pit = [];
        PL(pit, [[-3.2, -0.34, -2.9], [3.2, -0.34, -2.9], [3.2, -0.34, 2.9], [-3.2, -0.34, 2.9]], true);
        PL(pit, [[-3.2, -0.34, -2.9], [-3.2, -0.62, -2.9], [3.2, -0.62, -2.9], [3.2, -0.34, -2.9]]);
        PL(pit, [[-3.2, -0.34, 2.9], [-3.2, -0.62, 2.9], [3.2, -0.62, 2.9], [3.2, -0.34, 2.9]]);
        PL(pit, [[-3.2, -0.62, -2.9], [3.2, -0.62, -2.9], [3.2, -0.62, 2.9], [-3.2, -0.62, 2.9]], true);
        parts.push(withGlow(pit, g, recs, false));
        // armatura — jedna čista mreža na dnu jame
        var reb = [];
        for (var rx = -2.6; rx <= 2.61; rx += 1.3) S(reb, rx, -0.58, -2.5, rx, -0.58, 2.5);
        for (var rz = -2.0; rz <= 2.01; rz += 1.0) S(reb, -3.0, -0.58, rz, 3.0, -0.58, rz);
        var rebM = segMesh(reb, g, recs, 0xaee6ff, 0.3);
        // temeljna ploča zasja (izlivanje)
        var slabM = new THREE.MeshBasicMaterial({ color: 0x4db8ff, transparent: true, opacity: 0.06, blending: THREE.AdditiveBlending, depthWrite: false });
        var slab = new THREE.Mesh(new THREE.PlaneGeometry(4.75, 4.9), slabM);
        slab.rotation.x = -Math.PI / 2; slab.position.y = -0.02;
        g.add(slab); recs.push({ mat: slabM, base: 0.06 });
        // nivelir na tronošcu + rotirajuća laserska linija
        var tri = [];
        S(tri, 3.86, 0.02, 3.02, 4.15, 0.85, 3.35); S(tri, 4.44, 0.02, 3.02, 4.15, 0.85, 3.35); S(tri, 4.15, 0.02, 3.82, 4.15, 0.85, 3.35);
        B(tri, 4.15, 0.97, 3.35, 0.24, 0.26, 0.24);
        parts.push(withGlow(tri, g, recs, false));
        var laserGeo = new THREE.BufferGeometry();
        laserGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12), 3));
        var laserM = new THREE.LineBasicMaterial({ color: 0xffb84d, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false });
        g.add(new THREE.LineSegments(laserGeo, laserM)); recs.push({ mat: laserM, base: 0.8 });
        // reper ±0.00
        var mk = [];
        S(mk, -3.62, 0.0, 3.12, -3.62, 0.52, 3.12); S(mk, -3.62, 0.52, 3.12, -3.24, 0.52, 3.12); S(mk, -3.62, 0.2, 3.12, -3.36, 0.2, 3.12);
        parts.push(withGlow(mk, g, recs, false));
        var zeroTex = textSprite('±0.00', 180, 60, 38);
        var zeroM = new THREE.MeshBasicMaterial({ map: zeroTex, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
        var zeroPl = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.24), zeroM);
        zeroPl.position.set(-2.82, 0.64, 3.12);
        g.add(zeroPl); recs.push({ mat: zeroM, base: 0.85 });
        dyn.push(function (t) {
          rebM.mat.opacity = 0.16 + 0.22 * (0.5 + 0.5 * Math.sin(t * 1.8));
          slabM.opacity = 0.045 + 0.05 * (0.5 + 0.5 * Math.sin(t * 0.9));
          var th = t * 0.8, cx = 4.15, cy = 0.97, cz = 3.35, R = 4.6;
          var a = laserGeo.attributes.position.array;
          a[0] = cx; a[1] = cy; a[2] = cz;
          a[3] = cx - Math.cos(th) * R; a[4] = cy; a[5] = cz - Math.sin(th) * R;
          a[6] = cx; a[7] = cy; a[8] = cz;
          a[9] = cx - Math.cos(th + Math.PI) * R * 0.35; a[10] = cy; a[11] = cz - Math.sin(th + Math.PI) * R * 0.35;
          laserGeo.attributes.position.needsUpdate = true;
          laserM.opacity = 0.55 + 0.3 * (0.5 + 0.5 * Math.sin(t * 2.3));
          zeroPl.lookAt(camera.position);
        });
        OV.push({ g: g, recs: recs, parts: parts, dyn: dyn, st: { v: 0, ap: -1 } });
      })();

      /* 5 · HOTELI — wire-krevet + web booking kartice */
      (function () {
        var g = new THREE.Group(); overlaysRoot.add(g);
        var recs = [], parts = [], dyn = [];
        // blueprint krevet lebdi iznad kuće
        var bed = [];
        var bx = 0, by = 6.85, bz = 0.2;
        PL(bed, [[bx - 0.85, by, bz - 0.5], [bx + 0.85, by, bz - 0.5], [bx + 0.85, by, bz + 0.5], [bx - 0.85, by, bz + 0.5]], true);
        S(bed, bx - 0.85, by, bz - 0.5, bx - 0.85, by + 0.55, bz - 0.5); S(bed, bx - 0.85, by, bz + 0.5, bx - 0.85, by + 0.55, bz + 0.5);
        S(bed, bx - 0.85, by + 0.55, bz - 0.5, bx - 0.85, by + 0.55, bz + 0.5); S(bed, bx - 0.85, by + 0.3, bz - 0.5, bx - 0.85, by + 0.3, bz + 0.5);
        S(bed, bx - 0.6, by + 0.12, bz - 0.42, bx + 0.75, by + 0.12, bz - 0.42); S(bed, bx - 0.6, by + 0.12, bz + 0.42, bx + 0.75, by + 0.12, bz + 0.42);
        S(bed, bx - 0.6, by + 0.12, bz - 0.42, bx - 0.6, by + 0.12, bz + 0.42); S(bed, bx + 0.75, by + 0.12, bz - 0.42, bx + 0.75, by + 0.12, bz + 0.42);
        PL(bed, [[bx - 0.55, by + 0.12, bz - 0.28], [bx - 0.3, by + 0.12, bz - 0.28], [bx - 0.3, by + 0.12, bz + 0.28], [bx - 0.55, by + 0.12, bz + 0.28]], true);
        S(bed, bx + 0.05, by + 0.16, bz - 0.42, bx + 0.05, by + 0.16, bz + 0.42);
        S(bed, bx + 0.85, by, bz - 0.5, bx + 0.85, by - 0.28, bz - 0.5); S(bed, bx + 0.85, by, bz + 0.5, bx + 0.85, by - 0.28, bz + 0.5);
        S(bed, bx - 0.85, by, bz - 0.5, bx - 0.85, by - 0.28, bz - 0.5); S(bed, bx - 0.85, by, bz + 0.5, bx - 0.85, by - 0.28, bz + 0.5);
        var bedG = new THREE.Group(); g.add(bedG);
        parts.push(withGlow(bed, bedG, recs, false));
        // booking kartice (web dizajn) — canvas sprajtovi
        function cardTex(title, sub, status, hot) {
          var cv = doc.createElement('canvas'); cv.width = 300; cv.height = 140;
          var c = cv.getContext('2d');
          c.fillStyle = 'rgba(13,16,21,0.9)'; rr2(c, 3, 3, 294, 134, 16); c.fill();
          c.strokeStyle = hot ? 'rgba(125,211,255,0.8)' : 'rgba(125,211,255,0.32)'; c.lineWidth = 2;
          rr2(c, 3, 3, 294, 134, 16); c.stroke();
          c.strokeStyle = '#aee6ff'; c.lineWidth = 2.6; c.lineCap = 'round';
          c.strokeRect(22, 58, 62, 30);
          c.beginPath(); c.moveTo(22, 58); c.lineTo(22, 32); c.moveTo(22, 42); c.lineTo(42, 42); c.lineTo(42, 58); c.stroke();
          c.strokeRect(30, 62, 15, 11);
          c.font = '700 25px "Space Grotesk", sans-serif'; c.fillStyle = '#f4f2ec'; c.fillText(title, 100, 52);
          c.font = '500 16px "IBM Plex Mono", monospace'; c.fillStyle = '#8a95a5'; c.fillText(sub, 100, 76);
          var wpx = hot ? 132 : 154;
          c.fillStyle = hot ? '#1e5eff' : 'rgba(255,255,255,0.1)';
          rr2(c, 100, 94, wpx, 28, 14); c.fill();
          c.font = '600 13px "IBM Plex Mono", monospace'; c.fillStyle = hot ? '#ffffff' : '#9aa0aa';
          c.fillText(status, 112, 113);
          return new THREE.CanvasTexture(cv);
        }
        var cards = [
          { d: ['SOBA 01', '2 KREVETA · BALKON', 'SLOBODNO', true], p: [3.15, 3.5, 1.35], ry: -0.5 },
          { d: ['SOBA 02', '3 KREVETA · POGLED', 'SLOBODNO', true], p: [3.5, 2.35, 0.15], ry: -0.62 },
          { d: ['SOBA 03', '2 KREVETA', 'REZERVIRANO', false], p: [3.05, 1.25, 1.75], ry: -0.42 }
        ];
        var cardMeshes = [];
        cards.forEach(function (cd, i) {
          var m2 = new THREE.MeshBasicMaterial({ map: cardTex(cd.d[0], cd.d[1], cd.d[2], cd.d[3]), transparent: true, opacity: 0.95, depthWrite: false });
          var pl2 = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.7), m2);
          pl2.position.set(cd.p[0], cd.p[1], cd.p[2]);
          pl2.rotation.y = cd.ry;
          g.add(pl2); recs.push({ mat: m2, base: 0.95 });
          cardMeshes.push({ mesh: pl2, y0: cd.p[1], i: i });
        });
        dyn.push(function (t) {
          bedG.position.y = Math.sin(t * 1.15) * 0.07;
          bedG.rotation.y = Math.sin(t * 0.5) * 0.1;
          cardMeshes.forEach(function (cm) { cm.mesh.position.y = cm.y0 + Math.sin(t * 1.3 + cm.i * 1.7) * 0.055; });
        });
        OV.push({ g: g, recs: recs, parts: parts, dyn: dyn, st: { v: 0, ap: -1 } });
      })();

      /* 6 · TRGOVINE — izlog, OTVORENO, kolica */
      (function () {
        var g = new THREE.Group(); overlaysRoot.add(g);
        var recs = [], parts = [], dyn = [];
        var arr = [];
        PL(arr, [[-0.55, 0.12, 2.23], [1.95, 0.12, 2.23], [1.95, 2.08, 2.23], [-0.55, 2.08, 2.23]], true);
        S(arr, 0.28, 0.12, 2.23, 0.28, 2.08, 2.23); S(arr, 1.12, 0.12, 2.23, 1.12, 2.08, 2.23);
        S(arr, -0.55, 1.1, 2.23, 1.95, 1.1, 2.23);
        B(arr, -0.15, 0.5, 1.85, 0.4, 0.55, 0.4); B(arr, 0.7, 0.6, 1.8, 0.5, 0.75, 0.45); B(arr, 1.55, 0.42, 1.85, 0.36, 0.4, 0.36);
        B(arr, -0.1, 1.35, 1.85, 0.5, 0.45, 0.42); B(arr, 1.5, 1.4, 1.85, 0.55, 0.55, 0.45);
        parts.push(withGlow(arr, g, recs, false));
        var oMat = new THREE.MeshBasicMaterial({ map: textSprite('OTVORENO', 320, 80, 44), transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false });
        var oPl = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.375), oMat);
        oPl.position.set(0.7, 2.34, 2.28);
        g.add(oPl); recs.push({ mat: oMat, base: 0.8 });
        var cart = [];
        PL(cart, [[2.3, 0.95, 3.4], [3.1, 0.95, 3.4], [3.02, 0.58, 3.4], [2.48, 0.58, 3.4]], true);
        S(cart, 2.39, 0.76, 3.4, 3.06, 0.76, 3.4);
        S(cart, 2.7, 0.95, 3.4, 2.68, 0.58, 3.4);
        S(cart, 2.3, 0.95, 3.4, 2.08, 1.16, 3.4); S(cart, 2.02, 1.16, 3.4, 2.14, 1.16, 3.4);
        S(cart, 2.55, 0.58, 3.4, 2.52, 0.44, 3.4); S(cart, 2.95, 0.58, 3.4, 2.95, 0.44, 3.4);
        ARC(cart, 2.52, 0.36, 3.4, 0.08, 'z', 10, 0, Math.PI * 2); ARC(cart, 2.95, 0.36, 3.4, 0.08, 'z', 10, 0, Math.PI * 2);
        parts.push(withGlow(cart, g, recs, false));
        var nMat = new THREE.MeshBasicMaterial({ map: textSprite('24', 96, 96, 52), transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
        var nPl = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.42), nMat);
        nPl.position.set(2.7, 1.5, 3.4);
        g.add(nPl); recs.push({ mat: nMat, base: 0.85 });
        // kartica proizvoda — webshop "notification" (isti jezik kao booking kartice)
        function prodTex() {
          var cv = doc.createElement('canvas'); cv.width = 300; cv.height = 140;
          var c = cv.getContext('2d');
          c.fillStyle = 'rgba(13,16,21,0.9)'; rr2(c, 3, 3, 294, 134, 16); c.fill();
          c.strokeStyle = 'rgba(125,211,255,0.8)'; c.lineWidth = 2;
          rr2(c, 3, 3, 294, 134, 16); c.stroke();
          c.strokeStyle = '#aee6ff'; c.lineWidth = 2.6; c.lineCap = 'round';
          c.strokeRect(22, 52, 52, 52);
          c.beginPath(); c.moveTo(22, 52); c.lineTo(48, 36); c.lineTo(74, 52);
          c.moveTo(48, 36); c.lineTo(48, 52); c.moveTo(40, 68); c.lineTo(56, 68); c.stroke();
          c.font = '700 25px "Space Grotesk", sans-serif'; c.fillStyle = '#f4f2ec'; c.fillText('ARTIKL 1042', 96, 52);
          c.font = '500 15px "IBM Plex Mono", monospace'; c.fillStyle = '#8a95a5'; c.fillText('NA STANJU · 14 KOM', 96, 76);
          c.fillStyle = '#1e5eff'; rr2(c, 96, 94, 172, 28, 14); c.fill();
          c.font = '600 13px "IBM Plex Mono", monospace'; c.fillStyle = '#ffffff'; c.fillText('U KOŠARICU · 129 €', 108, 113);
          return new THREE.CanvasTexture(cv);
        }
        var prodMat = new THREE.MeshBasicMaterial({ map: prodTex(), transparent: true, opacity: 0.95, depthWrite: false });
        var prodPl = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.7), prodMat);
        prodPl.position.set(3.35, 2.05, 2.4);
        prodPl.rotation.y = -0.5;
        g.add(prodPl); recs.push({ mat: prodMat, base: 0.95 });
        dyn.push(function (t) {
          oMat.opacity = 0.55 + 0.3 * (0.5 + 0.5 * Math.sin(t * 4));
          nPl.position.y = 1.5 + Math.sin(t * 2) * 0.05;
          prodPl.position.y = 2.05 + Math.sin(t * 1.35 + 1.2) * 0.06;
        });
        OV.push({ g: g, recs: recs, parts: parts, dyn: dyn, st: { v: 0, ap: -1 } });
      })();

      /* 7 · SVE OSTALE — laptop, wifi, podatkovni tokovi */
      (function () {
        var g = new THREE.Group(); overlaysRoot.add(g);
        var recs = [], parts = [], dyn = [];
        // radni kutak ispred kuće — stol + otvoreni laptop s nacrtom stranice na ekranu
        var lapG = new THREE.Group();
        lapG.position.set(1.75, 0, 3.9);
        lapG.rotation.y = 0.55;
        g.add(lapG);
        var arr = [];
        /* stol: ploča + podplocha + 4 noge */
        PL(arr, [[-0.62, 0.74, -0.28], [0.62, 0.74, -0.28], [0.62, 0.74, 0.28], [-0.62, 0.74, 0.28]], true);
        PL(arr, [[-0.62, 0.7, -0.28], [0.62, 0.7, -0.28], [0.62, 0.7, 0.28], [-0.62, 0.7, 0.28]], true);
        S(arr, -0.62, 0.74, -0.28, -0.62, 0.7, -0.28); S(arr, 0.62, 0.74, -0.28, 0.62, 0.7, -0.28);
        S(arr, 0.62, 0.74, 0.28, 0.62, 0.7, 0.28); S(arr, -0.62, 0.74, 0.28, -0.62, 0.7, 0.28);
        [[-0.56, -0.22], [0.56, -0.22], [0.56, 0.22], [-0.56, 0.22]].forEach(function (p) { S(arr, p[0], 0.7, p[1], p[0], 0.01, p[1]); });
        /* laptop — baza na ploči stola */
        PL(arr, [[-0.33, 0.74, -0.09], [0.33, 0.74, -0.09], [0.37, 0.74, 0.14], [-0.37, 0.74, 0.14]], true);
        S(arr, -0.3, 0.741, -0.05, 0.3, 0.741, -0.05);
        S(arr, -0.3, 0.741, 0.0, 0.3, 0.741, 0.0);
        S(arr, -0.3, 0.741, 0.05, 0.3, 0.741, 0.05);
        PL(arr, [[-0.09, 0.741, 0.07], [0.09, 0.741, 0.07], [0.09, 0.741, 0.115], [-0.09, 0.741, 0.115]], true);
        /* zaslon — lagano nagnut, s nacrtom mini-stranice */
        S(arr, -0.31, 0.74, -0.09, -0.31, 1.28, -0.145); S(arr, 0.31, 0.74, -0.09, 0.31, 1.28, -0.145);
        S(arr, -0.31, 1.28, -0.145, 0.31, 1.28, -0.145);
        PL(arr, [[-0.275, 0.78, -0.0915], [0.275, 0.78, -0.0915], [0.275, 1.245, -0.1435], [-0.275, 1.245, -0.1435]], true);
        function sZ(y) { return -0.0915 - 0.052 * ((y - 0.78) / 0.465); }
        S(arr, -0.26, 1.21, sZ(1.21), -0.17, 1.21, sZ(1.21));                      // logo u navu
        S(arr, 0.13, 1.21, sZ(1.21), 0.19, 1.21, sZ(1.21)); S(arr, 0.215, 1.21, sZ(1.21), 0.26, 1.21, sZ(1.21)); // linkovi
        S(arr, -0.24, 1.06, sZ(1.06), 0.04, 1.06, sZ(1.06));                        // naslov
        S(arr, -0.24, 1.0, sZ(1.0), -0.02, 1.0, sZ(1.0));                           // podnaslov
        PL(arr, [[-0.24, 0.86, sZ(0.86)], [-0.1, 0.86, sZ(0.86)], [-0.1, 0.93, sZ(0.93)], [-0.24, 0.93, sZ(0.93)]], true); // CTA gumb
        PL(arr, [[0.1, 0.88, sZ(0.88)], [0.24, 0.88, sZ(0.88)], [0.24, 1.12, sZ(1.12)], [0.1, 1.12, sZ(1.12)]], true);     // slika
        S(arr, 0.1, 0.88, sZ(0.88), 0.24, 1.12, sZ(1.12)); S(arr, 0.24, 0.88, sZ(0.88), 0.1, 1.12, sZ(1.12));
        var lapMesh = withGlow(arr, lapG, recs, false);
        parts.push(lapMesh);
        var wifis = [];
        [0.4, 0.72, 1.04].forEach(function (r) {
          var wa = [];
          ARC(wa, 0, 6.5, 0, r, 'z', 18, Math.PI * 0.2, Math.PI * 0.8);
          var wm = mat(HOLO, 0.7, true);
          var wgeo = new THREE.BufferGeometry();
          wgeo.setAttribute('position', new THREE.Float32BufferAttribute(wa, 3));
          g.add(new THREE.LineSegments(wgeo, wm));
          wifis.push(wm); recs.push({ mat: wm, base: 0.7 });
        });
        var wdot = [];
        ARC(wdot, 0, 6.5, 0, 0.05, 'z', 8, 0, Math.PI * 2);
        segMesh(wdot, g, recs, 0xaee6ff, 0.9);
        var sl = [];
        [[-1.5, -0.3], [0.6, -0.3], [1.8, -0.3]].forEach(function (p) { S(sl, p[0], 5.95, p[1], p[0], 8.6, p[1]); });
        segMesh(sl, g, recs, HOLO, 0.35).mat.blending = THREE.AdditiveBlending;
        var np = 12;
        var dGeo = new THREE.BufferGeometry();
        dGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(np * 3), 3));
        var dMat = new THREE.PointsMaterial({ color: HOLO, size: 3, sizeAttenuation: false, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false });
        g.add(new THREE.Points(dGeo, dMat));
        recs.push({ mat: dMat, base: 0.8 });
        dyn.push(function (t) {
          lapMesh.mat.opacity = 0.55 + 0.35 * (0.5 + 0.5 * Math.sin(t * 3));
          wifis.forEach(function (wm, k) {
            var ph = (t * 0.8 - k * 0.3) % 1; if (ph < 0) ph += 1;
            wm.opacity = Math.sin(ph * Math.PI) * 0.75;
          });
          var a = dGeo.attributes.position.array;
          for (var i = 0; i < np; i++) {
            a[i * 3] = [-1.5, 0.6, 1.8][i % 3];
            a[i * 3 + 1] = 5.95 + ((t * 0.35 + i * 0.19) % 1) * 2.65;
            a[i * 3 + 2] = -0.3;
          }
          dGeo.attributes.position.needsUpdate = true;
        });
        OV.push({ g: g, recs: recs, parts: parts, dyn: dyn, st: { v: 0, ap: -1 } });
      })();

      OV.forEach(function (o) { o.g.visible = false; });
      return OV;
    }

    var OV = buildOverlays();

    /* ---------- tranzicije overlayeva (tw engine) ---------- */
    var curOcc = -1;
    function showOcc(i) {
      if (i === curOcc) return;
      var prev = curOcc;
      curOcc = i;
      if (prev >= 0) {
        (function (po) {
          tw(po.st, 'v', 0, 0.4, easeIO, 0, function () { po.g.visible = false; });
        })(OV[prev]);
      }
      if (i >= 0) {
        (function (no) {
          no.g.visible = true;
          if (prefersReducedMotion) { no.st.v = 1; }
          else { tw(no.st, 'v', 1, 0.6, easeOut, prev >= 0 ? 250 : 0); }
        })(OV[i]);
      }
    }
    function applyOcc(o) {
      var v = o.st.v;
      if (v === o.st.ap) return;
      o.st.ap = v;
      o.parts.forEach(function (p) { p.geo.setDrawRange(0, Math.floor(p.geo.attributes.position.count * v)); });
      o.recs.forEach(function (r) { r.mat.opacity = r.base * v; });
      o.g.scale.setScalar(1 + 0.1 * (1 - v));
    }

    /* ---------- flicker + boost ---------- */
    var flicker = { v: 1 }, boost = { v: 1, t: 1 };
    if (!prefersReducedMotion) {
      (function scheduleFlicker() {
        setTimeout(function () {
          tw(flicker, 'v', 0.72, 0.07, easeIO, 0, function () {
            tw(flicker, 'v', 1, 0.08, easeIO, 0, scheduleFlicker);
          });
        }, 2600 + Math.random() * 2600);
      })();
    }
    canvas.addEventListener('pointerenter', function () { boost.t = 1.25; });
    canvas.addEventListener('pointerleave', function () { boost.t = 1; });

    /* ---------- izolacija sloja ---------- */
    var isoLayer = -1;
    layerRecs.forEach(function (recs) { recs.forEach(function (r) { r.dim = 1; }); });
    function setIsolation(i) {
      isoLayer = i;
      layerRecs.forEach(function (recs, k) {
        var dim = i < 0 ? 1 : (k === i ? 1 : 0.12);
        recs.forEach(function (r) {
          r.dim = dim;
          if (r.mat.color && r.base >= 0.8) { r.mat.color.setHex(k === i && i >= 0 ? 0x8db4ff : HOLO); }
        });
      });
    }

    /* ---------- eksplozija ---------- */
    var expl = [0, 0, 0, 0, 0, 0];
    var reassembleF = 1;
    function setExplode(q, rf) {
      reassembleF = rf;
      for (var i = 0; i < 6; i++) {
        // brži ulazak sloja, jasan peak, lagani delay među slojevima
        var local = smooth(clamp(q * 6.6 - i * 0.92, 0, 1));
        expl[i] = local * reassembleF;
      }
    }
    function explAvg() { var s = 0; for (var i = 0; i < 6; i++) s += expl[i]; return s / 6; }

    /* ---------- HTML naljepnice ---------- */
    var LAYER_LABELS = [
      ['A. Temelj · domena &amp; hosting', 'infrastruktura · pristup · smjer'],
      ['B. Konstrukcija', 'struktura · sadržaj · stranice'],
      ['C. Otvori', 'UX · UI · mobilni put'],
      ['D. Instalacije', 'funkcije · kontakt · mjerenje'],
      ['E. Krovište', 'SEO · sigurnost · održavanje'],
      ['F. Svjetlo', 'objava · analitika · učenje']
    ];
    var labelsWrap = $('#layerLabels');
    var labelEls = LAYER_LABELS.map(function (l) {
      var d = doc.createElement('div');
      d.className = 'lyr-lab';
      d.innerHTML = '<span class="ll-txt"><b>' + l[0] + '</b><span>' + l[1] + '</span></span>';
      labelsWrap.appendChild(d);
      return d;
    });
    var labV = new THREE.Vector3();
    function updateLabels(w, h) {
      if (explAvg() < 0.04) return;
      houseRoot.updateMatrixWorld(true);
      for (var i = 0; i < 6; i++) {
        if (expl[i] < 0.3) { labelEls[i].style.opacity = '0'; continue; }
        labV.copy(anchors[i]).applyMatrix4(layerGroups[i].matrixWorld);
        labV.project(camera);
        var x = (labV.x * 0.5 + 0.5) * w, y = (-labV.y * 0.5 + 0.5) * h;
        var right = labV.x > 0.25;
        labelEls[i].style.transform = 'translate(' + (right ? x + 34 : x - 34) + 'px,' + y + 'px) translate(' + (right ? '-100%' : '0') + ',-50%)';
        labelEls[i].style.opacity = isoLayer < 0 || isoLayer === i ? '1' : '0.25';
      }
    }
    function hideLabels() { labelEls.forEach(function (d) { d.style.opacity = '0'; }); }

    /* ---------- klik na sloj ---------- */
    canvas.addEventListener('pointerdown', function (e) { this._px = e.clientX; this._py = e.clientY; });
    canvas.addEventListener('pointerup', function (e) {
      if (Math.hypot(e.clientX - (this._px || 0), e.clientY - (this._py || 0)) > 6) return;
      if (explAvg() < 0.4) return;
      var r = wrap.getBoundingClientRect();
      houseRoot.updateMatrixWorld(true);
      var best = -1, bestD = 110;
      for (var i = 0; i < 6; i++) {
        labV.copy(anchors[i]).applyMatrix4(layerGroups[i].matrixWorld);
        labV.project(camera);
        var d = Math.hypot(e.clientX - r.left - (labV.x * 0.5 + 0.5) * r.width, e.clientY - r.top - (-labV.y * 0.5 + 0.5) * r.height);
        if (d < bestD) { bestD = d; best = i; }
      }
      setIsolation(best === isoLayer ? -1 : best);
    });

    /* ---------- resize / vidljivost / parallax ---------- */
    var visible = true;
    function resize() {
      var w = wrap.clientWidth, h = wrap.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.fov = mqDesktop.matches ? 30 : 40;
      camera.updateProjectionMatrix();
    }
    resize();
    WIN.addEventListener('resize', resize);
    if ('IntersectionObserver' in WIN) {
      new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }, { threshold: 0.02 }).observe(wrap);
    }
    var par = { x: 0, y: 0, tx: 0, ty: 0 };
    if (mqDesktop.matches && !isCoarse) {
      wrap.addEventListener('mousemove', function (e) {
        var r = wrap.getBoundingClientRect();
        par.tx = ((e.clientX - r.left) / r.width - 0.5) * 0.09;
        par.ty = ((e.clientY - r.top) / r.height - 0.5) * 0.05;
      });
      wrap.addEventListener('mouseleave', function () { par.tx = 0; par.ty = 0; });
    }

    /* ---------- glavna petlja ---------- */
    var clockTime = 0, last = performance.now(), firstFrame = true;
    var camDir = new THREE.Vector3();
    var focus = { v: 0 }; // 0..1 približavanje
    var orbit = { v: 0 }; // 0..1 yaw orbit tijekom builda
    var rise = { v: 0 };  // blagi lift
    function frame(now) {
      requestAnimationFrame(frame);
      var dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!visible || doc.hidden) return;
      clockTime += dt;
      var t = clockTime;

      /* Miš UVIJEK može okretati na desktopu — scroll ne gasi OrbitControls */
      controls.enabled = mqDesktop.matches;
      var building = Math.max(focus.v, orbit.v, explAvg()) > 0.08;
      controls.autoRotate = !prefersReducedMotion && !building && !controlsDragging;
      /* mobitel: scroll preko canvasa */
      var wantTA = mqDesktop.matches ? 'none' : 'pan-y';
      if (canvas.style.touchAction !== wantTA) canvas.style.touchAction = wantTA;

      var avg = explAvg();
      // Scroll FX na MASS (ne lock kamere) — korisnik zadržava orbit drag
      // Blagi target/dolly samo kad user ne vuče
      if (!controlsDragging) {
        var wantTargetY = lerp(2.35, 2.58, avg) + rise.v * 0.08;
        controls.target.x = lerp(controls.target.x, lerp(0.05, 0.0, focus.v), 0.08);
        controls.target.y = lerp(controls.target.y, wantTargetY, 0.08);
        controls.target.z = lerp(controls.target.z, 0.0, 0.08);
        // blagi dolly: približi u buildu, bez skoka
        camDir.copy(camera.position).sub(controls.target);
        var curDist = camDir.length();
        var wantDist = lerp(13.8, 14.4, avg) - 0.85 * focus.v;
        if (curDist > 0.001) {
          var nd = lerp(curDist, wantDist, 0.08);
          camDir.multiplyScalar(nd / curDist);
          camera.position.copy(controls.target).add(camDir);
        }
      }
      controls.update();

      var wantFov = (mqDesktop.matches ? 30 : 40) + 2.2 * focus.v + avg * 1.2;
      if (Math.abs(camera.fov - wantFov) > 0.01) { camera.fov = wantFov; camera.updateProjectionMatrix(); }

      // miš-parallax isključen kad se vuče orbit; inače blago
      var parMul = controlsDragging ? 0 : (1 - 0.7 * Math.max(focus.v, orbit.v));
      par.x = lerp(par.x, par.tx * parMul, 0.08);
      par.y = lerp(par.y, par.ty * parMul, 0.08);
      root.rotation.y = par.x;
      root.rotation.x = par.y;

      for (var i = 0; i < 6; i++) {
        var e = expl[i] * 0.9;
        layerGroups[i].position.copy(explodeDirs[i]).multiplyScalar(e);
        layerGroups[i].rotation.y = e * 0.03 * (i % 2 ? 1 : -1);
      }
      // scroll-orbit = rotacija mase (ne gasi miš)
      massRoot.rotation.y = avg * 0.08 + orbit.v * 0.55 + focus.v * 0.04;
      massRoot.rotation.x = avg * -0.035;
      massRoot.position.y = 0.2 + avg * 0.07 + rise.v * 0.1;
      massRoot.position.x = lerp(0.1, 0.0, focus.v);

      OV.forEach(function (o) { if (o.g.visible) applyOcc(o); });
      if (curOcc >= 0 && OV[curOcc].st.v > 0.01) {
        OV[curOcc].dyn.forEach(function (fn) { fn(t, dt); });
      }

      boost.v = lerp(boost.v, boost.t, 0.1);
      var fl = flicker.v * boost.v;
      layerRecs.forEach(function (recs2) {
        recs2.forEach(function (r) {
          var want = clamp(r.base * (r.dim == null ? 1 : r.dim) * fl, 0, 1);
          if (Math.abs(r.mat.opacity - want) > 0.002) r.mat.opacity = want;
        });
      });
      ptsMat.opacity = 0.65 * fl;
      underglow.material.opacity = 0.55 * (0.85 + 0.15 * Math.sin(t * 1.3)) * boost.v;

      updateLabels(wrap.clientWidth, wrap.clientHeight);
      renderer.render(scene, camera);
      if (firstFrame) { firstFrame = false; WIN.__ZAEC_3D = true; }
    }
    requestAnimationFrame(frame);

    return {
      showOcc: showOcc,
      setExplode: setExplode,
      setIsolation: setIsolation,
      setFocus: function (f) { focus.v = f; },
      setOrbit: function (o) { orbit.v = o; },
      setRise: function (r) { rise.v = r; },
      hideLabels: hideLabels,
      explAvg: explAvg
    };
  }

  /* ============================================================
     SCROLL FAZE A/B/C + paralaks siluete (desktop)
  ============================================================ */
  (function () {
    var pinSpace = $('#heroPinSpace');
    var heroCopy = $('#heroCopy');
    var svcPanel = $('#za-koga');
    var phaseCap = $('#phaseCaption');
    var holoWrap = $('#holoWrap');

    function wireSvcHover() {
      $$('.svc-mini').forEach(function (btn) {
        var layer = parseInt(btn.getAttribute('data-layer'), 10);
        btn.addEventListener('mouseenter', function () { if (H.impl) H.impl.setIsolation(layer); btn.classList.add('hot'); });
        btn.addEventListener('mouseleave', function () { if (H.impl) H.impl.setIsolation(-1); btn.classList.remove('hot'); });
        btn.addEventListener('focus', function () { if (H.impl) H.impl.setIsolation(layer); });
        btn.addEventListener('blur', function () { if (H.impl) H.impl.setIsolation(-1); });
        btn.addEventListener('click', function () { scrollToEl($('#cijene')); });
      });
    }
    wireSvcHover();

    function restoreCompactHero() {
      if (mqDesktop.matches) return;
      if (holoWrap) holoWrap.style.transform = '';
      occCtl.setPhase(true);
      if (H.impl) {
        if (H.impl.setExplode) H.impl.setExplode(0, 1);
        if (H.impl.setFocus) H.impl.setFocus(0);
        if (H.impl.setOrbit) H.impl.setOrbit(0);
        if (H.impl.setRise) H.impl.setRise(0);
        if (H.impl.setIsolation) H.impl.setIsolation(-1);
        if (H.impl.hideLabels) H.impl.hideLabels();
      }
      var bh = doc.getElementById('buildHud');
      if (bh) bh.style.opacity = '0';
      if (heroCopy) { heroCopy.style.opacity = '1'; heroCopy.style.transform = ''; heroCopy.style.filter = ''; heroCopy.style.pointerEvents = 'auto'; }
      if (svcPanel) { svcPanel.style.opacity = '1'; svcPanel.style.transform = 'none'; svcPanel.style.filter = ''; svcPanel.classList.add('on'); }
    }
    if (mqDesktop.addEventListener) mqDesktop.addEventListener('change', restoreCompactHero);
    else if (mqDesktop.addListener) mqDesktop.addListener(restoreCompactHero);

    if (!pinSpace || !HAS_GSAP) { occCtl.setPhase(true); return; }
    if (prefersReducedMotion) {
      if (heroCopy) { heroCopy.style.filter = ''; }
      if (svcPanel) { svcPanel.style.opacity = '1'; svcPanel.style.transform = 'none'; svcPanel.style.filter = ''; svcPanel.classList.add('on'); }
      occCtl.setPhase(true);
      return;
    }

    var lastPhaseA = true;
    /* smoothed scroll FX — orbit build, bez praznog “mrtvog” holda */
    var ax = {
      p: 0, q: 0, rf: 1, cf: 0, copy: 1, pan: 0, orb: 0, rise: 0,
      _tq: 0, _trf: 1, _tcf: 0, _tcopy: 1, _tpan: 0, _torb: 0, _trise: 0
    };

    // HUD lijevo dok copy nestaje — blueprint koraci (ispunjava prazninu)
    var buildHud = doc.getElementById('buildHud');
    if (!buildHud && pinSpace) {
      buildHud = doc.createElement('div');
      buildHud.id = 'buildHud';
      buildHud.className = 'build-hud';
      buildHud.setAttribute('aria-hidden', 'true');
      buildHud.innerHTML =
        '<p class="build-hud__kicker">[ BUILD SEQUENCE ]</p>' +
        '<ol class="build-hud__list">' +
        '<li data-step="0"><b>01</b><span>Temelj · domena &amp; hosting</span></li>' +
        '<li data-step="1"><b>02</b><span>Konstrukcija · struktura &amp; sadržaj</span></li>' +
        '<li data-step="2"><b>03</b><span>Otvori · UX &amp; UI</span></li>' +
        '<li data-step="3"><b>04</b><span>Instalacije · funkcije &amp; kontakt</span></li>' +
        '<li data-step="4"><b>05</b><span>Krovište · SEO &amp; sigurnost</span></li>' +
        '<li data-step="5"><b>06</b><span>Svjetlo · objava &amp; mjerenje</span></li>' +
        '</ol>' +
        '<p class="build-hud__note">Slojevi = dijelovi weba · klik na sloj izolira</p>';
      var stage = pinSpace.querySelector('.pin-stage') || pinSpace;
      var host = pinSpace.querySelector('.hero-stage') || stage;
      host.appendChild(buildHud);
    }
    var hudItems = buildHud ? $$('#buildHud li') : [];

    function applyAxonState() {
      if (!mqDesktop.matches) return;
      var p = ax.p;
      var q = ax.q;
      var rf = ax.rf;
      var isA = p < 0.16;
      if (isA !== lastPhaseA) { lastPhaseA = isA; occCtl.setPhase(isA); }
      if (H.impl) {
        H.impl.setExplode(q, rf);
        if (H.impl.setFocus) H.impl.setFocus(ax.cf);
        if (H.impl.setOrbit) H.impl.setOrbit(ax.orb);
        if (H.impl.setRise) H.impl.setRise(ax.rise);
      }

      if (holoWrap) {
        // samo blagi scale — nikad translate (reže overflow)
        var sc = 1 + 0.04 * ax.cf + 0.02 * ax.orb;
        holoWrap.style.transform = (ax.cf > 0.01 || ax.orb > 0.01) ? ('scale(' + sc.toFixed(3) + ')') : '';
      }

      if (heroCopy) {
        heroCopy.style.opacity = String(ax.copy);
        heroCopy.style.transform = 'translate3d(0,' + (46 * (1 - ax.copy)).toFixed(1) + 'px,0)';
        heroCopy.style.filter = 'blur(' + (8 * (1 - ax.copy)).toFixed(1) + 'px)';
        heroCopy.style.pointerEvents = ax.copy > 0.4 ? 'auto' : 'none';
      }

      // HUD samo dok usluge još nisu dominantne
      if (buildHud) {
        var hudVis = clamp((1 - ax.copy) * (1 - ax.pan * 1.65), 0, 1);
        var hudOn = hudVis > 0.04 && (q > 0.06 || rf < 0.98);
        buildHud.style.opacity = hudOn ? String(hudVis * 0.92) : '0';
        buildHud.style.transform = hudOn ? 'translate3d(0,' + (-8 * ax.pan).toFixed(1) + 'px,0)' : 'translate3d(-14px,12px,0)';
        var stepLive = Math.min(5, Math.floor(q * 6.4));
        if (rf < 0.55) stepLive = 5;
        hudItems.forEach(function (li, idx) {
          li.classList.toggle('is-on', idx <= stepLive && q > 0.04);
          li.classList.toggle('is-now', idx === stepLive && q > 0.04 && rf > 0.45);
        });
      }

      // Usluge dolaze SPORO i RANIJE — paralelno s aksonometrijom (nema praznog međuprostora)
      if (svcPanel) {
        var pan = ax.pan;
        svcPanel.style.opacity = String(pan);
        svcPanel.style.transform = 'translate3d(0,' + (38 * (1 - pan)).toFixed(1) + 'px,0)';
        svcPanel.style.filter = 'blur(' + (6 * (1 - pan)).toFixed(1) + 'px)';
        svcPanel.classList.toggle('on', pan > 0.4);
        // dok je slab, ne kradi klikove s HUD/house
        svcPanel.style.pointerEvents = pan > 0.42 ? 'auto' : 'none';
      }

      if (phaseCap) {
        var label = '01 · Odaberi djelatnost';
        if (q > 0.06 && ax.pan < 0.35) label = '02 · Slojevi se otvaraju';
        if (q > 0.45 && rf > 0.7 && ax.pan < 0.5) label = '03 · Struktura · klikni sloj';
        if (rf < 0.65 && rf > 0.1) label = '04 · Sastavljanje nacrta';
        if (ax.pan > 0.28) label = '05 · Web koji razumije vaš zanat';
        if (phaseCap.textContent !== label) phaseCap.textContent = label;
        phaseCap.style.opacity = (!isA && (q > 0.04 || ax.pan > 0.12)) ? '1' : '0';
      }

      if (rf < 0.05 && H.impl && H.impl.hideLabels) H.impl.hideLabels();
    }

    var axDirty = true;
    (function axLoop() {
      requestAnimationFrame(axLoop);
      if (!mqDesktop.matches) return;
      if (!axDirty) {
        // idle: skip work if fully settled
        var settled =
          Math.abs(ax.q - ax._tq) < 0.001 &&
          Math.abs(ax.rf - ax._trf) < 0.001 &&
          Math.abs(ax.cf - ax._tcf) < 0.001 &&
          Math.abs(ax.copy - ax._tcopy) < 0.001 &&
          Math.abs(ax.pan - ax._tpan) < 0.001 &&
          Math.abs(ax.orb - ax._torb) < 0.001;
        if (settled) return;
      }
      axDirty = false;
      ax.q = lerp(ax.q, ax._tq, 0.12);
      ax.rf = lerp(ax.rf, ax._trf, 0.12);
      ax.cf = lerp(ax.cf, ax._tcf, 0.12);
      ax.copy = lerp(ax.copy, ax._tcopy, 0.14);
      ax.pan = lerp(ax.pan, ax._tpan, 0.1);
      ax.orb = lerp(ax.orb, ax._torb, 0.1);
      ax.rise = lerp(ax.rise, ax._trise, 0.12);
      applyAxonState();
    })();

    function resetDesktopFx() {
      if (holoWrap) holoWrap.style.transform = '';
      if (buildHud) { buildHud.style.opacity = '0'; }
      occCtl.setPhase(true);
      if (H.impl) {
        if (H.impl.setExplode) H.impl.setExplode(0, 1);
        if (H.impl.setFocus) H.impl.setFocus(0);
        if (H.impl.setOrbit) H.impl.setOrbit(0);
        if (H.impl.setRise) H.impl.setRise(0);
        if (H.impl.setIsolation) H.impl.setIsolation(-1);
        if (H.impl.hideLabels) H.impl.hideLabels();
      }
      if (heroCopy) { heroCopy.style.opacity = '1'; heroCopy.style.transform = ''; heroCopy.style.filter = ''; heroCopy.style.pointerEvents = 'auto'; }
      if (svcPanel) { svcPanel.style.opacity = '1'; svcPanel.style.transform = 'none'; svcPanel.style.filter = ''; svcPanel.classList.add('on'); }
      ax._tq = 0; ax._trf = 1; ax._tcf = 0; ax._tcopy = 1; ax._tpan = 0; ax._torb = 0; ax._trise = 0;
    }

    ScrollTrigger.create({
      trigger: pinSpace,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.55,
      onUpdate: function (self) {
        if (!mqDesktop.matches) { resetDesktopFx(); return; }
        var p = self.progress;
        ax.p = p;
        axDirty = true;
        /*
          ORBIT BUILD timeline (desktop pin):
          0.00–0.12  hero + djelatnosti (stabilno)
          0.11–0.33  copy se spušta i odbluruje + orbit start
          0.14–0.42  explode open (slojevi + HUD koraci)
          0.22–0.54  services panel ulazi paralelno
          0.42–0.60  hold open + labels
          0.56–0.76  reassemble + orbit unwind
        */
        /*
          Smooth dual-track:
          A) house build/orbit (desno)
          B) services panel (lijevo) — počinje RANIJE i raste SPORO dok traje aksonometrija
        */
        ax._tcopy = 1 - smooth(clamp((p - 0.11) / 0.22, 0, 1));
        ax._tq    = smooth(clamp((p - 0.14) / 0.28, 0, 1));
        ax._trf   = 1 - smooth(clamp((p - 0.58) / 0.2, 0, 1));
        ax._tcf   = smooth(clamp((p - 0.12) / 0.18, 0, 1)) * (1 - smooth(clamp((p - 0.78) / 0.14, 0, 1)));
        // orbit blaži, duži — manje “trzanja”
        ax._torb  = smooth(clamp((p - 0.12) / 0.22, 0, 1)) * (1 - smooth(clamp((p - 0.7) / 0.18, 0, 1)));
        ax._trise = smooth(clamp((p - 0.16) / 0.22, 0, 1)) * (1 - smooth(clamp((p - 0.66) / 0.2, 0, 1)));
        // usluge ulaze ranije i paralelno s rastavljanjem kuće — bez praznog prijelaza
        ax._tpan  = smooth(clamp((p - 0.22) / 0.32, 0, 1));
      }
    });
  })();

  /* ============================================================
     EKRAN — telefon: ulaz "iz zraka" + miš-paralaks + autoscroll
  ============================================================ */
  (function () {
    var stage = $('#phStage');
    if (!stage) return;
    var mv = $('#phMove'), ph = $('#ph3d');
    var floats = $$('.ph-float', stage);
    // sadržaj ekrana dupliciramo za besprijekornu -50% petlju
    var scrollEl = $('#msScroll');
    if (scrollEl) {
      Array.prototype.slice.call(scrollEl.children).forEach(function (node) {
        var dup = node.cloneNode(true);
        dup.setAttribute('aria-hidden', 'true');
        dup.querySelectorAll('a').forEach(function (link) { link.setAttribute('tabindex', '-1'); });
        scrollEl.appendChild(dup);
      });
    }
        // Pause infinite screen scroll when off-view (CPU)
    var msScroll = stage.querySelector('.ms-scroll');
    if (msScroll && 'IntersectionObserver' in WIN) {
      new IntersectionObserver(function (es) {
        var on = es[0] && es[0].isIntersecting;
        msScroll.style.animationPlayState = on ? 'running' : 'paused';
      }, { threshold: 0.05 }).observe(stage);
    }

    function lightStars(card) {
      var stars = $$('.pf-stars svg', card);
      if (!stars.length) return;
      if (prefersReducedMotion || !HAS_GSAP) {
        stars.forEach(function (star) { star.style.opacity = '1'; star.style.transform = 'scale(1)'; });
        return;
      }
      stars.forEach(function (star, index) {
        gsap.fromTo(star, { opacity: .18, scale: .72 }, {
          opacity: 1, scale: 1, duration: .2, delay: index * .055, ease: 'power2.out',
          onStart: function () { star.parentElement.classList.add('is-lit'); }
        });
      });
    }

    function setupFloatTilt() {
      if (!HAS_GSAP || prefersReducedMotion || !mqDesktop.matches || isCoarse) return;
      var effects = floats.map(function (float) {
        var card = float.firstElementChild;
        var depth = parseFloat(float.getAttribute('data-depth')) || 14;
        if (!card) return null;
        gsap.set(card, { transformPerspective: 850 });
        return {
          card: card,
          depth: depth,
          rx: gsap.quickTo(card, 'rotationX', { duration: .42, ease: 'power3.out' }),
          ry: gsap.quickTo(card, 'rotationY', { duration: .42, ease: 'power3.out' }),
          x: gsap.quickTo(card, 'x', { duration: .5, ease: 'power3.out' })
        };
      }).filter(Boolean);
      stage.addEventListener('pointermove', function (e) {
        var r = stage.getBoundingClientRect();
        var nx = clamp((e.clientX - (r.left + r.width / 2)) / (r.width / 2), -1, 1);
        var ny = clamp((e.clientY - (r.top + r.height / 2)) / (r.height / 2), -1, 1);
        effects.forEach(function (fx) {
          fx.ry(nx * Math.min(fx.depth * .14, 4));
          fx.rx(-ny * Math.min(fx.depth * .1, 3));
          fx.x(nx * Math.min(fx.depth * .22, 7));
        });
      }, { passive: true });
      stage.addEventListener('pointerleave', function () {
        effects.forEach(function (fx) { fx.rx(0); fx.ry(0); fx.x(0); });
      }, { passive: true });
    }

    if (HAS_GSAP && !prefersReducedMotion) {
      if (ph) {
        gsap.set(ph, { transformPerspective: 900 });
        // jedan scrub za telefon — bez teških multi-scrub floatova
        gsap.fromTo(mv,
          { rotationY: 28, y: 48, opacity: 0.35, scale: 0.94 },
          { rotationY: 0, y: 0, opacity: 1, scale: 1, ease: 'none',
            scrollTrigger: { trigger: '#ekran', start: 'top 85%', end: 'top 35%', scrub: true } });
      }
      // float kartice: jednokratni reveal (ne scrub) = glatko
      floats.forEach(function (f, i) {
        var card = f.firstElementChild;
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.55, delay: 0.08 * i, ease: 'power2.out',
            onComplete: function () {
              if (f.classList.contains('pf-3')) card.classList.add('is-live');
              lightStars(card);
            },
            scrollTrigger: { trigger: '#ekran', start: 'top 70%', once: true } });
      });
      // blagi miš tilt samo na telefonu, ne na floatovima (manje layout thrash)
      if (ph && mqDesktop.matches && !isCoarse) {
        var rx = gsap.quickTo(ph, 'rotationX', { duration: 0.45, ease: 'power3.out' });
        var ry = gsap.quickTo(ph, 'rotationY', { duration: 0.45, ease: 'power3.out' });
        stage.addEventListener('pointermove', function (e) {
          var r = stage.getBoundingClientRect();
          var nx = clamp((e.clientX - (r.left + r.width / 2)) / (r.width / 2), -1, 1);
          var ny = clamp((e.clientY - (r.top + r.height / 2)) / (r.height / 2), -1, 1);
          ry(nx * 5); rx(-ny * 4);
        }, { passive: true });
        stage.addEventListener('pointerleave', function () { rx(0); ry(0); }, { passive: true });
      }
      setupFloatTilt();
    } else {
      floats.forEach(function (f) {
        if (f.firstElementChild) lightStars(f.firstElementChild);
      });
    }
  })();

  WIN.__ZAEC_READY = true;
})();
