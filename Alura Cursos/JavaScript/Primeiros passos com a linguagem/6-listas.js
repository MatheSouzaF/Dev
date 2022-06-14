console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Gramado`,
    `Urubici`,
    `Gaspar`,
);
//Adicionando item no elemento!
listaDeDestinos.push(`Blumenal`);

console.log(listaDeDestinos);

//Removendo item no elemento!
listaDeDestinos.splice(3,1);
console.log(listaDeDestinos);

//mostrando somente um item
console.log(listaDeDestinos[1]);