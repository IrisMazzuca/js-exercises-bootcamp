// **Encontrar índice**

// - Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar el índice. El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, o indicar si no se ha encontrado. Ejemplo:

// ```javascript
// // Ingrese valores: 5 7 12 34 54 2 12
// // Ingrese valor a buscar: 12

// // El valor 12 se encuentra en el índice 2
// ```

// Una vez hecho este ejercicio, investigar el método `indexOf`.

const values = prompt("Ingrese los valores, separados por espacios:").split(" ");
const search = prompt("Ingrese el valor a buscar:");

// let index = -1;

// for (let i = 0; i < values.length; i++) {
//     if (values[i] == search) {
//         index = i;
//         break;
//     }
// }

let index = values.indexOf(search);

alert(`Lo encontré! el número ${search} está en el indice ${index}!`);

