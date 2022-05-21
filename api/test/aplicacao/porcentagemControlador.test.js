const { assert,expect } = require("chai")

const porcentagemControlador = require('../../aplicacao/porcentagemControlador')

const req = {
    params: {
        primeironum: 200
    }
}

const req2 = {
    params: {
        primeironum: 8.9
    }
}


describe('Testando o controlador da porcentagem:' , function() {
    describe('1 Teste: porcentagem inteira', function() {
        it("Se espera exito com retorno de 2", function (){
            const resultado = porcentagemControlador(req)
            assert.equal(resultado, 2)
        })
    })

    describe('2 Teste: porcentagem em ponto flutuante', function() {
        it("Se espera exito com retorno de 0.089", function (){
            const resultado = porcentagemControlador(req2)
            assert.equal(resultado, 0.089)
        })
    })

    describe('3 Teste: passando parâmetros inválidos ', function() {
        it("Se espera um erro: Parametros Inválidos", function (){
            expect(() => porcentagemControlador('?')).to.throw();
        })
    })
});