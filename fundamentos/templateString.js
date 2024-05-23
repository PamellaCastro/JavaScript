const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!"
const template = `
Olá 
     ${nome}!`


console.log( concatenacao, template)

//explressões ...
console.log('1 + 1 = ${1 + 1}')

const up = texto => texto.toUpperCase()


/*
OBS: Na string template, o símbolo de cifrão é usado para interpolar o valor da variável nome diretamente dentro da string. Esse recurso é exclusivo dos templates literais, introduzidos no JavaScript ES6
O template literal é delimitado por backticks (```).
Dentro do template, você pode escrever texto normal e expressões embutidas.
As expressões embutidas são identificadas por ${} e contêm o nome da variável que deseja inserir.
Quando o template é executado, o JavaScript substitui cada expressão embutida pelo valor da variável correspondente.
*/