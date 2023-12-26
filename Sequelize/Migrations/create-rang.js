'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rangs', {
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
      Rang_Blanc: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Rang_Noir: {
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
    await queryInterface.dropTable('Rangs');
  }
};