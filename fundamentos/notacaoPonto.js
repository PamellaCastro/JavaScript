/*A notação ponto em JavaScript é um método fundamental para acessar propriedades de objetos. Ela permite que você navegue pela estrutura de um objeto de forma organizada e eficiente, utilizando o nome da propriedade e um ponto (.) como separador.*/

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "Bola"
//obj1['nome'] = 'Bola2'

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

const carro = {
    marca: "Ford",
    modelo: "Fiesta",
    detalhes: {
        ano: 2023,
        cor: "Branco"
    }
}

/*Acessar Propriedades Aninhadas: Para acessar propriedades aninhadas em objetos mais complexos, utilize pontos adicionais como separadores. Por exemplo: */

console.log(carro.marca); // Imprime "Ford"
console.log(carro.modelo); // Imprime "Fiesta"
console.log(carro.detalhes.ano); // Imprime 2023
console.log(carro.detalhes.cor); // Imprime "Branco"




/*Chamar Métodos de Objeto: A notação ponto também pode ser utilizada para chamar métodos de objetos, que são funções associadas a um objeto específico. Para isso, após o nome da propriedade, adicione parênteses com os argumentos do método (se necessário): */

const calculadora = {
    somar: function (x, y) {
        return x + y;
    },
    subtrair: function (x, y) {
        return x - y;
    }
};

console.log(calculadora.somar(10, 5)); // Imprime 15
console.log(calculadora.subtrair(20, 12)); // Imprime 8

