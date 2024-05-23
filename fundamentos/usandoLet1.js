var numero = 1 //escopo global e de função
{
    let numero = 2  //o let tem escopo de bloco, além de escopo global, e de função
    console.log("dentro", numero)
}

console.log("fora", numero)