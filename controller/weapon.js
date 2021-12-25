const wepRouter = require('express').Router()
const Weapon = require('../models/weapon')
const dotenv = require('dotenv');

dotenv.config({path: 'config.env'})

wepRouter.get('/', (request, response) => {
    Weapon.find({}).populate('const', 'Model img id cID').then(cons => {
      response.json(cons)
    })
  })


module.exports = wepRouter