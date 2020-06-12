var rs = require ("readline-sync")
var nota1 = rs.questionFloat("Digite a primeira nota")
var nota2 = rs.questionFloat("Digite a 2 nota")
var nota3 = rs.questionFloat("Digite a 3 nota")
var nota4 = rs.questionFloat("Digite a 4 nota")

var media = require('median')
var arr = [nota1, nota2, nota3, nota4]
var value = media(arr)

console.log("A média das notas eh" + value)
