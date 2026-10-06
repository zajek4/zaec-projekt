import * as THREE from 'three';
import { loadCathedral } from './osijek.js';
export default {
  file: 'tmp/probe.png', w: 200, h: 200,
  async build(st) {
    const c = await loadCathedral();
    c.geo.computeBoundingBox();
    const p = c.geo.attributes.position;
    // tower footprint: vertices with y > 45
    let mnx = 1e9, mxx = -1e9, mnz = 1e9, mxz = -1e9;
    for (let i = 0; i < p.count; i++) if (p.getY(i) > 45) { mnx = Math.min(mnx, p.getX(i)); mxx = Math.max(mxx, p.getX(i)); mnz = Math.min(mnz, p.getZ(i)); mxz = Math.max(mxz, p.getZ(i)); }
    // nave top height
    let naveTop = 0; for (let i = 0; i < p.count; i++) if (p.getX(i) < mnx - 2) naveTop = Math.max(naveTop, p.getY(i));
    st.meta = { box: c.geo.boundingBox, tower: { mnx, mxx, mnz, mxz }, naveTop };
  },
};
