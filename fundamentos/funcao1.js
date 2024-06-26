// Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b) // faz a soma e não retorna nada
}

imprimirSoma(2 ,3) //retorna 5
imprimirSoma(2) //retorna NaN (not a number)
imprimirSoma(2 ,10, 4, 5, 6, 7, 8) //retorna 12
imprimirSoma() //retorna NaN

//Função com retorno

function soma(a, b = 1){
    return a + b
}

console.log (soma(2, 3)) //retorna 5
console.log(soma(2)) //retorna 3