var rs = require("readline-sync")

var nome1 = rs.question("Qual o nome do primeiro carro?")
var modelo1 = rs.question("Qual o primeiro modelo?")
var cor1 = rs.question("Qual a primeira cor?")

var nome2 = rs.question("Qual o nome do segundo carro?")
var modelo2 = rs.question("Qual o modelo do segundo carro?")
var cor2 = rs.question("Qual a segunda cor?")

class Carro {
    constructor(nome, modelo, cor) {
        this.nome = nome
        this.modelo = modelo
        this.cor = cor
    }
}


var carro1 = new Carro(nome1, modelo1, cor1);
var carro2 = new Carro(nome2, modelo2, cor2);




if(carro1.nome == carro2.nome && carro1.modelo == carro2.modelo && carro1.cor == carro2.cor){
    console.log("Os carros sao iguais")
}else{
    console.log ("Os carros sao diferentes")
}