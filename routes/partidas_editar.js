const {Router} = require('express')
const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//* EDITAR PARTIDA

router.get('/partidas/editar/:id_partida', async (req, res) => {
	const id_partida = req.params.id_partida
	
	const partida = await db.Partida.findOne({
		where: {
			id: id_partida
		}
	})

	console.log(parseInt(partida.hora_inicio))
	console.log(parseInt(partida.hora_inicio.substring(3,5)))

	console.log(parseInt(partida.duracion))
	
	const juego = await db.Juego.findOne({
		where: {
			id: partida.id_juego
		}
	})

	const categoria = await db.Categoria.findOne({
		where: {
			id: juego.id_categoria
		}
	})

	const juego_equipos = await db.Juego_Equipo.findAll({
		where: {
			id_juego: juego.id
		},
		order: [
			['id']
		]
	})

	const equipos_en_juego = []
	for (let juego_equipo of juego_equipos) {
		const equipo = await juego_equipo.getEquipo()
		equipos_en_juego.push(equipo)
	}

	res.render('partidas_editar', {
		partida: partida,
		juego: juego,
		categoria: categoria,
		equipos_en_juego: equipos_en_juego
	})

})

module.exports = router