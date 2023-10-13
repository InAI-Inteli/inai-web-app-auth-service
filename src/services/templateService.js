const database = require('../database/models');


class Service {
  constructor(nomeDoModelo) {
    this.nomeDoModelo = nomeDoModelo;
  }

  async listaRegistros(atributos) {
    return database[this.nomeDoModelo].findAll(
      {
        attributes: atributos
      }
    );
  }

  async buscaRegistroPorID(id, options = {}) {
    return database[this.nomeDoModelo].findByPk(id, options);
  }

  async criaRegistro(dados) {
    return database[this.nomeDoModelo].create(dados);
  }

  async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
    return database[this.nomeDoModelo]
      .update(dadosAtualizados, transacao)
      .where({
        id: id
      });
  }

  async apagaRegistro(id) {
    return database[this.nomeDoModelo]
      .destroy({
        where: {
          id: id
        }
      });
  }
}

module.exports = Service;