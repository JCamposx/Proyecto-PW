const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const db = require('./dao/models')

const PORT = 5000
const app = express()

app.use(express.static('assets'))
app.use(session({
	secret: 'pw-123',
	resave: false,
	saveUninitialized: false
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.set('view engine', 'ejs')

////////////////////////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
	res.send('HOLA: MUNDO')
})

////////////////////////////////////////////////////////////////////////////////////////

//* LISTA DE PARTIDAS

app.get('/partidas', async (req, res) => {
	const partidas = await db.Partida.findAll({
		order: [
			['fecha']
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

////////////////////////////////////////////////////////////////////////////////////////

//* NUEVA PARTIDA

app.get('/partidas/nuevo', async (req, res) => {
	const categorias = await db.Categoria.findAll({
		order: [
			['id']
		]
	})

	res.render('partidas_nuevo', {
		categorias: categorias
	})
})

app.post('/partidas/nuevo', async (req, res) => {
	const id_cat = req.body.categoria
	
	res.redirect(`/partidas/nuevo/${id_cat}`)
})

app.get('/partidas/nuevo/:id_cat', async (req, res) => {
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

app.post('/partidas/nuevo/:id_cat', (req, res) => {
	const id_cat = req.params.id_cat
	const id_juego = req.body.juego

	res.redirect(`/partidas/nuevo/${id_cat}/${id_juego}`)
})

app.get('/partidas/nuevo/:id_cat/:id_jue', async (req, res) => {
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

app.post('/partidas/nuevo/:id_cat/:id_jue', async (req, res) => {
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
	nueva_fecha.setHours(parseInt(hora), parseInt(minutos))

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

///////////////////////////////////////////////////////////////////////////////////////5

app.listen(PORT, () => {
	console.log(`Se ha inicializado el servidor en el puerto ${PORT}`)
})