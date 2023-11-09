const Joi = require('joi');
const ValidatorBase = require('./templateValidator');
const customMessages = require('../messages/validacoes');

class CargoValidator extends ValidatorBase {
  constructor(language = 'pt-br') {
    const schema = Joi.object({
      nome_cargo: Joi.string().min(3).required().messages(customMessages[language]),
      descricao: Joi.string().min(10).required().messages(customMessages[language])
    });

    super(schema);

    this.language = language;
  }

  validateAtualizacao(dados) {
    const schema = Joi.object({
      nome_cargo: Joi.string().min(3).messages(customMessages[this.language]),
      descricao: Joi.string().min(10).messages(customMessages[this.language])
    }).or('nome_cargo', 'descricao').messages(customMessages[this.language]);

    return schema.validate(dados);
  }
}

module.exports = CargoValidator;