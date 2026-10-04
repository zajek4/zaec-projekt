// Globalni ulaz (sve stranice): stil, smooth scroll, reveal, forme, procjena, podstranice.
import '@fontsource-variable/archivo/standard.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource-variable/jetbrains-mono';
import '../css/app.css';
import './site.js';
import { initContactForms } from './form.js';
import { initConfigurators } from './configurator.js';
import './sub.js';

initContactForms();
initConfigurators();
