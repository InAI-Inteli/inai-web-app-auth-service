'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permissoes extends Model {
    static associate(models) {
      Permissoes.belongsToMany(models.Usuarios, {
        through: 'Usuarios_Permissoes',
        as: 'usuariosDaPermissao',
        foreignKey: 'id_permissao'
      });
      Permissoes.belongsToMany(models.Cargos, {
        through: 'Permissoes_Cargos',
        as: 'cargosDaPermissao',
        foreignKey: 'id_permissao'
      });
    }
  }
  Permissoes.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nome_permissao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
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
    modelName: 'Permissoes',
    tableName: 'permissoes',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscore: true
  });
  return Permissoes;
};
