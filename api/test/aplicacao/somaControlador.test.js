const { assert, expect } = require("chai")

const somaControlador = require('../../aplicacao/somaControlador')

const req = {
    params: {
        primeironum: 121,
        segundonum: 9
    }
}

const req2 = {
    params: {
        primeironum: 100,
        segundonum: -40
    }
}

const req3 = {
    params: {
        primeironum: -10,
        segundonum: -2
    }
}

describe('Testando o controlador da soma:' , function() {
    describe('1 Teste: soma de dois positivos', function() {
        it("Se espera exito com retorno de 130", function (){
            const resultado = somaControlador(req)
            assert.equal(resultado, 130)
        })
    })

    describe('2 Teste: soma de um número positivo com negativo', function() {
        it("Se espera exito com retorno de 60", function (){
            const resultado = somaControlador(req2)
            assert.equal(resultado, 60)
        })
    })

    describe('3 Teste: soma de dois números negativo', function() {
        it("Se espera exito com retorno de -12", function (){
            const resultado = somaControlador(req3)
            assert.equal(resultado, -12)
        })
    })

    describe('4 Teste: passando parâmetros inválidos ', function() {
        it("Se espera um erro: Parametros Inválidos", function (){

            expect(() => somaControlador(10,'?')).to.throw();
        })
    })

});
