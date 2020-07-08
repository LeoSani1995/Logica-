const axios = require("axios")
var rs = require("readline-sync")

axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
.then( QualehaFrase = (response) =>{
    console.log(`A frase ${response.data[0].quote}`);
    console.log(`foi escrita por ${response.data[0].author}`)
})

