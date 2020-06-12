var readlineSync = require("readline-sync")
var lado = readlineSync.question("Qual o numero de lados?")
var comprimento = readlineSync.question("Qual o comprimento dos lados?")
var altura = readlineSync.question("Qual o valor da altura?")



area1 = ((comprimento * altura) / 2)
area2 = (comprimento * comprimento)

area3 = 5 * area1

if (lado == 3) {
console.log("TRIÂNGULO de área" + area1)
     }    else if (lado == 4) {
    console.log("Quadrado de área" + area2)
      } else if (lado == 5) {
    console.log("pentagono de área" + area3)
    }

