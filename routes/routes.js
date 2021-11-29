const express = require('express')
const router = express.Router()
const db = require('../dao/models')

router.get('/', (req, res) => {
	res.send('HOLA MUNDO')
})

module.exports = router