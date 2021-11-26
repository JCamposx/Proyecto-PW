const express = require('express')
const router = express.Router()
const db = require('../dao/models')



//*Tabla principal de juegos, con opciones de editar,eliminar, crear nueo juego
router.get('/juegos', async (req, res)=> {
    
    const juegos = await db.Juego.findAll();
    res.render('juegos', {
        juegos : juegos
    })
}
)

module.exports = router


