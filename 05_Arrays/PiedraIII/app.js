// **Piedra, papel, tijera III**

// - Crear un programa que permita ingresar el nombre de dos jugadoras y dos listas con los valores de la jugada en una ronda de "piedra, papel o tijera". Primero debe preguntarse el nombre de la jugadora 1, luego sus jugadas, luego el nombre de la jugadora 2, luego sus jugadas. El programa debe comparar los valores de las listas uno a uno (el primero con el primero, el segundo con el segundo) sumando un punto a la jugadora que gane la ronda. Al finalizar, mostrar quién gano y los puntajes finales. Ejemplo:

// ```javascript
// // Ingrese nombre jugadora 1: Ada
// // Ingrese jugadas de Ada: piedra papel papel piedra tijera

// // Ingrese nombre jugadora 2: Grace
// // Ingrese puntajes de Grace: papel piedra tijera tijera papel

// // Resultado: 3 (Ada) vs 2 (Grace)
// // Ganadora: Ada
// ```

const namePlayer1 = prompt("Ingrese nombre de la jugadora 1");
const inputsPlayer1 = prompt("Ingrese sus jugadas").split(" ");

const namePlayer2 = prompt("Ingrese nombre de la jugadora 2");
const inputsPlayer2 = prompt("Ingrese sus jugadas").split(" ");

// const namePlayer1 = "Iris";
// const inputsPlayer1 = "piedra papel tijera";

// const namePlayer2 = "Juan";
// const inputsPlayer2 = "papel papel papel";

let points1 = 0;
let points2 = 0;

const game = (inputsPlayer1, inputsPlayer2) => {
    if (inputsPlayer1 == inputsPlayer2) {
        return "empate";
    }
    const winPlayer1 = (inputsPlayer1 == "piedra") && (inputsPlayer2 == "tijera") || (inputsPlayer1 == "tijera") && (inputsPlayer2 == "papel") || (inputsPlayer1 == "papel") && (inputsPlayer2 == "piedra")

    if (winPlayer1) {
        points1++;
    } else {
        points2++;
    }
}

if (inputsPlayer1.length == inputsPlayer2.length) {
    for (let i = 0; i < inputsPlayer1.length; i++) {
        game(inputsPlayer1[i], inputsPlayer2[i]);

        alert(`Jugada número ${i+1}: Jugadas de ${namePlayer1}: ${inputsPlayer1[i]} - Jugadas de ${namePlayer2}: ${inputsPlayer2[i]}`);

        alert(`Puntajes: ${namePlayer1}: ${points1} - ${namePlayer2}: ${points2} `)
    }
} else {
    alert('Error! Ingrese la misma cantidad de jugadas!')
}

