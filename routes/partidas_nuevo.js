const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//* NUEVA PARTIDA

//////////////////////////////////////////////////////////////////////////////////////////////////

// Elegir categoria

router.get('/partidas/nuevo', async (req, res) => {
	const categorias = await db.Categoria.findAll({
		order: [
			['id']
		]
	})

	res.render('partidas_nuevo', {
		categorias: categorias
	})
})

router.post('/partidas/nuevo', async (req, res) => {
	const id_cat = req.body.categoria
	
	res.redirect(`/partidas/nuevo/${id_cat}`)
})

//////////////////////////////////////////////////////////////////////////////////////////////////

// Elegir juego

router.get('/partidas/nuevo/:id_cat', async (req, res) => {
	const id_categoria = req.params.id_cat

	const categoria = await db.Categoria.findOne({
		where: {
			id: id_categoria
		}
	})

	const juegos = await db.Juego.findAll({
		where: {
			id_categoria: id_categoria
		},
		order: [
			['id']
		]
	})

	res.render('partidas_nuevo_jue', {
		categoria: categoria,
		juegos: juegos
	})
})

router.post('/partidas/nuevo/:id_cat', (req, res) => {
	const id_cat = req.params.id_cat
	const id_juego = req.body.juego

	res.redirect(`/partidas/nuevo/${id_cat}/${id_juego}`)
})

//////////////////////////////////////////////////////////////////////////////////////////////////

// Elegir equipos y demás

router.get('/partidas/nuevo/:id_cat/:id_jue', async (req, res) => {
	const id_categoria = req.params.id_cat
	const id_juego = req.params.id_jue

	const categoria = await db.Categoria.findOne({
		where: {
			id: id_categoria
		}
	})

	const juego = await db.Juego.findOne({
		where: {
			id: id_juego
		}
	})

	const juego_equipos = await db.Juego_Equipo.findAll({
		where: {
			id_juego: id_juego
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

	res.render('partidas_nuevo_equ', {
		categoria: categoria,
		juego: juego,
		equipos_en_juego: equipos_en_juego
	})
})

router.post('/partidas/nuevo/:id_cat/:id_jue', async (req, res) => {
	const id_juego = req.params.id_jue

	const id_local = req.body.local
	const id_visitante = req.body.visitante
	const factor_local = req.body.f_local
	const factor_empate = req.body.f_empate
	const factor_visitante = req.body.f_visitante
	const fecha = req.body.fecha
	const hora = req.body.hora
	const minutos = req.body.minutos
	const duracion = req.body.duracion
	const estado = req.body.estado
	const resultado = req.body.resultado

	const fecha_arr = fecha.split('-')
	const nueva_fecha = new Date(parseInt(fecha_arr[0]), parseInt(fecha_arr[1])-1, parseInt(fecha_arr[2]))
	nueva_fecha.setHours(parseInt(hora) - 5, parseInt(minutos))

	if (hora.length == 1) {
		hora = '0' + hora
	}

	if (minutos.length == 1) {
		minutos = '0' + minutos
	}

	const partida_nueva = await db.Partida.create({
		fecha: nueva_fecha,
		hora_inicio: hora + ':' + minutos,
		duracion: duracion,
		factor_local: factor_local,
		factor_visita: factor_visitante,
		factor_empate: factor_empate,
		resultado: resultado,
		estado: estado,
		id_local: id_local,
		id_visita: id_visitante,
		id_juego: id_juego
	})

	db.Partida_Equipo.create({
		id_partida: partida_nueva.id,
		id_equipo: id_local
	})

	db.Partida_Equipo.create({
		id_partida: partida_nueva.id,
		id_equipo: id_visitante
	})

	res.redirect('/partidas')
})

module.exports = router