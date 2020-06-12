var rs = require("readline-sync")
var nomeA = rs.question("Qual o nome do jogador A?")
var nomeB = rs.question("Qual o nome do jogador B? ")



var vencedor = false;

while (vencedor == false) {
    var vez = rs.question("De quem eh a vez?")
    if (nomeA == vez) {


        var jogadaA = rs.question("Voce escolhe pedra, papel ou tesoura?", { hideEchoBack: true })

    } else {
        var jogadaB = rs.question("Voce escolhe pedra, papel ou tesoura?", { hideEchoBack: true })
    }


    if (jogadaA == "pedra" && jogadaB == "papel") {
        console.log(nomeB + "eh o vencedor")
        vencedor = true;
    }

    if (jogadaA == "papel" && jogadaB == "papel") {
        console.log("Deu empate!")
    }

    if (jogadaA == "tesoura" && jogadaB == "papel") {
        console.log(nomeA + "eh o vencedor")
        vencedor = true;
    }

    if (jogadaA == "pedra" && jogadaB == "pedra") {
        console.log("Deu empate")
    }

    if (jogadaA == "tesoura" && jogadaB == "pedra") {
        console.log(nomeB + "eh o vencedor")
        vencedor = true
    }

    if (jogadaA == "papel" && jogadaB == "pedra") {
        console.log(nomeA + "eh o vencedor")
        vencedor = true
    }

    if (jogadaA == "tesoura" && jogadaB == "tesoura") {
        console.log("Deu empate")
    }

    if (jogadaA == "pedra" && jogadaB == "tesoura") {
        console.log(nomeA + "eh o vencedor")
        vencedor = true
    }

    if (jogadaA == "papel" && jogadaB == "tesoura") {
        console.log(nomeB + "eh o vencedor")
    }

}




