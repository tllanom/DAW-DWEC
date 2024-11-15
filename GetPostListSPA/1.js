/*
Parte 1: Obtener y mostrar tareas con GET
Realiza una solicitud GET para obtener una lista de tareas desde la siguiente API:
• URL: https://jsonplaceholder.typicode.com/todos
Los datos obtenidos son una lista de tareas.
Cada tarea tiene los siguientes campos:
• Título: El nombre de la tarea.
• Estado: Si la tarea está completada o no (campo completed).
Muestra las tareas en la página, indicando su titulo y si está completada o no.
Puedes usar una lista para mostrar las tareas.
*/

/*
Parte 2: Añadir tareas con POST
Crea un formulario en la página que permita al usuario ingresar un titulo para una nueva tarea.
Al enviar el formulario, los datos deben enviarse a la API mediante una solicitud POST.
Los datos a enviar serán:
• Título: El texto ingresado en el formulario.
• Estado: Siempre debe enviarse como false (es decir, la tarea no está completada al principio).
Después de enviar la tarea, muestra la tarea añadida en la página de forma dinámica.
*/

async function tareas(){
    try{
        let datos = await fetch("https://jsonplaceholder.typicode.com/todos");

        if (datos.ok){
            let tareas = await datos.json();
            const texto = document.getElementById("texto");
            texto.innerHTML = "";

            tareas.forEach(item => {
                const itemTarea = document.createElement("li")
                itemTarea.textContent = `"${item.title}"  -   ${item.completed ? "Completed" : "Not completed"}`;
                texto.appendChild(itemTarea);
            })
        } else{
            console.log("Ha ocurrido un error.");
        }
    } catch(error) {
        console.log("Error: ", error);
    }
}

async function anadirTareas(titulo, completado){
    try{
        let datos = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: titulo,
                completed: completado
            }),
        });
        
        if (datos.ok){
            let nuevaTarea = await datos.json();
            mostrarNuevaTarea(nuevaTarea);
            alert(`title '${nuevaTarea.title}'\nwith a/n ${nuevaTarea.completed ? "completed" : "incompleted"} status\nhas been added to the task list!`);
            console.log(nuevaTarea);
        } else {
            console.log("Ha ocurrido un error.");
        }
    } catch(error) {
        console.log("Error: ", error);
    }
}

function mostrarNuevaTarea(tarea){
    const texto = document.getElementById("texto");
    const itemTarea = document.createElement("li");
    itemTarea.textContent = `"${tarea.title}"  -   ${tarea.completed ? "Completed" : "Not completed"}`;
    texto.appendChild(itemTarea);
}

const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    
    const titulo = document.getElementById("masTareas").value;
    const completado = document.getElementById("checkbox").checked;

    anadirTareas(titulo, completado);


    document.getElementById("masTareas").value = "";
    document.getElementById("checkbox").checked = false;
})

//tareas()
//    .then((datos) => anadirTareas(datos))

tareas();