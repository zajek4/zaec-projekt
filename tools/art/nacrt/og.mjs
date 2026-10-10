// og/nacrt-<slug>.jpg 1200×630: lijevo naslov stranice na papiru i znak ZAEC (čitljiv i u feedu na 500 px),
// desno list nacrta (desktop pogled).
// Snima s lokalnog WP-a (stilovi i fontovi teme, build iz grane); node tools/art/nacrt/og.mjs <outdir> <slug>...
// Slug je list djelatnosti (/djelatnosti/<slug>/); za ostale stranice s listom <slug>@<put>, npr. seo@/usluge/seo/.
// Playwright nije ovisnost repozitorija: uzima se globalno instaliran (PW_FROM = mapa node_modules).
// Adresa WP-a: ZAEC_URL (zadano http://127.0.0.1:8080).
import { createRequire } from 'module';
const require = createRequire(process.env.PW_FROM || '/opt/node22/lib/node_modules/');
const { chromium } = require('playwright');
const base = (process.env.ZAEC_URL || 'http://127.0.0.1:8080').replace(/\/$/, '');
const [,, out, ...slugs] = process.argv;
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
const p = await ctx.newPage();
for (const arg of slugs) {
  const [slug, path] = arg.split('@');
  const url = `${base}${path || `/djelatnosti/${slug === 'djelatnosti' ? '' : slug + '/'}`}`;
  await p.goto(url, { waitUntil: 'networkidle' });
  await p.evaluate((own) => {
    const h1 = document.querySelector('.eh-title').innerHTML;
    const svg = document.querySelector('.eh-frame.nacrt svg.d').outerHTML;
    const logo = document.querySelector('.brand .zaec-logo').outerHTML;
    const tb = [...document.querySelectorAll('.eh-frame.nacrt svg.d text')].map((t) => t.textContent).find((t) => /^LIST \d/.test(t)) || '';
    // usluge i ostale stranice: kicker same stranice („Usluga · U.05“)
    const kicker = own ? (document.querySelector('.eh .kicker')?.textContent || '').trim() : `Nacrt djelatnosti${tb ? ' · ' + tb.replace('LIST ', 'list ') : ''}`;
    document.documentElement.className = '';
    document.body.className = '';
    document.body.innerHTML = `<div class="og"><div class="og-copy"><p class="kicker">${kicker}</p><h1 class="h1">${h1}</h1></div><div class="og-brand">${logo}<span class="og-word"><b>ZAEC</b><span>web studio · Osijek</span></span></div><div class="eh-frame nacrt og-frame">${svg}</div></div>`;
    const st = document.createElement('style');
    st.textContent = `html,body{margin:0;background:var(--paper);overflow:hidden}body{width:1200px;height:630px;position:relative}
      body::before,body::after{display:none!important}
      .og-copy{position:absolute;left:60px;top:48px;bottom:96px;width:452px;display:flex;flex-direction:column;justify-content:center;gap:20px}
      .og-copy .h1{margin:0;font-size:48px;line-height:1.02;color:var(--ink);text-wrap:balance}
      .og-copy .h1 em{color:var(--signal)}
      .og-brand{position:absolute;left:60px;bottom:40px;display:flex;align-items:center;gap:16px;color:var(--ink)}
      .og-brand .zaec-logo{width:62px;height:auto;fill:currentColor}
      .og-word b{display:block;font-weight:850;font-size:30px;line-height:1;letter-spacing:.02em;font-variation-settings:'wdth' 125}
      .og-word span{display:block;margin-top:7px;font-family:var(--font-mono);font-size:15px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3)}
      .og-frame{position:absolute!important;left:560px!important;top:0!important;bottom:0!important;right:0!important;border-radius:26px 0 0 26px;overflow:hidden;box-shadow:none}`;
    document.head.appendChild(st);
  }, Boolean(path));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(400);
  await p.screenshot({ path: `${out}/nacrt-${slug}.jpg`, type: 'jpeg', quality: 82 });
  console.log(slug);
}
await b.close();
