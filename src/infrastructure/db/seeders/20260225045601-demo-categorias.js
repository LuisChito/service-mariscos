'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categorias', [{
      nombre: 'Ceviches',
      descripcion: 'Mariscos frescos marinados en cítricos. Un clásico frío, ligero y lleno de sabor que te transporta a la costa',
    }, {
      nombre: 'Bebidas',
      descripcion: 'Selección de refrescos y cervezas nacionales para acompañar tus platillos',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categorias', null, {});
  }
};
