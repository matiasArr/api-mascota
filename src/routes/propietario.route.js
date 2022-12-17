const propietarioController = require('../controllers/propietario.controller.js')
const routerPropietario = require('express').Router()

routerPropietario.get('/:id', propietarioController.findOne)

module.exports = routerPropietario;