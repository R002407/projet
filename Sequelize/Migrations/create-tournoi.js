'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tournois', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USERS_idUSERS: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          models: 'users',
          key:'id'
        }
      },
      Parties_idParties: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          models: 'parties',
          key:'id'
        }
      },
      Parties_USERS_idUSERS: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          models: 'users',
          key:'id'
        }
      },
      Nom_Tournoi: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Nombre_users: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Nombre_parties: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Date_debut: {
        allowNull: false,
        type: Sequelize.DATE
      },
      Date_fin: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tournois');
  }
};