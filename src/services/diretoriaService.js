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

  async atualizarDiretoria(dto) {
    const diretoria = await database.Diretorias.findByPk(dto.id)

    if (!diretoria) {
      return -1;
    }

    const novaDiretoria = await diretoria.update(dto)

    return novaDiretoria;
  }

  async vincularUsuarios(dto) {
    const diretoria = await database.Diretorias.findByPk(dto.id_diretoria);

    if (!diretoria) {
      return -1;
    }

    const usuario = await database.Usuarios.findByPk(dto.id_usuario);

    if (!usuario) {
      return -2;
    }

    const usuarioDiretoria = await database.Usuarios_Diretorias.findOrCreate({
      where: {
        id_usuario: dto.id_usuario,
        id_diretoria: dto.id_diretoria
      }
    });

    return usuarioDiretoria;
  }

  async removerUsuarios(dto) {
    const diretoria = await database.Diretorias.findByPk(dto.id_diretoria);

    if (!diretoria) {
      return -1;
    }

    const usuario = await database.Usuarios.findByPk(dto.id_usuario);

    if (!usuario) {
      return -2;
    }

    const usuarioDiretoria = await database.Usuarios_Diretorias.destroy({
      where: {
        id_usuario: dto.id_usuario,
        id_diretoria: dto.id_diretoria
      }
    });

    return usuarioDiretoria;
  }

  async listarUsuarios(dto) {
    const diretoria = await database.Diretorias.findByPk(dto.id);

    if (!diretoria) {
      return -1;
    }

    const membros = await database.Usuarios_Diretorias.findAll({
      where: {
        id_diretoria: dto.id
      }
    });

    const usuarios = await database.Usuarios.findAll({
      where: {
        id: membros.map(membro => membro.id_usuario)
      },
      attributes: ['id', 'nome', 'nome_usuario', 'email']
    })

    return usuarios;
  }
}

module.exports = DiretoriaService;