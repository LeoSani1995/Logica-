var rs = require("readline-sync")
var senha = rs.question("Qual eh a senha?")

if (senha == "batatafrita") {
    console.log("Acesso permitido")
} else {
    console.log("Vc nao tem acesso ao sistema")
}