// npm run art → http://127.0.0.1:5174/?s=elektricari (dodajte &save=1 za spremanje u zaec/assets/img/)
import { defineConfig } from 'vite';
import path from 'node:path';
import fs from 'node:fs';
import sharp from 'sharp';

// bez predmemorije: dodatne širine (-1600, -720) čitaju upravo spremljenu datoteku, ne stari sadržaj iste putanje
sharp.cache(false);
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));

const ROOT = path.resolve(HERE, '../..');
const OUT = path.join(ROOT, 'zaec/assets/img');

export default defineConfig({
  root: HERE,
  publicDir: false,
  define: { __ROOT__: JSON.stringify(ROOT) },
  server: { port: 5174, host: '127.0.0.1', fs: { allow: [ROOT] } },
  plugins: [{
    name: 'zaec-art-save',
    configureServer(server) {
      server.middlewares.use('/save', async (req, res) => {
        const url = new URL(req.url, 'http://x');
        const name = url.searchParams.get('name') || '';
        if (req.method !== 'POST' || !/^[a-z0-9/_-]+\.(webp|png|jpg|json)$/.test(name)) { res.statusCode = 400; return res.end('bad'); }
        const chunks = [];
        for await (const c of req) chunks.push(c);
        // metapodaci kadra (položaji etaža, prozora… u postocima slike) — za poravnanje HTML-a sa slikom
        if (name.endsWith('.json')) {
          const out = path.join(OUT, name);
          fs.mkdirSync(path.dirname(out), { recursive: true });
          fs.writeFileSync(out, JSON.stringify(JSON.parse(Buffer.concat(chunks).toString()), null, 1));
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({ ok: true, name }));
        }
        const w = +url.searchParams.get('w') || null, h = +url.searchParams.get('h') || null, q = +url.searchParams.get('q') || 80;
        const out = path.join(OUT, name);
        fs.mkdirSync(path.dirname(out), { recursive: true });
        let img = sharp(Buffer.concat(chunks));
        if (w) img = img.resize(w, h, { kernel: 'lanczos3' });
        const blur = +url.searchParams.get('blur') || 0;
        if (blur) img = img.blur(blur);
        img = name.endsWith('.webp') ? img.webp({ quality: q, effort: 6, smartSubsample: true, alphaQuality: 90 }) : name.endsWith('.jpg') ? img.jpeg({ quality: q, mozjpeg: true }) : img.png({ compressionLevel: 9 });
        const info = await img.toFile(out);
        // dodatne širine za srcset: &also=1600,1080 → <ime>-1600.webp …
        const also = (url.searchParams.get('also') || '').split(',').map(Number).filter(Boolean);
        const extra = [];
        for (const aw of also) {
          const o2 = out.replace(/\.(webp|png|jpg)$/, `-${aw}.$1`);
          let i2 = sharp(out).resize(aw, null, { kernel: 'lanczos3' });
          i2 = o2.endsWith('.webp') ? i2.webp({ quality: q, effort: 6, smartSubsample: true, alphaQuality: 90 }) : i2.png({ compressionLevel: 9 });
          const inf = await i2.toFile(o2);
          extra.push(`${aw}:${Math.round(inf.size / 1024)}kB`);
        }
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ ok: true, name, w: info.width, h: info.height, kb: Math.round(info.size / 1024), extra }));
      });
    },
  }],
});
