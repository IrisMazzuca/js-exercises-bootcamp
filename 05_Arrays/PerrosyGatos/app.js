// **Perros y gatos**

// - Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado y los gatos por otro. Ejemplo:

// ```javascript
// // Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
// // Resultado: 🐶🐶🐶🐶🐱🐱🐱
// ```

/*
-Ingreso string 
-Convertirlo en array
-Recorrer el array
-Clasificar y hacer un push al array del animal que corresponda
-Juntar ambos arrays (merge)
*/

const animals = "🐶 🐱 🐶 🐱 🐱 🐶 🐶".split(" ");
const dogs = [];
const cats = [];

for (let i = 0; i < animals.length; i++) {
  if (animals[i] == "🐶") {
    dogs.push("🐶");
  } else {
    cats.push("🐱");
  }
}

const animalsConcat = dogs.concat(cats);
console.log(animalsConcat);