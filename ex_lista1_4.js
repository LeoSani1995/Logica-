var readlineSync = require("readline-sync")
var quantidade = readlineSync.questionFloat("Quantas frutas?")


var duzia = 12

var preço1 = duzia * 0.25
var preço2 = quantidade * 0.25
var preço3 = quantidade * 0.3

if (quantidade == duzia) {
    console.log("Você deve pagar" + preço1 + "reais")

} else if (quantidade > duzia) {
    console.log("Você deve pagar" + preço2 + "reais")

} else if (quantidade < duzia) {
    console.log("Você deve pagar" + preço3 + "reais")
}
