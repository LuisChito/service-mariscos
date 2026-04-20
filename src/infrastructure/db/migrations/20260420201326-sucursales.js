'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Sucursales',
      {
        nombre: { type: Sequelize.STRING, allowNull: false },
        imagen: { type: Sequelize.STRING, allowNull: false },
        direccion: { type: Sequelize.STRING, allowNull: false },
        mapa: { type: Sequelize.STRING, allowNull: false },
        status: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Sucursales');
  }
};
