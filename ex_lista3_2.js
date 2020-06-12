var readlineSync = require('readline-sync')
var n1 = readlineSync.questionInt("Qual o primeiro numero?")
var n2 = readlineSync.questionInt("Qual o segundo numero?")

var contador = 0
var resultado = 0

while (contador < n1) {
    var resultado = n2 + resultado
    contador++

}

console.log(resultado)



