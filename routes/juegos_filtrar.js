const express = require('express')
const router = express.Router()
const db = require('../dao/models')

router.get('/juegos/filtrar/:codigo', async (req, res) => {
    const idJuego = req.params.codigo
    
    const juego = await db.Juego.findOne({
        where : {
            id : idJuego
        }
    })

	const partidas = await db.Partida.findAll({
		where : {
			id_juego : idJuego
		}
	})

    console.log(partidas)

	for (let partida of partidas) {
		const equipoLocal = await db.Equipo.findOne({
			where : {
				id : partida.id_local
			}
		})

        console.log(equipoLocal.nombre)

		const equipoVisita = await db.Equipo.findOne({
			where : {
				id : partida.id_visita
			}
		})

		partida.local = equipoLocal.nombre
		partida.visitante = equipoVisita.nombre
	}

	

    res.render('juegos_filter', {
        juego : juego,
        partidas : partidas
    })
})

module.exports = router