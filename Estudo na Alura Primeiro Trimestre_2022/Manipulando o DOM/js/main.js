const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 80,
        "resistencia": 25,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "resistencia": 20,
        "energia": 0,
        "velocidade": -10
    },
    "nucleos":{
        "forca": 0,
        "resistencia": 7,
        "energia": 98,
        "velocidade": -14
    },
    "pernas":{
        "forca": 27,
        "resistencia": 21,
        "energia": -32,
        "velocidade": 102
    },
    "foguetes":{
        "forca": 0,
        "resistencia": 18,
        "energia": 0,
        "velocidade": 20
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}