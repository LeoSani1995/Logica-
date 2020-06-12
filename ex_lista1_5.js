var readlineSync = require("readline-sync");
var numerox = readlineSync.question("Qual o numero x?");
var numeroy = readlineSync.question("Qual o numero y?");
var numeroz = readlineSync.question("Qual o numero z?");

var x = numerox;
var y = numeroy;
var z = numeroz;

if (x != y && x != z && y != z) {
  if(x<y && x<z && y<z){
      console.log("Os números são :" +x + " " + y + " " + z);
      
  }

}

