import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/doctor-helper/',
  build: {
    outDir: 'docs',
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  plugins: [react(), TanStackRouterVite(), VitePWA()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
