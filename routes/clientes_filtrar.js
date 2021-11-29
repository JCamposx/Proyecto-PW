const express = require('express')
const router = express.Router()
const db = require('../dao/models')

router.get('/clientes/filtrar/:codigo', async (req, res) => {
    const idDni = req.body.cliente_dni
    const idNombre= req.body.cliente_nombre
    const idApellido = req.body.cliente_apellido
    const idCorreo = req.body.cliente_correo
    
    const dni = await db.Cliente.findOne({
        where : {
            id : idDni
        }
    })

    const nombre = await db.Cliente.findAll({
        where :{
            id : idNombre
        }
    })

    const apellido = await db.Cliente.findAll({
        where :{
            id : idApellido
        }
    })

    const correo = await db.Cliente.findAll({
        where :{
            id : idCorreo
        }
    })

    res.render('clientes_filter', {
        dni : dni,
        nombre : nombre,
        apellido : apellido,
        correo : correo
    })
})

module.exports = router
