// **🎾 Tenis**

// - Crear un programa para llevar la cuenta del puntaje de un partido de tenis. Debe pedir inicialmente por los nombres de las jugadoras, y luego ir pidiendo el nombre de la ganadora de cada set, y mostrando el puntaje actualizado. Si alguna de las dos llega a los 3 puntos, el programa debe terminar y anunciar la ganadora.

let pointsPlayerOne = 0;
let pointsPlayerTwo = 0;
let set = 0;

const namePlayerOne = prompt('Ingrese el nombre de la Jugadora 1');
const namePlayerTwo = prompt('Ingrese el nombre de la Jugadora 2');

while (pointsPlayerOne < 3 && pointsPlayerTwo < 3) {

    let winner = prompt(`Ingrese el ganador del set: ${namePlayerOne} o ${namePlayerTwo}`);

    if (winner === namePlayerOne) {
        pointsPlayerOne = pointsPlayerOne + 1;
    } else if (winner === namePlayerTwo) {
        pointsPlayerTwo = pointsPlayerTwo + 1;
    };

    set = set + 1;

    alert(`Set número ${set}. Puntos: ${namePlayerOne} (${pointsPlayerOne}) / ${namePlayerTwo} (${pointsPlayerTwo})`);
};

if (pointsPlayerOne === 3) {
    alert(`La ganadora fue ${namePlayerOne}`);
}; 
if (pointsPlayerTwo === 3) {
    alert(`La ganadora fue ${namePlayerTwo}`);
};
