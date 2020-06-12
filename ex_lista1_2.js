var readlineSync = require("readline-sync")
var numero= readlineSync.question("Qual o numero?")
var resto= numero%2



if(resto==0 ){
    console.log("Número par!")

}else if(resto !=0){
    console.log("Número ímpar")

}


