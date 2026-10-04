// Markdown vodiči (content/vodici/*.md) → zaec/inc/seed/guides/*.html + guides.json (seed WordPress objava).
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const SRC = 'content/vodici';
const OUT = 'zaec/inc/seed/guides';
fs.mkdirSync(OUT, { recursive: true });
const slugify = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

marked.use({
  gfm: true,
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const id = slugify(text.replace(/<[^>]+>/g, ''));
      return `<h${depth} id="${id}">${text}</h${depth}>\n`;
    },
  },
});

const manifest = [];
for (const f of fs.readdirSync(SRC).filter((x) => x.endsWith('.md'))) {
  const raw = fs.readFileSync(path.join(SRC, f), 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const fm = {};
  m[1].split('\n').forEach((line) => {
    const mm = line.match(/^(\w+):\s*(.*)$/);
    if (mm) fm[mm[1]] = mm[2].replace(/^'(.*)'$/, '$1').replace(/''/g, "'");
  });
  const slug = f.replace(/\.md$/, '');
  const html = marked.parse(m[2]);
  fs.writeFileSync(path.join(OUT, `${slug}.html`), html);
  manifest.push({ slug, title: fm.title, short: fm.short, description: fm.description, date: fm.date, readMin: +fm.readMin, kicker: fm.kicker, order: +fm.order });
}
manifest.sort((a, b) => a.order - b.order);
fs.writeFileSync(path.join(OUT, 'guides.json'), JSON.stringify(manifest, null, 2));
console.log('vodiči:', manifest.map((g) => g.slug).join(', '));
