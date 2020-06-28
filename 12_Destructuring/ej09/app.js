// ### **Ejercicio 9**

// - Crear una una arrow function llamada `estaVacio` que recibe un array y retornar true si no tiene ningún elemento, o false si tiene algún elemento
// - Es necesario utilizar destructuring y no hacer uso de la propiedad length de los arrays.

// ```js
const estaVacio = (array) => {
  if (array[0] === undefined) {
    return true;
  } else {
    return false;
  }
}; // aca la solucion

console.log(estaVacio([]));
 //=> true

console.log(estaVacio([0]));
 //=> false

console.log(estaVacio([[]]));
 //=> false
// ```

// - 💡 Pista: cuando intento hacer destructuring sobre elementos que no existen, obtengo undefined