// multiplos de 5: são numeros terminados em 0 e 5
//multiplos de 3: 3, 6,9 e quaisquer outros numeros cuja soma dos algarismos seja 3, 6 ,9 ou outro multiplo de 3
//multiplos de 3 e 5 : 15,30,45,60... (15 em 15)

var n1= 1

var soma = 15 
while(n1<=1000){
if(n1%15==0){
    console.log(n1)
    soma = soma + n1
}
n1++
}
console.log(soma)


