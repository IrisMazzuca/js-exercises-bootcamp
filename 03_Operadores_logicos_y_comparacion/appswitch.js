//**❄️ Estaciones del año II**

//Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en la que comienza y termina

const getDates = (season) => {

    switch (season) {
        case 'verano':
            dates = '21-dic al 20-mar';
            break;
        case 'invierno':
            dates = '21-jun al 20-sep';
            break;
        case 'primavera':
            dates = '21-sep al 20-dic';
            break;
        case 'otoño':
            dates = '21-mar al 20-jun';
            break;
        default:
            dates = 'inválido';
    }

    return dates;
};


// const estacion = prompt('Ingrese una estación del año');
// const fechas = getDates(estacion);
// alert(`El período de la estación ${estacion} es ${fechas}`);



//**🧮 Calculadora**

//Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION, y luego de elegida, ingresar dos números y hacer dicha operación con ella.

// const calculator = (choice, num1,num2) => {
//     let result;
//     switch (choice) {
//         case 'A':
//             result = sum(num1,num2);   
//         break;
//         case 'B':    
//             result =subtraction(num1,num2);
//         break;
//         case 'C':
//             result = division(num1,num2);
//         break;
//         case 'D':
//             result = multiply(num1,num2);
//         break;
//         default:
//             result = 'operación inválida';
//     }
//     return result;
// };

// const sum = (number1, number2) => {
//     return (number1 + number2);   
// };

// const subtraction = (number1, number2) => {
//     return (number1 - number2);
// };

// const division = (number1, number2) => {
//     return  (number1 / number2);
// };

// const multiply = (number1, number2) => {
//     return (number1 * number2);
// };

// const mathOp = prompt('Elija entre las opciones A, B C o D. Qué operación aritmética desea realizar: A)SUMA, B)RESTA, c)DIVISION o D)MULTIPLICACION');

// const number1 = Number(prompt('Ingrese el primer número'));

// const number2 = Number(prompt('Ingrese el segundo número'));

// const result = calculator(mathOp, number1, number2);

// alert(`El resultado de la operación ${mathOp} de ${number1} y ${number2} es ${result}`);


//Tamagochi

//- Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: salud, felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar mostrando un mensaje con el nombre del tamagochi y los valores de cada variable (que son asignados aleatoriamente). Luego, debe mostrar las siguientes posibles acciones a realizar, que modifican los valores de la siguiente forma:
// - ALIMENTAR: +3 energía, +2 felicidad
// - JUGAR: +2 felicidad, -2 energía, -1 limpieza
// - DORMIR: +5 energía, +2 salud, -2 limpieza
// - VACUNAR: +5 salud, -6 felicidad
// - BAÑAR: +3 salud
// - RETAR: -3 felicidad
// - ACARICIAR: +4 felicidad

// Cuando el usuario selecciona una, debe mostrar el valor final de las variables.



// const tamagochi = (input) => {

//     switch (input) {
//     case 'ALIMENTAR':
//         result = feed(happiness, energy, health, cleanliness);
//         break;
//     case 'JUGAR':
//         result = play(happiness, energy, health, cleanliness);
//         break;
//     case 'DORMIR':
//         result = sleep(happiness, energy, health, cleanliness);
//         break;
//     case 'VACUNAR':
//         result = vaccinate(happiness, energy, health, cleanliness);
//         break;
//     case 'BAÑAR':
//         result = bath(happiness, energy, health, cleanliness);
//         break;
//     case 'RETAR':
//         result = scold(happiness, energy, health, cleanliness);
//         break;
//     case 'ACARICIAR':
//         result = stroke(happiness, energy, health, cleanliness);
//         break;   
//     default:
//         result = 'Error';     
//     };

//     return result;
// };

// const feed = (happiness, energy, health, cleanliness) => {
//    happiness += 2;
//    energy += 3;
//    return alert(`Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);

// };

// const play = (happiness, energy, health, cleanliness) => {
//     happiness += 2;
//     energy -= 2;
//     cleanliness -= 1;
//     return alert(`Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
// };

// const sleep = (happiness, energy, health, cleanliness) => {
//     energy += 5;
//     health += 2;
//     cleanliness -= 2;
//     return alert(`Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
// };

// const vaccinate = (happiness, energy, health, cleanliness) => {
//     health += 5;
//     happiness -= 6;
//     return alert(`Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
// };

// const bath = (happiness, energy, health, cleanliness) => {
//     health += 3;
//     return alert(`Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
// };

// const scold = (happiness, energy, health, cleanliness) => {
//     happiness -= 3;
//     return alert(`Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
// };

