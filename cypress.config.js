const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      testUserName: "Tavares_Barrows"
    },
    experimentalRunAllSpecs: true,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }

});

