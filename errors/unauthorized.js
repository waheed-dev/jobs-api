const {StatusCodes} = require('http-status-codes')
const customApiError = require('./custom-api')
class unauthorized extends customApiError {
    constructor (message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
    }

    module.exports = unauthorized
