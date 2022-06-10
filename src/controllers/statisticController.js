const { PurchaseStatistics, SubCategoryStatistic, UserStatistic, City } = require('../models')

function getUserStatistic (req, res) {
  try {
    const userStatistic = UserStatistic.findAll()
    res.status(200).send().json({ success: true, data: userStatistic, message: 'success' })
  } catch (error) {
    res.status(500).send({ error: error, success: false, message: 'processing err' })
  }
}

function getSubCategoryStatistic (req, res) {
  try {
    const subCategoryStatistic = SubCategoryStatistic.findAll()
    res.status(200).send().json({ success: true, data: subCategoryStatistic, message: 'success' })
  } catch (error) {
    res.status(500).send({ error: error, success: false, message: 'processing err' })
  }
}

function getPurchaseStatistics (req, res) {
  try {
    const purchaseStatistics = PurchaseStatistics.findAll()
    res.status(200).send().json({ success: true, data: purchaseStatistics, message: 'success' })
  } catch (error) {
    res.status(500).send({ error: error, success: false, message: 'processing err' })
  }
}

function getCityStatistics (req, res) {
  try {
    const city = City.findAll()
    res.status(200).send().json({ success: true, data: city, message: 'success' })
  } catch (error) {
    res.status(500).send({ error: error, success: false, message: 'processing err' })
  }
}

module.exports = { getUserStatistic, getSubCategoryStatistic, getPurchaseStatistics, getCityStatistics }
