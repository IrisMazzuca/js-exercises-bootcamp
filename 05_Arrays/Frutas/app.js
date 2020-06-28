// **Frutas**

// - Crear un programa que pida ingresar 🍎, 🍐y 🍑 y devuelva un mensaje con la cantidad que hay de cada una. Ejemplo:

// ```
// // Ingrese frutas: 🍎🍎🍐🍑🍎🍑

// // Hay 3 🍎, 1 🍐 y 2 🍑
// ```

const fruits = prompt("Ingrese las frutas 🍎🍐🍑").split(" ");

let fruitsList = [];
let fruitCounter = [];

for (let i = 0; i < fruits.length; i++) {
  let fruitsIndex = fruitsList.indexOf(fruits[i]);

  if (fruitsIndex === -1) {
    fruitsList.push(fruits[i]);
    fruitCounter.push(1);
  } else {
    fruitCounter[fruitsIndex]++;
  }
}

console.log(fruitsList, fruitCounter)