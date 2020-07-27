var rs = require("readline-sync")
var n = rs.question("Qual o valor de n ?")

function parimp(n){
    if(n%2 == 0){
        return "par"
    }else{
        return "impar"
    }
}
console.log(parimp(n))