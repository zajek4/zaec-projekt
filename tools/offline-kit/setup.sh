#!/usr/bin/env bash
# Offline build kit — kad registry.npmjs.org nije dostupan (mrežna pravila cloud okruženja).
# Povlači izvore three/gsap/lenis s GitHuba (git clone radi), slaže zamjenski node_modules
# i fontove (iz postojećeg zaec/assets/build/assets). Nakon toga: bun tools/offline-kit/build.mjs
# Kad je npm dostupan, koristite normalno: npm ci && npm run build.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
KIT="${ZAEC_KIT:-/tmp/zaec-offline-kit}"
V="$KIT/vendor"; NM="$KIT/node_modules"; B="$ROOT/zaec/assets/build"
mkdir -p "$V" "$NM/@fontsource-variable/archivo" "$NM/@fontsource/instrument-serif" "$NM/@fontsource-variable/jetbrains-mono" "$KIT/assets"
clone() { [ -d "$V/$1" ] || git clone -q --depth 1 "${@:3}" --branch "$2" "https://github.com/$4" "$V/$1"; }
[ -d "$V/three" ] || { git clone -q --depth 1 --filter=blob:none --sparse --branch r186 https://github.com/mrdoob/three.js "$V/three" && git -C "$V/three" sparse-checkout set build examples/jsm; }
[ -d "$V/gsap" ] || git clone -q --depth 1 --branch 3.15.0 https://github.com/greensock/GSAP "$V/gsap"
[ -d "$V/lenis" ] || git clone -q --depth 1 --branch v1.3.26 https://github.com/darkroomengineering/lenis "$V/lenis"
ln -sfn "$V/three" "$NM/three"; ln -sfn "$V/gsap" "$NM/gsap"
rm -rf "$NM/lenis"; mkdir -p "$NM/lenis"; cp -r "$V/lenis/packages/core/src" "$NM/lenis/src"; cp "$V/lenis/packages/core/index.ts" "$NM/lenis/index.ts"
sed -i "s#'../../../package.json'#'../package.json'#" "$NM/lenis/src/lenis.ts"
echo '{"name":"lenis","version":"1.3.26","type":"module","module":"./index.ts","exports":{".":"./index.ts"}}' > "$NM/lenis/package.json"
# Fontovi: @font-face pravila iz postojećeg builda, datoteke ostaju pod istim imenima (vanjske za Bun).
[ -f "$KIT/assets/.done" ] || { cp "$B"/assets/* "$KIT/assets/"; touch "$KIT/assets/.done"; }
ff() { grep -o "@font-face{[^}]*}" "$B/app.css" | grep "$1" | sed 's#url(\./assets/#url(/__ZAEC_ASSETS__/#g'; }
[ -s "$NM/@fontsource-variable/archivo/standard.css" ] || {
  ff Archivo > "$NM/@fontsource-variable/archivo/standard.css"
  ff Instrument > "$NM/@fontsource/instrument-serif/400-italic.css"
  ff JetBrains > "$NM/@fontsource-variable/jetbrains-mono/index.css"
  echo '{"name":"@fontsource-variable/jetbrains-mono","style":"index.css","main":"index.css"}' > "$NM/@fontsource-variable/jetbrains-mono/package.json"
  echo '{"name":"@fontsource-variable/archivo"}' > "$NM/@fontsource-variable/archivo/package.json"
  echo '{"name":"@fontsource/instrument-serif"}' > "$NM/@fontsource/instrument-serif/package.json"
}
[ -e "$ROOT/node_modules" ] || ln -s "$NM" "$ROOT/node_modules"
echo "OK: $NM"
