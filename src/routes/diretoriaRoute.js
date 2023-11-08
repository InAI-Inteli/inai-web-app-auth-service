const { Router } = require('express');
const DiretoriaController = require('../controllers/diretoriaController');
const validaDTO = require('../middlewares/validaDTO')

const router = Router();

router
  .get('/diretorias', DiretoriaController.listarDiretorias)
  .get('/diretorias/:id')
  .put('/diretorias/:id', validaDTO('diretorias'), DiretoriaController.atualizarDiretoria)
  .post('/diretorias', validaDTO('diretorias'), DiretoriaController.cadastrarDiretoria);

module.exports = router;