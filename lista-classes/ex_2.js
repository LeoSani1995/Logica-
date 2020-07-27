// Crie uma aplicação em JS que receba um nome e uma idade do
//usuário e crie um novo usuário com o nome e a idade fornecida e o imprima na tela(ex.:
// "{nome: 'Italo', idade: 22}"). Este objeto deve ser criado usando uma classe.
    
let rs = require("readline-sync")


class Usuario{
    constructor(){
        this.name = rs.question("Qual o seu nome?")
        this.idade = rs.questionInt("Quantos anos vc tem?")
        this.genero = rs.question("Qual o seu genero?")
    }
}

const Leonardo = new Usuario()
console.log(Leonardo)
