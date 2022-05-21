const express = require('express')
const calculadoraRotas = express.Router()

const somaControlador = require('../../aplicacao/somaControlador')
const subtracaoControlador = require('../../aplicacao/subtracaoControlador')
const multiplicacaoControlador = require('../../aplicacao/multiplicacaoControlador')
const divisaoControlador = require('../../aplicacao/divisaoControlador')
const raizquadradaControlador = require('../../aplicacao/raizquadradaControlador')
const porcentagemControlador = require('../../aplicacao/porcentagemControlador')

calculadoraRotas.use(express.json())

calculadoraRotas.get('/calculadora/soma/:primeironum/:segundonum', (req, res) => {
    
    try{
        const resultado = somaControlador(req)
        return res.status(200).json({resultado, status: 200})
    }catch(e){
        return res.status(400).json({err: e.message,})
    }
    
})

calculadoraRotas.get('/calculadora/subtracao/:primeironum/:segundonum', (req, res) => {
    
    try{
        const resultado = subtracaoControlador(req)
        return res.status(200).json({resultado, status: 200})
    }catch(e){
        return res.status(400).json({err: e.message,})
    }
    
})

calculadoraRotas.get('/calculadora/multiplicacao/:primeironum/:segundonum', (req, res) => {
    
    try{
        const resultado = multiplicacaoControlador(req)
        return res.status(200).json({resultado, status: 200})
    }catch(e){
        return res.status(400).json({err: e.message,})
    }
    
})

calculadoraRotas.get('/calculadora/divisao/:primeironum/:segundonum', (req, res) => {
    
    try{
        const resultado= divisaoControlador(req)
        return res.status(200).json({resultado, status: 200})
    }catch(e){
        return res.status(400).json({err: e.message,})
    }
    
})

calculadoraRotas.get('/calculadora/raizquadrada/:primeironum', (req, res) => {
    
    try{
        const resultado= raizquadradaControlador(req)
        return res.status(200).json({resultado, status: 200})
    }catch(e){
        return res.status(400).json({err: e.message,})
    }
    
})

calculadoraRotas.get('/calculadora/porcentagem/:primeironum', (req, res) => {
    
    try{
        const resultado= porcentagemControlador(req)
        return res.status(200).json({resultado, status: 200})
    }catch(e){
        return res.status(400).json({err: e.message,})
    }
    
})

module.exports = calculadoraRotas