const Joi = require('joi');
const ValidatorBase = require('./templateValidator');
const customMessages = require('../messages/validacoes');

class MembroDiretoriaValidator extends ValidatorBase {
  constructor(language = 'pt-br') {
    const schema = Joi.object({
      id_diretoria: Joi.number().integer().min(1).required().messages(customMessages[language]),
      id_usuario: Joi.number().integer().min(1).required().messages(customMessages[language]),
    });

    super(schema);
  }
}

module.exports = MembroDiretoriaValidator;