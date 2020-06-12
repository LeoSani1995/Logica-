var rs = require("readline-sync")
var DDI = rs.questionInt("Qual o DDI?")

if (DDI == 1) {
    console.log("Estados Unidos")
} if (DDI == 49) {
    console.log("Alemanha")
} if (DDI == 54) {
    console.log("Argentina")
} if (DDI == 55) {
    console.log("Brasil")
} if (DDI == 35) {
    console.log("Portugal")
} if(DDI != 1 && DDI != 49 && DDI!= 54 && DDI!= 54 && DDI!= 55 && DDI != 35){
    console.log("DDI invalido")
}



