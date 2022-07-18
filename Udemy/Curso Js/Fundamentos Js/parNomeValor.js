const saudacao = 'opa' // contexto léxico 1 

function exec(){
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos alinhados de pares nomes/valor

const cliente ={
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito Legal',
        nuemro: 134
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)