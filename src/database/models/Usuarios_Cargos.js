'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios_Cargos extends Model {
    static associate(models) {
      Usuarios_Cargos.belongsTo(models.Usuarios, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
      Usuarios_Cargos.belongsTo(models.Cargos, {
        foreignKey: 'id_cargo',
        as: 'cargo'
      });
    }
  }
  Usuarios_Cargos.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_cargo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'Usuarios_Cargos',
    tableName: 'usuarios_cargos',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscore: true
  });
  return Usuarios_Cargos;
};
