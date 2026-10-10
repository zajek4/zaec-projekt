#!/usr/bin/env python3
"""Noćna svjetla za world3 (globus + karta Europe).

Izvor: NASA Earth Observatory / NOAA NGDC, "Earth's City Lights" (kompozit DMSP-OLS, ~2000.),
javno vlasništvo (NASA). Ista slika se distribuira u three.js repozitoriju:
  https://raw.githubusercontent.com/mrdoob/three.js/r160/examples/textures/planets/earth_lights_2048.png

Izvorna slika ima i tamnoplavu podlogu kopna/oceana; svjetla su neutralna/žuta. Signal svjetla je
min(R, G) iznad praga podloge (26), normaliziran na 0…1, ekvirektangularno 2048×1024 (0,176°/px).
Prikaz na webu je stiliziran (matrica točaka), ne mjerenje: gustoća i raspored dolaze iz snimke.

Upotreba:  python3 tools/build-lights.py <earth_lights_2048.png> [izlaz.webp]
Treba: Pillow, numpy.
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image

src = Path(sys.argv[1])
out = Path(sys.argv[2]) if len(sys.argv) > 2 else Path(__file__).resolve().parent.parent / 'zaec/assets/img/world/lights.webp'

rgb = np.asarray(Image.open(src).convert('RGB')).astype(np.float32)
if rgb.shape[:2] != (1024, 2048):
    raise SystemExit(f'očekivano 2048×1024, dobiveno {rgb.shape[1]}×{rgb.shape[0]}')
light = np.clip((np.minimum(rgb[..., 0], rgb[..., 1]) - 26.0) / 229.0, 0.0, 1.0)
Image.fromarray(np.round(light * 255).astype(np.uint8)).save(out, 'WEBP', lossless=True, method=6)
print(f'{out}: {out.stat().st_size / 1024:.0f} kB, osvijetljeno {np.mean(light > 0) * 100:.1f} % piksela')
