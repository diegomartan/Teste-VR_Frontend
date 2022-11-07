const { defineConfig } = require("cypress");

module.exports = defineConfig({
  url: 'https://www.vr.com.br',
  defaultCommandTimeout: 30000,
  "viewportWidth": 1920,
  "viewportHeight": 1080,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

