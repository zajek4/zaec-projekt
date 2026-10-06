// Popis kadrova: ime → { file, build(stage) }
import elektricari from './scenes/elektricari.js';
import gradevina from './scenes/gradevina.js';
import klima from './scenes/klima.js';
import krovopokrivaci from './scenes/krovopokrivaci.js';
import saloni from './scenes/saloni.js';
import trgovine from './scenes/trgovine.js';
import ugostiteljstvo from './scenes/ugostiteljstvo.js';
import vodoinstalateri from './scenes/vodoinstalateri.js';
import { web, webshop, landing, seo, odrzavanje, procjena, ga4, brzina, ai } from './scenes/web.js';
import { onama, kontakt, lokalno } from './scenes/osijek.js';
import nf from './scenes/nf.js';
import { onamaScenes } from './scenes/hero-onama.js';
import { izradaScenes } from './scenes/hero-izrada.js';
import { kontaktScenes } from './scenes/hero-kontakt.js';

export const SCENES = { elektricari, gradevina, klima, krovopokrivaci, saloni, trgovine, ugostiteljstvo, vodoinstalateri, web, webshop, landing, seo, odrzavanje, procjena, ga4, brzina, ai, onama, kontakt, lokalno, nf, ...izradaScenes, ...onamaScenes, ...kontaktScenes };
