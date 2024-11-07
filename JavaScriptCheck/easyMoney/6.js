/*
6. Sumar los primeros 100 números
Escribe un programa que calcule la suma de los primeros 100 números enteros (del 1 al 100).
*/

let suma = 0;

for (i = 1; i <= 100; i++) {
    suma += i;
}

console.log(`${suma} es la suma de los primeros 100 números enteros.`);