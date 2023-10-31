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

  validateAtualizacao(dados) {
    const schema = Joi.object({
      nome: Joi.string().min(3).messages(customMessages[this.language]),
      email: Joi.string().email({ minDomainSegments: 2 }).messages(customMessages[this.language]),
      senha:  Joi.string().min(6).max(50).messages(customMessages[this.language]),
      status: Joi.boolean().messages(customMessages[this.language]),
      nome_usuario: Joi.string().min(3).messages(customMessages[this.language]),
      imagem: Joi.string().messages(customMessages[this.language])
    }).or('nome', 'email', 'senha', 'status', 'nome_usuario', 'imagem').messages(customMessages[this.language]);

    return schema.validate(dados);
  }
}

module.exports = UsuarioValidator;