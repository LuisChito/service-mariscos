'use strict';

const { Sucursales } = require('../../../infrastructure/db/models');

async function getSucursales() {
    try{
        const sucursales = await Sucursales.findAll({
            attributes: ['nombre', 'imagen', 'direccion', 'mapa'],
            where: {
                status: true
            }
        });
        return sucursales;
    }
    catch(error){
        console.error('Error al obtener sucursales:', error);
        throw new Error('Error al obtener sucursales');
    }
}

module.exports = getSucursales;