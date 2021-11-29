const express = require('express')
const router = express.Router()
const db = require('../dao/models')

app.get('/cliente',(req,res)=>{

	res.render('cliente_historial',{
		partidas: partidas
	})
})

module.exports = router