/* 
**💵 Cajero**
- Crear un programa que muestre el dinero inicial, y que permita retirar dinero preguntando cuánto se desea retirar, y mostrando el dinero restante a continuación. Si se intenta retirar más dinero del disponible, o no cuenta con dinero disponible, debe mostrar un mensaje alertándolo e impedir seguir retirando.
*/

// let availableMoney = 5000;

// const showMoney = () => {
//     alert(`el dinero disponible es ${availableMoney}`);
// };

// const takeMoney = (quantity) => {

//     const aux = availableMoney - quantity;
//     if (aux < 0) {
//         alert("Te quedaste sin dinero");
//     }else { 
//         availableMoney = aux;
//         showMoney();
//     }
// };

 
//**Número par o impar**
//Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor ingresado es par o impar.

// number = prompt('Ingrese un número');

// const isOdd = () => {
   
//     if ((number % 2) == 1) {
//         alert("Es un número impar");
//     }else {
//         alert("Es un número par");
//     }
// };

// isOdd(number);

//**A qué generación pertenece**
//- Crear un programa que pida al usuario ingresar su año de nacimiento y mostrar en un mensaje a que generación pertenece (baby boomer, gen y, millenial, centennial, o ninguna de ellas).


// const generation = (year) => {

//     if (year >= 1949 && year <= 1968) {
//         alert('Ud pertenece a la Generación Baby Boom');
//     } else if (year >= 1969 && year <= 1980) {
//         alert('Ud pertenece a la Generación X');
//     } else if (year >= 1981 && year <= 1993) {
//         alert('Ud es Millennial');
//     } else {
//         alert('Ud pertenece a la Generación Z');
//     }
// };
// year = prompt('Ingrese su año de nacimiento');
// generation(year);

// Días del mes
//- Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.


// const monthsDays = (month) => {
//     if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//         alert('El mes seleccionado tiene 31 días');
//     } else if (month == 2) {
//         alert('Febrero tiene 28 días, pero en años bisiesto tiene 29 días');
//     } else {
//         alert('El mes seleccionado tiene 30 días');
//     }
// };

// month = prompt("Ingrese el número del mes. Ejemplo: si elige 'junio', ingrese '6'.");
// monthsDays(month);


// Examen aprobado
//- Crear un programa que pida al usuario ingresar la nota un examen y mostrar en un mensaje si el examen está aprobado, si debe recuperar o es un aplazo. Si la nota es mayor a 7 aprueba, si es mayor a 4 recupera y si es menor a 4 es un aplazo.

// const exam = (grade) => {
//     if (grade >= 7) {
//         alert('Está aprobado!');
//     } else if (grade <= 4) {
//         alert('Está aplazado!');
//     } else {
//         alert('Tenés que recuperar!');
//     }
// }

// grade = prompt('Ingrese su nota aquí:');
// exam(grade);


// Grupo de letras
//- Crear un programa que pida al usuario ingresar una letra y mostrar en un mensaje a qué grupo pertenece.
// - grupo A = {a, e, i, o ,u}
// - grupo B = {b, c, d, f, g}
// - grupo C = {h, j, k , l, m}
// - grupo D = {n, p, q, r}
// - grupo E = {s, t, v, w, x, y, z}

// const letterGroup = (letter) => {
//     if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
//         alert('Es una vocal');
//     } else  {
//         alert('Es una consonante');
//     }
// }

// letter = prompt('Ingrese una letra');
// letterGroup(letter);




// Piedra, papel o tijera

//- Crear un programa que permita ingresar al jugador piedra, papel o tijera, genere de forma aleatoria la jugada de la computadora, y muestre en un mensaje quién ganó, con las jugadas respectivas.

// const getRandomOption = () => {
//     const player2 = Math.random();

//     if (player2 <= 0.33) {
//         return 'piedra';
//     } else if ( player2 <= 0.66) {
//         return 'tijera';
//     } else {
//         return 'papel';
//     }
// };

// const game = (player1,player2) => {
//     if(!player2){
//         player2=getRandomOption();
//         console.log(player2);
//     }
//     if (player1 == player2){
//         alert("Empate");
//     } else if ((player1 == "piedra" && player2 == "papel") || (player1 == "papel" && player2 == "tijera")||(player1 == "tijera" && player2 == "piedra")) {
//         alert("Gano el jugador 2");
//     } else if ((player1 == "piedra" && player2 == "tijera") || (player1 == "papel" && player2 == "piedra")||(player1 == "tijera" && player2 == "papel")) {
//         alert("Gano el jugador 1");
//     }
//     alert(`jugador 1: ${player1} pc: ${player2}`);
// }

