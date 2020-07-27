const axios = require("axios")
var rs = require("readline-sync")
const { default: Axios } = require("axios")

var CEP = rs.question("Informe seu CEP")

axios.get(`https://api.postmon.com.br/v1/cep/${CEP}`)
.then( informaEndereço = (response) => {
    console.log(response.data[0].cidade)
    console.log(response.data[0].logradouro)
    console.log(response.data[0].estado)
})