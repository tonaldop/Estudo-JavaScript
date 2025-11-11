// operador de coalescência nula

/*
    O operador ?? é o operador de coalescência nula (nullish coalescing operator);
    Ele é usado para fornecer um valor padrão quando a expressão à sua esquerda é null ou undefined;
    Exemplo, variavel ?? valorPadrao retornará valorPadrao se variavel for null ou undefined, e retornará o próprio variavel;
*/

let nomeDoUsuario = null
let nomeExibido = nomeDoUsuario ?? "Convidado"

console.log(nomeExibido)

let idade = 25
let idadeExibida = idade ?? 18

console.log(idadeExibida)
