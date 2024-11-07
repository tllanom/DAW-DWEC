/*
9. Rever6r una cadena
Escribe una función que tome una cadena de texto como argumento y devuelva la cadena inver<da.
*/

const prompt = require('prompt-sync')();

const cadena = prompt("Escribe una cadena de texto y te la devuelvo invertida: ");

function invertir(whatever){
    return whatever.split('').reverse().join('');
}

console.log(invertir(cadena));
