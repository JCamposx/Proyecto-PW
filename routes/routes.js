const express = require('express')
const router = express.Router()
const db = require('../dao/models')

router.use(require('./cliente'))
router.use(require('./menu'))

module.exports = router