'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    static associate(models) {
      UserRole.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
      UserRole.belongsTo(models.Role, {
        foreignKey: 'id_cargo',
        as: 'cargo'
      });
    }
  }
  UserRole.init({
    id_userrole: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
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
    modelName: 'UserRole',
    tableName: 'userRole',
    createdAt: 'created_at',
    updatedAt: 'update_at',
    underscore: true
  });
  return UserRole;
};
