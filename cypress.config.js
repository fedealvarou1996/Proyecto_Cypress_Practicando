const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: '7fckbk',
  
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    "viewportWidth": 1500,
    "viewportHeight": 900,
    "pageLoadTimeout": 12000,
    "defaultCommandTimeout": 9000
  },
  
});

