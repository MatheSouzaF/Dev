const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABc',
        numero: 1000
    }
}


const { nome, idade } = pessoa
console.log(nome, idade)


const { nome: n, idade: i } = pessoa
console.log(n, i)


const { sobrenome, bemHumorauda = true } = pessoa
console.log(sobrenome, bemHumorauda)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)