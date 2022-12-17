const vacunaController = require('../controllers/vacuna.controller.js')

const routerVacuna = require('express').Router()

routerVacuna.get('/', vacunaController.findAll)

module.exports = routerVacuna;