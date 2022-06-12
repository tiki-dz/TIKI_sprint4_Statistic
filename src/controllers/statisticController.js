const { PurchaseStatistics, SubCategoryStatistic, UserStatistic, City } = require('../models')
// getters
function getUserStatistic (req, res) {
  UserStatistic.findAll().then(userStatistic => {
    return res.status(200).send({ success: true, data: userStatistic, message: 'success' })
  })
}

async function getSubCategoryStatistic (req, res) {
  try {
    const subCategoryStatistic = await SubCategoryStatistic.findAll()
    return res.status(200).send({ success: true, data: subCategoryStatistic, message: 'success' })
  } catch (error) {
    return res.status(500).send({ error: error, success: false, message: 'processing err' })
  }
}

async function getPurchaseStatistics (req, res) {
  try {
    const purchaseStatistics = await PurchaseStatistics.findAll()
    return res.status(200).send({ success: true, data: purchaseStatistics, message: 'success' })
  } catch (error) {
    return res.status(500).send({ error: error, success: false, message: 'processing err' })
  }
}

async function getCityStatistics (req, res) {
  try {
    const city = await City.findAll()
    return res.status(200).send({ success: true, data: city, message: 'success' })
  } catch (error) {
    return res.status(500).send({ error: error, success: false, message: 'processing err' })
  }
}

// setters

module.exports = { getUserStatistic, getSubCategoryStatistic, getPurchaseStatistics, getCityStatistics }
