var readlineSync = require('readline-sync')

var n = readlineSync.question("Digite o primeiro numero ")

var num = 1

var resultado 

var adi = 1 

while(adi <= 50 ){
    resultado = num
    console.log(resultado)
    num = num + 2
    adi ++ 
}

