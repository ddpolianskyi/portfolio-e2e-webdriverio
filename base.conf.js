const config = {
    runner: 'local',
    specs: [
        './test/specs/*.js'
    ],
    exclude: [],
    maxInstances: 3,
    capabilities: [
        {
            browserName: 'chrome'
        },

        {
            browserName: 'firefox'
        },

        {
            browserName: 'msedge'
        }
    ],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec', 'allure'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};

module.exports.config = config;