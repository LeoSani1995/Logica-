var readlineSync = require('readline-sync')
var numeros = 0
var i = 0
var media = 0
while (i < 15){
    var num =readlineSync.questionInt("Digite um numero")
    numeros = numeros + num
    i++
}
media = numeros /15 
console.log("A média dos numeros é" + media )