/*
1. Contar la frecuencia de caracteres en una cadena
Escribe una función que tome una cadena como argumento y devuelva un objeto donde las claves sean los caracteres de la cadena y 
los valores sean la cantidad de veces que aparece cada carácter.
*/

const prompt = require('prompt-sync')();

const cadena = prompt("Escribe una cadena de caracteres: ");


function devolucionObjeto(array){
    let objeto = {};

    for (let caracter of array){
        objeto[caracter] = (objeto[caracter] || 0) + 1;
    }
    return objeto;
}

console.log(devolucionObjeto(cadena));