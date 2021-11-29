const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//* Eliminar Banner
router.get('/banners/eliminar/:codigo', async (req, res) => {
    const idBanner = req.params.codigo
    await db.Banner.destroy({
        where : {
            id : idBanner
        }
    })

    res.redirect('/banners')
})


module.exports = router
