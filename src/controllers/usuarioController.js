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
}

module.exports = UsuarioController;