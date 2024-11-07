/*
2. Operaciones matemáticas simples
Escribe un programa que tome dos números como entrada y muestre en consola su suma, resta, multiplicación y división.

&

3. Calculadora básica con funciones
Crea cuatro funciones: sumar(), restar(), mul<plicar(), y dividir(), que tomen dos argumentos y devuelvan el resultado de la operación correspondiente.
Después, prueba estas funciones con diferentes valores.
*/

const prompt = require('prompt-sync')();

function suma(a, b){
    return a + b;
}
function resta(a, b){
    return a - b;
}
function multi(a, b){
    return a * b;
}
function div(a, b){
    return a / b;
}

let num1 = parseFloat(prompt("Ingresa el primer número: "));
let num2 = parseFloat(prompt("Ingresa el segundo número: "));

one = suma(num1, num2).toFixed(2);
two = resta(num1, num2).toFixed(2);
three = multi(num1, num2).toFixed(2);
four = div(num1, num2).toFixed(2);

console.log(`${num1} + ${num2} = ${one}`);
console.log(`${num1} - ${num2} = ${two}`);
console.log(`${num1} * ${num2} = ${three}`);
console.log(`${num1} / ${num2} = ${four}`);