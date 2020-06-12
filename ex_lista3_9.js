var rs = require("readline-sync");
var palavra = rs.question("Digite uma palavra");

var palavrainvertida='';
for(var i = palavra.lenght -1 ; i >= 0 ; i-- ){
    palavrainvertida= palavrainvertida + palavra.charAt(i);
}
console.log (palavrainvertida)

