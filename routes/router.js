const express = require('express')
const router = express.Router()
const db = require('../dao/models')

router.use(require('./partidas_editar'))
router.use(require('./partidas_nuevo'))
router.use(require('./partidas'))

router.get('/', (req, res) => {
	res.send('HOLA MUNDO')
})

module.exports = router