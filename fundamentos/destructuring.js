// novo recurso do ES2015

const pessoa = {
    nome: 'Pam',
    idade: '35',
    endereco: {
        logradouro: 'Pequenopolis',
        numero: 17
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { conta: { ag, num } } = pessoa
console.log(ag, num)