const logger = require('./src/Logger').default;
const {log, error, data, apiError} = require('./src/Logger');

module.export = {log, error, data, apiError};
module.exports = logger;
