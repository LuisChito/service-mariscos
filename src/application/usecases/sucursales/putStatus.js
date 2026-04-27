'use strict';

const { Sucursales } = require('../../../infrastructure/db/models');

async function putStatus(nombre, status) {
    try {
        const sucursal = await Sucursales.findOne({ where: { nombre } });
        if (!sucursal) {
            throw new Error('Sucursal no encontrada');
        }
        await sucursal.update({ status });
        return sucursal;
    } catch (error) {
        throw new Error('Error al actualizar el estado de la sucursal');
    }
}

module.exports = putStatus;