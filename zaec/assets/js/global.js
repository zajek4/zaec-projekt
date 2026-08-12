(function () {
  'use strict';
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  var NAV_OFFSET = 72;

  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);
  }
  function closeMenu() {
    if (!menu || !burger) return;
    menu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    menu.setAttribute('inert', '');
    document.body.classList.remove('menu-open');
  }
  function yOf(el) {
    if (el === 0) return 0;
    if (!el) return 0;
    var r = el.getBoundingClientRect();
    return Math.max(0, r.top + (window.pageYOffset || document.documentElement.scrollTop || 0) - NAV_OFFSET);
  }
  function smoothTo(target) {
    var y = typeof target === 'number' ? target : yOf(target);
    try {
      window.scrollTo({ top: y, behavior: 'smooth' });
    } catch (e) {
      window.scrollTo(0, y);
    }
  }
  function resolveHash(href) {
    if (!href || href.indexOf('#') === -1) return null;
    var hash = href.slice(href.indexOf('#'));
    if (!hash || hash === '#') return null;
    if (hash === '#top') return 0;
    try { return document.querySelector(hash); } catch (e) { return null; }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (burger) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open));
      if (open) menu.removeAttribute('inert');
      else menu.setAttribute('inert', '');
      document.body.classList.toggle('menu-open', open);
    });
  }
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('#') === -1) return;
    if (/^https?:\/\//i.test(href)) {
      try {
        var u = new URL(href, window.location.href);
        if (u.origin !== window.location.origin) return;
        var path = u.pathname.replace(/\/+$/, '') || '/';
        var here = window.location.pathname.replace(/\/+$/, '') || '/';
        if (path !== here) return;
      } catch (err) { return; }
    }
    var t = resolveHash(href);
    if (t === null) return;
    e.preventDefault();
    closeMenu();
    smoothTo(t);
  });

  if (window.location.hash && window.location.hash.length > 1) {
    window.addEventListener('load', function () {
      var t = resolveHash(window.location.hash);
      if (t !== null) setTimeout(function () { smoothTo(t); }, 50);
    });
  }
})();
