console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Gramado`,
    `Urubici`,
    `Gaspar`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Gramado";

console.log("\nDestinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false
for (let i = 0 ; i < 3 ; i++ ){
    if (listaDeDestinos[i] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
    }

}
console.log("Destino existe:", destinoExiste);


if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe tivemos um erro!");
}


