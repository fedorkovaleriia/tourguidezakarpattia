import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task.js";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },

  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "cypress/e2e/**/*.spec.js",
    setupNodeEvents(on, config) {
      // Якщо будуть додаткові Node events для e2e
      return config;
    },
  },
});
