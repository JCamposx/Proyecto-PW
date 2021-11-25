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

app.get('/partidas', (req, res) => {
	res.render('partidas')
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

	console.log(categoria.nombre_cat)

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

	res.render()
})

////////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
	console.log(`Se ha inicializado el servidor en el puerto ${PORT}`)
})