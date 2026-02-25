'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Promociones', {
      id_promo: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      titulo: { type: Sequelize.STRING, allowNull: false },
      descripcion: { type: Sequelize.TEXT },
      descuento_porcentaje: { type: Sequelize.DECIMAL(5, 2) },
      fecha_inicio: { type: Sequelize.DATE },
      fecha_fin: { type: Sequelize.DATE },
      activo: { type: Sequelize.BOOLEAN, defaultValue: true }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Promociones');
  }
};
