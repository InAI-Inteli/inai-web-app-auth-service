const Validator = require('../utils/validators');


const validaRequisicao = (validatorName) => {
  return async (req, res, next) => {
    try {
      const language = req.headers['accept-language'] || 'pt-br';

      let dados;

      if (req.method === 'POST') {
        dados = Validator.validate(validatorName, req.body, language);
      } else {
        dados = Validator.validateAtualizacao(validatorName, req.body, language);
      }

      if (dados.error) {
        return res.status(400).json({message: dados.error.details[0].message});
      }

      req.body = dados.value;

      next()
    } catch (erro) {
      res.status(500).json({message: 'Erro interno do servidor'});
    }
  };
};

module.exports = validaRequisicao;