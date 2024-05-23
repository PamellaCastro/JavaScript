const peso1 = 1.0;
const peso2 = Number("2.0")

console.log(peso1, peso2)
// O isInteger é ´pra saber se a variavel é do tipo inteiro. Caso o valor da variavel fosse 1.1 já não seria inteiro. O resultado seria false.
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

//a função toFixed delimita a quantidade de casas decimais que quero que apareca.
console.log(media.toFixed(2))

//a função toString transforma o tipo string em binário.
console.log(media.toString(2))

console.log(typeof media)

