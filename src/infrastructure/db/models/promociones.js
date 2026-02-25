'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Promociones extends Model {
    static associate(models) {
      // Sin relaciones
    }
  }

  Promociones.init({
    id_promo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descuento_porcentaje: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Promociones',
    tableName: 'Promociones',
    timestamps: false
  });

  return Promociones;
};
