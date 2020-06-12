var readlineSync= require("readline-sync");

var numero1= readlineSync.question("Por favor, insira o número 1?");
var numero2= readlineSync.question("Por favor, insira o número 2?")

if(numero1>numero2){
    console.log("Número :" + numero1 + "é maior")
}else if (numero1<numero2){
    console.log("Número : " + numero2 + "é maior")
}else {
    console.log("Os números são iguais");
}

