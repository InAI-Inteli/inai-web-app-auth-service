const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');
const validaDTO = require('../middlewares/validaDTO')

const router = Router();

router
  .get('/usuarios', UsuarioController.listarUsuarios)
  .get('/usuarios/:id', UsuarioController.buscarUsuario)
  .get('/usuarios/:id/diretorias', UsuarioController.listarDiretorias)
  .get('/usuarios/:id/cargos', UsuarioController.listarCargos)
  .put('/usuarios/:id', validaDTO('usuarios'), UsuarioController.atualizarUsuario)
  .post('/usuarios/:id/alterar-status', UsuarioController.alterarStatus)
  .post('/usuarios', validaDTO('usuarios'), UsuarioController.cadastrarUsuario);

module.exports = router;