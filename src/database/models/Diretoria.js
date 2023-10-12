'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diretoria extends Model {
    static associate(models) {
      Diretoria.belongsToMany(models.Usuario, {
        through: 'UserDiretoria',
        as: 'usuarios',
        foreignKey: 'id_diretoria'
      })
    }
  }
  Diretoria.init({
    id_diretoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nome_diretoria: {
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
    update_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'Diretoria',
    tableName: 'diretoria',
    createdAt: 'created_at',
    updatedAt: 'update_at',
    underscore: true
  });
  return Diretoria;
};
