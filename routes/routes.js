const express = require('express')
const router = express.Router()
const db = require('../dao/models')

router.use(require('./juegos'))
router.use(require('./juegos_nuevo'))
router.use(require('./juegos_modificar'))
router.use(require('./juegos_eliminar'))

router.get('/', (req, res) => {
	res.send('HOLA MUNDO')
})

module.exports = router