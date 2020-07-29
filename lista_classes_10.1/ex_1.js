//Crie uma classe que represente um usuário de um
//app como uber ou 99. O Usuário deve ter alguns atributos como nome,
//email, endereço primário, formas de pagamento, etc.


let rs = require("readline-sync")

class UsuarioDoApp {
    constructor() {
        this.nome = rs.question("Por gentileza, informe seu nome")
        this.endereco = rs.question("Por gentileza, informe seu endereco")
        this.email = rs.question("Por gentileza, informe seu email")
        this.destino = rs.question("Informe seu destino")
        this.pagamento = rs.question("Qual a forma de pagamento?")

        
    }
}
const Cliente = new UsuarioDoApp()
console.log(Cliente)