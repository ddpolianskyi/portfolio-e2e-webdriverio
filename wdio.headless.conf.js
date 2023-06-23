const { config } = require('./base.conf');

exports.config = {
    ...config,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': { args: ['--headless'] }
        },

        {
            browserName: 'firefox',
            'moz:firefoxOptions': { args: ['-headless'] }
        }
    ]
};