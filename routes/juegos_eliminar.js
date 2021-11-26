const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//* Eliminar Juego
router.get('/juegos/eliminar/:codigo', async (req, res) => {
    const idJuego = req.params.codigo
    await db.Juego.destroy({
        where : {
            id : idJuego
        }
    })

    res.redirect('/juegos')
})


module.exports = router
