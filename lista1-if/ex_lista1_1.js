var readlineSync = require("readline-sync")

var idade= readlineSync.question("Qual a sua idade?")

if(idade>=18 && idade <65){
    console.log("Você é obrigado a votar!")
}else if (idade>= 65){
    console.log("Você não precisa votar")
}else if (idade>= 16){
    console.log("Você pode mas não precisa votar")
}else if (idade<16){
    console.log("Você não pode votar")
}



