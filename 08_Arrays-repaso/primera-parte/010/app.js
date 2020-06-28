// ## Ejercicio Array 010

// - Partiendo del siguiente array de números `const numeros = [6, 1, 2, 3, 4, 5];`
// - Eliminar el primer elemento, y agregarlo al final del array.
// - Mostrar el resultado final.
// - Resultado esperado

// ```bash
// [1, 2, 3, 4, 5, 6]
// ```

const numeros = [6, 1, 2, 3, 4, 5];

numeros.push(numeros[0]);
numeros.shift();
console.log(numeros);