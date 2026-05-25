'use strict'

const { where } = require('sequelize');
const { Sucursales } = require('../../../infrastructure/db/models');
const { Contacto } = require('../../../infrastructure/db/models');

async function getDashboard() {
    try {
        const sucActivas = await Sucursales.count({
            where: {
                status: 1
            }
        });
        const sucTotales = await Sucursales.count();
        const contComida = await Contacto.count({
            where:{
                motivo: 'Comida'
            }
        });
        const contServicio = await Contacto.count({
            where:{
                motivo: 'Servicio'
            }
        });
        const contVentas = await Contacto.count({
            where:{
                motivo: 'Ventas'
            }
        });
        
        return {
            sucActivas, sucTotales, contComida, contServicio, contVentas
        };
        
    } catch (error) {
        console.error('Error al obtener el los datos del dashboard', error)
    }
}

module.exports = getDashboard;
