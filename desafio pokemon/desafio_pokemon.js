var url = 'https://pokeapi.co/api/v2/';

var axios = require("axios");
var rs = require("readline-sync");

var pesquisa = rs.question("Digite o nome ou numero de um pokemon").toLowerCase()
var pokemon = {nome: '', habilidades:[], tipos: []}
axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`)
.then( (resposta) =>{
    pokemon.nome = resposta.data.nome;

     insereHabilidades(resposta.data.abilities); 
     insereTipos(resposta.data.types)
    
    
} )



function insereHabilidades(abilities) {
    
    abilities.forEach((habilidade) => {
        pokemon.habilidade.push(habilidade.ability.name);
    });
    
}

function insereTipos(types) {
    types.forEach((tipos) => {
        pokemon.tipos.type.push(tipo.type.name)
    });
}

function salvaPokemon(){
    var pokemons = []
    var opcao = rs.keyInYN('Quer guardar seu pokemon na pokedex?')
    if(opcao){
        pokemons = JSON.parse(fs.readFileSync("./pokemons.json"))
        pokemons.push(pokemon)
        fs.writeFileSync("./pokemons.json",JSON.stringify(pokemons))
    }
}
    
