# Ejercicio: Gestionando tareas con Fetch (GET y POST)
El objetivo de este ejercicio es practicar cómo hacer peticiones GET y POST usando la API de fetch() en JavaScript para interactuar con una API que maneja una lista de tareas. 

Vas a trabajar con una API pública para realizar las siguientes tareas:
- Obtener y mostrar tareas con una solicitud GET.
- Añadir nuevas tareas con una solicitud POST.

**Deberás completar las siguientes actividades en el archivo index.html:**

## **1. Obtener y mostrar tareas con GET**

Realiza una solicitud GET para obtener una lista de tareas desde la siguiente API:
  - URL: https://jsonplaceholder.typicode.com/todos

  Los datos obtenidos son una lista de tareas.
  Cada tarea tiene los siguientes campos:
- Título: El nombre de la tarea.
- Estado: Si la tarea está completada o no (campo completed).

 Muestra las tareas en la página, indicando su título y si está completada o no.

 Puedes usar una lista para mostrar las tareas.

## **2. Añadir tareas con POST**

Crea un formulario en la página que permita al usuario ingresar un título para una nueva tarea.

Al enviar el formulario, los datos deben enviarse a la API mediante una solicitud POST.

Los datos a enviar serán:
- Título: El texto ingresado en el formulario.
- Estado: Siempre debe enviarse como false (es decir, la tarea no está completada al principio).

Después de enviar la tarea, muestra la tarea añadida en la página de forma dinámica.
