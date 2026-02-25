'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Platos', {
      id_plato: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      id_categoria: {
        type: Sequelize.INTEGER,
        references: { model: 'Categorias', key: 'id_categoria' },
        onUpdate: 'CASCADE', onDelete: 'SET NULL'
      },
      nombre: { type: Sequelize.STRING, allowNull: false },
      descripcion: { type: Sequelize.TEXT },
      precio: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
      imagen_url: { type: Sequelize.STRING },
      disponible: { type: Sequelize.BOOLEAN, defaultValue: true }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Platos');
  }
};
