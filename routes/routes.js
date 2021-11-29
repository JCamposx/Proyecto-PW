const express = require('express')
const router = express.Router()
const db = require('../dao/models')

router.use(require('./cliente'))

module.exports = router