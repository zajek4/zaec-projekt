# Analiza modela: širine po presjecima, položaj tornja, otoci (loose parts).
import bpy, bmesh, os
from mathutils import Vector

OUT = os.path.dirname(os.path.abspath(__file__))
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=os.path.join(OUT, 'hf-cathedral.glb'))
obj = [o for o in bpy.context.scene.objects if o.type == 'MESH'][0]
bpy.context.view_layer.objects.active = obj
obj.select_set(True)
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
me = obj.data
vs = [v.co.copy() for v in me.vertices]
zmin = min(v.z for v in vs); zmax = max(v.z for v in vs)
top = max(vs, key=lambda v: v.z)
print('Z', round(zmin, 3), round(zmax, 3), 'spire tip at', tuple(round(c, 3) for c in top))
H = zmax - zmin
# širina (y) i duljina (x) po visinskim pojasevima
for frac in (0.02, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9):
    z0 = zmin + H * frac; band = [v for v in vs if abs(v.z - z0) < H * 0.02]
    if band:
        print('band', frac, 'x', round(min(v.x for v in band), 3), round(max(v.x for v in band), 3), 'y', round(min(v.y for v in band), 3), round(max(v.y for v in band), 3), 'n', len(band))
# širina y po x presjecima na niskoj visini
low = [v for v in vs if v.z < zmin + H * 0.15]
xs = sorted(v.x for v in low)
x0, x1 = xs[0], xs[-1]
for k in range(11):
    xc = x0 + (x1 - x0) * k / 10
    sl = [v for v in low if abs(v.x - xc) < (x1 - x0) * 0.03]
    if sl:
        print('xslice', round(xc, 3), 'y', round(min(v.y for v in sl), 3), round(max(v.y for v in sl), 3))
# otoci
bm = bmesh.new(); bm.from_mesh(me)
bm.faces.ensure_lookup_table()
seen = set(); islands = []
for f in bm.faces:
    if f.index in seen: continue
    stack = [f]; seen.add(f.index); cnt = 0; mnv = Vector((9, 9, 9)); mxv = Vector((-9, -9, -9))
    while stack:
        g = stack.pop(); cnt += 1
        for v in g.verts:
            mnv = Vector((min(mnv.x, v.co.x), min(mnv.y, v.co.y), min(mnv.z, v.co.z))); mxv = Vector((max(mxv.x, v.co.x), max(mxv.y, v.co.y), max(mxv.z, v.co.z)))
            for h in v.link_faces:
                if h.index not in seen: seen.add(h.index); stack.append(h)
    islands.append((cnt, tuple(round(c, 2) for c in mnv), tuple(round(c, 2) for c in mxv)))
islands.sort(reverse=True)
print('ISLANDS', len(islands))
for i in islands[:12]: print('  island', i)
