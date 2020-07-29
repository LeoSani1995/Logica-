//Usando a classe do exercício anterior, crie métodos
//que representem possíveis ações do usuário no aplicativo.

let rs = require("readline-sync")

class UsuarioDoApp {
    constructor() {
        this.nome = rs.question("Por gentileza, informe seu nome")
        this.endereco = rs.question("Por gentileza, informe seu endereco")
        this.email = rs.question("Por gentileza, informe seu email")
        this.destino = rs.question("Informe seu destino")
        this.pagamento = rs.question("Qual a forma de pagamento?")
        this.tipodetransporte = rs.question("Voce quer ir de carro solo ou compartilhado?")
        this.modelo = rs.question("Qual o modelo de carro vc deseja?")


    }
    DarBoasVindasAoCliente() {
        console.log(`Seja bem vindo(a) usuario(a) ${this.name}`)
    }

    SolicitarNovaViagem() {
        console.log(`Voce vai de ${this.endereco} para ${this.destino}.`)

    }

    SolicitarTipoDeTransporte(){
        console.log(`Voce escolheu viajar com ${this.tipodetransporte}`)
    }

    SolicitarModeloDoCarro(){
        console.log(`Voce escolheu viajar com um ${this.modelo}`)
    }



}
let usuario = new UsuarioDoApp()
usuario.DarBoasVindasAoCliente();
usuario.SolicitarNovaViagem();
usuario.SolicitarTipoDeTransporte();
usuario.SolicitarModeloDoCarro();

