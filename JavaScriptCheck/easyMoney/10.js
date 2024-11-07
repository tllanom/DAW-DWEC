/*
10. Contar las vocales de una cadena
Crea una función que reciba una cadena y cuente cuántas vocales tiene.
*/

const prompt = require('prompt-sync')();

const cadena = prompt("Escribe algo y te devuelvo el número de vocales que contenga: ")

arr = cadena.split('');
num = 0
for (i = 0; i <= arr.length; i++){
    if (arr[i] == 'a' || arr[i] == 'e' || arr[i] ==  'i' || arr[i] ==  'o' || arr[i] ==  'u'){
        num += 1;
    }
}
console.log(`La cadena escrita '${cadena}' contiene ${num} vocales.`);