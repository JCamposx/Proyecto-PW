const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const db = require('./dao/models')
const bcrypt=require("bcryptjs")

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
app.get('/cliente/new',(req,res)=>{

	res.render('cliente_new')
})
app.post('/cliente/new',async(req,res)=>{
	const ClienteNom=req.body.cliente_nombre
	const ClienteApp=req.body.cliente_apellido
	const ClienteDNI=req.body.cliente_DNI
	const ClienteFoto=req.body.cliente_foto
	const ClienteCorreo=req.body.cliente_correo
	const ClienteTelf=req.body.cliente_telefono
	const ClienteDep=req.body.cliente_departamento
	const ClienteProv=req.body.cliente_provincia
	const ClienteDist=req.body.cliente_distrito
	const ClienteDir=req.body.cliente_direccion
	let contraseña=req.body.cliente_contraseña
	
	let PEPAux=0
	if(req.body.cliente_PEP=="on"){
		PEPAux=1
	}
	else{
		PEPAux=0
	}
	const ClientePEP=PEPAux

	await bcrypt.hash(contraseña,5,async(err,contEncryptada)=>{
		if(err){
			console.log("Error encryptando: ",err);
		}
		else{
			contraseña=contEncryptada
			console.log(contEncryptada)
			console.log(contraseña)
		}			await db.Cliente.create({
				nombre: ClienteNom,
				apellidos: ClienteApp,
				dni: ClienteDNI,
				foto: ClienteFoto,
				correo:ClienteCorreo,
				contraseña: contraseña,
				telefono: ClienteTelf,
				departamento: ClienteDep,
				provincia: ClienteProv,
				distrito: ClienteDist,
				direccion: ClienteDir,
				esPEP: ClientePEP
			})
			res.redirect('/cliente/espera')
	})
	

	
})
app.get('/cliente/espera',(req,res)=>{
	res.render('cliente_espera')
})
app.post('/cliente/espera',(req,res)=>{
	req.session.destroy()
	res.redirect('/')
})
////////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
	console.log(`Se ha inicializado el servidor en el puerto ${PORT}`)
})