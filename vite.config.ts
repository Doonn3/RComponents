/// <reference types="vitest"/>
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
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
    // exclude: [...configDefaults.exclude, 'src/components/'],
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      all: false,
      reporter: 'text',
      lines: 50,
    },
    setupFiles: './src/setupTest.ts',
  },
});
