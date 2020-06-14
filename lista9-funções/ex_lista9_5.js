var rs = require("readline-sync")

var n1 = rs.questionInt("Qual o valor de n1?")
var n2 = rs.questionInt("Qual o valor de n2?")

function maioroumenor(n1, n2) {
    if (n1 > n2) {
        console.log(n1)
    } else {
        console.log(n2)
    }
}
maioroumenor(n1 ,n2)

