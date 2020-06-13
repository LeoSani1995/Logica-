var readlineSync = require("readline-sync");

var nota1 = readlineSync.questionFloat("Qual foi a nota 1?");
var nota2 = readlineSync.questionFloat("Qual foi a nota 2?");
var nota3 = readlineSync.questionFloat("Qual foi a nota 3?");


var x = nota1;
var y = nota2;
var z = nota3;

media = (x + y + z) / 3

if (media > 7.0) {
    console.log("Média:" + (x + y + z) / 3 + "ALUNO APROVADO")
}

else if (media < 7.0){
     console.log("Média:"  + (x + y + z) / 3  +  "Aluno REPROVADO")
}




