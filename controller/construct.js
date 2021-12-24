const constRouter = require('express').Router()
const Construct = require('../models/construct')
const dotenv = require('dotenv');

dotenv.config({path: 'config.env'})

constRouter.get('/', (request, response) => {
  Construct.find({}).populate('sig').then(cons => {
    response.json(cons)
  })
})


module.exports = constRouter