const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//* banner en movimiento
router.get('/banners/ver', async (req, res) => {
    const banners = await db.Banner.findAll({
    })

    res.render('banners_rotativo', {
        banners : banners,

    })
})



module.exports = router