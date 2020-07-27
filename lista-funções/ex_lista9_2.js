var rs = require("readline-sync")

var valor = rs.question("Qual numero vc escolhe?")

const isPrime = require('prime-number')

function valorehprimo(valor) {
    if (isPrime(valor) == true) {
        return true
    } else {
        return false
    }
}

console.log(valorehprimo(valor))