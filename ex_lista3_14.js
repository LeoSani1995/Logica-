var readlineSync = require('readline-sync')
var num1 = readlineSync.questionInt("Digite a primeira idade")
var num2 = readlineSync.questionInt("Digite a segunda idade")
var num3 = readlineSync.questionInt("Digite a terceira idade")
var num4 = readlineSync.questionInt("Digite a quarta idade")
var num5 = readlineSync.questionInt("Digite a quinta idade")
var num6 = readlineSync.questionInt("Digite a sexta idade")
var num7 = readlineSync.questionInt("Digite a setima idade")
var num8 = readlineSync.questionInt("Digite a oitava idade")

if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5 && num1 < num6 && num1 < num7 && num1 < num8) {
    console.log(num1)

} else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5 && num2 < num6 && num2 < num7 && num2 < num8) {
    console.log(num2)
} else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num3 < num6 && num3 < num3 < num7 && num3 < num8) {
    console.log(num3)
} else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5 && num4 < num6 && num4 < num4 < num7 && num4 < num8) {
    console.log(num4)
} else if (num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4 && num5 < num6 && num5 < num7 && num5 < num8) {
    console.log(num5)
} else if (num6 < num1 && num6 < num2 && num6 < num3 && num6 < num4 && mum6 < num5 && num6 < num7 && num6 < num8) {
    console.log(num6)
} else if (num7 < num1 && num7 < num2 && num7 < num3 && num7 && num7 < num4 && num7 < num6 && num7 < num8) {
    console.log(num7)
} else if (num8 < num1 && num8 < num2 && num8 < num3 && num8 < num4 && num8 < num5 && num8 < num6 && num8 < num7) {
    console.log(num8)
}