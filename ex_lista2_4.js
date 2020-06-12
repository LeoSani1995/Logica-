var rs = require("readline-sync")

var salario = rs.questionFloat("Quanto vc ganha?")
var emprestimo = rs.questionFloat("Quanto dinheiro vc quer emprestado?")
var prestaçao = rs.questionInt("Em quantas prestações vc vai dividir?")
var valorprestaçao = emprestimo/prestaçao

if (valorprestaçao > salario * 0.3 || salario < 0) {
    console.log("Emprestimo negado")
} else {
    console.log("Emprestimo concedido")
}