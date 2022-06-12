const { SubCategoryStatistic, UserStatistic, PurchaseStatistics, City } = require('../models')

async function addSubCategory (payload) {
  try {
    const subCategoryName = payload.subCategoryName
    const categoryName = payload.categoryName
    const subCategory = await SubCategoryStatistic.create({ SubCategory: subCategoryName, category: categoryName, totalEvents: 0 })

    console.log('subCategory added : ', subCategory.dataValues)
  } catch (error) {
    console.log(error)
  }
}

async function updateSubCategory (payload) {
  try {
    const subCategoryName = payload.subCategoryName
    const categoryName = payload.categoryName
    const subCategoryInstense = await SubCategoryStatistic.findByPK(subCategoryName)
    subCategoryInstense.SubCategory = (categoryName == null) ? subCategoryInstense.subCategoryName : categoryName
    subCategoryInstense.category = (categoryName == null) ? subCategoryInstense.categoryName : categoryName
    subCategoryInstense.save()

    console.log('subCategory added : ', subCategoryInstense)
  } catch (error) {
    console.log(error)
  }
}

function addEvent (payload) {
  try {
    const subCategoryArray = payload.subCategoryArray
    subCategoryArray.forEach(async element => {
      const data = await SubCategoryStatistic.findByPK(element.name)
      data.totalEvents += 1
      data.save()
    })

    console.log('event added ')
  } catch (error) {
    console.log(error)
  }
}

async function addEventToSubCategory (payload) {
  try {
    const subCategoryName = payload.subCategoryName
    const data = await SubCategoryStatistic.findByPK(subCategoryName)
    data.totalEvents += 1
    data.save()

    console.log('event added ')
  } catch (error) {
    console.log(error)
  }
}

async function deletEventFromSubCategory (payload) {
  try {
    const subCategoryName = payload.subCategoryName
    const data = await SubCategoryStatistic.findByPK(subCategoryName)
    data.totalEvents -= 1
    data.save()

    console.log('event added ')
  } catch (error) {
    console.log(error)
  }
}

async function deleteEvent (payload) {
  try {
    const subCategoryArray = payload.subCategoryArray
    subCategoryArray.forEach(async element => {
      const data = await SubCategoryStatistic.findByPK(element.name)
      data.totalEvents -= 1
      data.save()
    })

    console.log('event added ')
  } catch (error) {
    console.log(error)
  }
}

async function updateUser (payload) {
  try {
    await UserStatistic.create({
      totalClient: payload.totalClient,
      manClient: payload.manClient,
      womenClient: payload.womenClient,
      activatedClient: payload.activatedClient,
      deactivatedClient: payload.deactivatedClient,
      totalPartner: payload.totalPartner,
      activatedPartner: payload.activatedPartner,
      deactivatedPartner: payload.deactivatedPartner
    })

    console.log('event added ')
  } catch (error) {
    console.log(error)
  }
}
async function addPurchase (payload) {
  try {
    const date = payload.date
    const totalPurchase = payload.totalPurchase
    const income = payload.income
    const purchaseStatistic = await PurchaseStatistics.create({ income: income, totalPurchase: totalPurchase, date: date })

    console.log('event added ', purchaseStatistic.dataValues)
  } catch (error) {
    console.log(error)
  }
}
async function addToCity (payload) {
  try {
    const city = payload.city
    const cityInstance = await City.findOne({
      where: {
        name: city
      }
    })
    cityInstance.nbUser += 1
    cityInstance.save()

    console.log('event added ', cityInstance)
  } catch (error) {
    console.log(error)
  }
}
async function removeFromCity (payload) {
  try {
    const city = payload.city
    const cityInstance = await City.findOne({
      where: {
        name: city
      }
    })
    cityInstance.nbUser -= 1
    cityInstance.save()

    console.log('event added ', cityInstance)
  } catch (error) {
    console.log(error)
  }
}
module.exports = { updateSubCategory, addSubCategory, addEvent, addEventToSubCategory, deleteEvent, deletEventFromSubCategory, updateUser, addPurchase, addToCity, removeFromCity }
