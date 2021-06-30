let valor //Não inicializada = 'undefined';
console.log(valor)

valor = null //variável com valor 'null' = 'ausencia de valor';
console.log(valor)
// console.log(valor.toString()) //não a possibiliadde acessar valores que são referenciados de maneira alguma 'ERRO!';

const produto = {}

console.log(produto.preco)
console.log(produto)


produto.preco = 3.50
console.log(produto.preco)

produto.preco == undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)