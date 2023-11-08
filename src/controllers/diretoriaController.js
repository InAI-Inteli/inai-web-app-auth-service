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
}

module.exports = DiretoriaController;