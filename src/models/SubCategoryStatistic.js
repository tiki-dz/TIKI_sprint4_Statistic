module.exports = (sequelize, DataTypes) => {
  const subCategoryStatistic = sequelize.define(
    'SubCategoryStatistic',
    {
      SubCategory: {
        type: DataTypes.STRING(45),
        primaryKey: true
      },
      category: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      totalEvents: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      classMethods: {
        associate: function (models) {
        }
      }
    }
  )

  return subCategoryStatistic
}
