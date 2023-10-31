'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diretorias extends Model {
    static associate(models) {
      Diretorias.belongsToMany(models.Usuarios, {
        through: 'Usuarios_Diretorias',
        as: 'usuariosDaDiretoria',
        foreignKey: 'id_diretoria'
      })
    }
  }
  Diretorias.init({
    id: {
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
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'Diretorias',
    tableName: 'diretorias',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscore: true
  });
  return Diretorias;
};