// player1 = prompt('Ingrese piedra ✊, papel 🤚 o tijera ✌️');
// game(player1);


// Simón dice
//- Crear un programa que muestre una secuencia de 5 nombres de colores en orden aleatorio. Los colores posibles son 4: rojo, verde, azul y amarillo. Pedir luego ingresar 5 colores uno por uno, y mostrar al finalizar si acertó la secuencia.

// const getRandomColor1 = () => {
//     const colorSimon1 = Math.round(Math.random()*3+1);

//     if (colorSimon1 == 1) {
//         return 'rojo';
//     } else if (colorSimon1 == 2) {
//         return 'azul';
//     } else if (colorSimon1 == 3) {
//         return 'verde';
//     } else {
//         return 'amarillo'
//     }
// }

// const getRandomColor2 = () => {
//     const colorSimon2 = Math.round(Math.random()*3+1);

//     if (colorSimon2 == 1) {
//         return 'rojo';
//     } else if (colorSimon2 == 2) {
//         return 'azul';
//     } else if (colorSimon2 == 3) {
//         return 'verde';
//     } else {
//         return 'amarillo'
//     }
// }

// const getRandomColor3 = () => {
//     const colorSimon3 = Math.round(Math.random()*3+1);

//     if (colorSimon3 == 1) {
//         return 'rojo';
//     } else if (colorSimon3 == 2) {
//         return 'azul';
//     } else if (colorSimon3 == 3) {
//         return 'verde';
//     } else {
//         return 'amarillo'
//     }
// }

// const getRandomColor4 = () => {
//     const colorSimon4 = Math.round(Math.random()*3+1);

//     if (colorSimon4 == 1) {
//         return 'rojo';
//     } else if (colorSimon4 == 2) {
//         return 'azul';
//     } else if (colorSimon4 == 3) {
//         return 'verde';
//     } else {
//         return 'amarillo'
//     }
// }

// const getRandomColor5 = () => {
//     const colorSimon5 = Math.round(Math.random()*3+1);

//     if (colorSimon5 == 1) {
//         return 'rojo';
//     } else if (colorSimon5 == 2) {
//         return 'azul';
//     } else if (colorSimon5 == 3) {
//         return 'verde';
//     } else {
//         return 'amarillo'
//     }
// }

// const gameSimon = () => {
//     const colorSimon1 = getRandomColor1();
//     const colorSimon2 = getRandomColor2();
//     const colorSimon3 = getRandomColor3();
//     const colorSimon4 = getRandomColor4();
//     const colorSimon5 = getRandomColor5();

//     alert(`Simón dice: ${colorSimon1}, ${colorSimon2}, ${colorSimon3}, ${colorSimon4}, ${colorSimon5}`);
    
//     color1 = prompt('Ingrese el color 1');
//     color2 = prompt('Ingrese el color 2');
//     color3 = prompt('Ingrese el color 3');
//     color4 = prompt('Ingrese el color 4');
//     color5 = prompt('Ingrese el color 5');
//     alert(`Su respuesta fue: ${color1}, ${color2}, ${color3}, ${color4}, ${color5}`);

//     if ((color1 == colorSimon1) && (color2 == colorSimon2) && (color3 == colorSimon3) && (color4 == colorSimon4) && (color5 == colorSimon5)) {
//         alert('Felicitaciones! Has ganado!');
//     } else {
//         alert('Perdiste!'); 
//     }
// }

// gameSimon();


//**🤔 Adivinanzas**
//Crear un programa que muestre una adivinanza (entre 4 o 5 posibles) al azar, y permita al usuario ingresar la respuesta. Mostrarle un mensaje indicándole si acertó o no.

const riddleRandom = () => {
    const riddle = Math.round(Math.random()*2)+1;

    if (riddle == 1) {
        return 'Vuelo de noche, duerno de día y nunca verás plumas en el ala mía. Qué animal soy?';
    } if (riddle == 2) {
        return 'Habla y no tiene boca, oye y no tiene oído, es chiquito y hace ruido..riiing. Qué soy?'
    } if (riddle == 3) {
        return 'Tengo escamas, pero no soy pez, tengo corona pero no soy rey... Qué fruta soy?'
    }
}

const riddleGame = () => {
    const riddle = riddleRandom ();

    alert(riddleRandom());

    response = prompt('Ingrese su respuesta:');

    if ((response == 'murcielago') || (response == 'telefono') ||  (response == 'anana')) {
        alert('Si! Ganaste!!');
    } else {
        alert('Perdiste!');
    }
}

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     const riddle = riddleRandom();
//     changeStatus(status);
//   });

riddleGame();