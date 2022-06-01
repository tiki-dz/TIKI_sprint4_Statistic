const express = require('express')
const router = express.Router()
const statisticController = require('../controllers/statisticController')

router.post('/users', statisticController.getUserStatistic())

module.exports = router
