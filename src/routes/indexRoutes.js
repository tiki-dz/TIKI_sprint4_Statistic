const express = require('express')
const router = express.Router()

const statistic = require('./statisticRoutes')

router.use('/statistic', statistic)
module.exports = router
