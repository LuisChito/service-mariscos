'use strict';

const { QueryTypes } = require('sequelize');
const { sequelize } = require('../../infrastructure/db/connection');

async function iniciarSesion(usuario, password) {
	if (!usuario || !password) {
		throw new Error('El usuario y la contraseña son obligatorios');
	}

	const resultado = await sequelize.query(
		'EXEC Login @usuario = :usuario, @password = :password',
		{
			replacements: { usuario, password },
			type: QueryTypes.SELECT,
		}
	);

	if (!resultado || resultado.length === 0) {
		return null;
	}

	return resultado[0];
}

module.exports = {
	iniciarSesion,
};

