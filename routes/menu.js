const express = require('express')
const router = express.Router()
const db = require('../dao/models')

app.get('/menu',(req,res)=>{
	res.render('menu')
})

app.get('/menucliente',async(req,res)=>{
	const juegos = await db.Juego.findAll()
	res.render('cliente_menu',{juegos:juegos})
})

module.exports = router