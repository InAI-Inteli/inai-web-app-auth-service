const database = require('../database/models');
const Service = require('./templateService');

class UsuarioService extends Service {
  constructor() {
    super('Usuarios');
  }

  async cadastrarUsuario(dto) {
    // verifica se já existe um usuário com o mesmo email, ou
    // caso o nome_usuario tenha sido informado, se já existe um usuário
    // com o mesmo nome_usuario
    const usuario = await database.Usuarios.findOne({
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

  async atualizarUsuario(dto) {
    const usuario = await database.Usuarios.findByPk(dto.id);

    if (!usuario) {
      return -1;
    }

    const usuarioAtualizado = await this.atualizaRegistro(dto, dto.id);

    return usuarioAtualizado;
  }

  async listarUsuarios() {
    const usuarios = await this.listaRegistros(
      ['id', 'nome', 'nome_usuario', 'email']
    )

    return usuarios;
  }

  async buscarUsuario(id) {
    const usuario = await this.buscaRegistroPorID(
      id,
      {attributes: ['nome', 'nome_usuario', 'email', 'imagem', 'status']});

    return usuario;
  }

  async alterarStatus(id) {
    // ativa ou inativa o usuário, definindo o status como true ou false
    // de acordo com o dado atual no banco de dados
    const usuario = await this.buscaRegistroPorID(id)

    if (!usuario) {
      return -1;
    }

    const novoStatus = !usuario.status;

    await this.atualizaRegistro({ status: novoStatus }, id);

    return novoStatus;
  }
}

module.exports = UsuarioService;