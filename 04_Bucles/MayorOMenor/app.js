
// **⚖️ Mayor o menor**

// - Crear un programa que elija un número al azar entre 1 y 10. El programa debe luego pedir al usuario que intente adivinar el número. Por cada intento, debe avisar si el número a adivinar es mayor o menor que el número ingresado. El programa debe terminar cuando se adivina el número.

let status = '';

while (status !== 'GANO') {

  const numberRandom = Math.round(Math.random()*9+1);
 
  const numberUser = Number(prompt('Adivine cuál es el número del 1 al 10'));

  if (numberUser === numberRandom) {
    status = 'GANO'
    alert(`${status}!! Su número fue ${numberUser} y el random también ${numberRandom}`);
  } else {
    status = 'PERDIO'
    if (numberUser < numberRandom) {
      alert (`${status}! El número a adivinar es Mayor a ${numberUser}`);
    } else {
      alert (`${status}! El número a adivinar es Menor a ${numberUser}`);
    };
  };
};
