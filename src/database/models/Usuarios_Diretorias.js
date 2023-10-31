'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios_Diretorias extends Model {
    static associate(models) {
      Usuarios_Diretorias.belongsTo(models.Usuarios, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
      Usuarios_Diretorias.belongsTo(models.Diretorias, {
        foreignKey: 'id_diretoria',
        as: 'diretoria'
      });
    }
  }
  Usuarios_Diretorias.init({
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
    id_diretoria: {
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
    modelName: 'Usuarios_Diretorias',
    tableName: 'usuarios_diretorias',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscore: true
  });
  return Usuarios_Diretorias;
};
