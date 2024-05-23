
console.log("a =", a)
var a = 2
console.log("a = 2", a)
/* no caso acima, acontece um hoisting, ou seja
ele move a declaração para o topo, é como se estivesse
içando o VAR*/

/*Já no caso abaixo usando o let, não acontece esse hoisting*/
console.log("a =", b)
let b = 2
console.log("a = 2", b)
