'use strict';

const { Sucursales } = require('../../../infrastructure/db/models');

async function getTodasSuc() {
    try{
        const sucursales = await Sucursales.findAll({
            attributes: ['nombre', 'imagen', 'direccion', 'status'],

        });
        return sucursales;
    }
    catch(error){
        console.error('Error al obtener sucursales:', error);
        throw new Error('Error al obtener sucursales');
    }
}

module.exports = getTodasSuc;