// ### **Ejercicio 10**

// - Tengo un array con arrays adentro
// - Tomando la idea del ejercicio 3, ¿cómo podemos implementar una solución que desde un array de arrays, me retorne un solo array con todos los elementos juntos?

// <details>
//   <summary>💡 Pista</summary>

//   ## Heading
//   1. Ya sabemos juntar dos arrays, para hacer varios deberíamos iterar con un for
//   2. Tenemos un array vacío inicialmente, y le vamos agregando (con spread operator) cada nuevo _sub_ array que iteramos
//   3. Entonces: inicializo array vacío, itero por el array de arrays, y agrego cada elemento al array anterior (como hicimos en el ejercicio 1). Cuando termino de iterar, en el array que inicialicé vacío, debería tener el array completo
// </details>

// ```js
const fraseEnPartes = [
  ['¡', 'Hola'],
  [',', ' ', 'Mundo'],
  ['!']
];

// const fraseCompleta = fraseEnPartes.flat()// ACA LA SOLUCION

const fraseCompleta = [...fraseEnPartes[0],...fraseEnPartes[1],...fraseEnPartes[2]];

console.log(fraseCompleta);
console.log( fraseCompleta.join('') ); // ¡Hola, Mundo!
// ```
