const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//* Modificar-UPDATE 
router.get('/clientes/listar/:codigo', async (req, res) => {
    const idCliente = req.params.codigo

    const cliente = await db.Cliente.findOne({
        where : {
            id : idCliente
        }
    })

    //const categorias = await db.Categoria.findAll()

    res.render('clientes_listar', {
        cliente : cliente
    })
})

router.post('/clientes/listar', async (req, res) => {
    const idCliente = req.body.cliente_id
    const nombre = req.body.cliente_nombre
    const imagen = req.body.cliente_apellido
    const dni = req.body.cliente_dni
    const correo = req.body.cliente_correo
    const telefono = req.body.cliente_telefono

    
    const cliente = await db.Cliente.findOne({
        where : {
            id : idCliente
        }
    })
    
    ///////////////////////////////
	cliente.nombre = nombre
    cliente.imagen = imagen
    cliente.dni = dni
    cliente.correo =correo
    cliente.telefono = telefono
    
    await cliente.save()
    ///////////////////////////////


    res.redirect('/clientes')

})

module.exports = router
