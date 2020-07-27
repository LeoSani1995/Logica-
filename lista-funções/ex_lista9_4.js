var rs = require("readline-sync")

var n = rs.question("Qual o valor de n?")

function tabuada (n){
    var resultado = 1
    for(var i =1 ; i<= n ; i++){
         resultado = i*n
        console.log(`${i} x ${n} = ${resultado}` )
    }
    
}

  tabuada(n)