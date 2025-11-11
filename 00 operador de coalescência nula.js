/*
O operador ?? em JavaScript é o operador de coalescência nula (nullish coalescing operator). 
Ele é usado para fornecer um valor padrão quando a expressão à sua esquerda é null ou undefined. 
Por exemplo, variavel ?? valorPadrao retornará valorPadrao se variavel for null ou undefined, e retornará o próprio variavel em outros casos. 
*/

let nomeDoUsuario = null
let nomeExibido = nomeDoUsuario ?? "Convidado"

console.log(nomeExibido)

let idade = 25
let idadeExibida = idade ?? 18

console.log(idadeExibida)
