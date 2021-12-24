const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv');
const constRouter = require('./controller/construct')
const wepRouter = require('./controller/weapon')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

dotenv.config({path: 'config.env'})

const uri =  `mongodb+srv://${process.env.mongoDBname}:${process.env.password}@${process.env.clusterUrl}?retryWrites=true&w=majority`;

logger.info('connecting to', uri)

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/construct', constRouter)
app.use('/api/weapon', wepRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app