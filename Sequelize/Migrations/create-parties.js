'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Parties', {
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
      Blanc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Noir: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Resultat: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nombre_coups: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Parties');
  }
};