const {StatusCodes} = require('http-status-codes')
const customApiError = require('./custom-api')
class not_found extends customApiError {
    constructor (message) {
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
    }

    module.exports = not_found
