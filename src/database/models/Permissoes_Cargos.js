'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permissoes_Cargos extends Model {
    static associate(models) {
      Permissoes_Cargos.belongsTo(models.Permissoes, {
        foreignKey: 'id_permissao',
        as: 'permissao'
      });
      Permissoes_Cargos.belongsTo(models.Cargos, {
        foreignKey: 'id_cargo',
        as: 'cargo'
      });
    }
  }
  Permissoes_Cargos.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id_permissao: {
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
    modelName: 'Permissoes_Cargos',
    tableName: 'permissoes_cargos',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscore: true
  });
  return Permissoes_Cargos;
};
