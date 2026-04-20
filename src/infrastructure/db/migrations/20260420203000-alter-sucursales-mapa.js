'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Sucursales', 'mapa', {
      type: Sequelize.STRING(1000),
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Sucursales', 'mapa', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  }
};