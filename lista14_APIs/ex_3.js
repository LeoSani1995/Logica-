const axios = require("axios")
var rs = require("readline-sync")
var numerodoEp = rs.question("Qual o numero do espisodio?")

axios.get(`https://www.breakingbadapi.com/api/episodes/${numerodoEp}`)
.then( imprimeElenco = (response) =>  {
    if(numerodoEp > response.length){
        console.log("Episodio invaido")
    }
    else{
        console.log(response.data[0].characters)
    }
})