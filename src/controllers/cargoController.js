const CargoService = require('../services/cargoService');
const cargoService = new CargoService();

class CargoController {
  static async cadastrarCargo(req, res) {
    try {
      const cargo = await cargoService.cadastrarCargo(req.body);

      if (cargo === -1) {
        return res.status(409).json({ message: 'Cargo já cadastrado' });
      }

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
}

module.exports = CargoController;