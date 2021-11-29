const express = require('express')
const router = express.Router()
const db = require('../dao/models')

router.use(require('./juegos'))
router.use(require('./juegos_nuevo'))
router.use(require('./juegos_modificar'))
router.use(require('./juegos_eliminar'))
router.use(require('./juegos_filtrar'))

router.use(require('./banners'))
router.use(require('./banners_nuevo'))
router.use(require('./banners_modificar'))
router.use(require('./banners_eliminar'))

router.use(require('./reglas'))



router.get('/', (req, res) => {
	res.send('HOLA MUNDO')
})

module.exports = router