
function media(numerosacumulados) {
    var resultado = 0.00;
    var soma = 0;
    for(var i =0; i < numerosacumulados.length; i++) {
        soma = soma + numerosacumulados[i];
    }
    resultado = soma/numerosacumulados.length;
    return resultado;
}



exports.media = media