const express = require('express')
const router = express.Router()
const db = require('../dao/models')
const bcrypt=require("bcryptjs")


router.get('/cliente/new',(req,res)=>{

	res.render('cliente_new')
})
router.post('/cliente/new',async(req,res)=>{
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

module.exports=router
////////////////////////////////////////////////////////////////////////////////////////

