var readlineSync = require('readline-sync')
var numero = readlineSync.question("Digite um numero")

var i = 0

while (i <= numero ){
    console.log (i)
    i = i +2 
}

