// for (let indice = 0; indice <= 100; indice++) {
//     console.log(indice);
//   }
  
//   for (let indice = 100; indice >= 0; indice--) {
//     console.log(indice);
//   }
  
//   for (let indice = 100; indice >= 0; indice--) {
//     if (indice % 2 == 0) {
//       console.log(`El indice par es: ${indice}`);
//     }
//   }


//Número mayor o menor:
//Crear un programa que pregunte si se desea buscar el mayor o el menor número de un conjunto. Luego, preguntar entre cuántos se desea buscar. Ir pidiendo ingresar uno por uno la cantidad de números que se eligió, y al finalizar mostrar el número mayor o menor de todos los ingresados según el elegido.


const maxOrMin = prompt (
    'Quiere buscar el mayor o menor? Ingrese la opción MAYOR o MENOR.'
);

const quantity = Number(prompt(
    'Cuántos números desea comparar? '
));

let previewsNumber;

if (maxOrMin == 'MAYOR') {
    previewsNumber = -9999;
} else {
    previewsNumber = 9999;
};

for (let i = 0; i < quantity; i++) {
    const number = Number(prompt(
        'Ingrese un número'
    ));
    if (((number < previewsNumber) && (maxOrMin == 'MENOR')) || ((number > previewsNumber) && (maxOrMin == 'MAYOR'))) {
        previewsNumber = number;
    };
};

console.log(`El número ${maxOrMin} es ${previewsNumber}`)
