var readlineSync = require("readline-sync");
var numberA = readlineSync.questionFloat("Qual eh o numero A?");
var numberB = readlineSync.questionFloat("Qual eh o numero B?");

var A = numberA
var B = numberB
var resto = A%B

if(resto == 0){
    console.log("A eh divisivel por B")

}else if ( resto > 0 || resto < 0){
     console.log("A não eh divisiel por B")
}

