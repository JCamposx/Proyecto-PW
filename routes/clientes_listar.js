const express = require('express')
const router = express.Router()
const db = require('../dao/models')


router.get('/clientes/listar', async (req, res) => {

    const cliente = await db.Cliente.findAll({
    })

    //const categorias = await db.Categoria.findAll()

    res.render('clientes_listar', {
        cliente : cliente
    })
})

router.post('/clientes/listar', async (req, res) => {
    const idCliente = req.body.cliente_id
    const nombre = req.body.cliente_nombre
    const apellido = req.body.cliente_apellido
    const dni = req.body.cliente_dni
    const correo = req.body.cliente_correo
    const telefono = req.body.cliente_telefono

    
    ///////////////////////////////
	cliente.nombre = nombre
    cliente.apellidos = apellido
    cliente.dni = dni
    cliente.correo =correo
    cliente.telefono = telefono
    
    ///////////////////////////////


    res.redirect('/clientes')

})

module.exports = router
