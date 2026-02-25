'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categorias extends Model {
    static associate(models) {
      Categorias.hasMany(models.Platos, {
        foreignKey: 'id_categoria',
        as: 'platos'
      });
    }
  }

  Categorias.init({
    id_categoria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Categorias',
    tableName: 'Categorias',
    timestamps: false
  });

  return Categorias;
};
