const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');
const validaDTO = require('../middlewares/validaDTO')

const router = Router();

router
  .get('/usuarios', UsuarioController.listarUsuarios)
  .get('/usuarios/:id', UsuarioController.buscarUsuario)
  .put('/usuarios/:id', validaDTO('usuarios'), UsuarioController.atualizarUsuario)
  .post('/usuarios', validaDTO('usuarios'), UsuarioController.cadastrarUsuario);

module.exports = router;