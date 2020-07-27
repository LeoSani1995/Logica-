var rs = require("readline-sync")


var saldo = 0.00
var valor = 0.00

var opçao = rs.question("Digite a para consultar seu saldo, b para fazer um saque, c para depositar ou d para sair")

if (opçao == "a") {
    console.log("Seu saldo eh:" + saldo)
} else if (opçao == "b") {
    valor = rs.questionFloat("Digite um valor para saque:")
    if (saldo == 0.00) {
        console.log("Saldo insuficiente")
    } else
        saldo = saldo - valor
    console.log("Saldo atual:" + saldo)
} else if (opçao == "c") {
    valor = rs.questionFloat("Digite um valor para deposito:")
    saldo = saldo + valor
    console.log("Saldo atual:" + saldo)
} else {
    console.log("Opção invalida")
}

