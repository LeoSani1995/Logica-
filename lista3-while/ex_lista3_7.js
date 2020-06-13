var readlineSync = require('readline-sync')
var opçao = readlineSync.question("Digite A para sair ou B para realizar uma soma")
var A = "A"
var B = "B"


while (opçao != A && opçao != B) {
    console.log("Nao entendi, digite A ou B")
     opçao = readlineSync.question ("Digite A para sair ou B para realizar uma soma")
} 
if (opçao == A) {
   

} else if (opçao == B) {
    var n1 = readlineSync.questionInt("Digite o primeiro numero")
    var n2 = readlineSync.questionInt("Digite o segundo numero")
    var soma = n1 + n2
    console.log(soma)
    opçao = readlineSync.question ("Digite A para sair ou B para realizar uma soma")


}

