const express = require('express')
const router = express.Router()
const statisticController = require('../controllers/statisticController')
const initHelper = require('../controllers/initHelper')

router.get('/cities', statisticController.getCityStatistics)
router.get('/Purchases', statisticController.getPurchaseStatistics)
router.get('/categories', statisticController.getSubCategoryStatistic)
router.get('/users', statisticController.getUserStatistic)
router.post('/initwilaya', initHelper.add58wilaya)

module.exports = router
