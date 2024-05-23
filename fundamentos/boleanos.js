let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
/*
No caso acima a (!) é uma negação, e se você usa a negação 2 vezes, você está negando a negação, tornando ela verdadeira por exemplo.
*/

console.log('situações verdadeiro')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('situações falsas')
console.log(!!0)
console.log(!!'')
console.log(null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // ( || significa ou)

/*No caso a baixo, caso o usuário não coloque um nome, a segunda opção é a string 'Desconhecido'
*/
let nome =  ' '
console.log( nome || 'Desconhecido')