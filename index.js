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
//se creo el acceso al login
//esto tbm se modifico recien, ya se puso script para corroborar contra y username , pero falta  compararlo a la db 
//app.get('/', (req, res) => {
//	res.render('login')
//})

//esto se modifico recien, aqui el post funciona pero con scripts , falta la db
//app.post('/login',(req,res)=>{
//	db.Cliente.create({

//	})
//	res.render('admin_menu')	
//})

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

//modifoc recien ---- app.get('/categorias',(req,res)=>{
//	res.render('categorias')
//})


//cada que le das click a juegos te redireccion a una pagina
// app.get('/juegos',(req,res)=>{
// 	res.render('juegos')
// })
//cada que le das click a partidas te redireccion a una pagina
// app.get('/partidas',(req,res)=>{
// 	res.render('partidas')
// })
//cada que entras como cliente te redireccion a una pagina


app.get('/', (req,res)=>{
})

app.get('/cliente_menu',(req,res)=>{
	console.log('username', req.session.username)
	res.render('cliente_menu')
})

//cada que entras como cliente y das clic en historial
app.get('/historial', async (req,res)=>{
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


app.get('/partidas', async (req,res)=>{
	//Obtener partidas de la base de datos 
	const partidas = await db.Partida.findAll();
	console.log(partidas);
	res.render('partidas', {
		partidas : partidas
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