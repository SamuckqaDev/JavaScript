let isAtivo = false //variável com valor literal false;
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 //Numeral tbm serve para retornar valor booleano  0 = false && 1 = true;
console.log(!!isAtivo) //Colocar negação 2 vezes '!!' para reconhecer valor como boolean;

console.log('Os verdadeiros ...')
console.log(!!3)//verdadeiro;
console.log(!!-1)//verdadeiro;
console.log(!!'')//verdadeiro;
console.log(!![])//false pq o array ta vazio;
console.log(!!Infinity) //verdadeiro;
console.log(!!(isAtivo == true))


console.log('Os falsos ... ')
console.log(!!0)//false;
console.log(!!'')//false;
console.log(!null)//false;
console.log(!!NaN)//false;
console.log(!!undefined)//false;
console.log(!!(isAtivo == false))//false;


console.log('pra finalizar...')
console.log(  !! ('' || null || 0 || 'epa'))