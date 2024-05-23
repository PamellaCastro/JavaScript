var numero = 1
{
    var numero = 2
    console.log("dentro", numero) // Só existe escopo de bloco de var em bloco de função
}

console.log ("fora", numero)