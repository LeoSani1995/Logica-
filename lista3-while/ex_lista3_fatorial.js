var readlineSync = require('readline-sync')
var numerofatorial = readlineSync.question("Insira um numero para calcular fatorial")


var resultado = 1

while (numerofatorial > 1) {
    resultado = numerofatorial * resultado
    numerofatorial = numerofatorial - 1

    console.log(resultado);
}
