{
     { 
        { 
            { 
                var sera = "Será??"  //Variavel dentro de um ou varios blocos de código é visivel,
                console.log(sera)   //e fora do bloco de código tambem
            }
        } 
    } 
}

console.log(sera)

function teste() {
    var local = 123 //Ja uma variavel dentro do um escopo de uma função , só é exibida dentro desse escopo.
    console.log(local)
}

teste()
console.log(local)