// **Menor número**

// - Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:

// ```javascript
// // Ingrese números: 5 7 99 34 54 2 12

// // El menor número es: 2
// ```

const numbers = prompt("Ingrese números separados por espacios").split(" ");

console.log(`Array números: ${numbers}`);

const numLength = numbers.length;

console.log(numLength);

let minNumber = Infinity;

const getMin = (numbers) => {
  
    for (let i = 0; i < numLength; i++) {
       minNumber = minNumber <= numbers[i] ? minNumber : numbers[i];
    }
    return minNumber;
}

getMin(numbers);

console.log(`El menor número es ${minNumber}`);

