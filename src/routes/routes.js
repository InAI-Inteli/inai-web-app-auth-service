const bodyParser = require('body-parser');
const usuario = require('./usuarioRoute');

// Exporta as rotas numa função para serem usadas no index.js
module.exports = function(app) {
  app.use(bodyParser.json());
  app.get('/', function(req, res) {
    res.json({ message: 'API Autenticação & Autorização de Usuários' });
  });
  app.use(
    usuario
  );
};