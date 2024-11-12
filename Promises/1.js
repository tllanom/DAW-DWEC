/*
1. Ejercicio de Temporizador con Promesas: 
Crea una función llamada temporizador que acepte un número de milisegundos como parámetro y devuelva una promesa. 
La promesa debe resolverse después del tiempo especificado, imprimiendo un mensaje en la consola que indique que el temporizador ha finalizado. 
Además, si se pasa un número negativo, la promesa debe ser rechazada con un mensaje de error adecuado. Utiliza then y catch para manejar los resultados y errores.
*/

const prompt = require('prompt-sync')();

const number = parseInt(prompt("Introduce en ms el tiempo de cuenta atrás: "));

function temporizador(time){
    return new Promise(function(resolve, error){
        if (time >= 0){
            setTimeout(function(){
                resolve(`\nEl temporizador de ${(time/1000)} segundo(s) ha finalizado!`);
            }, time);
        } else {
            error("\nEl número introducido no es válido para un temporizador.");
        }        
    });
}

temporizador(number)
    .then((exito) => console.log(exito))
    .catch((noExito) => console.log(noExito));