const express = require('express')
const router = express.Router()
const db = require('../dao/config')

router.get('/', (req, res) => {
	res.send('HOLA MUNDO')
})

module.exports = router