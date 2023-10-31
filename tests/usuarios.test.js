const axios = require('axios');

describe('Testes de integração das rotas de Usuários', () => {
    const instance = axios.create({ baseURL: 'http://localhost:3000' });

    it('Deve retornar um status code 200 na listagem dos usuários', async () => {
        const resposta = await instance.get('http://localhost:3000/usuarios');
        expect(resposta.status).toEqual(200);
    });

    it('Valida o retorno do GET de usuários', async () => {
        const resposta = await instance.get('http://localhost:3000/usuarios');
        // valida se é uma array
        expect(Array.isArray(resposta.data)).toEqual(true);
        // valida se , caso a array não estiver vazia, é uma array de objetos
        // contendo 'nome', 'nome_usuario' e 'email'
        if (resposta.data.length > 0) {
            expect(typeof resposta.data[0]).toEqual('object');
            expect(resposta.data[0]).toHaveProperty('nome');
            expect(resposta.data[0]).toHaveProperty('nome_usuario');
            expect(resposta.data[0]).toHaveProperty('email');
        }
    });

    it('Valida a atualização de usuários', async () => {
        const novosDados = {nome: 'JEST'};
        const resposta = await instance.get('http://localhost:3000/usuarios', {});
        const id = resposta.data[0].id;
        await axios.put(`http://localhost:3000/usuarios/${id}`, novosDados);
        const resposta2 = await instance.get(`http://localhost:3000/usuarios/${id}`, {});
        expect(resposta2.data.nome).toEqual(novosDados.nome);
    })

    it('Valida a criação de usuário', async () => {
        const dados = {
            nome: 'JEST',
            nome_usuario: 'jest',
            email: 'jest@jest.com',
            imagem: 'foto-jest.png',
            status: true,
            senha: "jest é o cara"
        }
        const resposta = await instance.post('/usuarios', dados);
        expect(resposta.status).toEqual(201)
    })
})