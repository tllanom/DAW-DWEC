/*
12. Uso de every y some
Escribe dos funciones que usen every y some. La primera debe verificar si todos los números de un array son pares, y la segunda si al menos uno es par.
*/

const prompt = require('prompt-sync')();

const num = parseInt(prompt("Cuántos valores quieres en tu array?: "));
let array = [];

for (let i = 0; i < num; i++){
    const whatever = parseFloat(prompt(`${i+1}a posición: `));
    array.push(whatever);
}
//console.log(...array);

function todoPar(arr){
    return arr.every(num => num % 2 == 0);
}

function algunPar(arr){
    return arr.some(num => num % 2 == 0);
}

console.log(`Are all numbers on array [${array}] even?: ${todoPar(array)}`);
console.log(`Is there at least one number on array [${array}] even?: ${algunPar(array)}`);