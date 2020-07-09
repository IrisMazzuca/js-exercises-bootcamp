// ## ⚙️ ** Ejercicio 6 **

// - Vamos a escribir un función`todosPares(arr)` que recibe un array de números
// - La función tiene que devolver una promesa
//  - `todosPares(arr)` tiene que:
// - Verificar que todos los números del array son pares
// - Si todos son pares, tenemos que ejecutar el método`resolve` con el texto "Todos los número son pares"
// - Si hay al menos un número que no es par, tenemos que ejecutar la función`reject` con el texto "No todos los números del array son pares"


const todosPares = async (arr) => {
  const promise = new Promise((resolve, reject) => {
    if (arr.every((num) => num % 2 === 0)) {
      resolve("Todos los números son pares");
    }
    reject("No todos los números del array son pares");
  });
  const result = await promise;
  return result;
};

const showResult = async (arr) => {
  console.log(await todosPares(arr))
}

showResult([2, 4, 6]);
showResult([2, 4, 9]);




// todosPares([2, 4, 6])
//   .then((res) => console.log(`Promesa resuelta: ${res} `))
//   .catch((err) => console.log(`Promesa con error: ${err} `));
// // Promesa resuelta: Todos los número son pares

// todosPares([2, 4, 7, 6])
//   .then((res) => console.log(`Promesa resuelta: ${res} `))
//   .catch((err) => console.log(`Promesa con error: ${err} `));
// // Promesa con error: No todos los números del array son pares
