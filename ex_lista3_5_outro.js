var rs = require("readline-sync")
var num = rs.question("Digite a base:")
var potencia = rs.question("Digite a potencia")

var cont = 0
var resultado = 1 

while(cont < potencia){
    resultado= resultado * num
    cont ++ ;

}

console.log(resultado)
