//Crie uma aplicação em JS que receba um nome e uma idade do
//usuário e crie um novo usuário com o nome e a idade fornecida e o imprima na tela
//neste formato -> "Olá <nome do usuário>, você tem <idade do usuário> anos!". Este
//objeto deve ser criado usando uma classe.



let rs = require("readline-sync")

class Usuario{
    constructor(){
        this.name = rs.question("Qual o seu nome?")
        this.idade = rs.questionInt("Quantos anos vc tem?")
        
    }
}

const NovaPessoa = new Usuario()
console.log("Ola" + `${NovaPessoa.name}`+ "vc tem" + `${NovaPessoa.idade}`+ "anos")
