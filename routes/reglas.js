const express = require('express')
const router = express.Router()
const db = require('../dao/models')


router.get('/reglas', async (req, res)=> {
    
    res.render('reglas')
})

module.exports = router
