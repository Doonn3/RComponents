/// <reference types="vitest"/>
/// <reference types="vite/client" />
import path from 'path';
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
  resolve: {
    alias: {
      '@sw': path.resolve(__dirname, './src/assets/starwars-planets'),
      '@store': path.resolve(__dirname, './src/store'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      exclude: [...configDefaults.exclude, '**/*.ts', '*.ts'],
      provider: 'c8',
      all: false,
      reporter: 'text',
      lines: 50,
    },
    setupFiles: './src/setupTest.ts',
  },
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:3000',
  //   },
  // },
  build: {
    // ssr: './server/server.js',
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: './src/shared/HtmlTemplate.tsx',
    },
    outDir: './dist',
  },
});
