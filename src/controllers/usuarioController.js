const UsuarioService = require('../services/usuarioService');
const usuarioService = new UsuarioService();

class UsuarioController {
  static async cadastrarUsuario(req, res) {
    try {
      const usuario = await usuarioService.cadastrarUsuario(req.body);

      res.status(201).json(usuario);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }

  static async atualizarUsuario(req, res) {
    req.body.id = req.params.id

    try {
      const usuario = await usuarioService.atualizarUsuario(req.body);

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

  static async buscarUsuario(req, res) {
    try {
      const usuario = await usuarioService.buscarUsuario(req.params.id);

      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      res.status(200).json(usuario);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }

  static async alterarStatus(req, res) {
    try {
      const usuario = req.params.id;

      await usuarioService.alterarStatus(usuario);

      res.status(204).send()
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }

  static async listarDiretorias(req, res) {
    try {
      const diretorias = await usuarioService.listarDiretorias(req.params.id);

      if (diretorias == -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      res.status(200).json(diretorias);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }
}

module.exports = UsuarioController;