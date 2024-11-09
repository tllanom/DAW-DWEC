/*
4. Filtros en arrays
Escribe una función que reciba un array de números y devuelva un un nuevo array con solo los números pares.
*/
const prompt = require('prompt-sync')();

const num = parseInt(prompt("Cuántos valores quieres en tu array?: "));
let array = [];

for (let i = 0; i < num; i++){
    const whatever = parseFloat(prompt(`${i+1}a posición: `));
    array.push(whatever);
}
//console.log(...array);

function pares(arr) {
    let array2 = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            array2.push(arr[i]);
        }
    }
    return array2;
}

console.log(`Del array recibido([${array}]), aquí tienes uno nuevo solo con los números pares: [${pares(array)}]`);