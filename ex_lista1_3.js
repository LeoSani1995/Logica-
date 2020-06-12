var readlineSync = require("readline-sync")
var senha= readlineSync.question("Qual a senha?")

var senhavalida=1234

if(senha==senhavalida){
    console.log("Acesso permitido")
}else if(senha== !senhavalida){
    console.log("Acesso negado")

}
