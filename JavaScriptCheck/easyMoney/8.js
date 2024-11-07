/*
8. Recorrer un array de números
Crea un array de 5 números. Usa un bucle for para recorrer el array y mostrar cada número en la consola.
*/

const prompt = require('prompt-sync')();

console.log("Crea un array de 5 números.")
const one = parseFloat(prompt("Primer número: "));
const two = parseFloat(prompt("Segundo número: "));
const three = parseFloat(prompt("Tercer número: "));
const four = parseFloat(prompt("Cuarto número: "));
const five = parseFloat(prompt("Quinto número: "));

let array = [one, two, three, four, five];

for (i = 0; i <= array.length; i++){
    console.log(array[i]);
}