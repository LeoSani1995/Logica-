var rs = require("readline-sync")
var num1 = rs.questionInt("Digite um numero entre 1 e 100")
var num2 = rs.questionInt("Digite outro numero entre 1 e 100")

if (num1 > num2) {
    while (num1 > num2) {
        if (num2 % 7 == 0) {
            console.log("ping")

        } else if (num2 % 5 == 0) {
            console.log("pong")

        } else if (num2 % 5 == 0 && num2 % 7 == 0) {
            console.log("ping pong")
        } else {
            console.log(num2)
        }
        num2++

    }
} else {
    while (num2 > num1){
        if(num1 % 7 == 0){
            console.log("ping")
        } else if( num1 % 5 ==0){
            console.log("pong")
        } else if(num1 % 5 == 0 && num1 % 7 == 0 ) {
            console.log ("ping pong")
        } else {
            console.log(num1)
        }
        num1++
    }
}
   
        
    

    
