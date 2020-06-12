var rs = require("readline-sync")
var n1= rs.question("digite um numero")
var i= 0
var numero = 0

while(i<n1){
    numero = numero + i
    console.log(numero)
    i++
}