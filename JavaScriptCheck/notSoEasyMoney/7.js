/*
7. Crear y modificar un objeto
Crea un objeto coche con las propiedades marca, modelo y año. Añade un método detalles que imprima una cadena con esa información.
Luego, modifica una de las propiedades del objeto.
*/

const prompt = require('prompt-sync')();

console.log("Vamos a crear el objeto coche, por favor rellena las siguientes propiedades.")
let marca = prompt("Marca: ");
let modelo = prompt("Modelo: ");
let ano = prompt("Año: ");

coche = {
    marca: marca,
    modelo: modelo,
    ano: ano,
    detalles: function() {
        //console.log(coche);
        console.log(`\nEl objeto coche es de la marca ${this.marca}, modelo ${this.modelo} y del año ${this.ano}.`)
    }
};

coche.detalles();

let opcion;
do{
    console.log("\nQuieres modificar una propiedad?\n1. Modificar Marca\n2. Modificar modelo\n3. Modificar año\n4. No<3");
    opcion = prompt("Elige una opción: ");

    switch (opcion){
        case "1":
            coche.marca = prompt("Qué nueva marca quieres añadir: ");
            coche.detalles();
            break;
        case "2":
            coche.modelo = prompt("Qué nueva modelo quieres añadir: ");
            coche.detalles();
            break;
        case "3":
            coche.ano = prompt("Qué nueva año quieres añadir: ");
            coche.detalles();
            break;
        case "4":
            console.log("Saliendo del menú.");
            break;
        default:
            console.log("Opción no disponible, por favor elige una opción válida.");
    }
} while ( opcion !== "4");


