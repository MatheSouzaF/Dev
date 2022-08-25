// Callback function

function sayMyName(name) {
    console.log('Antes de executar a funcao callback')

    name()

    console.log('Depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)