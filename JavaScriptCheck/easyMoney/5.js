/*
5. Determinar si un número es par o impar
Crea una función que reciba un número como argumento y devuelva un mensaje indicando si es par o impar.
*/

const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Dame un número: "));

function isEven(number) {
    if (isNaN(number)) {
        console.log(`El dato no es numérico.`);
    } else if (number == 0) {
        console.log(`${number} es igual a cero.`);
    } else if (number % 2 == 0){
        console.log(`${number} es par.`);
    } else {
        console.log(`${number} es impar.`);
    }
}

const one = isEven(num);