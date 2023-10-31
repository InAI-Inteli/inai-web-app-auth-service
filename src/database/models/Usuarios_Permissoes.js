'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios_Permissoes extends Model {
    static associate(models) {
      Usuarios_Permissoes.belongsTo(models.Usuarios, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
      Usuarios_Permissoes.belongsTo(models.Permissoes, {
        foreignKey: 'id_permissao',
        as: 'permissao'
      });
    }
  }
  Usuarios_Permissoes.init({
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
    id_permissao: {
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
    modelName: 'Usuarios_Permissoes',
    tableName: 'usuarios_permissoes',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscore: true
  });
  return Usuarios_Permissoes;
};
