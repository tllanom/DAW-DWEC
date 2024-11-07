/*
7. Encontrar el mayor de tres números
Crea una función que reciba tres números y devuelva el mayor de ellos.
*/

const prompt = require('prompt-sync')();

console.log("Introduce tres números y averiguaremos el mayor.")
const one = parseFloat(prompt("Introduce el primer número: "));
const two = parseFloat(prompt("Introduce el segundo número: "));
const three = parseFloat(prompt("Introduce el tercer número: "));

let array = [one, two, three];

function mayor (array) {
    console.log(Math.max(...array));
}

let max = mayor(array);

//or

let num = 0;
function mayorManual (array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] > num){
            num = array[i];
        }
    }
    console.log(`El mayor número dentro de [${array}] es ${num}.`);
}

let maxManual = mayorManual(array);

