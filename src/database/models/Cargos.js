'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cargos extends Model {
    static associate(models) {
      Cargos.belongsToMany(models.Usuarios, {
        through: 'Usuarios_Cargos',
        as: 'usuariosDoCargo',
        foreignKey: 'id_cargo'
      });
      Cargos.belongsToMany(models.Permissoes, {
        through: 'Permissoes_Cargos',
        as: 'permissoesDoCargo',
        foreignKey: 'id_cargo'
      });
    }
  }
  Cargos.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nome_cargo: {
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
    modelName: 'Cargos',
    tableName: 'cargos',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscore: true
  });
  return Cargos;
};
