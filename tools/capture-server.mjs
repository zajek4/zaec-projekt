// Razvojni alat: poslužuje repo statički i sprema PNG/WebP kadrove 3D svijeta u zaec/assets/img.
// 1) CAPTURE=1 npx vite build   2) node tools/capture-server.mjs   3) otvori http://127.0.0.1:4399/tools/capture.html
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('.');
const OUT = path.resolve('zaec/assets/img');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp' };

http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  if (req.method === 'POST' && url.pathname === '/save') {
    const name = url.searchParams.get('name') || '';
    if (!/^[a-z0-9/_-]+\.(png|webp|jpg)$/.test(name)) { res.statusCode = 400; return res.end('bad'); }
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const out = path.join(OUT, name);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    const q = +(url.searchParams.get('q') || 82);
    let img = sharp(Buffer.concat(chunks));
    img = name.endsWith('.webp') ? img.webp({ quality: q, effort: 6, alphaQuality: 90 }) : name.endsWith('.jpg') ? img.jpeg({ quality: q, mozjpeg: true }) : img.png({ compressionLevel: 9 });
    const info = await img.toFile(out);
    console.log('saved', name, `${info.width}x${info.height}`, Math.round(info.size / 1024) + ' kB');
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ ok: true, name, size: info.size }));
  }
  const file = path.join(ROOT, decodeURIComponent(url.pathname));
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.statusCode = 404; return res.end('404'); }
  res.setHeader('Content-Type', TYPES[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
}).listen(4399, '127.0.0.1', () => console.log('capture: http://127.0.0.1:4399/tools/capture.html'));
