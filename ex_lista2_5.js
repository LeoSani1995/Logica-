//Considerando o salario minimo como de 1000 reais, o preço de 100kW equivale a 70 reais.Sendo assim, 1kW corresponde a cerca de R$1.42

var rs = require("readline-sync")
var consumo = rs.questionInt("Qual o consumo da família em kW?")
var contacomdesconto = rs.question("A conta eh com ou sem desconto?")
var conta = 1.42*consumo
var desconto = 0.9*conta

if(contacomdesconto == "com desconto"){
    console.log("o valor da sua conta eh:" + "R$"+`${desconto}`)
}else{
    console.log("o valor da sua conta eh:" + "R$"+`${conta}`)
}

