# Noćno nebo (Mliječna staza)

`mlijecna-staza-izvor.jpg` je generiran u Higgsfieldu 16. 10. 2026. (model GPT Image 2.5, 21:9, 4k, kvaliteta high,
4,25 kredita po slici; od dvije varijante odabrana je hladnija, job `8b488270-2a72-4772-85ab-b8b7fab0f34f`).

Upit:

> Astrophotography of the deep night sky seen from space: the Milky Way galactic band crossing the whole frame
> diagonally from lower left to upper right, faint and soft, with subtle dark dust lanes and a very gentle cool
> blue-white core glow, a hint of warm dust only near the galactic center. Thousands of tiny pin-point stars of
> varying brightness, mostly very small and sharp, denser along the band and sparse away from it. Background is
> near-black deep navy (#03050b). No planets, no moon, no horizon, no landscape, no nebula clouds, no lens flares,
> no text, no vignette. Calm, realistic, understated, wide panorama, seamless sky.

`python3 tools/sky/build-sky.py` iz nje radi `zaec/assets/img/world/sky-mw.webp` (sjaj pojasa, 2048 px, ~12 kB)
i `zaec/assets/data/sky-stars.bin` (2600 zvijezda, ~15 kB). Prikaz: `src/js/world3/sky.js`; položaj pojasa na nebu je
`ORIENT` u tom modulu, jačina `SKY_BAND` / `SKY_BAND_NIGHT` u `src/js/world3/index.js`.
