// Forma za upit: validacija, priložena konfiguracija, slanje preko admin-ajax (progressive enhancement).
const PHONE_RE = /^[+()\d\s/-]{6,}$/;
const MAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LINK_RE = /(https?:\/\/|www\.)/gi;
const MAX_LINKS = 3; // isto kao inc/form-handler.php
const CFG = window.ZAEC_CFG || {};

export function initContactForms() {
  document.querySelectorAll('[data-contact-form]').forEach(init);
}

async function refreshNonce(form) {
  try {
    const body = new FormData();
    body.append('action', 'zaec_refresh_nonce');
    const res = await fetch(CFG.ajax, { method: 'POST', body, credentials: 'same-origin' });
    const json = await res.json();
    if (json && json.success && json.data && json.data.nonce) {
      form.querySelectorAll('input[name="zaec_nonce"]').forEach((i) => (i.value = json.data.nonce));
      return true;
    }
  } catch (e) {}
  return false;
}

function init(form) {
  if (form.dataset.ready) return;
  form.dataset.ready = '1';
  const status = form.querySelector('[data-status]');
  const btn = form.querySelector('button[type="submit"]');
  const chip = form.querySelector('[data-config-chip]');
  const chipText = form.querySelector('[data-config-text]');
  const cfgField = form.querySelector('[data-config-field]');
  const started = form.querySelector('input[name="started_at"]');
  if (started) started.value = String(Math.floor(Date.now() / 1000));
  const src = form.querySelector('input[name="izvor"]');
  if (src) src.value = location.href.split('#')[0];

  function attach(cfg) {
    if (!cfg || !cfg.summary || !cfgField) return;
    cfgField.value = cfg.summary;
    chipText.textContent = cfg.summary.split('\n').slice(0, 3).join('\n');
    chip.hidden = false;
    const sel = form.querySelector('select[name="djelatnost"]');
    if (sel && cfg.trade && !sel.value) {
      const opt = [...sel.options].find((o) => o.dataset.sector === cfg.trade || o.value === cfg.trade);
      if (opt) sel.value = opt.value;
    }
    const usl = form.querySelector('select[name="usluga"]');
    const map = { landing: 'Landing stranica', web: 'Web stranica', shop: 'Webshop', redesign: 'Redizajn postojećeg weba' };
    if (usl && cfg.type && map[cfg.type]) usl.value = map[cfg.type];
  }
  try { attach(JSON.parse(sessionStorage.getItem('zaec-config') || 'null')); } catch (e) {}
  document.addEventListener('zaec:config', (e) => attach(e.detail));
  form.querySelector('[data-config-clear]')?.addEventListener('click', () => {
    cfgField.value = '';
    chip.hidden = true;
    try { sessionStorage.removeItem('zaec-config'); } catch (e) {}
  });

  const fields = {
    ime: (v) => v.trim().length >= 2,
    kontakt: (v) => PHONE_RE.test(v.trim()) || MAIL_RE.test(v.trim()),
    poruka: (v) => (v.match(LINK_RE) || []).length <= MAX_LINKS,
  };
  const NAMES = { ime: 'ime', kontakt: 'telefon ili email', poruka: 'poruka', tvrtka: 'naziv tvrtke' };

  // telefon ili email: kratka potvrda kako ćemo odgovoriti
  const hint = form.querySelector('[data-kontakt-hint]');
  const kontakt = form.elements.kontakt;
  if (hint && kontakt) {
    const say = () => {
      const v = kontakt.value.trim();
      hint.textContent = MAIL_RE.test(v) ? 'Odgovaramo emailom.' : PHONE_RE.test(v) && /\d{6,}/.test(v.replace(/\D/g, '')) ? 'Javljamo se pozivom u radno vrijeme.' : '';
    };
    kontakt.addEventListener('input', say);
    say();
  }
  if (form.elements.tvrtka && form.elements.tvrtka.required) fields.tvrtka = (v) => v.trim().length >= 2;
  function validate(name) {
    const input = form.elements[name];
    if (!input) return true;
    const ok = fields[name](input.value);
    const field = input.closest('.field');
    field.classList.toggle('has-error', !ok);
    input.setAttribute('aria-invalid', String(!ok));
    // opis greške samo dok greška postoji (skriveni opis bi čitač ekrana inače uvijek pročitao)
    const errId = field.querySelector('.field-error')?.id;
    if (errId) {
      const ids = (input.getAttribute('aria-describedby') || '').split(' ').filter((x) => x && x !== errId);
      if (!ok) ids.unshift(errId);
      ids.length ? input.setAttribute('aria-describedby', ids.join(' ')) : input.removeAttribute('aria-describedby');
    }
    return ok;
  }
  Object.keys(fields).forEach((n) => {
    const el = form.elements[n];
    if (!el) return;
    el.addEventListener('blur', () => el.value && validate(n));
    el.addEventListener('input', () => {
      if (!el.closest('.field').classList.contains('has-error')) return;
      // ispravljeno zadnje neispravno polje: poruka "Provjerite: …" više ne vrijedi
      if (validate(n) && status.classList.contains('is-error') && !form.querySelector('.has-error')) setStatus('');
    });
  });

  let started2 = false;
  form.addEventListener('focusin', () => {
    if (!started2) { started2 = true; window.zaecTrack?.('form_start', { form: form.id }); }
  });

  async function send(retry = true) {
    const res = await fetch(CFG.ajax, {
      method: 'POST',
      body: new FormData(form),
      credentials: 'same-origin',
      headers: { Accept: 'application/json' },
    });
    let json = null;
    try { json = await res.json(); } catch (e) { json = null; }
    if (res.status === 403 && retry && (await refreshNonce(form))) return send(false);
    return { res, json };
  }

  form.addEventListener('submit', async (e) => {
    if (!CFG.ajax) return; // bez konfiguracije: klasični POST (admin-post.php)
    e.preventDefault();
    const bad = Object.keys(fields).filter((n) => !validate(n));
    if (bad.length) {
      form.querySelector('.has-error input, .has-error textarea')?.focus();
      setStatus(`Provjerite: ${bad.map((n) => NAMES[n] || n).join(', ')}.`, 'error');
      return;
    }
    btn.classList.add('is-loading');
    btn.disabled = true;
    form.setAttribute('aria-busy', 'true');
    setStatus('Šaljemo…');
    try {
      const { res, json } = await send();
      if (res.ok && json && json.success) {
        window.zaecTrack?.('generate_lead', { form: form.id, type: form.dataset.kind || 'upit' });
        try { sessionStorage.removeItem('zaec-config'); } catch (err) {}
        setStatus((json.data && json.data.message) || 'Upit je stigao.', 'ok');
        // hero može odigrati završni trenutak (npr. Kontakt pali zgradu); s data-inline-success potvrda ostaje
        // na stranici (Kontakt), inače prelazak na zahvalu
        const via = MAIL_RE.test((kontakt?.value || '').trim()) ? 'email' : 'phone';
        form.dispatchEvent(new CustomEvent('zaec:sent', { bubbles: true, detail: { via, name: (form.elements.ime?.value || '').trim() } }));
        if ('inlineSuccess' in form.dataset) {
          form.classList.add('is-sent');
          const done = form.querySelector('[data-done]');
          if (done) {
            const hours = done.dataset.hours ? ` (${done.dataset.hours})` : '';
            done.querySelector('.cform-done-t').textContent = (json.data && json.data.message) || 'Upit je stigao.';
            done.querySelector('[data-done-via]').textContent = via === 'email' ? 'Odgovaramo emailom u radno vrijeme.' : `Javljamo se pozivom u radno vrijeme${hours}.`;
            done.hidden = false;
            done.focus({ preventScroll: true });
          }
        }
        else if (CFG.thanks) setTimeout(() => (location.href = CFG.thanks), +form.dataset.sentDelay || 500);
        else form.reset();
        return;
      }
      throw new Error((json && json.data && json.data.message) || 'send-failed');
    } catch (err) {
      const msg = err && err.message && err.message !== 'send-failed' && !/fetch|network|json/i.test(err.message)
        ? err.message
        : `Slanje trenutno nije uspjelo. Nazovite nas${CFG.phone ? ' na ' + CFG.phone : ''} — javljamo se u radno vrijeme.`;
      setStatus(msg, 'error');
    } finally {
      btn.classList.remove('is-loading');
      btn.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });

  function setStatus(text, kind = '') {
    status.textContent = text;
    status.className = 'cform-status' + (kind ? ` is-${kind}` : '');
  }
}
