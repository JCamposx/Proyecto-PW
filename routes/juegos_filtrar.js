const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//* 
router.get('/juegos/filtrar/:codigo', async (req, res) => {
    const idJuego = req.params.codigo

    const juego = await db.Juego.findOne({
        where : {
            id : idJuego
        }
    })

    const partidas = await db.Partida.findAll()

    res.render('juegos_filter', {
        juego : juego,
        partidas : partidas
    })
})

//*ESTO DEBE CAMBIARSE
/*
router.post('/juegos/modificar', async (req, res) => {
    const idJuego = req.body.juego_id
    const nombre =req.body.juego_nombre
    const id_categoria = req.body.juego_categoria_id

    const juego = await db.Juego.findOne({
        where : {
            id : idJuego
        }
    })
    
    juego.nombre_jue = nombre
    juego.id_categoria = id_categoria


    await juego.save()

    res.redirect('/juegos')

})
*/

module.exports = router
