'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PermissionRole extends Model {
    static associate(models) {
      PermissionRole.belongsTo(models.Permission, {
        foreignKey: 'id_permissao',
        as: 'permissao'
      });
      PermissionRole.belongsTo(models.Role, {
        foreignKey: 'id_cargo',
        as: 'cargo'
      });
    }
  }
  PermissionRole.init({
    id_permissaorole: {
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
    update_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'PermissionRole',
    tableName: 'permissionRole',
    createdAt: 'created_at',
    updatedAt: 'update_at',
    underscore: true
  });
  return PermissionRole;
};
