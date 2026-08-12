/*
 * ZAEC Earth Hero
 *
 * WordPress ships this module directly, so the scene deliberately uses local
 * Three.js modules and local data instead of a Vite-only import pipeline.
 * City points are informational UI; no measured traffic or live analytics is
 * implied by the scene.
 */
import * as THREE from './vendor/three.module.min.js';
import { EffectComposer } from './vendor/postprocessing/EffectComposer.js';
import { RenderPass } from './vendor/postprocessing/RenderPass.js';
import { UnrealBloomPass } from './vendor/postprocessing/UnrealBloomPass.js';
import { Regions } from './Regions.js';

(function () {
  'use strict';

  var doc = document;
  var WIN = window;
  var root = doc.getElementById('earthHero');
  if (!root) return;

  var canvas = doc.getElementById('earthCanvas');
  var tooltip = doc.getElementById('earthTooltip');
  var loader = doc.getElementById('earthLoader');
  var progressEl = doc.getElementById('earthProgress');
  var progressLabel = doc.getElementById('earthProgressLabel');
  var statusEl = doc.getElementById('earthStatus');
  var nodeCountEl = doc.getElementById('earthNodeCount');
  var flowCountEl = doc.getElementById('earthFlowCount');

  if (!canvas) return;

  var reducedMotion = WIN.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var coarsePointer = WIN.matchMedia('(pointer: coarse)').matches;
  var lowPower = coarsePointer || (WIN.navigator.hardwareConcurrency || 8) < 4;
  var hasGSAP = !!WIN.gsap;
  if (lowPower) root.classList.add('is-low-power');
  if (reducedMotion) root.classList.add('is-reduced');
  var cfg = WIN.ZAEC_EARTH || {};
  var COLORS = {
    cyan: 0x00e5ff,
    amber: 0xffb700,
    finance: 0x00e5ff,
    tech: 0x00ffaa,
    industry: 0xff5577,
    trade: 0xffcc00,
    partner: 0x88aaff,
    network: 0x00e5ff,
    white: 0xd9fbff
  };
  var RADIUS = 5;
  var state = {
    renderer: null,
    composer: null,
    scene: null,
    camera: null,
    controls: null,
    globe: null,
    planetMaterial: null,
    cityMaterial: null,
    atmosphereMaterial: null,
    regions: null,
    hq: null,
    nodes: [],
    nodePoints: null,
    flows: [],
    flowPool: [],
    ripples: [],
    ripplePool: [],
    flowTimer: 0.35,
    flowCursor: 0,
    active: true,
    destroyed: false,
    time: 0,
    last: performance.now(),
    raycaster: new THREE.Raycaster(),
    pointer: new THREE.Vector2(2, 2),
  };

  var PLANET_VERTEX = '\n' +
    'uniform sampler2D uHeightmap;\n' +
    'uniform float uDisplacement;\n' +
    'uniform float uTime;\n' +
    'varying vec2 vUv;\n' +
    'varying vec3 vNormal;\n' +
    'varying float vPulse;\n' +
    'void main() {\n' +
    '  vUv = uv;\n' +
    '  vNormal = normalize(normalMatrix * normal);\n' +
    '  float h = texture2D(uHeightmap, uv).r;\n' +
    '  vec3 displaced = position + normal * ((h - 0.5) * uDisplacement);\n' +
    '  vPulse = 0.5 + 0.5 * sin(uTime * 0.7 + uv.y * 32.0);\n' +
    '  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);\n' +
    '}';

  var PLANET_FRAGMENT = '\n' +
    'uniform vec3 uColor;\n' +
    'uniform float uTime;\n' +
    'varying vec2 vUv;\n' +
    'varying vec3 vNormal;\n' +
    'varying float vPulse;\n' +
    'void main() {\n' +
    '  float scan = 0.72 + 0.28 * sin((vUv.y * 240.0) - uTime * 4.0);\n' +
    '  float rim = 0.78 + 0.22 * pow(1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0), 2.0);\n' +
    '  vec3 color = uColor * (0.08 + scan * 0.035 + vPulse * 0.02);\n' +
    '  gl_FragColor = vec4(color, 0.12 + rim * 0.035);\n' +
    '}';

  var ATMOSPHERE_VERTEX = '\n' +
    'varying vec3 vWorldNormal;\n' +
    'varying vec3 vWorldPosition;\n' +
    'void main() {\n' +
    '  vec4 world = modelMatrix * vec4(position, 1.0);\n' +
    '  vWorldPosition = world.xyz;\n' +
    '  vWorldNormal = normalize(mat3(modelMatrix) * normal);\n' +
    '  gl_Position = projectionMatrix * viewMatrix * world;\n' +
    '}';

  var ATMOSPHERE_FRAGMENT = '\n' +
    'uniform vec3 uColor;\n' +
    'uniform float uTime;\n' +
    'varying vec3 vWorldNormal;\n' +
    'varying vec3 vWorldPosition;\n' +
    'void main() {\n' +
    '  vec3 viewDir = normalize(cameraPosition - vWorldPosition);\n' +
    '  float fresnel = pow(1.0 - max(dot(vWorldNormal, viewDir), 0.0), 3.0);\n' +
    '  float pulse = 0.82 + 0.18 * sin(uTime * 1.1);\n' +
    '  gl_FragColor = vec4(uColor, fresnel * 0.72 * pulse);\n' +
    '}';

  var CITY_VERTEX = '\n' +
    'attribute vec3 aColor;\n' +
    'attribute float aSize;\n' +
    'attribute float aHq;\n' +
    'varying vec3 vColor;\n' +
    'varying float vHq;\n' +
    'void main() {\n' +
    '  vColor = aColor;\n' +
    '  vHq = aHq;\n' +
    '  vec4 mv = modelViewMatrix * vec4(position, 1.0);\n' +
    '  gl_PointSize = clamp(aSize * (230.0 / max(-mv.z, 1.0)), 2.0, 18.0);\n' +
    '  gl_Position = projectionMatrix * mv;\n' +
    '}';

  var CITY_FRAGMENT = '\n' +
    'uniform float uTime;\n' +
    'varying vec3 vColor;\n' +
    'varying float vHq;\n' +
    'void main() {\n' +
    '  vec2 p = gl_PointCoord - 0.5;\n' +
    '  float d = length(p);\n' +
    '  if (d > 0.5) discard;\n' +
    '  float glow = smoothstep(0.5, 0.0, d);\n' +
    '  float beat = vHq > 0.5 ? (0.78 + 0.22 * sin(uTime * 4.0)) : 1.0;\n' +
    '  gl_FragColor = vec4(vColor * (1.0 + glow * 0.8) * beat, glow * (vHq > 0.5 ? 1.0 : 0.72));\n' +
    '}';

  var FLOW_VERTEX = '\n' +
    'attribute float aT;\n' +
    'varying float vT;\n' +
    'void main() {\n' +
    '  vT = aT;\n' +
    '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n' +
    '}';

  var FLOW_FRAGMENT = '\n' +
    'uniform float uProgress;\n' +
    'uniform vec3 uColor;\n' +
    'varying float vT;\n' +
    'void main() {\n' +
    '  float trail = smoothstep(0.0, 0.68, uProgress - vT);\n' +
    '  float head = smoothstep(0.065, 0.0, abs(vT - uProgress));\n' +
    '  float alpha = clamp(trail * 0.56 + head * 1.5, 0.0, 1.0);\n' +
    '  gl_FragColor = vec4(uColor * (0.75 + head * 1.8), alpha);\n' +
    '}';

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function randomBetween(a, b) { return a + Math.random() * (b - a); }

  function setProgress(value, message) {
    var fraction = clamp(value, 0, 1);
    if (progressEl) progressEl.style.width = (fraction * 100).toFixed(1) + '%';
    if (progressLabel) progressLabel.textContent = String(Math.round(fraction * 100)).padStart(3, '0');
    if (statusEl && message) statusEl.textContent = message;
    root.style.setProperty('--earth-progress', fraction.toFixed(3));
  }

  function formatCoords(node) {
    var lat = Math.abs(Number(node.lat)).toFixed(4) + (Number(node.lat) >= 0 ? ' N' : ' S');
    var lng = Math.abs(Number(node.lng)).toFixed(4) + (Number(node.lng) >= 0 ? ' E' : ' W');
    return lat + ' / ' + lng;
  }

  function latLngToVector3(lat, lng, radius) {
    var latRad = Number(lat) * Math.PI / 180;
    var lngRad = Number(lng) * Math.PI / 180;
    return new THREE.Vector3(
      radius * Math.cos(latRad) * Math.sin(lngRad),
      radius * Math.sin(latRad),
      radius * Math.cos(latRad) * Math.cos(lngRad)
    );
  }

  function colorForCategory(category) {
    return COLORS[category] || COLORS.network;
  }

  function makeFallbackHeightTexture() {
    var pixels = new Uint8Array([
      126, 126, 126, 255,
      130, 130, 130, 255,
      122, 122, 122, 255,
      128, 128, 128, 255
    ]);
    var texture = new THREE.DataTexture(pixels, 2, 2, THREE.RGBAFormat);
    texture.needsUpdate = true;
    return texture;
  }

  function loadJSON(url, fallback) {
    if (!url || !WIN.fetch) return Promise.resolve(fallback);
    return fetch(url, { credentials: 'same-origin' })
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.json();
      })
      .catch(function () { return fallback; });
  }

  function loadHeightmap(url) {
    if (!url) return Promise.resolve(makeFallbackHeightTexture());
    return new Promise(function (resolve) {
      var textureLoader = new THREE.TextureLoader();
      textureLoader.load(url, function (texture) {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.needsUpdate = true;
        resolve(texture);
      }, undefined, function () {
        resolve(makeFallbackHeightTexture());
      });
    });
  }

  function makeGridLine(points, material) {
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    return new THREE.Line(geometry, material);
  }

  function createGlobe(heightmap) {
    var group = new THREE.Group();
    group.rotation.z = -THREE.MathUtils.degToRad(17.5);
    state.globe = group;
    /* The orbital crop lives in the lower-right; the left side is intentional
       negative space for the business message. */
    group.position.set(coarsePointer ? 0.35 : 1.65, coarsePointer ? -0.55 : -1.25, 0);
    state.scene.add(group);

    var inner = new THREE.Mesh(
      new THREE.SphereGeometry(4.965, lowPower ? 40 : 64, lowPower ? 24 : 40),
      new THREE.MeshBasicMaterial({ color: 0x00111f, transparent: true, opacity: 0.97, depthWrite: true })
    );
    group.add(inner);

    var planetGeometry = new THREE.SphereGeometry(5, lowPower ? 80 : 128, lowPower ? 48 : 80);
    state.planetMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uHeightmap: { value: heightmap },
        uDisplacement: { value: 0.12 },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(COLORS.cyan) }
      },
      vertexShader: PLANET_VERTEX,
      fragmentShader: PLANET_FRAGMENT,
      /* Solid dark globe; the visible map is Regions.js, not a triangle mesh. */
      wireframe: false,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    var planet = new THREE.Mesh(planetGeometry, state.planetMaterial);
    planet.renderOrder = 2;
    group.add(planet);

    /* No latitude/longitude wire grid: the map is provided by Regions.js. */

    state.atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(COLORS.cyan) }, uTime: { value: 0 } },
      vertexShader: ATMOSPHERE_VERTEX,
      fragmentShader: ATMOSPHERE_FRAGMENT,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    var atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5.25, lowPower ? 24 : 48, lowPower ? 16 : 28), state.atmosphereMaterial);
    atmosphere.renderOrder = 1;
    group.add(atmosphere);

    return group;
  }

  function collectRings(geometry) {
    var rings = [];
    function visit(value) {
      if (!Array.isArray(value) || !value.length) return;
      if (typeof value[0] === 'number') {
        rings.push(value);
        return;
      }
      value.forEach(visit);
    }
    visit(geometry && geometry.coordinates);
    return rings;
  }


  function createCityLights(nodes) {
    state.nodes = Array.isArray(nodes) ? nodes.filter(function (node) {
      return node && isFinite(Number(node.lat)) && isFinite(Number(node.lng));
    }) : [];
    var positions = [];
    var colors = [];
    var sizes = [];
    var hqFlags = [];
    state.nodes.forEach(function (node) {
      var position = latLngToVector3(node.lat, node.lng, 5.09);
      positions.push(position.x, position.y, position.z);
      var color = new THREE.Color(node.hq ? COLORS.amber : colorForCategory(node.category));
      colors.push(color.r, color.g, color.b);
      sizes.push(node.hq ? 0.18 : 0.12);
      hqFlags.push(node.hq ? 1 : 0);
    });

    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('aColor', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('aSize', new THREE.Float32BufferAttribute(sizes, 1));
    geometry.setAttribute('aHq', new THREE.Float32BufferAttribute(hqFlags, 1));
    state.cityMaterial = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: CITY_VERTEX,
      fragmentShader: CITY_FRAGMENT,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    state.nodePoints = new THREE.Points(geometry, state.cityMaterial);
    state.nodePoints.frustumCulled = false;
    state.nodePoints.renderOrder = 6;
    state.globe.add(state.nodePoints);
    if (nodeCountEl) nodeCountEl.textContent = String(state.nodes.length);
    return state.nodes;
  }

  function makeLabelTexture() {
    var bitmap = doc.createElement('canvas');
    bitmap.width = 520;
    bitmap.height = 100;
    var context = bitmap.getContext('2d');
    context.clearRect(0, 0, bitmap.width, bitmap.height);
    context.font = '600 22px "JetBrains Mono", "IBM Plex Mono", monospace';
    context.fillStyle = '#ffcf58';
    context.shadowColor = '#ffb700';
    context.shadowBlur = 12;
    context.fillText('OSIJEK · HR', 20, 38);
    context.shadowBlur = 0;
    context.font = '400 17px "JetBrains Mono", "IBM Plex Mono", monospace';
    context.fillStyle = 'rgba(255, 223, 145, .84)';
    context.fillText('45.5550 N  /  18.6955 E', 20, 72);
    var texture = new THREE.CanvasTexture(bitmap);
    texture.needsUpdate = true;
    return texture;
  }

  function createOsijekMarker() {
    var node = state.nodes.filter(function (item) { return item.hq; })[0] || { lat: 45.5550, lng: 18.6955, name: 'Osijek' };
    var position = latLngToVector3(node.lat, node.lng, RADIUS + 0.08);
    var normal = position.clone().normalize();
    var group = new THREE.Group();
    group.renderOrder = 10;
    state.globe.add(group);

    var dotMaterial = new THREE.MeshBasicMaterial({ color: COLORS.amber, transparent: true, opacity: 0.86, blending: THREE.AdditiveBlending, depthWrite: false });
    var dot = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 6), dotMaterial);
    dot.position.copy(position);
    group.add(dot);

    var beamMaterial = new THREE.MeshBasicMaterial({ color: COLORS.amber, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false });
    var beam = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.95, 8, 1, true), beamMaterial);
    beam.position.copy(normal.clone().multiplyScalar(5.73));
    beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
    group.add(beam);

    var ringGeometry = new THREE.RingGeometry(0.17, 0.195, 64);
    var rings = [];
    for (var i = 0; i < 3; i++) {
      var ringMaterial = new THREE.MeshBasicMaterial({ color: COLORS.amber, transparent: true, opacity: 0.46, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false });
      var ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(normal.clone().multiplyScalar(5.1));
      ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
      ring.userData.delay = i * 0.82;
      group.add(ring);
      rings.push(ring);
    }

    var label = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeLabelTexture(), transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.96 }));
    label.position.copy(normal.clone().multiplyScalar(6.05));
    label.scale.set(1.65, 0.32, 1);
    group.add(label);
    state.hq = { group: group, dot: dot, beam: beam, rings: rings, label: label, normal: normal };
  }


  var FLOW_ROUTES = [
    ['Zagreb', 'London'],
    ['Paris', 'Tokyo'],
    ['New York', 'Berlin'],
    ['San Francisco', 'Singapore'],
    ['Sydney', 'Sao Paulo'],
    ['Madrid', 'Johannesburg'],
    ['Budapest', 'Dubai'],
    ['Osijek', 'Dublin'],
    ['Toronto', 'Seoul'],
    ['Lisbon', 'Melbourne'],
    ['Chicago', 'Copenhagen'],
    ['Mumbai', 'Amsterdam']
  ];
  var MAX_FLOWS = lowPower ? 5 : 12;
  var MAX_RIPPLES = lowPower ? 7 : 16;
  var FLOW_SEGMENTS = lowPower ? 24 : 42;

  function findNode(name) {
    for (var i = 0; i < state.nodes.length; i++) {
      if (state.nodes[i].name === name) return state.nodes[i];
    }
    return null;
  }

  function flowMaterial(color) {
    return new THREE.ShaderMaterial({
      uniforms: { uProgress: { value: 0 }, uColor: { value: new THREE.Color(color) } },
      vertexShader: FLOW_VERTEX,
      fragmentShader: FLOW_FRAGMENT,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
  }

  function createFlowShell() {
    var count = FLOW_SEGMENTS + 1;
    var geometry = new THREE.BufferGeometry();
    var positions = new Float32Array(count * 3);
    var progress = new Float32Array(count);
    for (var i = 0; i < count; i++) progress[i] = i / (count - 1);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aT', new THREE.BufferAttribute(progress, 1));
    geometry.setDrawRange(0, 0);
    var line = new THREE.Line(geometry, flowMaterial(0x00e5ff));
    line.frustumCulled = false;
    line.renderOrder = 8;
    var head = new THREE.Mesh(
      new THREE.SphereGeometry(lowPower ? .045 : .06, lowPower ? 6 : 8, 6),
      new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: .95, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    head.renderOrder = 9;
    line.visible = false;
    head.visible = false;
    state.globe.add(line, head);
    return { line: line, head: head, curve: null, target: null, age: 0, lifetime: 0 };
  }

  function createRippleShell() {
    var geometry = new THREE.RingGeometry(.12, .15, lowPower ? 20 : 32);
    var material = new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false });
    var ring = new THREE.Mesh(geometry, material);
    ring.visible = false;
    ring.renderOrder = 7;
    state.globe.add(ring);
    return { ring: ring, age: 0, lifetime: .95 };
  }

  function spawnRipple(target, color) {
    if (state.ripples.length >= MAX_RIPPLES) return;
    var ripple = state.ripplePool.pop() || createRippleShell();
    var normal = target.clone().normalize();
    ripple.ring.position.copy(normal.multiplyScalar(5.08));
    ripple.ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
    ripple.ring.material.color.setHex(color);
    ripple.ring.material.opacity = .78;
    ripple.ring.scale.setScalar(.65);
    ripple.ring.visible = true;
    ripple.age = 0;
    state.ripples.push(ripple);
  }

  function releaseFlow(flow) {
    flow.line.visible = false;
    flow.head.visible = false;
    flow.line.geometry.setDrawRange(0, 0);
    flow.curve = null;
    flow.target = null;
    state.flowPool.push(flow);
  }

  function releaseRipple(ripple) {
    ripple.ring.visible = false;
    state.ripplePool.push(ripple);
  }

  function spawnFlow() {
    if (reducedMotion || state.flows.length >= MAX_FLOWS || !state.nodes.length) return;
    var route = FLOW_ROUTES[state.flowCursor % FLOW_ROUTES.length];
    state.flowCursor += 1;
    var sourceNode = findNode(route[0]);
    var targetNode = findNode(route[1]);
    if (!sourceNode || !targetNode) return;
    var source = latLngToVector3(sourceNode.lat, sourceNode.lng, 5.08);
    var target = latLngToVector3(targetNode.lat, targetNode.lng, 5.08);
    var control = source.clone().add(target);
    if (control.lengthSq() < .2) control.set(.2, .4, .1);
    control.normalize().multiplyScalar(5.65 + Math.random() * .55);
    var flow = state.flowPool.pop() || createFlowShell();
    flow.curve = new THREE.QuadraticBezierCurve3(source, control, target);
    flow.target = target;
    flow.age = 0;
    flow.lifetime = 2.1 + Math.random() * .8;
    var points = flow.curve.getPoints(FLOW_SEGMENTS);
    var position = flow.line.geometry.attributes.position;
    var aT = flow.line.geometry.attributes.aT;
    points.forEach(function (point, index) {
      position.array[index * 3] = point.x;
      position.array[index * 3 + 1] = point.y;
      position.array[index * 3 + 2] = point.z;
      aT.array[index] = index / (points.length - 1);
    });
    position.needsUpdate = true;
    aT.needsUpdate = true;
    flow.line.geometry.setDrawRange(0, points.length);
    var color = colorForCategory(targetNode.category);
    flow.line.material.uniforms.uColor.value.setHex(color);
    flow.line.material.uniforms.uProgress.value = 0;
    flow.head.material.color.setHex(color);
    flow.line.visible = true;
    flow.head.visible = true;
    state.flows.push(flow);
  }

  function updateInformationFlow(dt) {
    if (!reducedMotion) {
      state.flowTimer -= dt;
      if (state.flowTimer <= 0) {
        spawnFlow();
        state.flowTimer = lowPower ? .72 : .42;
      }
    }
    for (var i = state.flows.length - 1; i >= 0; i--) {
      var flow = state.flows[i];
      flow.age += reducedMotion ? 0 : dt;
      var progress = reducedMotion ? .52 : clamp(flow.age / flow.lifetime, 0, 1);
      flow.line.material.uniforms.uProgress.value = progress;
      flow.head.position.copy(flow.curve.getPoint(progress));
      flow.head.scale.setScalar(.78 + Math.sin(progress * Math.PI) * .5);
      if (!reducedMotion && flow.age >= flow.lifetime) {
        spawnRipple(flow.target, flow.line.material.uniforms.uColor.value.getHex());
        releaseFlow(flow);
        state.flows.splice(i, 1);
      }
    }
    for (var j = state.ripples.length - 1; j >= 0; j--) {
      var ripple = state.ripples[j];
      ripple.age += reducedMotion ? 0 : dt;
      var wave = clamp(ripple.age / ripple.lifetime, 0, 1);
      ripple.ring.scale.setScalar(.65 + wave * 2.4);
      ripple.ring.material.opacity = reducedMotion ? .34 : (1 - wave) * .72;
      if (!reducedMotion && ripple.age >= ripple.lifetime) {
        releaseRipple(ripple);
        state.ripples.splice(j, 1);
      }
    }
    if (flowCountEl) flowCountEl.textContent = String(state.flows.length).padStart(2, '0');
  }

  function updateHQ() {
    if (!state.hq) return;
    var pulse = reducedMotion ? 1 : 1 + Math.sin(state.time * 3.0) * 0.13;
    state.hq.dot.scale.setScalar(pulse);
    state.hq.beam.material.opacity = reducedMotion ? 0.2 : 0.12 + 0.08 * (0.5 + 0.5 * Math.sin(state.time * 2.1));
    state.hq.rings.forEach(function (ring) {
      if (reducedMotion) {
        ring.scale.setScalar(1);
        ring.material.opacity = 0.42;
        return;
      }
      var local = ((state.time - ring.userData.delay) % 2.55 + 2.55) % 2.55;
      var t = local / 2.55;
      ring.scale.setScalar(0.72 + t * 1.95);
      ring.material.opacity = (1 - t) * 0.72;
    });
  }

  function showTooltip(node, event) {
    if (!tooltip || !node || coarsePointer) return;
    var name = tooltip.querySelector('[data-earth-tooltip-name]');
    var meta = tooltip.querySelector('[data-earth-tooltip-meta]');
    var category = tooltip.querySelector('[data-earth-tooltip-category]');
    if (name) name.textContent = node.name || 'Node';
    if (meta) meta.textContent = formatCoords(node);
    if (category) category.textContent = String(node.category || 'network').toUpperCase() + (node.hq ? ' · HQ' : '');
    var rect = root.getBoundingClientRect();
    var x = event.clientX - rect.left + 16;
    var y = event.clientY - rect.top + 16;
    tooltip.style.transform = 'translate(' + clamp(x, 8, rect.width - 190) + 'px,' + clamp(y, 8, rect.height - 82) + 'px)';
    tooltip.classList.add('is-visible');
  }

  function hideTooltip() {
    if (tooltip) tooltip.classList.remove('is-visible');
  }

  function handlePointerMove(event) {
    if (coarsePointer || !state.nodePoints || !state.camera) return;
    var rect = canvas.getBoundingClientRect();
    state.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    state.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    state.raycaster.setFromCamera(state.pointer, state.camera);
    state.raycaster.params.Points.threshold = 0.18;
    var hits = state.raycaster.intersectObject(state.nodePoints);
    if (hits.length && hits[0].index != null) showTooltip(state.nodes[hits[0].index], event);
    else hideTooltip();
  }

  function initRenderer() {
    var width = Math.max(root.clientWidth, 1);
    var height = Math.max(root.clientHeight, 1);
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: !lowPower, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(WIN.devicePixelRatio || 1, lowPower ? 1.1 : 1.35));
    renderer.setSize(width, height, false);
    renderer.setClearColor(0x000814, 0);
    if ('outputColorSpace' in renderer) renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    state.renderer = renderer;
    WIN.__ZAEC_3D_BOOTED = true;

    state.scene = new THREE.Scene();
    state.camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 160);
    state.camera.position.set(0, 0, 25);
    state.camera.lookAt(0, 0, 0);
    /* Camera is intentionally fixed: no mouse orbit/zoom, lower GPU and no
       accidental page-scroll capture. The globe animates on its own axis. */
    state.controls = null;

    try {
      if (lowPower) throw new Error('Bloom disabled on low-power devices');
      var renderPass = new RenderPass(state.scene, state.camera);
      var bloom = new UnrealBloomPass(new THREE.Vector2(width, height), lowPower ? 0.82 : 1.16, 0.72, 0.12);
      bloom.threshold = 0.08;
      bloom.strength = lowPower ? 0.82 : 1.16;
      bloom.radius = 0.72;
      state.composer = new EffectComposer(renderer);
      state.composer.addPass(renderPass);
      state.composer.addPass(bloom);
    } catch (error) {
      state.composer = null;
      root.classList.add('no-bloom');
    }
  }

  function resize() {
    if (!state.renderer || !state.camera) return;
    var width = Math.max(root.clientWidth, 1);
    var height = Math.max(root.clientHeight, 1);
    state.renderer.setSize(width, height, false);
    state.camera.aspect = width / height;
    state.camera.updateProjectionMatrix();
    if (state.composer) state.composer.setSize(width, height);
  }

  function completeIntro() {
    root.classList.add('is-ready');
    root.setAttribute('aria-busy', 'false');
    if (loader) {
      loader.classList.add('is-done');
      setTimeout(function () { loader.setAttribute('hidden', 'hidden'); }, reducedMotion ? 50 : 900);
    }
  }

  function intro() {
    var hqNode = state.nodes.filter(function (node) { return node.hq; })[0] || { lat: 45.5550, lng: 18.6955 };
    var direction = latLngToVector3(hqNode.lat, hqNode.lng, 1).normalize();
    if (state.globe) direction.applyQuaternion(state.globe.quaternion).normalize();
    var destination = direction.clone().multiplyScalar(coarsePointer ? 10.2 : 8.75);
    if (!hasGSAP || reducedMotion) {
      state.camera.position.copy(destination);
      completeIntro();
      return;
    }
    var introState = { value: 0 };
    gsap.to(state.camera.position, {
      x: destination.x,
      y: destination.y,
      z: destination.z,
      duration: 3.5,
      delay: 0.18,
      ease: 'power3.inOut'
    });
    gsap.to(introState, {
      value: 1,
      duration: 3.5,
      delay: 0.18,
      ease: 'power2.inOut',
      onComplete: completeIntro
    });
  }

  function useFallback(error) {
    root.classList.add('is-fallback');
    root.setAttribute('aria-busy', 'false');
    root.setAttribute('data-earth-error', error ? 'webgl' : 'asset');
    if (loader) loader.classList.add('is-done');
    if (statusEl) statusEl.textContent = error ? 'STATIC FALLBACK · WEBGL NIJE DOSTUPAN' : 'STATIC FALLBACK · LOKALNI PODACI NEDOSTUPNI';
    setProgress(1, statusEl ? statusEl.textContent : 'STATIC FALLBACK');
  }

  function animate(now) {
    if (state.destroyed) return;
    requestAnimationFrame(animate);
    var dt = Math.min((now - state.last) / 1000, 0.05);
    state.last = now;
    state.time += dt;
    if (doc.hidden || !state.active || !state.renderer) return;

    if (state.planetMaterial) state.planetMaterial.uniforms.uTime.value = state.time;
    if (state.atmosphereMaterial) state.atmosphereMaterial.uniforms.uTime.value = state.time;
    if (state.cityMaterial) state.cityMaterial.uniforms.uTime.value = state.time;
    if (coarsePointer && state.globe && !reducedMotion) state.globe.rotation.y += dt * 0.018;
    updateHQ();
    if (state.regions) state.regions.update(state.time, reducedMotion);
    updateInformationFlow(dt);
    try {
      if (state.composer) state.composer.render();
      else state.renderer.render(state.scene, state.camera);
      WIN.__ZAEC_3D = true;
    } catch (error) {
      /* Bloom is an enhancement. If a browser rejects the post-FX target,
         keep the Earth and continue with the direct renderer. */
      state.composer = null;
      root.classList.add('no-bloom');
      try {
        state.renderer.render(state.scene, state.camera);
        WIN.__ZAEC_3D = true;
      } catch (renderError) {
        state.renderer = null;
        useFallback(true);
      }
    }
  }

  function bindEvents() {
    WIN.addEventListener('resize', resize, { passive: true });
    canvas.addEventListener('pointermove', handlePointerMove, { passive: true });
    canvas.addEventListener('pointerleave', hideTooltip, { passive: true });
    canvas.addEventListener('pointerdown', hideTooltip, { passive: true });
    if ('IntersectionObserver' in WIN) {
      new IntersectionObserver(function (entries) {
        state.active = !!(entries[0] && entries[0].isIntersecting);
      }, { threshold: 0.02 }).observe(root);
    }
  }

  function init() {
    root.setAttribute('aria-busy', 'true');
    root.classList.add('is-loading');
    setProgress(0.08, 'INITIALIZING RENDERER');
    try {
      initRenderer();
    } catch (error) {
      useFallback(true);
      return;
    }
    setProgress(0.22, 'LOADING TOPOLOGY');
    var topologyUrl = cfg.topologyUrl || root.getAttribute('data-topology') || '';
    var bordersUrl = cfg.bordersUrl || root.getAttribute('data-borders') || '';
    var nodesUrl = cfg.nodesUrl || root.getAttribute('data-nodes') || '';
    Promise.all([
      loadHeightmap(topologyUrl),
      loadJSON(bordersUrl, { type: 'FeatureCollection', features: [] }),
      loadJSON(nodesUrl, [])
    ]).then(function (assets) {
      setProgress(0.52, 'MAPPING COUNTRY OUTLINES');
      createGlobe(assets[0]);
      state.regions = new Regions(5.015, lowPower).build(assets[1]);
      state.globe.add(state.regions.group);
      setProgress(0.7, 'CONNECTING GLOBAL NODES');
      createCityLights(assets[2]);
      createOsijekMarker();
      if (!reducedMotion) { for (var seed = 0; seed < (lowPower ? 2 : 5); seed++) spawnFlow(); }
      setProgress(0.86, 'GLOBAL MAP ONLINE');
      bindEvents();
      intro();
      animate(performance.now());
      setProgress(1, 'REGIONS ONLINE');
    }).catch(function () {
      useFallback(false);
    });
  }

  init();
})();
