const customApiError = require('./custom-api')
const badRequest = require('./bad-request')
const unauthorized = require('./unauthorized')
const not_found = require('./not-found')

module.exports = {
    customApiError,
    badRequest,
    unauthorized,
    not_found
}
