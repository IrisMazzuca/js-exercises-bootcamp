// ### **Ejercicio 7**

// - ¿Cómo podríamos mejorar la siguiente función utilizando destructuring?
// - La función de la solución tiene que ser también una arrow function de una sola línea

// ```js
const calcularArea = (triangulo) => {
 const {
    a : ladoA,
    b : ladoB,
    c : ladoC,
  } = triangulo;

 return ladoA + ladoB + ladoC;
}

// // ejemplos de uso
const triangulo1 = { a: 3, b: 5, c: 7 };
const triangulo2 = { a: 8, b: 2, c: 3 };

console.log( calcularArea(triangulo1) ); // 15
console.log( calcularArea(triangulo2) ); // 13
// ```