'use strict'
const { where } = require('sequelize');
const { Platos } =  require('../../../infrastructure/db/models');

async function getPlatos() {
    try{
        const totalPaltos = await Platos.count({
            where: {
                disponible: 1
            }
        });
        return {
            totalPaltos
        }
    }catch (error){
        console.error('Error al obtenerdatos',error)
    }
}

module.exports = getPlatos;