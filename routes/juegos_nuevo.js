const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//*Nuevo juego
router.get('/juegos/new', async (req, res) => {
	const categorias = await db.Categoria.findAll()
    res.render('juegos_new',{
        categorias : categorias
    })
})

router.post('/juegos/new', (req, res) => {
    const juegoNombre = req.body.juego_nombre
    const juegoCategoriaId = req.body.juego_categoria_id
	
    db.Juego.create({
        nombre_jue : juegoNombre,
        id_categoria : juegoCategoriaId
        
    })

    res.redirect('/juegos')
})


module.exports = router
