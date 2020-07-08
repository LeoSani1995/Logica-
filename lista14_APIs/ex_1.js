const axios = require("axios")
var rs = require("readline-sync")
var Resposta = rs.question("Responda Yes para Sim ou No para Nao")


axios.get('https://yesno.wtf/api')
    .then(function(response) {
        if (response.data.answer == Resposta) {
            console.log('Você acertou');
        } else {
            console.log('Você errou');
        }
    })
    .catch(function(error) {
        console.log(error)
    })

    