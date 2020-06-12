var rs = require("readline-sync")
var preço = rs.questionFloat("Qual é o preço do pruduto?")
var pagamento = rs.question("Qual a forma de pagamento? Escolha 1 À vista em dinheiro ou cheque, recebe 10% de desconto ,  2 À vista no cartão de crédito, recebe 15% de desconto,  3 Em duas vezes, preço normal de etiqueta sem juros  ,  4 Em duas vezes, preço normal de etiqueta mais juros de 10% ")

if (pagamento == "1, dinheiro" || pagamento == "1, cheque") {
    console.log("O preço total eh:" + `${0.9 * preço}`)

} else if (pagamento == "2") {
    console.log("preco total eh:" + preço * 0.85)
} else if (pagamento == "3") {
    console.log("O preco total eh:" + preço)
} else if (pagamento == "4") {
    console.log("O preco total eh: " + preço * 1.10)
}else{
    console.log("opçao invalida")
}


