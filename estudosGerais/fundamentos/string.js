const escola  = 'Cod3r' //Tipo string ] cadeia de caracteres;

console.log(escola.charAt(4)) //Pega valores por indices;
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3)) //Retorna valor Unicode do caractere;

console.log(escola.indexOf('3')) //Retorna valor de acordo com a numeração do index;

console.log(escola.substring(1)) //A partir do indice 1 até ...

console.log(escola.substring(0, 3)) //Do indice 0 até ...

console.log('Escola '.concat(escola).concat("!")) //Contatenar variáveis;

console.log(escola.replace(3, 'e')) //Substituir valores;

console.log(escola.replace(/\d/, 'e')) //Substituir valores dentro da variável com REGEX;

console.log('Ana, Maria, Pedro'.split( ',')) //Converter string para array;

console.log('Ana, Maria, Pedro'.split( /./)) //Converter string para array com REGEX;
