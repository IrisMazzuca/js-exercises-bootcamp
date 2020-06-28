// **Sam y Frodo**

// - Crear un programa que permita saber si Sam y Frodo están juntos. El programa debe permitir ingresar nombres separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después. Ejemplo:

// ```javascript
// // Ingresar nombres: Sam Frodo Legolas
// // Sam y Frodo están juntos, ¡Frodo está a salvo!

// // Ingresar nombres: Sam Orco Frodo
// // Sam y Frodo están separados, ¡Frodo está en peligro!
// ```

//array.indexOf(searchElement)

const names = prompt("Ingrese los nombres, incluya a Sam & Frodo:").split(" ");

console.log(`Nombres ingresados: ${names}`);

const arrayLength = names.length;

console.log(`Length: ${arrayLength}`);

let frodoIndex = names.indexOf("Frodo");
let samIndex = names.indexOf("Sam");

let status = '';

const isFrodoOk = () => {

  for(let i = 0; i < arrayLength; i++) {
    if ((names[i]==="Frodo" && names[i+1]==="Sam") || (names[i]==="Sam" && names[i+1]==="Frodo")) {
      console.log(
      `Sam y Frodo están juntos, ¡Frodo está a salvo!
      FrodoIndex: ${frodoIndex}
      SamIndex: ${samIndex}`);
      status = 'juntos';
    } 
  }
  if (status==='') {
    console.log(
    `Sam y Frodo están separados, ¡Frodo está en peligro!
    FrodoIndex: ${frodoIndex}
    SamIndex: ${samIndex}`);
  }
}

isFrodoOk();
