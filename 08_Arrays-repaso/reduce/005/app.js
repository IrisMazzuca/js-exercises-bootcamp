// ## Ejercicio Array 005

// - Tenemos un array llamado `numeros` con números enteros al azar.
// - Utilizando `reduce`, queremos crear un nuevo array con todos los números, pero eliminando aquellos que estén repetidos.
// - Por ejemplo: Si tenemos `[1, 4, 3, 2, 4]`, el nuevo array sería `[1, 4, 3, 2]`


const numeros = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11];

// codea debajo de este comentario la solucion al ejercicio
const sinRepetidos = numeros.reduce((acumulador,num) => {
    if (acumulador.indexOf(num) === -1) { 
        acumulador.push(num)};
    return acumulador;
}, []);

console.log(sinRepetidos);
// deberia mostrar [ 5, 1, 7, 12, 2, 9, 0, 11 ]

