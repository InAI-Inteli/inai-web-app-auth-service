const { Router } = require('express');
const CargoController = require('../controllers/cargoController');
const validaDTO = require('../middlewares/validaDTO')

const router = Router();

router
  .get('/cargos', CargoController.listarCargos)
  .get('/cargos/:id', CargoController.listarCargo)  
  .put('/cargos/:id', validaDTO('cargos'), CargoController.atualizarCargo)
  .post('/cargos/adicionar-membro', CargoController.vincularUsuarios)
  .post('/cargos/remover-membro', CargoController.desvincularUsuarios)
  .post('/cargos', validaDTO('cargos'), CargoController.cadastrarCargo);

module.exports = router;