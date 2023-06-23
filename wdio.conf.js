const { config } = require('./base.conf');

exports.config = {
    ...config,
    capabilities: [
        {
            browserName: 'chrome',
        },

        {
            browserName: 'firefox',
        }
    ]
};