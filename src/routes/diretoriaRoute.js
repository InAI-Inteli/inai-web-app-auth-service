const { Router } = require('express');
const DiretoriaController = require('../controllers/diretoriaController');
const validaDTO = require('../middlewares/validaDTO')

const router = Router();

router
  .get('/diretorias')
  .get('/diretorias/:id')
  .put('/diretorias/:id')
  .post('/diretorias', validaDTO('diretorias'), DiretoriaController.cadastrarDiretoria);

module.exports = router;