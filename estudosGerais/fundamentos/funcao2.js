//Armazenaod função em uma variável; 

const imprimirSoma = function(a, b){ // variável recebe função que retorna 'soma';
 console.log( a + b)
}
imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variávelo; 

const soma = (a, b) =>{ //arrow functinon;
    return a + b
}
console.log(soma(8, 50))

//retorno implícito;
const subtracao = (a, b) => a - b

console.log(subtracao(2, 3 ))