/*
10. Sumar los valores de un array de objetos
Escribe una función que reciba un array de objetos, cada uno con una propiedad valor.
La función debe devolver la suma de todos los valores.
*/

const objeto1 = {
    nombre: "objeto 1",
    valor: 10
};

const objeto2 = {
    nombre: "objeto 2",
    valor: 13
};

const objeto3 = {
    nombre: "objeto 3",
    valor: 8
};

array = [objeto1, objeto2, objeto3];

function sumaValores(arr){
    let arr2 = [];
    for (let obj of arr){
        arr2.push(obj.valor);
    }
    console.log(arr2);
    let suma = arr2.reduce((acc, num) => acc+num, 0);
    return suma;
}

console.log(objeto1, objeto2, objeto3);
console.log(`La suma de los valores de los objetos anteriores es de: ${sumaValores(array)}`);
