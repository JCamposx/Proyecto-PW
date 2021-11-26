const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//* Modificar-UPDATE banners
router.get('/banners/modificar/:codigo', async (req, res) => {
    const idBanners = req.params.codigo

    const banner = await db.Banner.findOne({
        where : {
            id : idBanner
        }
    })

    res.render('banners_update', {
        banner : banner
    })
})

router.post('/juegos/modificar', async (req, res) => {
    const idBanner = req.body.banner_id
    const nombre = req.body.banner_nombre
    const imagen = req.body.banner_imagen
    const url = req.body.banner_url
    const estado = req.body.banner_estado


    const banner = await db.Banner.findOne({
        where : {
            id : idBanner
        }
    })
    
    banner.nombre = nombre
    banner.imagen = imagen
    banner.url = url
    banner.estado = estado


    await banner.save()

    res.redirect('/banners')

})

module.exports = router
