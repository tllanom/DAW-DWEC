/*
6. Reduce para sumar elementos de un array
Crea una función que utilice el método reduce para sumar todos los elementos de un array.
*/

const prompt = require('prompt-sync')();

const num = parseInt(prompt("Cuántos valores quieres en tu array?: "));
let array = [];

for (let i = 0; i < num; i++){
    const whatever = parseFloat(prompt(`${i+1}a posición: `));
    array.push(whatever);
}
//console.log(...array);

function sumaReduce(arr){
    let suma = arr.reduce((acc, num) => acc+num, 0);
    return suma;
}

console.log(sumaReduce(array));