'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDiretoria extends Model {
    static associate(models) {
      UserDiretoria.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
      UserDiretoria.belongsTo(models.Diretoria, {
        foreignKey: 'id_diretoria',
        as: 'diretoria'
      });
    }
  }
  UserDiretoria.init({
    id_userdiretoria: {
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
    update_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'UserDiretoria',
    tableName: 'userDiretoria',
    createdAt: 'created_at',
    updatedAt: 'update_at',
    underscore: true
  });
  return UserDiretoria;
};
