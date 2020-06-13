var rs = require("readline-sync")
var numero = rs.question("Digite um numero")

const isOdd = require('is-Odd')

if (isOdd(numero) == true) {
    console.log("Esse número é ìmpar")
}
else {
    console.log("Esse número é par")
}

