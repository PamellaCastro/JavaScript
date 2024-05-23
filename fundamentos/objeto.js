/*
os objetos literais são uma maneira concisa e flexível de criar coleções de dados compostas por pares chave-valor. Imagine-os como caixas organizadoras que armazenam informações relacionadas sob um único nome
*/

/*Objto é um grupo de pares/coleção de chave/valor */
const prod1 = {} // criamos um objeto vazio
prod1.nome = 'Celular ultra mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 //evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: "Cadeira Gamer",
    preco: 599.99,
    descricao: "Cor: Cinza"
}

console.log(prod2)
