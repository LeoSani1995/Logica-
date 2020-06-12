var readlineSync = require('readline-sync')
var base = readlineSync.question("Digite a base")
var potencia = readlineSync.question("Digite a potencia")

var b = base
var p = potencia


var resultado = b**p

console.log(resultado)
