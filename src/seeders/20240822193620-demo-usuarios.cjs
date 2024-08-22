'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [{
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      senha: 'senha123',
      data_criacao: new Date(),
      perfil: 'N'
    },
    {
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@example.com',
      senha: 'senha123',
      data_criacao: new Date(),
      perfil: 'N'
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {})
  }
};
