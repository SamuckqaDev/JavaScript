const valores = [7.7, 8.9, 6.3, 9.2] //variável com mais de um valor = array;

console.log(valores[0], valores[3]) //exibir valor por indices;
console.log(valores[4]) //Não tem a possiblidade de acessar valores inexistentes, porém com js não retorna erro pausando o código;


valores[4] = 10

console.log(valores)


console.log(valores.length) //acessar quantidade de elemtios dentro de array;

valores.push({id: 34}, false, null, 'teste')//push = inseirr valores;
console.log(valores)

console.log(valores.pop()) //retorna o ultimo valor do Array;

delete valores[0] //Remover valor do array pelo indice;
console.log(valores)



console.log(typeof valores) //Mostrar qual o tipo do 'array = object';