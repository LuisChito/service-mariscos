'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Platos extends Model {
    static associate(models) {
      Platos.belongsTo(models.Categorias, {
        foreignKey: 'id_categoria',
        as: 'categoria'
      });
    }
  }

  Platos.init({
    id_plato: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categorias',
        key: 'id_categoria'
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    imagen_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    disponible: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Platos',
    tableName: 'Platos',
    timestamps: false
  });

  return Platos;
};
