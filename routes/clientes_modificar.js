const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//* Modificar-UPDATE 
router.get('/clientes/modificar/:codigo', async (req, res) => {
    const idCliente = req.params.codigo

    const cliente = await db.Cliente.findOne({
        where : {
            id : idCliente
        }
    })

    //const categorias = await db.Categoria.findAll()

    res.render('clientes_update', {
        cliente : cliente
    })
})

router.post('/clientes/modificar', async (req, res) => {
    const idCliente = req.body.cliente_id
    const nombre = req.body.cliente_nombre
    const imagen = req.body.cliente_apellido
    const dni = req.body.cliente_dni
    const foto = req.body.cliente_foto
    const correo = req.body.cliente_correo
    const telefono = req.body.cliente_telefono
    const direccion = req.body.cliente_direccion
    const distrito = req.body.cliente_distrito
    const provincia = req.body.cliente_provincia
    const departamento = req.body.cliente_departamento
    const estado = req.body.cliente_estado
    const PEP = req.body.cliente_PEP

    

    const cliente = await db.Cliente.findOne({
        where : {
            id : idCliente
        }
    })
    
    ///////////////////////////////
    if(req.body.cliente_PEP== "1"){
		cliente.nombre = nombre
        cliente.imagen = imagen
        cliente.dni = dni
        cliente.foto = foto
        cliente.correo =correo
        cliente.telefono = telefono
        cliente.direccion = direccion
        cliente.distrito = distrito
        cliente.provincia = provincia
        cliente.departamento = departamento
        cliente.estado = estado
    
        await cliente.save()
	}
	else{
		console.log('cliente')
	}
    ///////////////////////////////


    res.redirect('/clientes')

})

module.exports = router
