#!/usr/bin/env python3
"""Mali podskupovi fontova za hrvatska slova (č ć đ š ž i velika).

Fontsource dijeli fontove na latin i latin-ext. Svaka hrvatska stranica zato učitava i cijeli
latin-ext (Archivo 86 kB, JetBrains Mono 15 kB, Instrument Serif 12 kB), iako iz njega treba deset
znakova. Ovdje se iz istih latin-ext datoteka izrežu samo ti znakovi (s osnovnim slovima i
dijakritičkim znakovima koje trebaju kao komponente, varijabilne osi i kerning ostaju).

src/css/fonts.css ih deklarira nakon fontsource pravila, pa za te znakove imaju prednost; puni
latin-ext ostaje kao rezerva i preuzima se samo ako se na stranici pojavi neki drugi znak iz
njegova raspona (npr. ő).

Upotreba:  python3 tools/build-fonts.py
Treba: fonttools, brotli (pip install fonttools brotli) i node_modules (npm ci).
"""
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parent.parent
NM = ROOT / 'node_modules'
OUT = ROOT / 'src/fonts'

# Ć ć Č č Đ đ Š š Ž ž — isti raspon stoji u unicode-range u src/css/fonts.css
HR = [0x106, 0x107, 0x10C, 0x10D, 0x110, 0x111, 0x160, 0x161, 0x17D, 0x17E]

FONTS = {
    'archivo-hr-standard-normal.woff2': '@fontsource-variable/archivo/files/archivo-latin-ext-standard-normal.woff2',
    'jetbrains-mono-hr-wght-normal.woff2': '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-ext-wght-normal.woff2',
    'instrument-serif-hr-400-italic.woff2': '@fontsource/instrument-serif/files/instrument-serif-latin-ext-400-italic.woff2',
}

OUT.mkdir(parents=True, exist_ok=True)
opts = subset.Options()
opts.layout_features = ['*']
opts.flavor = 'woff2'
opts.name_IDs = ['*']
opts.notdef_outline = True
for name, src in FONTS.items():
    font = TTFont(NM / src)
    missing = [hex(c) for c in HR if c not in font.getBestCmap()]
    if missing:
        raise SystemExit(f'{src}: nema znakova {missing}')
    sub = subset.Subsetter(options=opts)
    sub.populate(unicodes=HR)
    sub.subset(font)
    out = OUT / name
    font.flavor = 'woff2'
    font.save(out)
    print(f'{out.relative_to(ROOT)}: {out.stat().st_size / 1024:.1f} kB (izvor {(NM / src).stat().st_size / 1024:.1f} kB)')
