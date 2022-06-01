module.exports = (sequelize, DataTypes) => {
  const purchaseStatistics = sequelize.define(
    'PurchaseStatistics',
    {
      idPurchaseStatistics: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      totalPurchase: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      income: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      classMethods: {
        associate: function (models) {
        }
      }
    }
  )

  return purchaseStatistics
}
