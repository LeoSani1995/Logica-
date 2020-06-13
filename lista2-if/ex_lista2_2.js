var rs = require("readline-sync")

var temperatura = rs.questionFloat("Quantos graus vc quer converter?")
var escala = rs.question("Qual a escala da temperatura?")
var temperaturaemfahrenheit = (1.8*temperatura) +32
var temperaturaemcelsius = (temperatura - 32)/1.8

if(escala == "celsius"){
     console.log(temperaturaemfahrenheit)
}else{
    console.log(temperaturaemcelsius)
}