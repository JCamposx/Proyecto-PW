const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//*Nuevo banner
router.get('/banners/new', (req, res) => {
	
    res.render('banners_new')
})

router.post('/banners/new', (req, res) => {
    const bannerNombre = req.body.banner_nombre
    const bannerImagen = req.body.banner_imagen
    const bannerUrl = req.body.banner_url
    const bannerEstado = req.body.banner_estado
    
	
    db.Banner.create({
        nombre : bannerNombre,
        imagen : bannerImagen,
        url : bannerUrl,
        estado : bannerEstado,
        
    })

    res.redirect('/banners')
})


module.exports = router