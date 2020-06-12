var readlineSync = require("readline-sync");
var lado1 = readlineSync.question("Qual o valor do lado 1?");
var lado2 = readlineSync.question("Qual o valor do lado 2?");
var lado3 = readlineSync.question("Qual o valor do lado 3?");

 
    if (lado1 ==lado2 && lado1==lado3 && lado2==lado3) {
        console.log("Triangulo equilatero");
    }  else if (lado1!=lado2 && lado1!=lado3 && lado2 != lado3) {
        console.log("Triangulo escaleno");
    }else if(lado1==lado2 || lado1==lado3){
        console.log("Triangulo isósceles");
    }else if(lado2==lado1 || lado2==lado3){
         console.log("Triângulo isósceles")
    }else if (lado3==lado1 || lado3==lado2){
        console.log("Triângulo isósceles");
    }

