// Ilustrativni model puta do upita (bez three.js — koristi ga i DOM i 3D).
// Omjeri prolaska kroz pet "vrata"; loša/dobra izvedba. Nisu statistika, nego demonstracija principa.
export const GATES = [
  { key: 'brzina', name: 'Brzina', bad: 0.75, good: 0.95, zone: 'entry', jx: 0.5, jy: 0.2 },
  { key: 'poruka', name: 'Poruka', bad: 0.45, good: 0.75, zone: 'message', jx: 1.6, jy: 0.3 },
  { key: 'povjerenje', name: 'Povjerenje', bad: 0.35, good: 0.55, zone: 'trust', jx: 4.2, jy: 0.15 },
  { key: 'poziv', name: 'Poziv na akciju', bad: 0.25, good: 0.45, zone: 'content', jx: 4.0, jy: 0.5 },
  { key: 'kontakt', name: 'Kontakt', bad: 0.4, good: 0.6, zone: 'cta', jx: 1.4, jy: 0.15 },
];

/** Udio posjetitelja koji postanu upit za zadana stanja vrata (true = dobro). */
export function conversion(states) {
  return GATES.reduce((p, g, i) => p * (states[i] ? g.good : g.bad), 1);
}
