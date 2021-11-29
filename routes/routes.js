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
/////////////////////////
router.use(require('./banners_ver'))
////////////////////////
router.use(require('./reglas'))

///////////////////////////////////////////
router.use(require('./clientes'))
router.use(require('./clientes_filtrar'))
router.use(require('./clientes_modificar'))
router.use(require('./clientes_listar'))
///////////////////////////////////////////

router.use(require('./partidas_editar'))
router.use(require('./partidas_nuevo'))
router.use(require('./partidas'))
///////////////////////////////////////////


router.get('/', (req, res) => {
	res.send('HOLA MUNDO')
})

module.exports = router