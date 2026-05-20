'use strict'

const { Sucursales } = require('../../../infrastructure/db/models');

async function getDashboard() {
    try {
        const sucActivas = await Sucursales.count({
            where: {
                status: 1
            }
        });
        const sucTotales = await Sucursales.count();


        return {
            sucActivas, sucTotales
        };
        
    } catch (error) {
        console.error('Error al obtener el los datos del dashboard', error)
    }
}

module.exports = getDashboard;
