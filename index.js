const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const route = require('./routes/routes')
const bcrypt = require("bcryptjs")

const PORT = process.env.PORT || 5000
const db = require('./dao/models')
const { Client } = require('pg')
const path= require('path')
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
app.use(route)

app.set('view engine', 'ejs')
//el tradicional path join
app.use(express.static('assets'))

app.listen(PORT, () => {
	console.log(`Se ha inicializado el servidor en el puerto ${PORT}`)
})
////////////////////////////////////////////////////////////////////////////////////////
//se creo el acceso al login
//ya se puso script para corroborar contra y username , pero falta  compararlo a la db 
app.get('/', (req, res) => {
	res.render('login')
})

//aqui el post funciona pero con scripts , falta la db
app.post('/login',(req,res)=>{
	db.Cliente.create({

	})
	res.render('admin_menu')	
})

//redirecciona a menu cuando entra con el login
// app.get('/menu',(req,res)=>{
// 	res.render('menu')
// })

//redireccion al menu de cliente
// app.get('/menucliente',async(req,res)=>{
// 	const juegos = await db.Juego.findAll()
// 	res.render('cliente_menu',{juegos:juegos})
// })


// //cada que le das click a banner te redireccion a una pagina
// app.get('/banners',(req,res)=>{
// 	res.render('banners')
// })
// //cada que le das click a categoria te redireccion a una pagina

app.get('/categorias',(req,res)=>{
	res.render('categorias')
})
//cada que le das click a juegos te redireccion a una pagina
// app.get('/juegos',(req,res)=>{
// 	res.render('juegos')
// })
//cada que le das click a partidas te redireccion a una pagina
// app.get('/partidas',(req,res)=>{
// 	res.render('partidas')
// })
//cada que entras como cliente te redireccion a una pagina
app.get('/cliente/historial', async (req,res)=>{
	//mostrar todas las apuestas - admnin
	const apuestas = await db.Apuesta.findAll({
		where: {
			id_cliente: 1
		}
	})

	res.render('cliente_historial',{
		apuestas: apuestas
	})
})