const memRouter = require('express').Router()
const Memory = require('../models/memory')

memRouter.get('/', (request, response) => {
    Memory.find({}).then(memories => {
    response.json(memories)
  })
})

memRouter.get('/:name', (request, response) => {
  const body = request.params.name
  Memory.find({ name:body }).then(mem => {
    response.json(mem)
  })
})

module.exports = memRouter