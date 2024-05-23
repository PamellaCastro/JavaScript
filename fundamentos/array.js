const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
//.length: Retorna o número de elementos no array.
console.log(valores.length)
//.push(): Adiciona um ou mais elementos ao final do array.
valores.push({id:3}, false, null, 'teste')
console.log(valores)
//.pop(): Remove e retorna o último elemento do array.
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)

