# Ejercicio: Formulario
Crear un formulario utilizando HTML, CSS y JavaScript que capture información de un usuario, valide los datos antes de enviarlos, y aplique estilos modernos para mejorar la usabilidad y la presentación visual.

**Campos del formulario:**

- Nombre completo (obligatorio, mínimo 3 caracteres).
- Correo electrónico (obligatorio, con validación de formato de correo).
- Número de teléfono (opcional, con validación para que solo acepte números).
- Fecha de nacimiento (obligatorio).
- Selección de género (radio buttons).
- Selección de país (desplegable con al menos 3 opciones).
- Checkbox de aceptación de términos y condiciones (obligatorio).

**Validaciones en JavaScript:**

- Todos los campos obligatorios deben completarse antes de enviar el formulario.
- El campo de correo electrónico debe tener el formato correcto (e.g. usuario@dominio.com).
- El campo de teléfono debe permitir solo números.
- El checkbox de aceptación de términos debe estar marcado.

**Estilos en CSS:**

- Añadir estilos básicos para el formulario, con márgenes, espaciado interno (padding), bordes redondeados y colores para que el formulario sea visualmente atractivo.
- Cambiar el color del botón de envío cuando el usuario pase el cursor por encima (hover).
- Marcar los campos obligatorios que falten por rellenar con un borde rojo si se intenta enviar sin completar.

**Interactividad:**

- Utilizar eventos JavaScript para mostrar mensajes de error si los datos no son válidos (por ejemplo, debajo de cada campo correspondiente).
- Limpiar el formulario después de un envío exitoso.

**Criterios de evaluación:**

- La solución debe incluir un archivo HTML con el formulario estructurado correctamente.
- El archivo CSS debe contener los estilos aplicados al formulario y a sus elementos (botones, campos de entrada, etiquetas).
- El archivo JavaScript debe manejar las validaciones y la lógica de envío del formulario.
