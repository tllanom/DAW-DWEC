/*
5. Mapear un array de objetos
Escribe una función que reciba un array de objetos (por ejemplo, con propiedades nombre y edad) y devuelva un nuevo array con solo los nombres.
*/

let persona = {
    nombre: 'Juan',
    edad: 30
};

let persona2 = {
    nombre: 'Maria',
    edad: 31
};

let array = [persona, persona2];

function soloNombres(arr){
    arr2 = [];

    for (let obj of arr) {
        arr2.push(obj.nombre);
    }
    return arr2;
}

console.log(soloNombres(array));