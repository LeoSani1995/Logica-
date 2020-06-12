var rs = require("readline-sync")
var modelo = rs.question("Qual o modelo do carro?")
var marca = rs.question("Qual a marca do carro?")
var cor = rs.question("Qual a cor do carro?")

var NovoCarro = new Object()

NovoCarro.modelo = modelo
NovoCarro.marca = marca
NovoCarro.cor = cor

console.log(`Seu novo carro é do modelo ${NovoCarro.modelo} , da marca ${NovoCarro.marca} de cor ${NovoCarro.cor}`)

