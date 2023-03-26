/// <reference types="vitest"/>
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      all: true,
      reporter: "text",
      lines: 50
    },
    setupFiles: './src/setupTest.ts',
  },
});
