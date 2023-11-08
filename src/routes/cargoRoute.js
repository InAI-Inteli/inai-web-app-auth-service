const { Router } = require('express');
const CargoController = require('../controllers/cargoController');
const validaDTO = require('../middlewares/validaDTO')

const router = Router();

router
  .get('/cargos', )
  .get('/cargos/:id')  
  .put('/cargos/:id', validaDTO('cargos'), CargoController.atualizarCargo)
  .post('/cargos', validaDTO('cargos'), CargoController.cadastrarCargo);

module.exports = router;