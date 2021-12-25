const constRouter = require('express').Router()
const Construct = require('../models/construct')

constRouter.get('/', (request, response) => {
  Construct.find({}, 'Model img rank cID').then(constructs => {
    response.json(constructs)
  })
})

constRouter.get('/:id', (request, response) => {
  const body = request.params.id
  Construct.find({ cID:body }).populate('sig').then(cons => {
    response.json(cons)
  })
})

module.exports = constRouter