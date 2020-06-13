var readlineSync = require('readline-sync')
var num = readlineSync.question("Digite um numero")
var i = 0
while(i>= 0){
    var resto = num % i
    if (resto == 0){
        console.log(i)
        
    }
    i++
}

