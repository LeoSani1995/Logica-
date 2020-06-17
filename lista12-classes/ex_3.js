var media = require('./calcula-media')
var rs = require("readline-sync")
var i = 0
var numerosacumulados = []

for (var i = 0; i <= 2; i++) {
  var numero = rs.questionInt('digite um numero: ')
    numerosacumulados.push(numero)
}

var resultado = media(numerosacumulados);
console.log(resultado);


