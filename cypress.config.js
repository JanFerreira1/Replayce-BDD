const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "http://localhost:5173",
    async setupNodeEvents(on, config) {
      await preprocessor(on, config);
      on("file:preprocessor", createBundler());
      return config;
    }
  }
});
