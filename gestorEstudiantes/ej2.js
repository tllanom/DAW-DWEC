const prompt = require('prompt-sync')();
//npm install prompt-sync

function Estudiante(nombre, edad, calificaciones) {
    this.nombre = nombre;
    this.edad = edad;
    this.calificaciones = calificaciones;
}

const lista = [];

function mostrarInfoEstudiante(Estudiante) {
    console.log(`\nEl/La estudiante se llama ${Estudiante.nombre}, tiene ${Estudiante.edad} años y ha recibido las siguientes calififaciones: ${Estudiante.calificaciones}.`);
}

function calcularPromedio(Estudiante) {
    let suma = Estudiante.calificaciones.reduce((acc, num) => acc + num, 0);
    let promedio = (suma/Estudiante.calificaciones.length).toFixed(2);
    console.log(`\nEl promedio de calificaciones de ${Estudiante.nombre} es de: `+promedio);
}

function agregarCalificacion(Estudiante, nuevaCalificacion) {
    Estudiante.calificaciones.push(nuevaCalificacion);
    console.log(`\n${Estudiante.nombre} ha recibido la nueva calificación de ${nuevaCalificacion}.\nCalculando el nuevo promedio...`)
    calcularPromedio(Estudiante);
}



const estudiante1 = new Estudiante("Juan", 20, [10, 8]);
lista.push(estudiante1);
const estudiante2 = new Estudiante("Luisa", 27, [8, 9, 6]);
lista.push(estudiante2);

/*
//Aquí a mano más rudimentario, antes de añadir el switch y su automatización:  
mostrarInfoEstudiante(estudiante1);
mostrarInfoEstudiante(estudiante2);

calcularPromedio(estudiante1);
calcularPromedio(estudiante2);

agregarCalificacion(estudiante1, 3);

mostrarInfoEstudiante(estudiante1);
*/



let opcion;
do {
    console.log("\nSeleccione una opción:");
    console.log("1. Mostrar estudiantes");
    console.log("2. Mostrar promedios");
    console.log("3. Agregar calificación");
    console.log("4. Añadir estudiante");
    console.log("5. Salir");

    opcion = parseInt(prompt("Opción: "));

    switch (opcion) {
        case 1:
            lista.forEach(Estudiante => mostrarInfoEstudiante(Estudiante));
            break;
        case 2:
            lista.forEach(Estudiante => calcularPromedio(Estudiante));
            break;
        case 3:
            lista.forEach((Estudiante, index) => console.log(`\n${index + 1}. ${Estudiante.nombre}`));
            let numero = parseInt(prompt('\nA qué estudiante quieres añadirle una calificación?(número): '));
            if (numero >= 1 && numero <= lista.length) {
                let nuevaCalificacion = parseFloat(prompt(`\nIntroduce la nueva calificación para ${lista[numero - 1].nombre}: `));
                    agregarCalificacion(lista[numero - 1], nuevaCalificacion);
            } else {
                console.log("Estudiante no encontrado.");
            }
            break;
        case 4:
            let nuevoNombre = (prompt('Nombre del estudiante: '));
            let nuevaEdad = parseInt(prompt('Edad del estudiante: '));
            let nuevaCalificacion = parseInt(prompt('Calificación del estudiante: '));
            const estudiante = new Estudiante(nuevoNombre, nuevaEdad, [nuevaCalificacion]);
            lista.push(estudiante);
            let masCalificaciones;
                do {
                    masCalificaciones = prompt('¿Deseas añadir otra calificación?(s/n): ').toLowerCase();
                    if (masCalificaciones === 's') {
                        let nuevaCalificacion = parseInt(prompt('Introduce otra calificación: '));
                    agregarCalificacion(estudiante, nuevaCalificacion);
                    }
                } while (masCalificaciones === 's');
            console.log('Estudiante creado!');
            break;
        case 5:
            console.log("¡Hasta luego!");
            break;
        default:
            console.log("Opción no válida. Por favor, intenta de nuevo.");
    }
} while (opcion !== 5);
