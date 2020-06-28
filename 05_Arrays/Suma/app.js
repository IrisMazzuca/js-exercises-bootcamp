// **Suma de todos los números**

// - Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números. Ejemplo:

// ```javascript
// // Ingrese números: 5 7 10 12 24

// // La suma de todos los números es: 58
// ```

const numbers = prompt("Ingrese serie de números sepadados por espacios:").split(" ");

console.log(`Array ingresado: ${numbers}`);

const numLength = numbers.length;

console.log(`Length: ${numLength}`);

let totalSum = 0;

const getSum = (numbers) => {

  for (let i = 0; i < numLength; i++) {
    totalSum = totalSum + parseInt(numbers[i]);
  }
  return  totalSum;
}

getSum(numbers);

console.log(`La suma de todos los números es: ${totalSum}`);