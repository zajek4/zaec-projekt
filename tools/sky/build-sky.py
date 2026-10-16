#!/usr/bin/env python3
"""Noćno nebo za world3: Mliječna staza (tekstura sjaja i zvijezde pojasa) iz Higgsfield slike + prave zvijezde.

Izvor: tools/sky/mlijecna-staza-izvor.jpg, generirano u Higgsfieldu (GPT Image 2.5, 21:9, 4k), vidi README.md.
Slika nije sferna panorama, pa se ne lijepi na kuglu kao takva:
  1. pojas se izravna (nagib iz težišta svjetline) i izreže vodoravna traka oko njega;
  2. traka se zatvori u krug od 360° galaktičke dužine (krajevi se pretapaju), visina trake = ±LAT° širine;
  3. zvijezde se izdvoje iz trake (vrhovi iznad morfološkog otvaranja) i spreme kao točke: oštre su na svakom
     zaslonu, a tekstura nosi samo mekani sjaj i tamne prašine (može biti niske razlučivosti, 2048 px).
  4. prave zvijezde (Yale Bright Star Catalogue, V < 5,5, bsc5-v55.csv) prevode se u galaktičke koordinate, pa
     zviježđa stoje gdje stoje na nebu, a pojas slike leži na galaktičkom ekvatoru s jezgrom prema Strijelcu.
Okvir neba: x prema središtu Galaktike (l = 0), y prema sjevernom galaktičkom polu, z prema l = 270°.
Izlaz: zaec/assets/img/world/sky-mw.webp (RGB, sjaj iznad crne podloge) i zaec/assets/data/sky-stars.bin:
zaglavlje f32 LAT (polovica visine trake, °) + u32 broj pravih zvijezda; zatim po zvijezdi 6 B (u16 dužina 0…1,
i16 širina, u8 sjaj, u8 boja). Prave zvijezde: širina u ±90°, dužina u okviru neba. Zvijezde pojasa: dužina i
širina unutar trake (0…1, ±LAT). Obje skupine su poredane od najsjajnije, pa lite uzima prefiks.

Upotreba:  python3 tools/sky/build-sky.py [izvor] [zasićenje]
Treba: Pillow, numpy.
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent.parent
src = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parent / 'mlijecna-staza-izvor.jpg'
OUT_TEX = ROOT / 'zaec/assets/img/world/sky-mw.webp'
OUT_STARS = ROOT / 'zaec/assets/data/sky-stars.bin'
TEX_W = 2048
MAX_STARS = 1400  # zvijezde pojasa (prikaz ih ponavlja za svako ponavljanje trake)
SAT = float(sys.argv[2]) if len(sys.argv) > 2 else 1.8  # izvor je gotovo siv: pojas dobiva nešto više boje (plavo, toplo u jezgri)
CATALOG = Path(__file__).resolve().parent / 'bsc5-v55.csv'

im = Image.open(src).convert('RGB')
W0, H0 = im.size

# 1. nagib pojasa: težište i glavna os svjetline (jako zamućeno, iznad 70. percentila)
small = im.resize((W0 // 4, H0 // 4), Image.BILINEAR).filter(ImageFilter.GaussianBlur(12))
L = np.asarray(small.convert('L')).astype(np.float64)
w = np.clip(L - np.percentile(L, 70), 0, None)
ys, xs = np.indices(L.shape)
S = w.sum()
mx, my = (w * xs).sum() / S, (w * ys).sum() / S
cxx = (w * (xs - mx) ** 2).sum() / S
cyy = (w * (ys - my) ** 2).sum() / S
cxy = (w * (xs - mx) * (ys - my)).sum() / S
ang = 0.5 * np.degrees(np.arctan2(2 * cxy, cxx - cyy))

rot = im.rotate(ang, resample=Image.BICUBIC, center=(mx * 4, my * 4), expand=False)
valid = np.asarray(Image.new('L', im.size, 255).rotate(ang, resample=Image.NEAREST, center=(mx * 4, my * 4))) > 0

# 2. traka: redovi oko središta pojasa u kojima je širina potpuno valjana; uzima se najduži zajednički raspon stupaca
cy = int(round(my * 4))
half = int(H0 * 0.13)
rows = valid[cy - half:cy + half]
cols = np.where(rows.all(axis=0))[0]
x0, x1 = cols[0] + 2, cols[-1] - 2
strip = np.asarray(rot).astype(np.float32)[cy - half:cy + half, x0:x1]
Hs, Ws = strip.shape[:2]

# zvijezde od sjaja: otvaranje (min pa max) briše točke do ~5 px, ostaje maglica i prašina
def opening(arr, k):
    img = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
    return np.asarray(img.filter(ImageFilter.MinFilter(k)).filter(ImageFilter.MaxFilter(k))).astype(np.float32)

# kvadratni prozor otvaranja ostavlja mrlje, pa se sjaj još zamućuje (pojas je ionako mekan)
glow = np.stack([np.asarray(Image.fromarray(np.clip(opening(strip[..., c], 5), 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(4))).astype(np.float32) for c in range(3)], -1)
lum = strip.mean(-1)
top = lum - opening(lum, 7)

# 3. zvijezde: lokalni vrhovi gornjeg šešira
pk = np.asarray(Image.fromarray(np.clip(top, 0, 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(5))).astype(np.float32)
cand = (top >= pk) & (top > 14)
cand[:4] = cand[-4:] = False
cand[:, :4] = cand[:, -4:] = False
py, px = np.nonzero(cand)
val = top[py, px]
order = np.argsort(-val)
py, px, val = py[order], px[order], val[order]
# boja: omjer plavog i crvenog u jezgri (0 = toplo, 255 = hladno)
r = strip[py, px, 0] + 1
b = strip[py, px, 2] + 1
temp = np.clip((np.log(b / r) + 0.35) / 0.9, 0, 1)

# 4. zatvaranje kruga: zadnji dio trake se pretapa u prvi, pa je duljina N = Ws - OV
OV = int(Ws * 0.12)
N = Ws - OV
t = np.linspace(0, 1, OV)[None, :, None]
ring = glow[:, :N].copy()
ring[:, :OV] = glow[:, N:N + OV] * (1 - t) + glow[:, :OV] * t
deg_px = 360.0 / N
LAT = half * deg_px  # polovica visine trake u stupnjevima

# zvijezde u pretopu: zadrži samo one iz jednog izvora (prema težini pretopa), bez udvostručenja
keep = (px < N) | (np.random.default_rng(7).random(px.size) > (px - N) / OV)
keep &= ~((px < OV) & (np.random.default_rng(8).random(px.size) > px / OV))
py, px, val, temp = py[keep], px[keep], val[keep], temp[keep]
px = np.where(px >= N, px - N, px)
py, px, val, temp = py[:MAX_STARS], px[:MAX_STARS], val[:MAX_STARS], temp[:MAX_STARS]

# podloga: crna razina slike se oduzima (nebo izvan pojasa ne smije sivjeti), prema rubovima trake sjaj nestaje
bg = np.percentile(ring.reshape(-1, 3), 35, axis=0)
ring = np.clip(ring - bg, 0, None)
v = np.linspace(-1, 1, Hs)[:, None, None]
ring *= (1 - np.clip((np.abs(v) - 0.55) / 0.45, 0, 1) ** 2 * 1.0) ** 2
gain = 255.0 / max(1.0, np.percentile(ring, 99.95))
tex = Image.fromarray(np.clip(ring * gain, 0, 255).astype(np.uint8))
TEX_H = int(round(TEX_W * Hs / N / 4)) * 4
tex = tex.resize((TEX_W, TEX_H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(0.6))
a = np.asarray(tex).astype(np.float32)
gray = a.mean(-1, keepdims=True)
tex = Image.fromarray(np.clip(gray + (a - gray) * SAT, 0, 255).astype(np.uint8))
OUT_TEX.parent.mkdir(parents=True, exist_ok=True)
tex.save(OUT_TEX, 'WEBP', quality=82, method=6)

lon = (px + 0.5) / N  # 0…1
lat = (0.5 - (py + 0.5) / Hs) * 2  # -1…1 unutar ±LAT
mag = np.clip(val / np.percentile(val, 99.5), 0, 1) ** 0.75 * 0.6  # pojas je pozadina: prave zvijezde su sjajnije
rec = np.zeros(lon.size, dtype=[('lon', '<u2'), ('lat', '<i2'), ('mag', 'u1'), ('tmp', 'u1')])
rec['lon'] = np.round(lon * 65535)
rec['lat'] = np.round(lat * 32767)
rec['mag'] = np.round(mag * 255)
rec['tmp'] = np.round(temp * 255)
OUT_STARS.parent.mkdir(parents=True, exist_ok=True)
# 5. prave zvijezde: ekvatorske J2000 → galaktičke (IAU), pa u okvir neba (dužina = −l)
cat = np.loadtxt(CATALOG, delimiter=',', comments='#', usecols=(0, 1, 2, 3))
ra, de = np.radians(cat[:, 0]), np.radians(cat[:, 1])
eq = np.stack([np.cos(de) * np.cos(ra), np.cos(de) * np.sin(ra), np.sin(de)])
Rg = np.array([[-0.0548755604, -0.8734370902, -0.4838350155],
               [0.4941094279, -0.4448296300, 0.7469822445],
               [-0.8676661490, -0.1980763734, 0.4559837762]])
gx, gy, gz = Rg @ eq
gl = np.arctan2(gy, gx)
gb = np.arcsin(np.clip(gz, -1, 1))
real = np.zeros(len(cat), dtype=rec.dtype)
real['lon'] = np.round(((-gl / (2 * np.pi)) % 1.0) * 65535)
real['lat'] = np.round(gb / (np.pi / 2) * 32767)
real['mag'] = np.round(np.clip((5.8 - cat[:, 2]) / 7.2, 0, 1) ** 0.8 * 255)
real['tmp'] = np.round(np.clip((np.log(cat[:, 3]) - np.log(3200)) / (np.log(14000) - np.log(3200)), 0, 1) * 255)
OUT_STARS.write_bytes(np.array([LAT], '<f4').tobytes() + np.array([len(real)], '<u4').tobytes() + real.tobytes() + rec.tobytes())

print(f'nagib {ang:.1f}°, traka {Ws}×{Hs} px, krug {N} px = {deg_px:.3f}°/px, širina ±{LAT:.1f}°')
print(f'{OUT_TEX.name}: {TEX_W}×{TEX_H}, {OUT_TEX.stat().st_size / 1024:.0f} kB')
print(f'{OUT_STARS.name}: {len(real)} pravih + {lon.size} zvijezda pojasa, {OUT_STARS.stat().st_size / 1024:.1f} kB (LAT={LAT:.2f})')
