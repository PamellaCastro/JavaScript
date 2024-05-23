//Armazenando uma função em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => { //a setinha é como se fosse a function do exemplo anterior. (ArrowFunction)
    return a + b
}

console.log(soma(2,3))

//retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))