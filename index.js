const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const db = require('./dao/models')
const ejs=require('ejs')
const { Client } = require('pg')
const path= require('path')
const Cliente=require('./dao/models/cliente')


///conexio a base de datos postgres
const connectionData = {
	user: 'postgres',
	host: "127.0.0.1",
	database: 'postgres',
	password: 'postgre',
	port: 5432,
  }
  const client = new Client(connectionData)
  client.connect()
  console.log('se conecto')




//partidas.id 
const partidas =[{
	id:1,fecha:"12/10/21",hora:"12 am",numero:1,
	equipoa: "A", equipob:"B",
	categoria: "primera",
	juego:"primera ronda", equipoapostado:"A",
	estado:"ganada",
	monto:15,factor:2,resultado:15

	
},{id:2,fecha:"12/10/21",hora:"12 am",numero:1,
equipoa: "A", equipob:"B",
categoria: "primera",
juego:"primera ronda", equipoapostado:"A",
estado:"pendiente",
monto:15,factor:1,resultado:15},
{
	id:3,fecha:"12/10/21",hora:"12 am",numero:1,
	equipoa: "A", equipob:"B",
	categoria: "primera",
	juego:"primera ronda", equipoapostado:"A",
	estado:"perdida",
	monto:15,factor:0,resultado:15
}];
//juegos
const juegos = [{
	id:1,nombre:"U vs Alianza"
},{
	id:2,nombre:"atletico vs madrid"
},
{
	id:3,nombre:"barcelona vs flamengo"
},
{
	id:4,nombre:"cristal vs sport boys"
}]

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
//el tradicional path join
app.use(express.static('assets'))

////////////////////////////////////////////////////////////////////////////////////////
//se creo el acceso al login
//ya se puso script para corroborar contra y username , pero falta  compararlo a la db 
app.get('/', (req, res) => {
	res.render('login')
})

//aqui el post funciona pero con scripts , falta la db
app.post('/login',(req,res)=>{
	res.render('admin_menu')
	
})

//redirecciona a menu cuando entra con el login
app.get('/menu',(req,res)=>{
	res.render('menu')
})

//redireccion al menu de cliente
app.get('/menucliente',(req,res)=>{
	res.render('cliente_menu',{juegos:juegos})
})


//cada que le das click a banner te redireccion a una pagina
app.get('/banners',(req,res)=>{
	res.render('banners')
})
//cada que le das click a categoria te redireccion a una pagina

app.get('/categorias',(req,res)=>{
	res.render('categorias')
})
//cada que le das click a juegos te redireccion a una pagina
app.get('/juegos',(req,res)=>{
	res.render('juegos')
})
//cada que le das click a partidas te redireccion a una pagina
app.get('/partidas',(req,res)=>{
	res.render('partidas')
})
//cada que entras como cliente te redireccion a una pagina
app.get('/cliente',(req,res)=>{

	res.render('cliente_historial',{partidas:partidas})
})





////////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
	console.log(`Se ha inicializado el servidor en el puerto ${PORT}`)
})