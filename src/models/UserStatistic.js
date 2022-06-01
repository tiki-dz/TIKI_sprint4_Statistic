module.exports = (sequelize, DataTypes) => {
  const userStatistic = sequelize.define(
    'UserStatistic',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      totalClient: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      manClient: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      womenClient: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      activatedClient: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      
      deactivatedClient: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      totalPartner: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      activatedPartner: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      deactivatedPartner: {
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

  return userStatistic
}
