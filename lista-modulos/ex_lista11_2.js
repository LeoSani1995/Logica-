var rs = require("readline-sync")
var peso = rs.questionFloat("Informe seu peso")
var altura = rs.questionFloat("Informe sua altura")

const FasamImc = require('fasam-imc-calc');
const imc = new FasamImc(peso, altura)

console.log("seu IMC é" + `${imc.calc()}`)

