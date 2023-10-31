const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = Router();

router
  .put('/usuarios/:id', UsuarioController.atualizarUsuario)
  .post('/usuarios', UsuarioController.cadastrarUsuario);

module.exports = router;