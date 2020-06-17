var rs = require("readline-sync")

var cadastro = []
var i = 0

class Aluno{
    constructor(nome , idade){
        this.nome
        this.idade
    }
}

for(var i =0 ; i<=2 ; i++){
    var nome = rs.question("Qual o nome do aluno?")
    var idade = rs.questionInt ("Qual a idade do aluno?")
    cadastro.push(new Aluno(nome ,idade))
}


