const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//* LISTA DE PARTIDAS

router.get('/partidas', async (req, res) => {
	const partidas = await db.Partida.findAll({
		order: [
			['fecha', 'desc']
		]
	})

	const lista_juegos = []
	const lista_categorias = []
	const lista_equipos = []

	if (partidas.length >= 0) {
		for (let partida of partidas) {
			const juego = await partida.getJuego()
			lista_juegos.push(juego)

			const categoria = await db.Categoria.findOne({
				where: {
					id: juego.id_categoria
				}
			})

			lista_categorias.push(categoria)

			const partida_equipo = await db.Partida_Equipo.findAll({
				where: {
					id_partida: partida.id
				}
			})

			const local = await partida_equipo[0].getEquipo()
			const visitante = await partida_equipo[1].getEquipo()
			
			const equipos = {
				local: local,
				visitante: visitante
			}

			lista_equipos.push(equipos)
		}
	}

	res.render('partidas', {
		partidas: partidas,
		juegos: lista_juegos,
		categorias: lista_categorias,
		equipos: lista_equipos
	})
})

module.exports = router