// const stroke = (happiness, energy, health, cleanliness) => {
//     happiness += 4;
//     return alert(`Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
// };

// let health = 10;
// let happiness = 10;
// let cleanliness = 10;
// let energy = 10;
// let result;
// while (health > 0) {
//     alert('Hola! Soy Foxy! ≧◠ᴥ◠≦');
//     alert(`Estado de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
//     const inputOwner = prompt('Hey, ingresá una opción: ALIMENTAR, JUGAR, DORMIR, VACUNAR, BAÑAR, RETAR o ACARICIAR');
//     const game = tamagochi(inputOwner, health, happiness, cleanliness, energy);
// };


// **📺 Televisor**

// - Hacer un programa que empiece preguntando si se desea prender el televisor. Si elige que no, el programa debe terminar. Si elige que sí, debe mostrar un mensaje con el canal actual y el el nivel de volumen de un televisor, y debe permitir realizar las siguientes operaciones:
//   - CAMBIAR CANAL: permite ingresar un canal (0 al 99)
//   - CANAL SIGUIENTE: sube un canal
//   - CANAL ANTERIOR: baja un canal
//   - SUBIR VOLUMEN: sube en volumen en 5
//   - BAJAR VOLUMEN: disminuye en volumen en 5
//   - MUTEAR: pone el volumen en 0

// Una vez elegida la opción e ingresado el valor si corresponde, debe mostrar un mensaje con el canal y el nivel del volumen actual.
// DECLARACION DE VARIABLES GLOBALES:
// let channel = 10;
// let volume = 50;
// let result;

// //FUNCION PRINCIPAL CON SWITCH:
// const television = (input, channel, volume) => {
//     switch (input) {
//         case 'A':
//             result = changeChannel(numberRequest(),volume);
//             break;
//         case 'B':
//             result = nextChannel(channel,volume);
//             break;
//         case 'C':
//             result = previewsChannel(channel,volume);
//             break;
//         case 'D':
//             result = turnUpVolume(channel,volume);
//             break;
//         case 'E':
//             result = turnDownVolume(channel,volume);
//             break;
//         case 'F':
//             result = muteChannel(channel,volume);
//             break;
//         default:
//             result = 'Opción invalida';
//     };
//     return result;
// };

// //CASE A:
// const numberRequest = (volume) => {
//     const number = Number(prompt('Ingrese el número del canal'));
//     return number;
// };

// const changeChannel = (number, volume) => { 
//     return alert(`Canal Actual: ${number} / Volumen: ${volume}`);
// };

// //CASE B:
// const nextChannel = (channel,volume) => {
//     channel +=1;
//     return alert(`Canal Actual: ${channel} / Volumen: ${volume}`)
// };

// //CASE C:
// const previewsChannel = (channel,volume) => {
//     channel -=1;
//     return alert(`Canal Actual: ${channel} / Volumen: ${volume}`)
// };

// //CASE D:
// const turnUpVolume = (channel,volume) => {
//     volume +=5;
//     return alert(`Canal Actual: ${channel} / Volumen: ${volume}`)
// };

// //CASE E:
// const turnDownVolume = (channel,volume) => {
//     volume -=5;
//     return alert(`Canal Actual: ${channel} / Volumen: ${volume}`)
// };

// //CASE F:
// const muteChannel = (channel,volume) => {
//     volume = 0;
//     return alert(`Canal Actual: ${channel} / Volumen: ${volume}`)
// };


// //PARA QUE EL PROGRAMA TERMINE SI LE DAN CANCELAR:
// const alertTv = () => {
//     const option = confirm('Desea prender el televisor?');
//     const msj = '';
//     if (option === true) {
//         alert(`Canal Actual: ${channel} / Volumen: ${volume}`);
//         const option = prompt('Opciones TV: A) CAMBIAR CANAL, B) CANAL SIGUIENTE, C) CANAL ANTERIOR, D) SUBIR VOLUMEN, E) BAJAR VOLUMEN, F) MUTEAR');
//         const tv = television(option, channel, volume);
//     } else {
//         msj = alert('No se prendió la TV');
//     }
// }

// //EJECUCION:
// const turnOn = alertTv();




// **💵 ATM**

// - Crear un programa que permita hacer las siguientes operaciones: EXTRAER, DEPOSITAR, TRANSFERIR, CAMBIAR PIN, SALIR.

