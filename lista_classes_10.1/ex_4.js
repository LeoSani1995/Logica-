//Agora crie um usuário que represente um motorista,
//com atributos e métodos próprios. Lembre-se que você deve evitar código
//duplicado. Logo, você pode extrair alguns comportamentos do usuário
//criado anteriormente para um usuário base e a partir daí fazer com que
//UsuarioCliente e UsuarioMotorista sejam filhas da classe pai.

let rs = require("readline-sync")

class MotoristaDoApp {
    constructor() {
        this.nome = rs.question("Qual o seu nome?")
        this.carro = rs.question("Qual eh o modelo do seu carro?")
        this.pagamento = rs.question("Quais formas de pagamento vc aceita?")
        this.compartilhamento = rs.questionInt("Quantas pessoas vc aceita transportar no máximo?")
        this.horarioComeco = rs.questionInt("A que horas vc comeca a trabalhar?")
        this.horarioFinal = rs.questionInt("A que horas vc encerra o expediente?")

    }
    DarBoasVindasAoMotorista() {
        console.log(`Seja bem vindo(a) colaborador(a) ${this.name}`)
    }

    ApresentarCarroDoMotorista() {
        console.log(`Seu carro sera o ${this.carro}`)
    }
    ApresentarFormasAceitasDePagamento() {
        console.log(`Vc aceita ${this.pagamento} como forma de pagamento`)
    }

    QuantidadeDePessoasTransportadas() {
        console.log(`Vc aceita transportar ate ${this.compartilhamento} pessoas por vez`)
    }

    HorarioDoExpediente() {
        console.log(`Seu expediente de trabalo vai das ${this.horarioComeco} ate as ${this.horarioFinal}`)
    }
}

let motorista = new MotoristaDoApp
motorista.DarBoasVindasAoMotorista();
motorista.ApresentarCarroDoMotorista();
motorista.ApresentarFormasAceitasDePagamento();
motorista.QuantidadeDePessoasTransportadas();
motorista.HorarioDoExpediente()
