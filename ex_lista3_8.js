var readlineSync = require('readline-sync')
var palavra= readlineSync.question("Escreva uma palavra")

var tamanhopalavra = palavra.lenght

for( var i = 0 ; i < tamanhopalavra ; i = i+1){
    console.log(palavra.charAt(i))
}
