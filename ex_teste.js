var readlineSync = require('readline-sync')
var palavra = readlineSync.question("Digite uma palavra")

var tamanhopalavra= palavra.length

for (var i = 0 ; i< tamanhopalavra; i=i+1){
    console.log(palavra.charAt(i));
}

