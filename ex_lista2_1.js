var rs = require("readline-sync")

var moeda1real = rs.questionInt("Quantas moedas de 1 real tem o cofrinho?")
var moeda50cents = rs.questionInt("Quantas moedas de 50 centavos tem o cofrinho?")
var moeda25cents = rs.questionInt("Quantas moedas de 25 centavos tem o cofrinho?")
var moeda10cents = rs.questionInt("Quantas moedas de 10 centavos tem o cofrinho?")
var moeda5cents = rs.questionInt("Quantas moedas de 5 centavos tem o cofrinho?")
var moeda1cent = rs.questionInt("Quantas moedas de 1 centavo tem o cofrinho?")
var preço = rs.questionFloat("Qual o preço do produto X?")

var valor1real = moeda1real * 1.00
var valor50cents = moeda50cents * 0.50
var valor25cents = moeda25cents * 0.25
var valor10cents = moeda10cents * 0.1
var valor5cents = moeda5cents * 0.05
var valor1cent = moeda1cent * 0.01

var valortotal = valor1real + valor50cents + valor25cents + valor10cents + valor5cents + valor1cent

if(valortotal > preço || valortotal == preço){
    console.log("O valor é suficiente")
}else{
    console.log("O valor não eh suficiente")
}