module.exports = (sequelize, DataTypes) => {
  const city = sequelize.define(
    'City',
    {
      idCity: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      nbUser: {
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

  return city
}
