var readlineSync = require('readline-sync')
var num = readlineSync.questionInt("Digite um numero")

var i = 0

while(i <= 10){
    var tabuada=num*i
    console.log(tabuada)
    i++
}
