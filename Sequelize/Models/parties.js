'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.parties.hasMany(models.tournoi, models.rang)

      models.parties.belongsto(models.users, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  }
  Parties.init({
    USERS_idUSERS: DataTypes.INTEGER,
    Blanc: DataTypes.STRING,
    Noir: DataTypes.STRING,
    Resultat: DataTypes.STRING,
    nombre_coups: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Parties',
  });
  return Parties;
};