
// ### **Ejercicio 7**

// - Escribir una arrow function llamada `agregarNumeroAlArray`, que recibe un número como primer parámetro y un array como segundo parámetro
// - Utilizando spread operator, la función tiene que retornar un array conteniendo los números del array pasado por parámetro y concatenarle al final el nuevo número.
// - Utilizar Spread Operator

const num = 1;
const array = [4,5,6];

const agregarNumeroAlArray = (num, array) => {
    const newArray = [...array, num];
    return newArray;
}

console.log(agregarNumeroAlArray(num, array));

// ```js
// // ejemplo de uso
// console.log( agregarNumeroAlArray(1, [6, 19]) ) // [6, 19, 1]
// console.log( agregarNumeroAlArray(4, [1, 2, 3]) ) // [1, 2, 3, 4]
// ```

