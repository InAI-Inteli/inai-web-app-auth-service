const database = require('../database/models');
const Service = require('./templateService');

class CargoService extends Service {
  constructor() {
    super('Cargos');
  }

  async cadastrarCargo(dto) {
    const cargo = await database.Cargos.findOne({
      where: { 
        nome_cargo: dto.nome_cargo 
      },
    });

    if (cargo) {
      return cargo;
    }

    const novoCargo = await this.criaRegistro(dto);

    return novoCargo;
  }

  async atualizarCargo(dto) {
    const cargo = await database.Cargos.findByPk(dto.id);

    if (!cargo) {
      return -1;
    }

    const novoCargo = await cargo.update(dto);

    return novoCargo;
  }

  async vincularUsuarios(dto) {
    const cargo = await database.Cargos.findByPk(dto.id_cargo);

    if (!cargo) {
      return -1;
    }

    const usuario = await database.Usuarios.findByPk(dto.id_usuario);

    if (!usuario) {
      return -2;
    }

    const membro = await cargo.addUsuariosDoCargo(usuario);

    return membro;
  }

  async desvincularUsuarios(dto) {
    const cargo = await database.Cargos.findByPk(dto.id_cargo);

    if (!cargo) {
      return -1;
    }

    const usuario = await database.Usuarios.findByPk(dto.id_usuario);

    if (!usuario) {
      return -2;
    }

    const membro = await cargo.removeUsuariosDoCargo(usuario);

    return membro;
  }

  async listarMembros(id) {
    const cargo = await database.Cargos.findByPk(id);

    if (!cargo) {
      return -1;
    }

    const membros = await cargo.getUsuariosDoCargo();

    return membros;
  }
}

module.exports = CargoService;