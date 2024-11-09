/*
9. Temporizadores con setTimeout
Escribe un programa que muestre un mensaje en la consola después de 3 segundos usando setTimeout.
*/

const prompt = require('prompt-sync')();

const mensaje = prompt("Qué quieres que tarde 3sec en escribirse?: ");

setTimeout(function(){

    console.log(mensaje);
}, 3000)