//**✊🤚✌️ Piedra, papel, tijera II**

// Al ejercicio de **Piedra, papel, tijera** de _condicionales_, agregarle la posibilidad de jugar la cantidad de rondas que se deseen. Por cada ronda, se debe mostrar ambas jugadas (usuario y computadora), quién gano la ronda, puntaje parcial hasta el momento y rondas restantes. Al finalizar se debe indicar quién ganó.
// Ejemplo:

// ```
// Ronda: 2 de 5
// 🙍‍♀️ Jugadora: Piedra
// 👾 Computadora: Tijera
// Jugadora ha ganado esta ronda 🎉
// Puntaje: 2 (Jugadora) - 0 (Computadora)
// ```

const getRandomOption = () => {
    const player2 = Math.random();

    if (player2 <= 0.33) {
        return 'piedra';
    } else if ( player2 <= 0.66) {
        return 'tijera';
    } else {
        return 'papel';
    }
};

const game = (player1,player2) => {
    if(!player2){
        player2=getRandomOption();
        console.log(player2);
    }
    if (player1 == player2){
        return "Empate";
    } else if ((player1 == "piedra" && player2 == "papel") || (player1 == "papel" && player2 == "tijera")||(player1 == "tijera" && player2 == "piedra")) {
        return "Perdió";
    } else if ((player1 == "piedra" && player2 == "tijera") || (player1 == "papel" && player2 == "piedra")||(player1 == "tijera" && player2 == "papel")) {
        return "Ganó";
    }
    alert(`jugador 1: ${player1} pc: ${player2}`);
}


let rounds = Number(prompt('Cuántas rondas querés jugar?'));

let winRounds = 0;
let lostRounds = 0;

for (i = 1; i <= rounds; i++) {
    player1 = prompt('Ingrese piedra ✊, papel 🤚 o tijera ✌️');
    
    let status = game(player1);

    if (status == "Ganó") {
        winRounds++;
    };
    
    if 
        (status == "Perdió") {
            lostRounds++;
    };  

    alert(`Ronda ${i} de ${rounds}`);
};

let points = `${winRounds} (jugador) - ${lostRounds} (compu)`;

