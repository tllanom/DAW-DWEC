/*
4. Uso de condicionales
Escribe un programa que solicite un número al usuario y le indique si es posi<vo, nega<vo o cero.
*/

const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Dame un número: "));

if (num > 0) {
    console.log(`${num} es un número positivo.`);
} else if (num == 0) {
    console.log(`${num} es igual a cero.`);
} else if (num < 0) {
    console.log(`${num} es un número negativo.`);
} else {
    console.log(`Dato introducido no es un número.`);
}
