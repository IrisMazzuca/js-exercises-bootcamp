// **Tragamonedas**

// - Crear un programa que permita ingresar un conjunto de 5 símbolos y determine si son iguales. Si lo son, mostrar un mensaje indicando que se ha ganado. Si se ingresan más de 5 sólo deben evaluarse los primeros 5. Ejemplo:

// ```javascript
// // Ingrese símbolos: ⭐️⭐️⭐️💫✨
// // ¡Has perdido! Inténtalo nuevamente

// // Ingrese símbolos: 💫💫💫💫💫
// // ¡Felicitaciones! Has ganado
// ```

const symbols = prompt("Ingrese un conjunto de 5 símbolos, separados por espacios:").split(" ");

console.log(symbols);

console.log(typeof symbols[0]);

// if (symbols[0] == symbols[1] 
//   && symbols[1] == symbols[2]
//   && symbols[2] == symbols[3]
//   && symbols[3] == symbols[4]) {
//   console.log("¡Felicitaciones! Has ganado");
// } else {
//   console.log("¡Has perdido! Inténtalo nuevamente");
// }

let winner = true;
for (let i = 1; i<5; i++) {
  if(symbols[0] !== symbols[i]) {
    winner = false;
    break;
  }
}

alert(winner?"Has Ganado!":"Has Perdido!");