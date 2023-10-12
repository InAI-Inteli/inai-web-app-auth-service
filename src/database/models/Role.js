'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.Usuario, {
        through: 'UserRole',
        as: 'usuarios',
        foreignKey: 'id_cargo'
      });
      Role.belongsToMany(models.Permission, {
        through: 'PermissionRole',
        as: 'permissoes',
        foreignKey: 'id_cargo'
      });
    }
  }
  Role.init({
    id_cargo: {
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
    update_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'role',
    createdAt: 'created_at',
    updatedAt: 'update_at',
    underscore: true
  });
  return Role;
};
