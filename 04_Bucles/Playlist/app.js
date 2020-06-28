//**📀 Playlist**

//Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.


const playlist = prompt("Ingrese nombre de playlist");

const quantity = Number(prompt("¿Cuántas canciones desea agregar?"));

console.log(`Playlist: ${playlist}`);

let newSong ="";

for (let song = 1 ; song <= quantity; song++) {
    
    newSong += prompt(`agregar cancion`)+', ';

    console.log(`faltan por agregar:${quantity - song} canciones `);

    console.log (`se agrego  ${newSong}`);    
} 

console.log (`la playlist ${playlist} contiene estas canciones ${newSong}`);
