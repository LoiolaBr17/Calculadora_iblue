const express = require('express')
const app = express()
const porta = 3000

const calculadoraRotas = require('./interface/rotas/calculadoraRotas')

app.use(express.json())

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

app.get('/calculadora/soma/:primeironum/:segundonum', calculadoraRotas)
app.get('/calculadora/subtracao/:primeironum/:segundonum', calculadoraRotas)
app.get('/calculadora/multiplicacao/:primeironum/:segundonum', calculadoraRotas)
app.get('/calculadora/divisao/:primeironum/:segundonum', calculadoraRotas)
app.get('/calculadora/raizquadrada/:primeironum', calculadoraRotas)
app.get('/calculadora/porcentagem/:primeironum', calculadoraRotas)

app.get('*', (req, res) => {
    res.status(404).json({err:'rota invalida'})
} )

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})

module.exports = app