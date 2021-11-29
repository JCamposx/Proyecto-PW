const express = require('express')
const router = express.Router()
const db = require('../dao/models')

//* banner en movimiento
router.get('/banners/ver', (req, res) => {
	
    res.render('banners_rotativo')
})



module.exports = router