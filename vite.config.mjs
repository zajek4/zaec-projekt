// Build izvora u WordPress temu: zaec/assets/build/{app,home}.{js,css}
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  publicDir: false,
  build: {
    outDir: 'zaec/assets/build',
    emptyOutDir: true,
    target: 'es2020',
    cssCodeSplit: true,
    assetsInlineLimit: 0,
    sourcemap: false,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      input: { app: 'src/js/app.js', home: 'src/js/home.js', ...(process.env.CAPTURE ? { capture: 'src/js/capture.js' } : {}) },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: (info) => {
          const n = info.names?.[0] || info.name || '';
          return n.endsWith('.css') ? '[name][extname]' : 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
