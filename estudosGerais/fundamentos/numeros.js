const peso1 = 1.1 //valor de ponto flutuante;
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao1 * peso2

const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //toFixed = usado para definir quantidade de casas decimais a serem exibidas;
console.log(media.toString(2))//exibe número em binário;

console.log(typeof media)
console.log(typeof Number) //Number com 'N' = função | 'n' = tipo de dado;