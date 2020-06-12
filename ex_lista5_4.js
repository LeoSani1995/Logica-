var rs = require("readline-sync")



for (var cont = 0; cont < 5 ; cont++) {
    var nomedoaluno = rs.question("Qual o nome do aluno?")
    var nota1 = rs.questionFloat("Qual a primeira nota?")
    var nota2 = rs.questionFloat("Qual a segunda nota?")

    notafinal = (0.3 * nota1 + 0.7 * nota2)
    console.log ("O aluno " + nomedoaluno + " tem uma media " + notafinal)

}



