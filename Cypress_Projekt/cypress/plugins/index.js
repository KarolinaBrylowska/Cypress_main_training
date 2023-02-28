/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { initPlugin } = require('cypress-plugin-snapshots/plugin');

// promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });
  on("task", {
    lighthouse: lighthouse(), // calling the function is important
  });
  const file = config.env.configFile || 'development'
  getConfigurationByFile(file);

  initPlugin(on, config);
  return config;

  // promisified fs module

};
