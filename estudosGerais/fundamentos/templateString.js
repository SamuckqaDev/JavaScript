const nome = 'Rebeca' //Valor da variável;

const concatenacao = 'Olá ' + nome + '!'  //Concatenação, mas desconfortável;

const tempalte = `Olá ${nome} como vai ?` //Template string, elegante e considera a variável;

//EXPRESSOES;

console.log(`1 + 1 = ${1+1}`)//Template possibilita soma de valores dentro de chaves, como se fossem variáveis;


const up = texto =>texto.toUpperCase() //arrow function que permite atribuir valores a variáveis com função 'toUpperCase' = TODAS AS LETRAS MAIUSCULAS;

console.log(`Ei ... ${up('cuidado')} !`)

console.log(concatenacao)

console.log(tempalte)