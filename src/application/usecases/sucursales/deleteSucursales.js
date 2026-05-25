'use strict';

const { Sucursales } = require('../../../infrastructure/db/models');

async function deleteSucursales(nombre) {
	try {
		if (!nombre) {
			const err = new Error('El nombre de la sucursal es requerido');
			err.status = 400;
			throw err;
		}

		const deletedRows = await Sucursales.destroy({
			where: { nombre }
		});

		if (deletedRows === 0) {
			const err = new Error('Sucursal no encontrada');
			err.status = 404;
			throw err;
		}

		return { message: 'Sucursal eliminada correctamente', nombre };
	} catch (error) {
		throw error;
	}
}

module.exports = deleteSucursales;
