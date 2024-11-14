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

async function tareas(){
    try{
        let datos = await fetch("https://jsonplaceholder.typicode.com/todos");

        if (datos.ok){
            let tareas = await datos.json();
            const texto = document.getElementById("texto");
            tareas.forEach(item => {
                const itemTarea = document.createElement("li")
                itemTarea.textContent = `"${item.title}"  -   ${item.completed ? "Completed" : "Not completed"}`
                texto.appendChild(itemTarea);
            })
            console.log(tareas);
        } else{
            console.log("Ha ocurrido un error.");
        }
    } catch(error) {
        console.log("Error: ", error);
    }
}

tareas();