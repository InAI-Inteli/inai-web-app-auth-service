require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const PORT = process.env.PORT || 3000;


const app = express();

app.disable('x-powered-by');

const corsOptions = {
  origin: ['http://localhost'],
  methods: ['GET', 'PUT', 'POST']
};

// Aplicando as opções CORS ao aplicativo
app.use(cors(corsOptions));

// Carrega todas as rotas
routes(app);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});