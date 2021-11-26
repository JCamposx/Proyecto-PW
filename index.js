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
app.get('/cliente/new',(req,res)=>{

	res.render('cliente_new')
})
app.post('/cliente/new',async(req,res)=>{
	const ClienteNom=req.body.cliente_nombre
	const ClienteApp=req.body.cliente_apellido
	const ClienteDNI=req.body.cliente_DNI
	const ClienteFoto=req.body.cliente_foto
	const ClienteCorreo=req.body.cliente_correo
	const ClienteCont=req.body.cliente_contraseña
	const ClienteTelf=req.body.cliente_telefono
	const ClienteDep=req.body.cliente_departamento
	const ClienteProv=req.body.cliente_provincia
	const ClienteDist=req.body.cliente_distrito
	const ClienteDir=req.body.cliente_direccion
	let ClientePEP=null
	if(req.body.cliente_PEP==true){
		ClientePEP=1
	}
	else{
		ClientePEP=0
	}

			await db.Cliente.create({
				nombre: ClienteNom,
				apellidos: ClienteApp,
				dni: ClienteDNI,
				foto: ClienteFoto,
				correo:ClienteCorreo,
				contraseña: ClienteCont,
				telefono: ClienteTelf,
				departamento: ClienteDep,
				provincia: ClienteProv,
				distrito: ClienteDist,
				direccion: ClienteDir,
				esPEP: ClientePEP
			})
			res.redirect('/Espera')
	
})
////////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
	console.log(`Se ha inicializado el servidor en el puerto ${PORT}`)
})