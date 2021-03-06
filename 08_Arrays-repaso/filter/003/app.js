// ## Ejercicio Array 003

// - Tenemos un array en una variable `numeros` con números al azar.
// - También tenemos dos arrays vacios en las dos variables `numerosPares` y `numerosImpares`.
// - Utilizando `filter` crear un nuevo array con todos los números pares y guardalo en la variable `numerosPares`
// - Utilizando `filter` crear un nuevo array con todos los números impares y guardalo en la variable `numerosImpares`

// ```js
const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// // codea acá tu solución
const numerosPares = masNumeros.filter(num => {
    return num % 2 == 0
});

const numerosImpares = masNumeros.filter(num => {
    return num % 2 != 0 
}); 

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// // deberias tener como resultado
// // pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// // impares: [43, 11, 37, 29, 9, 3, 37, 25]
// ```
