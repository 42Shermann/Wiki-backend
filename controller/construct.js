const constRouter = require('express').Router()
const Construct = require('../models/construct')

constRouter.get('/', (request, response) => {
  Construct.find({}).then(constructs => {
    response.json(constructs)
  })
})

constRouter.get('/getList', (request, response) => {
  Construct.find({}, 'Model chibiImg rank type cID').lean().then(constructs => {
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