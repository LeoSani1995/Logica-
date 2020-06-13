var readlineSync = require("readline-sync");

var numero = readlineSync.question("Qual o numero escolhido?");

if (numero > 100 && numero < 200) {
    console.log("Você digitou um numero entre 100 e 200");

}else if(numero < 100 || numero > 200){
       console.log ("Você digitou um numero fora da faixa entre 100 e 200");
}


