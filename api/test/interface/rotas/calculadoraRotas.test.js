const chai = require('chai');
const app = require('../../../index')
const expect = chai.expect
const chaiHttp = require('chai-http')

 
chai.use(chaiHttp);

describe('Testando as rotas da API:', function() {
    it('Checando a rota get soma', function(done) {

        chai.request(app)
        .get('/calculadora/soma/10/2')
        .end(function(error, res) {
            
            expect(res).to.have.status(200)
            expect(res.body).to.be.a('object')
            done();
        });
    });

    it('Checando a rota get subtração', function(done) {

        chai.request(app)
        .get('/calculadora/subtracao/20/10')
        .end(function(error, res) {
            
            expect(res).to.have.status(200)
            expect(res.body).to.be.a('object')
            done();
        });
    });

    it('Checando a rota get multiplicação', function(done) {

        chai.request(app)
        .get('/calculadora/multiplicacao/20/3')
        .end(function(error, res) {
            
            expect(res).to.have.status(200)
            expect(res.body).to.be.a('object')
            done();
        });
    });

    it('Checando a rota get divisão', function(done) {

        chai.request(app)
        .get('/calculadora/divisao/10/2')
        .end(function(error, res) {
            
            expect(res).to.have.status(200)
            expect(res.body).to.be.a('object')
            done();
        });
    });

    it('Checando a rota get raiz quadrada', function(done) {

        chai.request(app)
        .get('/calculadora/raizquadrada/81')
        .end(function(error, res) {
            
            expect(res).to.have.status(200)
            expect(res.body).to.be.a('object')
            done();
        });
    });

    it('Checando a rota get porcentagem', function(done) {

        chai.request(app)
        .get('/calculadora/porcentagem/100')
        .end(function(error, res) {
            
            expect(res).to.have.status(200)
            expect(res.body).to.be.a('object')
            done();
        });
    });
});