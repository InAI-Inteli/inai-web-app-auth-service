const Joi = require('joi');
const ValidatorBase = require('./templateValidator');
const customMessages = require('../messages/validacoes');

class DiretoriaValidator extends ValidatorBase {
  constructor(language = 'pt-br') {
    const schema = Joi.object({
      nome_diretoria: Joi.string().min(3).required().messages(customMessages[language]),
      descricao: Joi.string().required().messages(customMessages[language])
    });

    super(schema);

    this.language = language;
  }

  validateAtualizacao(dados) {
    const schema = Joi.object({
      nome_diretoria: Joi.string().min(3).messages(customMessages[this.language]),
      descricao: Joi.string().messages(customMessages[this.language])
    }).or('nome_diretoria', 'descricao').messages(customMessages[this.language]);

    return schema.validate(dados);
  }
}

module.exports = DiretoriaValidator;