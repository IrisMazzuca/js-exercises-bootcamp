// **Saludos**

// - Crear un programa que pida ingresar nombres separados por espacios y devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:

// ```javascript
// // Ingrese nombres: Ada Greta Grace

// // ¡Hola Ada!
// // ¡Hola Greta!
// // ¡Hola Grace!
// ```

// const namesFuntion = () => {
//     let names = [];
//     let i = 0;
//     for (i = 0; i < 3; i++) {
//         let x = prompt(`Ingresa un nombre:`, " ");
//         names[i] = x;
//     } 
//     alert(`${names}`);
// }; 

// namesFuntion();

const namesPrompt =prompt("Ingrese tres nombres separados por espacios:");
const names = namesPrompt.split(" ");


alert(`${names}`);
alert(`Hola ${names[0]}!`);
alert(`Hola ${names[1]}!`);
alert(`Hola ${names[2]}!`);