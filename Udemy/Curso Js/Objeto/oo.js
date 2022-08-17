// CÓDIGO NÃO EXECUTÁVEL!!!
const produto =  new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco =220

console.log(produto)
delete produto.preco
delete produto ['marca do produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        emdereco:{
            logradoutro :'Rua ABC',
            numero: 123
            
        }
    },
    condutores : [{
        nome: 'Junior',
        idade:19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.emdereco.numero = 1000