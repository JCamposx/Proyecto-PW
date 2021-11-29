const express = require('express')
const router = express.Router()
const db = require('../dao/models')



//*Tabla principal de juegos, con opciones de editar,eliminar, crear nueo juego
router.get('/clientes', async (req, res)=> {
    
    const clientes = await db.Cliente.findAll({
        order : [
            ['id', 'DESC']
        ]
    });    
    console.log(clientes)

    res.render('clientes', {
        clientes : clientes
    })
})

module.exports = router


