// ### **Estado alumnxs**

// - Estamos diseñando un nuevo sistema para una facultad, y tenemos la información de las materias para cada alumnx en objetos donde cada propiedad es una materia que contiene un array con las notas de los resultados de los parciales

// ```js
const materiasAda = {
  matematica: [10, 6, 10, 8],
  algoritmos: [10, 10, 9],
  algebra: [7, 9]
};

const materiasGrace = {
  matematica: [2, 9, 10, 7],
  algoritmos: [7, 1, 9],
  algebra: [2, 3]
};
// ```

// - Nos pidieron generar un informa que muestre las materias aprobadas (promedio de notas >= 4) y desaprobadas (promedio de notas < 4)
// - Para implementar este reporte, vamos a tener que desarrollar una función que tome como parámetro de entrada un objeto con las materias y sus notas, y nos retorne un objeto con dos propiedades: `aprobadas` y `desaprobadas`
// - Cada propiedad es un array que contiene el nombre de las materias que aprobaron o desaprobaron respectivamente

// ```js
// const agruparMateriasPorEstado = materias => {
//   /// CODEÁ ACÁ LA SOLUCIÓN
// }

// const promedioMateria = objeto => {
//   const arrayPromedios = [];
//   for (const materia in objeto) {
//     const notas = objeto[materia].reduce((sumaNotas, nota) => {
//       return sumaNotas + nota;
//     });
//     let promedio = notas / objeto[materia].length;
//     arrayPromedios.push(promedio);
//   }
//   return arrayPromedios;
// }

// promedioMateria(materiasAda);
// promedioMateria(materiasGrace);

const agruparMateriasPorEstado = (materias) => {

  const materiasEstado = {
      aprobadas: [],
      desaprobadas: []
  }

  for (const materia in materias) {
      let promedio = obtenerPromedio(materias[materia]);

      if(promedio>=4) {
        materiasEstado.aprobadas.push(materia);
      } else {
        materiasEstado.desaprobadas.push(materia);
      }
  };
  return materiasEstado;

};

const obtenerPromedio = (notas) => {
  return promedio = notas.reduce((acc, nota) => acc + nota ) / notas.length;
}



console.log( agruparMateriasPorEstado(materiasAda) );
// // {
// //   aprobadas: ['matematica', 'algoritmos', 'algebra'],
// //   desaprobados: []
// // }


console.log( agruparMateriasPorEstado(materiasGrace) );
// // {
// //   aprobadas: ['matematica', 'algoritmos'],
// //   desaprobados: ['algebra]
// // }
// ```
