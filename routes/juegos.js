const express = require('express')
const router = express.Router()
const db = require('../dao/models')



//*Tabla principal de juegos, con opciones de editar,eliminar, crear nueo juego
router.get('/juegos', async (req, res)=> {
    
    const juegos = await db.Juego.findAll({
        order : [
            ['id']
        ]
    })

	for (let juego of juegos) {
		const categoria = await db.Categoria.findOne({
			where: {
				id: juego.id_categoria
			}
		})

		juego.nombre_categoria = categoria.nombre_cat
	}
    
    res.render('juegos', {
        juegos : juegos
    })
})

module.exports = router


