var rs = require("readline-sync")
var fs = require("fs")
var modelo = rs.question("Qual o modelo do carro?")
var marca = rs.question("Qual a marca do carro?")
var cor = rs.question("Qual a cor do carro?")

var NovoCarro = new Object()

NovoCarro.modelo = modelo
NovoCarro.marca = marca
NovoCarro.cor = cor

var CarroDesSerializado = JSON.stringify(NovoCarro)
var CaminhoDoArquivo = "NovoCarro.json"
fs.writeFileSync (CaminhoDoArquivo, CarroSerializado)
