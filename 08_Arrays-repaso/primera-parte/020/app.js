// ## Ejercicio Array 020

// - Tenemos un array en una variable `masNumeros` con números al azar.
// - También tenemos dos arrays vacios en las dos variables `numerosPares` y `numerosImpares`.
// - Recorré el array `masNumeros` y:
//   - Si el número es par, agregalo al array `numerosPares`
//   - Si el número es impar, agregalo al array `numerosImpares`
// - Por ejemplo: Si tenemos `[7, 8, 9, 10]`, `numerosPares` quedaría `[8, 10]` y `numerosImpares` quedaría `[7, 9]`

// ```js
const masNumeros = [
  43,
  11,
  18,
  46,
  44,
  37,
  42,
  29,
  9,
  3,
  37,
  0,
  40,
  10,
  38,
  34,
  25,
  40,
  4,
  32,
];
const numerosPares = [];
const numerosImpares = [];

for (let i = 0; i < masNumeros.length; i++) {  
    (masNumeros[i]%2) ? numerosImpares.push(masNumeros[i]) : numerosPares.push(masNumeros[i]);
}

// // SOLUCION

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// // deberias tener como resultado
// // pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// // impares: [43, 11, 37, 29, 9, 3, 37, 25]
// ```
