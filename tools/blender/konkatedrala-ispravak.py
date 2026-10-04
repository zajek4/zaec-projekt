# Blender (pozadinski, izolirani korisnički profil): ispravak Higgsfield modela konkatedrale.
# 1) zavari vrhove  2) zonsko preslikavanje proporcija prema stvarnom tlocrtu (OSM) i fotografijama
# 3) decimacija u dvije razine  4) tekstura 1024  5) izvoz GLB (x = istok, y = sjever, z = gore → glTF y-gore, −z = sjever)
import bpy, bmesh, os, math
from mathutils import Vector

OUT = os.path.dirname(os.path.abspath(__file__))
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=os.path.join(OUT, 'hf-cathedral.glb'))
obj = [o for o in bpy.context.scene.objects if o.type == 'MESH'][0]
bpy.context.view_layer.objects.active = obj
obj.select_set(True)
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
me = obj.data

# ── 1. zavarivanje (UV ostaju po petljama) i čišćenje ──
bm = bmesh.new(); bm.from_mesh(me)
bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=0.0004)
bmesh.ops.dissolve_degenerate(bm, edges=bm.edges, dist=1e-6)
# ukloni sitne lebdeće otoke (< 30 lica) koji nisu dio zgrade
bm.faces.ensure_lookup_table()
seen = set(); kill = []
for f in bm.faces:
    if f.index in seen: continue
    comp = []; stack = [f]; seen.add(f.index)
    while stack:
        g = stack.pop(); comp.append(g)
        for e in g.edges:
            for h in e.link_faces:
                if h.index not in seen: seen.add(h.index); stack.append(h)
    if len(comp) < 30: kill.extend(comp)
bmesh.ops.delete(bm, geom=kill, context='FACES')
print('removed small islands faces', len(kill))
bm.to_mesh(me); bm.free()

# ── 2. zonsko preslikavanje ──
S = 30.3  # m po jedinici modela (kalibrirano širinom broda i transepta, 27,3 m / 43,5 m u OSM tlocrtu)
zmin = min(v.co.z for v in me.vertices)
def remap_x(x):
    # zone modela → stvarne duljine (m): apsida | transept | brod | toranj
    pts = [(-0.848, -40.0), (-0.68, -27.0), (-0.17, -11.0), (0.51, 23.9), (0.848, 36.4)]
    if x <= pts[0][0]: return pts[0][1] + (x - pts[0][0]) * S
    for (a, ra), (b, rb) in zip(pts, pts[1:]):
        if x <= b: return ra + (x - a) / (b - a) * (rb - ra)
    return pts[-1][1] + (x - pts[-1][0]) * S
def remap_z(z, tower):
    h = (z - zmin) * S  # visina po kalibraciji
    if not tower:
        # brod i krovni šiljak: blago povećanje, šiljak nad križištem viši
        return h * 1.15 if h < 26 else 26 * 1.15 + (h - 26) * 1.6
    # toranj: tijelo do 46 m → 56 m, šiljak 46–57,5 m → 56–94 m (vitki šiljak kao na fotografijama)
    if h < 26: return h * 1.15
    if h < 46: return 29.9 + (h - 26) * (56 - 29.9) / 20
    return 56 + (h - 46) * (94 - 56) / (57.5 - 46)
for v in me.vertices:
    x, y, z = v.co
    tower = x > 0.47
    nx = remap_x(x)
    ny = y * S * (1.15 if tower else 1.0) + 3.8  # os broda u tlocrtu je na y ≈ 3,8 m
    nz = remap_z(z, tower)
    v.co = Vector((nx, ny, nz))
me.update()
xs = [v.co.x for v in me.vertices]; ys = [v.co.y for v in me.vertices]; zs = [v.co.z for v in me.vertices]
print('REMAPPED x', round(min(xs), 1), round(max(xs), 1), 'y', round(min(ys), 1), round(max(ys), 1), 'z', round(min(zs), 1), round(max(zs), 1))

# ── 3. materijal: smanji teksturu ──
for img in bpy.data.images:
    if img.size[0] > 1024:
        img.scale(1024, 1024)
    img.file_format = 'JPEG'
bpy.ops.object.shade_flat()

def export(name, ratio):
    o = obj.copy(); o.data = obj.data.copy(); bpy.context.scene.collection.objects.link(o)
    bpy.ops.object.select_all(action='DESELECT'); o.select_set(True); bpy.context.view_layer.objects.active = o
    if ratio < 1:
        m = o.modifiers.new('dec', 'DECIMATE'); m.ratio = ratio; m.use_collapse_triangulate = True
        bpy.ops.object.modifier_apply(modifier='dec')
    o.data.calc_loop_triangles()
    print('EXPORT', name, 'tris', len(o.data.loop_triangles))
    bpy.ops.export_scene.gltf(filepath=os.path.join(OUT, name), export_format='GLB', use_selection=True, export_image_format='JPEG', export_jpeg_quality=82, export_apply=True, export_normals=True, export_texcoords=True, export_materials='EXPORT', export_yup=True)
    bpy.data.objects.remove(o, do_unlink=True)

tris = sum(len(p.vertices) - 2 for p in me.polygons)
print('base tris', tris)
export('cath-hi.glb', 46000 / tris)
export('cath-lo.glb', 15000 / tris)
export('cath-lines.glb', 5200 / tris)

# pregledni render iz stvarnog kuta (s jugozapada trga) i bočno
scene = bpy.context.scene
scene.render.engine = 'BLENDER_EEVEE'
scene.render.resolution_x = 700; scene.render.resolution_y = 900
world = bpy.data.worlds.new('w'); scene.world = world; world.use_nodes = True
world.node_tree.nodes['Background'].inputs[0].default_value = (0.55, 0.62, 0.78, 1)
sun = bpy.data.objects.new('sun', bpy.data.lights.new('sun', 'SUN')); scene.collection.objects.link(sun)
sun.rotation_euler = (math.radians(55), 0, math.radians(-40)); sun.data.energy = 3.5
cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); scene.collection.objects.link(cam); scene.camera = cam
cam.data.lens = 35
for name, loc in {'fix_ne': (150, 110, 25), 'fix_south': (0, -170, 30), 'fix_tower': (110, -60, 8)}.items():
    cam.location = Vector(loc)
    cam.rotation_euler = (Vector((0, 4, 38)) - cam.location).to_track_quat('-Z', 'Y').to_euler()
    scene.render.filepath = os.path.join(OUT, name + '.png')
    bpy.ops.render.render(write_still=True)
print('DONE')
