var readlineSync = require('readline-sync')
var cont = 0
var numerospares = 0
var numerosimpares = 1


while(cont < 5){
var num = readlineSync.questionInt("Digite um numero")

   if(num % 2 == 0){
       numerospares = numerospares + num
       

   
    }else{
       
       numerosimpares = numerosimpares * num 
      
   }cont ++
}
console.log(numerosimpares)
console.log(numerospares)