const Joi = require('joi');
const ValidatorBase = require('./templateValidator');
const customMessages = require('../messages/validacoes');

class UsuarioValidator extends ValidatorBase {
  constructor(language = 'pt-br') {
    const schema = Joi.object({
      nome: Joi.string().min(3).required().messages(customMessages[language]),
      email: Joi.string().email({ minDomainSegments: 2 }).required().messages(customMessages[language]),
      senha:  Joi.string().required().min(6).max(50).messages(customMessages[language]),
      status: Joi.boolean().required().messages(customMessages[language]),
      nome_usuario: Joi.string().min(3).messages(customMessages[language]),
      imagem: Joi.string().messages(customMessages[language])
    });

    super(schema);

    this.language = language;
  }
}

module.exports = UsuarioValidator;