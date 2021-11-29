const express = require('express')
const router = express.Router()
const db = require('../dao/models')

router.get('/cliente/espera',(req,res)=>{
	res.render('cliente_espera')
})
router.post('/cliente/espera',(req,res)=>{
	req.session.destroy()
	res.redirect('/')
})
module.exports=router
