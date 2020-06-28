// **👾 Monstruo**

// - Crear un juego de combate contra un monstruo. El juego debe contar con las siguientes variables:
//   - Vida jugadora
//   - Vida monstruo
//   - Cantidad de pociones
//   - Ataque máximo jugadora
//   - Ataque máximo monstruo
//   - Curación máxima poción
// - Todos los valores anteriores deben ser números enteros (elijanlos ustedes)
// - El juego debe tener las siguientes acciones posibles:
//   - **ATACAR MONSTRUO:** genera un número aleatorio entre 1 y `Ataque máximo jugadora` y lo resta a `Vida monstruo`
//   - **TOMAR POCION:** genera un número aleatorio entre 1 y `Curación máxima poción` y lo suma a `Vida jugadora` y resta 1 a `Cantidad de pociones`
//   - **BUSCAR POCION:** genera un número entre 1 y 4, si sale 1 suma una poción, sino no encuentra nada
//   - **SALIR:** termina el programa
// - En todo momento se debe mostrar un mensaje de lo que está pasando
// - Luego de cada acción, el monstruo ataca a la jugadora y le resta a `Vida jugadora` un número aleatorio entre 1 y `Ataque máximo monstruo`
// - Luego del ataque del monstruo, se debe mostrar la vida de ambos
// - El programa termina cuando o la jugadora o el monstruo se quedan con vida igual o menor a 0
// - Mostrar un mensaje con el resultado final

/* EJ monstruo
1- definir variables:
  - Vida jugadora
  - Vida monstruo
  - Cantidad de pociones
  - Ataque máximo jugadora
  - Ataque máximo monstruo
  - Curación máxima poción

2- escribir cada accion del switch
 -atacar mosntruo: mathrandom para eegir num e/ 1 y ataque max jugadora restarle el resultado a vida del monstruo
 -tomar pocion: mathrandom para eegir num e/ 1 y cant max pocion. sumarlo a vida jugadora. restarle 1 a cant pociones
 -buscar pocion: mathrandom para eegir num e/ 1 y 4 si sale 1 sumar pocion else: nada
 -salir
 (cada uno es una funcion)
 nombrar fx

3- mostrar los valores de todo (alert, console.log())
4-solicitar al usuario la accion deseada (prompt)
5- correr el switch
6- mostrar valores actualizados
6 y 1/2 - chequear que los valores no sean cero
7- llamar ataque monstruo (fx)
8-repetir paso 3 hasta que algun valor llegue a 0
9- msj con resultado final
*/


let lifePlayer = 10;
let lifeMonster = 10;
let qPotion = 2;
let maxAttack = 3;
let maxCure = 4;

const menuGame = (action) => {
    switch (action) {
        case 'ATACAR':
            attack();
            break;
        case 'TOMAR POCION':
            drinkPotion();
            break;
        case 'BUSCAR POCION':
            searchPotion();
            break;
        case 'SALIR':
            break;
        default:
            console.log('Invalido');    
    }
}

const attack = () => {
    alert(`Atacaste al mounstro!`);
    lifeMonster -= random (maxAttack);
};

const drinkPotion = () => {
    alert(`Tomaste la pocion!`)
};

const searchPotion = () => {
    alert(`Buscaste la pocion!`)
};

const showStatus = () => {
    alert(`Vida Jugador: ${lifePlayer} - Vida Mounstro: ${lifeMonster} - Cantidad de Pociones ${qPotion}`);
};

const attackPlayer = () => {
    alert(`Ataque al Jugador`);
};

const random = (max) => {
    return Math.round(Math.random() * max) + 1;
};

const option = prompt('Elija la opción: ATACAR o TOMAR POCION o BUSCAR POCION o SALIR');

showStatus();
menuGame(option);
showStatus();