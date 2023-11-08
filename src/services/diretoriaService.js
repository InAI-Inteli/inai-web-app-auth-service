const database = require('../database/models');
const Service = require('./templateService');

class DiretoriaService extends Service {
  constructor() {
    super('Diretorias');
  }

  async cadastrarDiretoria(dto) {
    const diretoria = await database.Diretorias.findOne({
      where: { 
        nome_diretoria: dto.nome_diretoria 
      },
    });

    if (diretoria) {
      return -1;
    }

    const novaDiretoria = await this.criaRegistro(dto);

    return novaDiretoria;
  }
}

module.exports = DiretoriaService;