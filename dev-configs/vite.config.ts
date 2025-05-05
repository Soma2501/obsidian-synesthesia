import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.type === 'asset' &&
            assetInfo.names.some(n => n.endsWith('.css'))
          ) {
            return 'theme.css';
          }
          return '[name][extname]';
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false,
  },
  css: {
    postcss: './postcss.config.js',
  },
});
