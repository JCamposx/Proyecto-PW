const express = require('express')
const router = express.Router()
const db = require('../dao/models')

router.get('/juegos/filtrar/:codigo', async (req, res) => {
    const idJuego = req.params.codigo
    const idPartida =req.body.partida_id
    
    const juego = await db.Juego.findOne({
        where : {
            id : idJuego
        }
    })

    const partidas = await db.Partida.findAll({
        where :{
            id : idJuego
        }
    })

    const equipos = await db.Equipos.findAll({
        where :{
            id : idPartida
        }
    })

    res.render('juegos_filter', {
        juego : juego,
        partidas : partidas,
        equipos : equipos
    })
})

module.exports = router
