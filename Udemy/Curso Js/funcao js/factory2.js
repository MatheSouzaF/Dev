function criarProduto(nome,preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2119.24))
console.log(criarProduto('Iphone', 5119.24))