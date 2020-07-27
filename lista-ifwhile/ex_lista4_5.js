var rs = require("readline-sync")



var x = 0
var y = 0

while (numero != -1) {
    var numero = rs.questionInt('Digite um numero')

    if (numero > x) {
        x = numero;

    }else if(numero < y){
        y = numero
    }
        
}




console.log('o maior numero eh '+ x)
console.log ('o menor numero eh' + y)






