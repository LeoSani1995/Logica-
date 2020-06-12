var rs = require('readline-sync');
var fs = require('fs');
var garagem = [];
var novoCadastro = true

function criarCarro(rs) {
    var cor = rs.question('Qual a cor do carro: ')  
    var modelo = rs.question('Qual o modelo do carro: ') 
    var marca = rs.question('Informe a marca do carro: ') 
    var carro = {} 
    carro.cor = cor 
    carro.modelo = modelo 
    carro.marca = marca 
    return carro

}

while(novoCadastro == true) {
    novoCadastro = rs.keyInYN('Confirme para cadasrar um novo veiculo ou não para imprimir: ');
    if (novoCadastro == true) {
        var carroNovo = criarCarro(rs);
       garagem.push(carroNovo);
    }   
}
console.log(garagem);

var caminhoDoArquivo = 'carro.json';
var arquivoSerializado = JSON.stringify(garagem);
fs.writeFileSync(caminhoDoArquivo,arquivoSerializado);