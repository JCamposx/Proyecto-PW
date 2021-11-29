const express = require('express')
const router = express.Router()
const db = require('../dao/models')



//*Tabla principal de banners, con opciones de editar,eliminar, crear nueo banner
router.get('/banners', async (req, res)=> {
    
    const banners = await db.Banner.findAll();
    res.render('banners', {
        banners : banners
    })
}
)

module.exports = router
