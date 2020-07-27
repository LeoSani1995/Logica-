var readlineSync = require("readline-sync");

var angulo1 = readlineSync.question("Qual o valor do primeiro angulo?");
var angulo2 = readlineSync.question("Qual o valor do segundo angulo?");
var angulo3 = readlineSync.question("Qual o valor do terceiro angulo?");

if (angulo1 == 90 && angulo2 < 90 && angulo3 < 90) {
    console.log("Triângulo retângulo");
} if (angulo1 < 90 && angulo2 == 90 && angulo3 < 90) {
    console.log("Triângulo retângulo");
}if(angulo1 < 90 && angulo2 < 90 && angulo3 ==90){
    console.log("Triângulo retângulo");

}else if(angulo1 > 90 && angulo2 < 90 && angulo3 <90){
    console.log( "Triangulo obtusangulo");

}else if(angulo1 < 90 && angulo2 >90 && angulo3 <90 ){
    console.log ("Triangulo obtusangulo");

}else if(angulo1 <90 && angulo2 < 90 && angulo3 > 90){
    console.log("Triângulo obtusangulo");

}else if(angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
    console.log("Triangulo acutangulo")
}



     



