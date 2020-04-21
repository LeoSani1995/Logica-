var readlineSync= require("readline-sync")

var formapagamento= readlineSync.question("Qual a forma de pagamento?")



if(formapagamento==="dinheiro") {
    console.log("pagamento feito em dinheiro")
 } else if (formapagamento==="cartão") {
        console.log("pagou com cartão")
 }else if (formapagamento==="cheque") {
     console.log("pagou em cheque")
 }else if (formapagamento==="zero") {
     console.log("calote!")
 }


    
    


