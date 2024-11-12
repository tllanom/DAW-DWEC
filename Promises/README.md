# Ejercicios Promesas

  1. **Ejercicio de Temporizador con Promesas:**
- Crea una función llamada temporizador que acepte un número de milisegundos como parámetro y devuelva una promesa. 
- La promesa debe resolverse después del tiempo especificado, imprimiendo un mensaje en la consola que indique que el temporizador ha finalizado. 
- Además, si se pasa un número negativo, la promesa debe ser rechazada con un mensaje de error adecuado. Utiliza then y catch para manejar los resultados y errores.

2. **Ejercicio de Encadenamiento de Promesas:**
- Diseña un programa que simule una secuencia de operaciones asincrónicas. Crea dos funciones, obtenerDatos y procesarDatos, que devuelvan promesas. 
- La función obtenerDatos debe resolver con un objeto de datos simulado después de 2 segundos, mientras que procesarDatos debe tomar esos datos y devolver un resultado modificado después de 1 segundo. 
- Encadena las promesas utilizando then y maneja cualquier error que pueda surgir usando catch. Asegúrate de imprimir los resultados en la consola.
