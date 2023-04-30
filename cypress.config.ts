import { defineConfig } from 'cypress';
import coverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      coverageTask(on, config);
      // implement node event listeners here
      return config;
    },
    baseUrl: 'http://localhost:5173/',
  },
  env: {
    codeCoverage: {
      coverageFolder: './cypress/coverage/.nyc_output',
    },
  },
});
