'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_criacao: {
        type: Sequelize.DATE
      },
      perfil: {
        type: Sequelize.STRING
      },
    })
  },

  async down (queryInterface, Sequelize) {
    async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('usuarios')
    }
  }
};


