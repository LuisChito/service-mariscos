'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Sucursales extends Model {
        static associate(models) {
            // Sin relaciones
        }
    }
    Sucursales.init({
        nombre: {
            type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mapa: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        sequelize,
        modelName: 'Sucursales',
        tableName: 'Sucursales',
        timestamps: false,
    });
    return Sucursales;

};