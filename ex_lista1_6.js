var readlineSync = require("readline-sync")
var valor = readlineSync.question("Qual o seu sexo?")
var altura = readlineSync.questionFloat("Qual a sua altura?")



if (altura > 0) {
    if (valor == 1) {
        console.log("Sendo homem seu peso ideal é" + ((72.7 * altura) - 58) + "kg")
    } else if (valor == 2) {
        console.log("Sendo mulher seu peso ideal é" + ((62.1 * altura) - 44.7) + "kg")
    }
}