//   - El programa debe tener un dinero inicial
//   - El programa debe tener un PIN inicial
//   - Para empezar a utilizarlo y llegar al menú de opciones, debe pedir ingresar el PIN. Si se lo ingresa incorrectamente debe terminar el programa
//   - EXTRAER debe pedir cuánto se desea extraer y mostrar luego el dinero restante, sólo si la extracción es menor al dinero disponible
//   - DEPOSITAR debe pedir cuánto se desea ingresar y mostrar luego el dinero resultante
//   - TRANSFERIR debe pedir por un CBU (o alias) a transferir, preguntar cuánto se desea transferir y mostrar el dinero restante, si la transferencia es menor al dinero disponible y si el CBU es válido. Los CBU o alias válidos posibles (2 o 3) deben estar guardados en variables.
//   - CAMBIAR PIN debe pedir primero por la contraseña nueva y luego por la contraseña original para confirmar el cambio
//   - SALIR debe mostrar un mensaje de despedida
//   - En cualquier situación mostrar mensajes de lo que esté pasando operaciones exitosas

//Declaración de variables globales


let pin = 12345;

const atm = (optionClient) => {
    let money = 1000;
    let cbuIris = 1010101010;
    let cbuPepito = 2020202020;
    let result;
    switch (optionClient) {
        case 'A':
            result = extract(askHowMuch(), money);
            break;
        case 'B':
            result = deposit(askHowMuch(), money);
            break;
        case 'C':
            result = transfer(askHowMuch(), money, cbuIris, cbuPepito);
            break;
        case 'D':
            result = changePin(pin);
            break;
        case 'E':
            alert('Ud ha salido del sistema. Hasta pronto!');
            break;
        default:
            alert('Opción inválida');
    }
    return result;
};

const askHowMuch = () => {
    const number = Number(prompt('Ingrese el monto'));
    return number;
};

const extract = (number, money) => {

    if (number <= money) {
        money -= number;
        alert(`Su nuevo saldo, luego de extraer $ ${number}, es de $ ${money}`);
    } else {
        alert(`No hay suficiente dinero para retirar, su saldo es $ ${money}`);
    };
};

const deposit = (number, money) => {
    money += number;
    alert(`Su nuevo saldo, luego de depositar $ ${number}, es de $ ${money}`);
};


const transfer = (number, money, cbuIris, cbuPepito) => {
    const cbuInput = Number(prompt('Ingrese el CBU'));

    if ((cbuInput === cbuIris) || (cbuInput === cbuPepito)) {
        if (number <= money) {
            money -= number;
            alert(`Su nuevo saldo, luego de transferir $ ${number}, es de $ ${money}`)
        } else {
            alert(`NO tiene saldo suficiente, saldo actual de $ ${money}`);
        };
    } else {
        alert('CBU incorrecto');
    };
};

const changePin = (pin) => {
    const actualPin = Number(prompt('Ingrese el PIN actual para realizar el cambio'))
    if (actualPin === pin) {
        const newPin = Number(prompt('Ingrese su nuevo PIN'));
        alert('El PIN fue actualizado correctamente!')
    } else {
        alert('El PIN ingresado fue incorrecto, NO se puede proceder al cambio');
    };
};


// Pregunta PIN y solo ejecuta programa si es correcto
const begin = () => {
    const askPin = Number(prompt('Ingrese su PIN'));
    if (askPin === pin) {
        const option = prompt('Bienvenido al ATM! Ingrese la opción A)EXTRAER, B)DEPOSITAR, C)TRANSFERIR, D)CAMBIAR PIN, E)SALIR')
        const program = atm(option);
    } else {
        alert('Ingresó un PIN INCORRECTO');
    };
}

const beginProgram = begin();






//   **🎰 Ruleta**

// - Crear un programa que simule una apuesta de ruleta. El programa debe mostrar las opciones posibles para apostar y preguntar qué se desea elegir:
//   - ROJO: gana si el número es rojo
//   - NEGRO: gana si el número es negro
//   - PAR: gana si número es par
//   - IMPAR: gana si el número es impar
//   - ALTA: gana si el número es menor o igual a 18
//   - BAJA: gana si el número es mayor a 18
//   - PRIMERA DOCENA: gana si el número está incluido en la primera docena (del 1 al 12)
//   - SEGUNDA DOCENA: gana si el número está incluido en la segunda docena (del 13 al 24)
//   - TERCERA DOCENA: gana si el número está incluido en la tercera docena (del 25 al 36)

// Una vez elegida la opción, el programa debe generar aleatoriamente un número entre 1 y 36, de color negro o rojo. Mostrar un mensaje con el número que salió y si se ganó o no la apuesta.
