import * as THREE from './vendor/three.module.min.js';

/*
 * Clean map layers for the Earth scene.
 *
 * Base: all country polygon rings, subtle cyan.
 * EU: the 27 member-state outlines, brighter cyan.
 * Croatia: separate bright outline with a restrained breathing pulse.
 */

var EU_CODES = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR',
  'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK',
  'SI', 'ES', 'SE'
]);

function latLngToVector3(lat, lng, radius) {
  var latRad = Number(lat) * Math.PI / 180;
  var lngRad = Number(lng) * Math.PI / 180;
  return new THREE.Vector3(
    radius * Math.cos(latRad) * Math.sin(lngRad),
    radius * Math.sin(latRad),
    radius * Math.cos(latRad) * Math.cos(lngRad)
  );
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

function isCroatia(feature) {
  var properties = feature && feature.properties ? feature.properties : {};
  return properties.ISO_A2 === 'HR' || properties.ISO_A2_EH === 'HR' || properties.ADM0_A3 === 'HRV' || properties.ADMIN === 'Croatia';
}

function isEuropeanUnion(feature) {
  var properties = feature && feature.properties ? feature.properties : {};
  var code = properties.ISO_A2 || properties.ISO_A2_EH || '';
  return EU_CODES.has(code) || isCroatia(feature);
}

export class Regions {
  constructor(radius, lowPower) {
    this.radius = radius || 5.015;
    this.lowPower = !!lowPower;
    this.group = new THREE.Group();
    this.group.name = 'Regions';
    this.baseMaterial = new THREE.LineBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: this.lowPower ? 0.25 : 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.euMaterial = new THREE.LineBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: this.lowPower ? 0.58 : 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.croatiaMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffee,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.croatiaGlowMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffee,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
  }

  build(data) {
    var features = data && Array.isArray(data.features) ? data.features : [];
    var base = [];
    var eu = [];
    var croatia = [];
    var step = this.lowPower ? 2 : 1;
    var radius = this.radius;

    function addFeatureSegments(feature, target) {
      collectRings(feature.geometry).forEach(function (ring) {
        var previous = null;
        ring.forEach(function (coordinate, index) {
          if (!coordinate || coordinate.length < 2) return;
          var isLast = index === ring.length - 1;
          if (index % step !== 0 && !isLast) return;
          var current = latLngToVector3(coordinate[1], coordinate[0], radius);
          if (previous && current.distanceTo(previous) <= 3.2) {
            target.push(previous.x, previous.y, previous.z, current.x, current.y, current.z);
          }
          previous = current;
        });
      });
    }

    features.forEach(function (feature) {
      addFeatureSegments(feature, base);
      if (isEuropeanUnion(feature)) addFeatureSegments(feature, eu);
      if (isCroatia(feature)) addFeatureSegments(feature, croatia);
    });

    this._addSegments(base, this.baseMaterial, 'all-country-outlines', this.radius);
    this._addSegments(eu, this.euMaterial, 'eu-outlines', this.radius + 0.005);
    this._addSegments(croatia, this.croatiaGlowMaterial, 'croatia-glow', this.radius + 0.01);
    this._addSegments(croatia, this.croatiaMaterial, 'croatia-outline', this.radius + 0.014);
    this.group.renderOrder = 4;
    return this;
  }

  _addSegments(values, material, name, radiusOverride) {
    if (!values.length) return;
    var geometry = new THREE.BufferGeometry();
    var positions = values;
    if (radiusOverride) {
      var scale = radiusOverride / this.radius;
      positions = values.map(function (value) { return value * scale; });
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    var line = new THREE.LineSegments(geometry, material);
    line.name = name;
    line.frustumCulled = false;
    this.group.add(line);
  }

  update(time, reducedMotion) {
    if (!this.croatiaMaterial) return;
    if (reducedMotion) {
      this.croatiaMaterial.opacity = 0.86;
      this.croatiaGlowMaterial.opacity = 0.22;
      return;
    }
    var pulse = 0.5 + 0.5 * Math.sin(time * 2.1);
    this.croatiaMaterial.opacity = 0.78 + pulse * 0.22;
    this.croatiaGlowMaterial.opacity = 0.18 + pulse * 0.18;
  }
}

export { EU_CODES };
