/*
Em JavaScript, os tipos primitivos representam valores únicos e imutáveis (não podem ser alterados). 
Eles são os blocos de construção mais básicos da linguagem.
Recebe o valor por atribuição, diferente de apontar o valor por referência.

Existem 7 tipos primitivos em JavaScript:

    string:
    Dados textuais (sequência de caracteres)
    
    number:
    Números inteiros e de ponto flutuante (decimais)

    boolean:
    Valor lógico, apenas dois possíveis: verdadeiro ou falso

    undefined:
    Indica que uma variável foi declarada, mas nunca teve um valor atribuído

    null:
    Indica a ausência intencional de qualquer valor ou objeto

    symbol:
    bigint:
 */

typeof 10       // Retorna "number"
typeof "texto"  // Retorna "string"
typeof true     // Retorna "boolean"
typeof undefined// Retorna "undefined"
typeof 10n      // Retorna "bigint"
typeof Symbol() // Retorna "symbol"