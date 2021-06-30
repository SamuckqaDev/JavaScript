//Função == Receita de bolo, cada passo de uma 'receita de bolo': rece ingredientes, modo de prepadro, e retorna bolo feito;
//Fução é um bolo que código 'nomeado', pode ser retutiolizado;
//Uma função recebe parametros, mas não necessariamente;

//Função sem retorno; 
function imprimirSoma(a, b){
    console.log( a + b)
}

imprimirSoma(5 , 3 ) // valores que serão somados pela função; 
imprimirSoma(2) // tem a possibildiade de passar somente um valor para função sem erro, porém retorna um numero indefinido;


//function com retorno;
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))


console.log(soma(2))

