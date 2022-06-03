require('dotenv').config()
require('express-async-errors')
const express = require('express')
const notFound = require('./middlewares/not-found')
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')
const app = express()
const connect = require('./db/connect')
app.use(express.json())
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',jobsRouter)
app.use(notFound)
const start = async () => {
    await connect(process.env.MONGO_URI)
    const port = process.env.PORT || 5000
    try {
        app.listen(port,() => console.log(`server running on port ${port}`))
    } catch (error) {

    }
}

start()
