const {StatusCodes} = require('http-status-codes')
const customApiError = require('./custom-api')

const errorHandlerMiddleware = (err,req,res,next) => {
if (err instanceof customApiError) {
 res.status(err.statusCode).json({msg : err.message})
}
return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err})
}

module.exports = errorHandlerMiddleware
