// npm run art → http://127.0.0.1:5174/?s=elektricari (dodajte &save=1 za spremanje u zaec/assets/img/)
import { defineConfig } from 'vite';
import path from 'node:path';
import fs from 'node:fs';
import sharp from 'sharp';
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
        if (req.method !== 'POST' || !/^[a-z0-9/_-]+\.(webp|png|jpg)$/.test(name)) { res.statusCode = 400; return res.end('bad'); }
        const chunks = [];
        for await (const c of req) chunks.push(c);
        const w = +url.searchParams.get('w') || null, h = +url.searchParams.get('h') || null, q = +url.searchParams.get('q') || 80;
        const out = path.join(OUT, name);
        fs.mkdirSync(path.dirname(out), { recursive: true });
        let img = sharp(Buffer.concat(chunks));
        if (w) img = img.resize(w, h, { kernel: 'lanczos3' });
        const blur = +url.searchParams.get('blur') || 0;
        if (blur) img = img.blur(blur);
        img = name.endsWith('.webp') ? img.webp({ quality: q, effort: 6, smartSubsample: true }) : name.endsWith('.jpg') ? img.jpeg({ quality: q, mozjpeg: true }) : img.png({ compressionLevel: 9 });
        const info = await img.toFile(out);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ ok: true, name, w: info.width, h: info.height, kb: Math.round(info.size / 1024) }));
      });
    },
  }],
});
