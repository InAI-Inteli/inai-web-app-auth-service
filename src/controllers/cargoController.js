const CargoService = require('../services/cargoService');
const cargoService = new CargoService();

class CargoController {
  static async cadastrarCargo(req, res) {
    try {
      const cargo = await cargoService.cadastrarCargo(req.body);

      res.status(201).json(cargo);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }

  static async atualizarCargo(req, res) {
    try {
      const cargo = await cargoService.atualizarCargo({...req.body, id: req.params.id});

      if (cargo === -1) {
        return res.status(404).json({ message: 'Cargo não encontrado' });
      }

      res.status(200).json(cargo);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }

  static async listarCargos(req, res) {
    try {
      const cargos = await cargoService.listaRegistros(["id", "nome_cargo", "descricao"]);

      res.status(200).json(cargos);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }

  static async listarCargo(req, res) {
    try {
      const cargo = await cargoService.buscaRegistroPorID(req.params.id);

      if (!cargo) {
        return res.status(404).json({ message: 'Cargo não encontrado' });
      }

      res.status(200).json(cargo);
    } catch (erro) {
      res.status(400).json({ message: erro.message });
    }
  }
}

module.exports = CargoController;