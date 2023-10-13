const database = require('../database/models');
const Service = require('./templateService');

class UsuarioService extends Service {
  constructor() {
    super('Usuario');
  }

  async cadastrarUsuario(dto) {
    // verifica se já existe um usuário com o mesmo email, ou
    // caso o nome_usuario tenha sido informado, se já existe um usuário
    // com o mesmo nome_usuario
    const usuario = await database.Usuario.findOne({
      where: {
        [database.Sequelize.Op.or]: [
          { email: dto.email },
          { nome_usuario: dto.nome_usuario }
        ]
      }
    });

    if (usuario) {
      throw new Error('Já existe um usuário com este email ou nome de usuário');
    }

    const novoUsuario = await this.criaRegistro(dto);

    return novoUsuario;
  }

}

module.exports = UsuarioService;