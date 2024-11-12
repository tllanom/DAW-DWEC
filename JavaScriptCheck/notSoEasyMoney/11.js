/*
11. Contar palabras en una cadena
Crea una función que reciba una cadena de texto y devuelva cuántas palabras tiene. Considera que las palabras están separadas por espacios.
*/

const prompt = require('prompt-sync')();

const cadena = prompt("Escribe una cadena y te cuento cuántas palabras la componen: ");

function cuentaCadenas(text){
    const newText = text.trim().split(/\s+/);
    const words = newText.length;
    return words;    
}

console.log(`La cadena '${cadena}' posee ${cuentaCadenas(cadena)} palabras.`);