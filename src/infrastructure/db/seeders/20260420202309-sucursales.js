'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sucursales', [
      {
        nombre: 'Tijuana',
        imagen: '/imgs/layout/sucursales/bolivia.webp',
        direccion: 'Insurgentes, Tijuana Baja California',
        mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76169.49615876176!2d-117.02189400679612!3d32.46605910978985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d949c6ca59b29d%3A0x7fefafcbfb50418d!2sMariscos%20El%20%C3%81ngel%20Radical%20Otay!5e0!3m2!1ses-419!2smx!4v1776405243953!5m2!1ses-419!2smx',
        status: true,
      },
      {
        nombre: 'Acapulco',
        imagen: '/imgs/layout/sucursales/acapulco.webp',
        direccion: 'Costera, Acapulco Guerrero',
        mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15274.31371633311!2d-99.86487161668465!3d16.847257313020283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca59d1d267b947%3A0x8415216289dc2b!2sLa%20Jaiba%20Locca%20Costa%20Azul!5e0!3m2!1ses-419!2smx!4v1776405562599!5m2!1ses-419!2smx',
        status: true,
      },
      {
        nombre: 'Campeche',
        imagen: '/imgs/layout/sucursales/campeche.webp',
        direccion: 'Malecon, Campeche',
        mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35705.71028374412!2d-90.57189814581135!3d19.835701273812376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f833ffb8da59c7%3A0x4ac133ee18610002!2sLa%20Pigua!5e0!3m2!1ses-419!2smx!4v1776405754754!5m2!1ses-419!2smx',
        status: true,
      },
      {
        nombre: 'Merida',
        imagen: '/imgs/layout/sucursales/merida.webp',
        direccion: 'Ciudad Caucel, Merida Yucatan',
        mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17718.645404411454!2d-89.7225049460334!3d20.997192309537493!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5675d328b9593f%3A0xc4e64d0892fa0ee4!2sMariscos%20de%20Mazatl%C3%A1n!5e0!3m2!1ses-419!2smx!4v1776405855940!5m2!1ses-419!2smx',
        status: true,
      },
      {
        nombre: 'Monterrey',
        imagen: '/imgs/layout/sucursales/monterrei.webp',
        direccion: 'San Agustin, Monterrey Nuevo Leon',
        mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57530.09061052153!2d-100.39718627929699!3d25.68353523318933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be6cdbe984d3%3A0xcee0507304d04b2a!2sMariscos%20Los%20Arbolitos%20de%20Cajeme%20-%20San%20Agust%C3%ADn!5e0!3m2!1ses-419!2smx!4v1776405953635!5m2!1ses-419!2smx',
        status: true,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sucursales', {
      nombre: { [Sequelize.Op.in]: ['Tijuana', 'Acapulco', 'Campeche', 'Merida', 'Monterrey'] },
    });
  }
};
