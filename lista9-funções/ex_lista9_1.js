var rs = require("readline-sync")
var raio = rs.questionFloat("Qual o raio da esfera?")
var volume = (4/3)*3.14*(raio**3)

function valordovolume(raio){
    
    return volume
}
console.log(volume)