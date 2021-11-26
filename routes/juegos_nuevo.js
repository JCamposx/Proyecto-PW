const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//*Nuevo juego
router.get('/juegos/new', (req, res) => {
	
    res.render('juegos_new')
})

router.post('/juegos/new', (req, res) => {
    const juegoNombre = req.body.juego_nombre
    
	
    db.Juego.create({
        nombre_jue : juegoNombre,
        
    })

    res.redirect('/juegos')
})


module.exports = router
