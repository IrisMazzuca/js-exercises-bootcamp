// **Contiene elementos**

// - Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea averiguar si existe. El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no. Ejemplo:

// ```javascript
// // Ingrese valores: 5 7 99 34 54 2 12
// // Ingrese valor a buscar: 54

// // El valor 54 se encuentra entre los valores originales
// ```

const numbers = prompt("Ingrese secuencia de números separados por espacios:").split(" ");

console.log(`Array números: ${numbers}`);

const arrayLength = numbers.length;

console.log(`Length: ${arrayLength}`);


const search = (numbers) => {

  const numberInput = prompt("Qué valor desea buscar?");

  for (let i = 0; i < arrayLength; i++) {

    if (numberInput === numbers[i]) {
      console.log(`El valor ${numberInput} se encuentra entre los valores originales`);
      break;
    }
   
  }
}

search(numbers);