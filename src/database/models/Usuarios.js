'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) {
      Usuarios.belongsToMany(models.Diretorias, {
        through: 'Usuarios_Diretorias',
        as: 'diretoriasDoUsuario',
        foreignKey: 'id_usuario'
      });
      Usuarios.belongsToMany(models.Cargos, {
        through: 'Usuarios_Cargos',
        as: 'cargosDoUsuario',
        foreignKey: 'id_usuario'
      });
      Usuarios.belongsToMany(models.Permissoes, {
        through: 'Usuarios_Permissoes',
        as: 'permissoesDoUsuario',
        foreignKey: 'id_usuario'
      });
    }
  }
  Usuarios.init({
    updated_at: {
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
    id: {
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
    modelName: 'Usuarios',
    tableName: 'usuarios',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscore: true
  });
  return Usuarios;
};
