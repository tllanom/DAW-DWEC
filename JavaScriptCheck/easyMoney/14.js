/*
14. Comprobar si una cadena es un palíndromo
Escribe una función que determine si una cadena es un palíndromo (se lee igual hacia adelante que hacia atrás).
*/

const prompt = require('prompt-sync')();

const cadena = prompt("Escribe una cadena y te digo si es palíndromo: ");

function palindromo(letritas){
    const limpia = letritas.replace(/\s+/g, '').toLowerCase();
    if (limpia.split('').reverse().join('') == limpia){
        console.log(`La cadena [${letritas}] es palíndromo!`)
    } else {
        console.log("Hoy no es tu día.")
    }
}

palindromo(cadena);