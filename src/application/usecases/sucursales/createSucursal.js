const { Sucursales } = require('../../../infrastructure/db/models')

async function createSucursal(nombre, imagen, direccion, mapa, status = true) {
	try {
		if (!nombre || !imagen || !direccion || !mapa) {
			const err = new Error('Faltan campos requeridos: nombre, imagen, direccion y mapa')
			err.status = 400
			throw err
		}

		const sucursal = await Sucursales.create({
			nombre,
			imagen,
			direccion,
			mapa,
			status
		})

		return sucursal
	} catch (error) {
		console.error('Error creando sucursal:', error)
		throw error
	}
}

module.exports = createSucursal
