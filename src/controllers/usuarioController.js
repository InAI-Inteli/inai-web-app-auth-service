const UsuarioService = require('../services/usuarioService');
const usuarioService = new UsuarioService();
const UsuarioValidator = require('../utils/validators/usuarioValidator');


class UsuarioController {
  static async cadastrarUsuario(req, res) {
    const language = req.headers['accept-language'] || 'pt-br';
    const validator = new UsuarioValidator(language);

    const { error, value } = validator.validate(req.body);

    if (error) {
      return res.status(400).json({message: error.details[0].message});
    }

    try {
      const usuario = await usuarioService.cadastrarUsuario(value);

      res.status(201).json(usuario);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }

  static async atualizarUsuario(req, res) {
    const language = req.headers['accept-language'] || 'pt-br';
    const validator = new UsuarioValidator(language);

    const { error, value } = validator.validateAtualizacao(req.body);

    if (error) {
      return res.status(400).json({message: error.details[0].message});
    }

    value.id = req.params.id

    try {
      const usuario = await usuarioService.atualizarUsuario(value);

      if (usuario === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      res.status(200).json(usuario);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }

  static async listarUsuarios(req, res) {
    try {
      const usuarios = await usuarioService.listarUsuarios();

      res.status(200).json(usuarios);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }
}

module.exports = UsuarioController;