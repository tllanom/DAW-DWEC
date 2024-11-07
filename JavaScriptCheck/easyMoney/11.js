/*
11. Sumar los números de un array
Crea una función que reciba un array de números y devuelva la suma de todos los elementos.
*/

const prompt = require('prompt-sync')();

const numArray = parseInt(prompt("Cuántos números quieres añadir al array?: "));
console.log(`Ahora añade estos ${numArray} valores.`)
const array = []; 
for (i = 0; i < numArray; i++) {
    const number = parseFloat(prompt(`${i+1}a posición: `));
    array.push(number);
}
//console.log(...array);

function sumaArray(array){
    let total = 0;
    for (i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}

console.log(`La suma de todos los valores de [${array}] es de ${sumaArray(array)}.`);