/*
2. Buscar un elemento en un array de objetos
Escribe una función que reciba un array de objetos y un valor. 
Debe buscar en el array un objeto que tenga una propiedad igual al valor dado, y devolver el objeto si lo encuentra, o null si no.
*/

const prompt = require('prompt-sync')();

const adivina = prompt("Intenta adivinar un valor dentro del array de objetos: ");


let persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};

let persona2 = {
    nombre: 'Maria',
    edad: 31,
    ciudad: 'ciudad feliz'
};

let array = [persona, persona2];

function buscarValor(arr, valor) {
    for (let i = 0; i < arr.length; i++){
        for (let prop in arr[i]){
            if (arr[i][prop] == valor){
                console.log(`Valor encontrado en el objeto: `);
                return arr[i];
            }
        }
    }
    return null;
}

const resultado = buscarValor(array, adivina);
console.log(resultado);