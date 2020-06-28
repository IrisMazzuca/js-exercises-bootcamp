//- Crear un programa para controlar las vueltas de una deportista. Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo en segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas).
//Ejemplo:
// Cantidad de vueltas: 3
// Vuelta 1: 133s
// Vuelta 2: 145s
// Vuelta 3: 166s
// ⏱ Promedio: 144.45s

const raceLaps = Number(prompt(
    'Ingrese la cantidad de vueltas'
));

let sumaTiempo = 0;

for (let i = 0; i < raceLaps; i++) {
    const seconds = Number(prompt(
        'Ingrese los segundos de la vuelta'
    ));
    sumaTiempo = sumaTiempo + seconds;
    console.log(`Vuelta ${i+1}: ${seconds}s`);  
};

const promedio = (sumaTiempo / raceLaps);

console.log(`Promedio: ${promedio}s`);
