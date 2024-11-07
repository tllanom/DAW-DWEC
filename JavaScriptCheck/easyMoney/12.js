/*
12. Encontrar el número más grande en un array
Crea una función que reciba un array de números y devuelva el número más grande.
*/

const prompt = require('prompt-sync')();

const numArray = parseInt(prompt("Cuántos números quieres añadir al array?: "));
console.log(`Ahora añade estos ${numArray} valores.`)
const array = []; 
for (i = 0; i < numArray; i++) {
    const number = parseFloat(prompt(`${i+1}a posición: `));
    array.push(number);
}

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