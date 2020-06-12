var rs = require("readline-sync")
var numero = rs.question("Digite um numero")

const isPrime = require('prime-number')

if (isPrime(numero)== true){
    console.log("Esse numero é primo")
}
else{
    console.log("Esse numero não é primo")
}
