/*
13. Factorial de un número
Crea una función que calcule el factorial de un número.
*/

const prompt = require('prompt-sync')();

const numero = parseInt(prompt('De qué número quieres calcular el factorial?: '));
if (numero < 0 || isNaN(numero)){
    console.log("El número debe ser igual o mayor a 0.");
    return;
}

function factorial(num){
    let total = 1;
    for(let i = num; i >= 1; i--){
        total *= i;
    }
    return total;
}

console.log(`${factorial(numero)}`);