const { func } = require("prop-types")

const saudacao = ' Opa ' //contexto léxico 1

function exec(){
    const saudacao = 'Faaala' //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de chaves(nomes)/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua tal',
        numero: 123 
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)