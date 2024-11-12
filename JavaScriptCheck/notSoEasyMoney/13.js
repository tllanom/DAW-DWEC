/*
13. Contar elementos en un array
Escribe una función que reciba un array de números y devuelva un objeto que cuente cuántas veces aparece cada número.
*/

const prompt = require('prompt-sync')();

const num = parseInt(prompt("Cuántos valores quieres en tu array?: "));
let array = [];

for (let i = 0; i < num; i++){
    const whatever = parseFloat(prompt(`${i+1}a posición: `));
    array.push(whatever);
}
//console.log(...array);

function contarNumeritos(arr){
    let frecuencia = {}; 
    for (let num of arr){
        frecuencia[num] = (frecuencia[num]|| 0) + 1;
    }
    return frecuencia;
}

console.log(contarNumeritos(array));