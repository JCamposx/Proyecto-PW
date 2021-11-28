const express = require('express')
const router = express.Router()
const db = require('../dao/models')



//*Tabla principal de juegos, con opciones de editar,eliminar, crear nueo juego
router.get('/juegos', async (req, res)=> {
    
    const juegos = await db.Juego.findAll({
        order : [
            ['id', 'DESC']
        ]
    });    
    console.log(juegos)
    
    let nuevaListaJuegos = []
    for (let juego of juegos ){
        const categoria = await juego.getCategoria()
        nuevaListaJuegos.push({
            id: juego.id,
            nombre: juego.nombre_jue,
            categoriaNombre  : categoria.nombre_cat
        })
    }

    console.log("lista",nuevaListaJuegos)
    
    res.render('juegos', {
        juegos : nuevaListaJuegos
    })
})

module.exports = router


