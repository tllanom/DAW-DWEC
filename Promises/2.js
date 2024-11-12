/*
2. Ejercicio de Encadenamiento de Promesas: 
Diseña un programa que simule una secuencia de operaciones asincrónicas. Crea dos funciones, obtenerDatos y procesarDatos, que devuelvan promesas. 
La función obtenerDatos debe resolver con un objeto de datos simulado después de 2 segundos, mientras que procesarDatos debe tomar esos datos
y devolver un resultado modificado después de 1 segundo. 
Encadena las promesas utilizando then y maneja cualquier error que pueda surgir usando catch. Asegúrate de imprimir los resultados en la consola.
*/

const prompt = require('prompt-sync')();

function obtenerDatos(){
    let nombre = prompt("Cuál es tu nombre?: ");
    let edad = parseInt(prompt("Y tu edad?: "));
    
    let obj = {
        nombre: nombre,
        edad: edad
    };

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(!nombre || isNaN(edad)){
                reject("Datos introducidos están incompletos o son incorrectos.");         
            } else {                
                resolve(obj);
            };
        }, 2000);
    });
}

function procesarDatos(obj){
    let nuevaEdad = parseInt(prompt("Cambia la edad: "));

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(isNaN(nuevaEdad)){
                reject("Nueva edad está incompleta o es incorrecta.");
            } else {
                obj.edad = nuevaEdad;
                resolve(`\nObjeto editado ha sido: \n[nombre: ${obj.nombre}, edad: ${obj.edad}]`);
            };
        }, 1000)
    });
}

obtenerDatos()
    .then((obj) => procesarDatos(obj))
    .then((message) => console.log(message))
    .catch((message) => console.log(message));

