// **💲Cara o cruz**

// - Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no. El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.

// opciones CARA CRUZ SALIR
// Rdo aleatorio con Math Random y comparar si acertó
// mostrar el rdo y la cant de vueltas
// si pierde, reiniciar el contador
// contar la cantidad máxima de rondas seguidas sin perder
// Al salir, mostrar la cant de rondas max acertadas


let i = 0;
let status = '';

const randomResult = () => {
  const number = Math.random();

  if (number <= 0.5) {
    return 'CARA';
  } else {
    return 'CRUZ';
  };
};

while (status !== 'PERDIO') {
  const input = prompt('Ingrese la opción: CARA, CRUZ o SALIR');
  
  switch (input) {
    case 'CARA': 
      if (input === randomResult()) {
      i++;
      status = 'GANO';
      alert(`${status}!! - Cantidad de vueltas sin perder: ${i}`);
    } else {
      status = 'PERDIO';
    };
     break;
    case 'CRUZ': 
      if (input === randomResult()) {
      i++;
      status = 'GANO';
      alert(`${status}!! - Cantidad de vueltas sin perder: ${i}`);
    } else {
      status = 'PERDIO';
    };
      break;
    case 'SALIR':
      alert (`Hasta pronto! La cantidad de vueltas con aciertos fue de ${i}`);
      break;
    default:
      alert('Opción inválida');
  }
}

alert(`${status}! La cantidad de vueltas con aciertos fue de ${i}`);



