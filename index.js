const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const db = require('./dao/models')

const PORT = 5000
const app = express()

//const ejs=require('ejs')	
//const { Client } = require('pg')
//const path= require('path')
//const { get } = require('http')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.use(express.static('assets'))
app.set('view engine', 'ejs')// el tradicional path join
app.use(session({
	secret: 'pw-123',
	resave: false,
	saveUninitialized: false
}))//se configura al servidor trabajar con sesiones 


////////////////////////////////////////////////////////////////////////////////////////
app.get('/', (req,res)=>{
})

app.get('/cliente_menu',(req,res)=>{
	console.log('username', req.session.username)
	res.render('cliente_menu')
})

//cada que entras como cliente y das clic en historial
app.get('/cliente_historial', async (req,res)=>{
	//mostrar todas las apuestas
	const apuestas = await db.Apuesta.findAll()
	//	{
	//where: {
	//		id_cliente: req.session.id_cliente
	//	}
	//})
	res.render('cliente_historial',{
		apuestas: apuestas
	})
})


app.get('/partidascl', async (req,res)=>{
	//Obtener partidas de la base de datos 
	const partidas = await db.Partida.findAll();
	//console.log(partidas);
	res.render('partidascl', {
		partidas : partidas
	})
})

app.get('/capuestas', async (req,res)=>{
	const apuestas = await db.Apuesta.findAll()
	res.render('capuestas',{
		apuestas : apuestas
	})
})

//Para logearse 
app.get('/login', (req, res) => {
	if(req.session.username != undefined){
		res.redirect('/cliente_menu')
	}
	else{
		res.render('login')
	}
})


//post
app.post('/login',(req,res)=>{
	const username = req.body.username
	const password = req.body.password

	if(username == "pw" && password=="123"){
		//login correcto 
		req.session.username = username //guardando la varibale en sesion
		res.redirect('/cliente_menu')
	}else{
		res.redirect('/login')
	}
})

////////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
	console.log(`Se ha inicializado el servidor en el puerto ${PORT}`)
})