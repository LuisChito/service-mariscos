'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Contacto extends Model {
		static associate() {}
	}

	Contacto.init({
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		nombre: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		motivo: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		mensaje: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		createdo: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW
		}
	}, {
		sequelize,
		modelName: 'contacto',
		tableName: 'contacto'
	});

	return Contacto;
};

