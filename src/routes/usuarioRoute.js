const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = Router();

router
  .get('/usuarios', UsuarioController.listarUsuarios)
  .get('/usuarios/:id', UsuarioController.buscarUsuario)
  .put('/usuarios/:id', UsuarioController.atualizarUsuario)
  .post('/usuarios', UsuarioController.cadastrarUsuario);

module.exports = router;