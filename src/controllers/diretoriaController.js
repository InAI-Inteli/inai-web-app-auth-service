const DiretoriaService = require('../services/diretoriaService');
const diretoriaService = new DiretoriaService();

class DiretoriaController {
  static async cadastrarDiretoria(req, res) {
    try {
      const diretoria = await diretoriaService.cadastrarDiretoria(req.body);

      res.status(201).json(diretoria);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }

  static async atualizarDiretoria(req, res) {
    try {
      const diretoria = await diretoriaService.atualizarDiretoria({...req.body, id: req.params.id});

      if (diretoria === -1) {
        return res.status(404).json({ message: 'Diretoria não encontrada' });
      }

      res.status(200).json(diretoria);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }

  static async listarDiretorias(req, res) {
    try {
      const diretorias = await diretoriaService.listaRegistros(['id', 'nome_diretoria', 'descricao']);

      res.status(200).json(diretorias);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }

  static async listaDiretoria(req, res) {
    try {
      const diretoria = await diretoriaService.buscaRegistroPorID(req.params.id);

      if (!diretoria) {
        return res.status(404).json({ message: 'Diretoria não encontrada' });
      }

      res.status(200).json(diretoria);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }

  static async vincularUsuarios(req, res) {
    try {
      const diretoria = await diretoriaService.vincularUsuarios(req.body);

      if (diretoria === -1) {
        return res.status(404).json({ message: 'Diretoria não encontrada' });
      } else if (diretoria == -2) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      res.status(200).json(diretoria);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }
}

module.exports = DiretoriaController;