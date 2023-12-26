'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tournoi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.tournoi.belongsto(models.users, {
        foreignKey: {
          allowNull: false
        }
      })

      models.tournoi.belongsto(models.parties, {
        foreignKey: {
          allowNull: false
        }
      })

      models.tournoi.belongsto(models.users, {
        foreignKey: {
          allowNull: false
        }
      })

    }
  }
  Tournoi.init({
    USERS_idUSERS: DataTypes.INTEGER,
    Parties_idParties: DataTypes.INTEGER,
    Parties_USERS_idUSERS: DataTypes.INTEGER,
    Nom_Tournoi: DataTypes.STRING,
    Nombre_users: DataTypes.INTEGER,
    Nombre_parties: DataTypes.INTEGER,
    Date_debut: DataTypes.DATE,
    Date_fin: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tournoi',
  });
  return Tournoi;
};