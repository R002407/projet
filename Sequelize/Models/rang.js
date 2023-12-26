'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.rang.belongsto(models.users, {
        foreignKey: {
          allowNull: false
        }
      })

      models.rang.belongsto(models.parties, {
        foreignKey: {
          allowNull: false
        }
      })

      models.rang.belongsto(models.users, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  }
  Rang.init({
    USERS_idUSERS: DataTypes.INTEGER,
    Parties_idParties: DataTypes.INTEGER,
    Parties_USERS_idUSERS: DataTypes.INTEGER,
    Rang_Blanc: DataTypes.INTEGER,
    Rang_Noir: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rang',
  });
  return Rang;
};