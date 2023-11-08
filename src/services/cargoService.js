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
      return -1;
    }

    const novoCargo = await this.criaRegistro(dto);

    return novoCargo;
  }
}

module.exports = CargoService;