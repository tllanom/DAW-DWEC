/*
3. Ordenar un array de números
Crea una función que tome un array de números y lo devuelva ordenado de menor a mayor.
*/

const prompt = require('prompt-sync')();

const num = parseInt(prompt("Cuántos valores quieres en tu array?: "));
let array = [];

for (let i = 0; i < num; i++){
    const whatever = parseFloat(prompt(`${i+1}a posición: `));
    array.push(whatever);
}
//console.log(...array);

function orden(arr){
    return arr.sort((a, b) => a - b);
}

console.log(`Has introducido [${array}], pero ordenado de menor a mayor es: [${orden(array)}]`);