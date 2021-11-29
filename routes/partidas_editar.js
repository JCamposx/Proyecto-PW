const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//* EDITAR PARTIDA

//////////////////////////////////////////////////////////////////////////////////////////////////

// Editar solo equipos y demás

router.get('/partidas/editar/:id_part', async (req, res) => {
	const id_partida = req.params.id_part
	
	const partida = await db.Partida.findOne({
		where: {
			id: id_partida
		}
	})
	
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

router.post('/partidas/editar/:id_part', async (req, res) => {
	const id_partida = req.params.id_part

	const id_juego = req.body.juego
	const id_local = req.body.local
	const id_visitante = req.body.visitante
	const factor_local = req.body.f_local
	const factor_empate = req.body.f_empate
	const factor_visitante = req.body.f_visitante
	const fecha = req.body.fecha
	let hora = req.body.hora
	let minutos = req.body.minutos
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

	const partida = await db.Partida.findOne({
		where: {
			id: id_partida
		}
	})

	partida.fecha = nueva_fecha
	partida.hora_inicio = hora + ':' + minutos
	partida.duracion = duracion
	partida.factor_local = factor_local
	partida.factor_visita = factor_visitante
	partida.factor_empate = factor_empate
	partida.resultado = resultado
	partida.estado = estado
	partida.id_local = id_local
	partida.id_visita = id_visitante
	partida.id_juego = id_juego

	const partida_equipos = await db.Partida_Equipo.findAll({
		where: {
			id_partida: id_partida
		}
	})

	partida_equipos[0].id_equipo = id_local
	partida_equipos[1].id_equipo = id_visitante

	await partida_equipos[0].save()
	await partida_equipos[1].save()
	await partida.save()
	
	res.redirect('/partidas')
})

//////////////////////////////////////////////////////////////////////////////////////////////////

// Editar juego

router.get('/partidas/editar/:id_part/categoria/:id_cat/juego/:id_jue', async (req, res) => {
	const id_partida = req.params.id_part
	const id_categoria = req.params.id_cat
	const id_juego = req.params.id_jue

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

	res.render('partidas_editar_cat_jue_a', {
		id_partida: id_partida,
		id_categoria: id_categoria,
		categoria: categoria,
		juegos: juegos,
		id_juego: id_juego
	})
})

//////////////////////////////////////////////////////////////////////////////////////////////////

// Editar categoría

router.get('/partidas/editar/:id_part/categoria/:id_cat', async (req, res) => {
	const id_partida = req.params.id_part
	const id_categoria = req.params.id_cat

	const categorias = await db.Categoria.findAll()

	res.render('partidas_editar_cat', {
		id_partida: id_partida,
		id_categoria: id_categoria,
		categorias: categorias
	})
})

router.post('/partidas/editar/:id_part/categoria/:id_cat', (req, res) => {
	const id_partida = req.params.id_part

	const id_categoria = req.body.categoria

	res.redirect(`/partidas/editar/${id_partida}/categoria/${id_categoria}/editado`)
})

//////////////////////////////////////////////////////////////////////////////////////////////////

// Editar equipos y demás luego de haber editado categoria y/o juego

router.get('/partidas/editar/:id_part/categoria/:id_cat/editado', async (req, res) => {
	const id_partida = req.params.id_part
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

	res.render('partidas_editar_cat_jue', {
		id_partida: id_partida,
		id_categoria: id_categoria,
		categoria: categoria,
		juegos: juegos
	})
})

router.post('/partidas/editar/:id_part/categoria/:id_cat/editado', async (req, res) => {
	const id_partida = req.params.id_part
	const id_categoria = req.params.id_cat

	const id_juego = req.body.juego

	res.redirect(`/partidas/editar/${id_partida}/categoria/${id_categoria}/editado/juego/${id_juego}`)
})

router.get('/partidas/editar/:id_part/categoria/:id_cat/editado/juego/:id_jue', async (req, res) => {
	const id_partida = req.params.id_part
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

	res.render('partidas_editar_cat_jue_equ', {
		id_partida: id_partida,
		categoria: categoria,
		juego: juego,
		equipos_en_juego: equipos_en_juego
	})
})

router.post('/partidas/editar/:id_part/categoria/:id_cat/editado/juego/:id_jue', async (req, res) => {
	const id_partida = req.params.id_part
	const id_juego = req.params.id_jue
	
	const id_local = req.body.local
	const id_visitante = req.body.visitante
	const factor_local = req.body.f_local
	const factor_empate = req.body.f_empate
	const factor_visitante = req.body.f_visitante
	const fecha = req.body.fecha
	let hora = req.body.hora
	let minutos = req.body.minutos
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

	const partida = await db.Partida.findOne({
		where: {
			id: id_partida
		}
	})

	partida.fecha = nueva_fecha
	partida.hora_inicio = hora + ':' + minutos
	partida.duracion = duracion
	partida.factor_local = factor_local
	partida.factor_visita = factor_visitante
	partida.factor_empate = factor_empate
	partida.resultado = resultado
	partida.estado = estado
	partida.id_local = id_local
	partida.id_visita = id_visitante
	partida.id_juego = id_juego

	const partida_equipos = await db.Partida_Equipo.findAll({
		where: {
			id_partida: id_partida
		}
	})

	partida_equipos[0].id_equipo = id_local
	partida_equipos[1].id_equipo = id_visitante

	await partida_equipos[0].save()
	await partida_equipos[1].save()
	await partida.save()
	
	res.redirect('/partidas')
})

module.exports = router