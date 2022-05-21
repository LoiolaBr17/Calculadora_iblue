const { assert,expect } = require("chai")

let multiplicacaoControlador = require('../../aplicacao/multiplicacaoControlador')

const req = {
    params: {
        primeironum: 20,
        segundonum: 2
    }
}

const req2 = {
    params: {
        primeironum: -15,
        segundonum: 3
    }
}

const req3 = {
    params: {
        primeironum: -50,
        segundonum: -2
    }
}

const req4 = {
    params: {
        primeironum: 100,
        segundonum: 0
    }
}

describe('Testando o controlador da multiplicação:' , function() {
    describe('1 Teste: multiplicação de dois positivos', function() {
        it("Se espera exito com retorno de 40", function (){
            const resultado = multiplicacaoControlador(req)
            assert.equal(resultado, 40)
        })
    })

    describe('2 Teste: multiplicação de um número positivo com negativo', function() {
        it("Se espera exito com retorno de -45", function (){
            const resultado = multiplicacaoControlador(req2)
            assert.equal(resultado, -45)
        })
    })

    describe('3 Teste: multiplicação de dois números negativo', function() {
        it("Se espera exito com retorno de 100", function (){
            const resultado = multiplicacaoControlador(req3)
            assert.equal(resultado, 100)
        })
    })

    describe('4 Teste: multiplicação por 0', function() {
        it("Se espera exito com retorno de 0", function (){
            const resultado = multiplicacaoControlador(req4)
            assert.equal(resultado, 0)
        })
    }) 

    describe('5 Teste: passando parâmetros inválidos ', function() {
        it("Se espera um erro: Parametros Inválidos", function (){
            expect(() => multiplicacaoControlador(10,'?')).to.throw();
        })
    })
});