const escola = "Cod3r"

//a função charAt mostra o indice(posição) da letra da string Coder
console.log(escola.charAt(4))
console.log(escola.charAt(5))

//função que converte o indice para o valor correspondido a tabela asci.
console.log(escola.charCodeAt(3))

console.log(escola.indexOf("3"))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

//função concatenar
console.log('Escola'.concat(escola).concat('!'))

//função replace, para substituir o indice pelo caractere desejado.
console.log(escola.replace(3, 'e'))

//O split é como um separador. Nesse caso o separador usado é a virgula.
console.log('Ana, Maria, Pedro'.split(','))