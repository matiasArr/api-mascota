const routerMascota = require('express').Router()
const mascotaController = require('../controllers/mascota.controller.js')

routerMascota.get('/', mascotaController.findAll)
routerMascota.get('/:id', mascotaController.findOne)


module.exports = routerMascota;