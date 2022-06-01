module.exports = (sequelize, DataTypes) => {
  const subCategoryStatistic = sequelize.define(
    'SubCategoryStatistic',
    {
      SubCategory: {
        type: DataTypes.String(45),
        autoIncrement: true,
        primaryKey: true
      },
      category: {
        type: DataTypes.String(45),
        allowNull: false,
        
      },
      totalEvents: {
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

  return subCategoryStatistic
}
