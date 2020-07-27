var rs = require("readline-sync")
var cont = 0

while(NomedoUsuario !== "Final"){
    var NomedoUsuario = rs.question("Quais os nomes dos usurios vc quer cadastrar?")
    
    if(NomedoUsuario == "Final"){
        break;
    }
    var idade = rs.questionInt("Qual a idade do usuario?")
    if(NomedoUsuario != "Final" && idade > 0){
        cont = cont + 1
    }
    console.log("nome :" + NomedoUsuario + "Idade :" + idade)
}

console.log("Foram cadastrados" + cont + "usuarios")

     
   

