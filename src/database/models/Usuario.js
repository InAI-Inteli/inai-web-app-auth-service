'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.belongsToMany(models.Diretoria, {
        through: 'UserDiretoria',
        as: 'diretorias',
        foreignKey: 'id_usuario'
      });
      Usuario.belongsToMany(models.Role, {
        through: 'UserRole',
        as: 'roles',
        foreignKey: 'id_usuario'
      });
      Usuario.belongsToMany(models.Permission, {
        through: 'UserPermission',
        as: 'permissoes',
        foreignKey: 'id_usuario'
      });
    }
  }
  Usuario.init({
    update_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    imagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nome_usuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuario',
    createdAt: 'created_at',
    updatedAt: 'update_at',
    underscore: true
  });
  return Usuario;
};
