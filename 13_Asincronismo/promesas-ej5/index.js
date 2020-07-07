// ## ** Ejercicio 5 **

// - Escribí dos funciones que retorten ** promesas ** que podamos encadenar
// - La primera función`pasarAMayusculas`, recibe un array de strings y pasa cada uno a mayúsculas
// - La segunda función`ordenarPalabras`, recibe un array de strins y los ordena alfabeticamente
// - Si el array contiene algún elemento que no sea un string, la promesa debería ser rechazada


const palabras = ['nirvana', 'foo fighters', 'pearl jam', 'Argentina'];
const arrayMix = ['blind melon', 44, true];

const pasarAMayusculas = (array) => {
  return new Promise((resolve, reject) => {
    if (array.every(element => typeof (element) === "string"
    )) {
      resolve(array.map(element => element.toUpperCase()))
    } else {
      reject("Error! No es un array de strings!")
    }
  })
}

const ordenarPalabras = (array) => {
  return new Promise((resolve, reject) => {
    if (array.every(element => typeof (element) === "string"
    )) {
      resolve(array.sort())
    } else {
      reject("Error! No es un array de strings!")
    }
  })
}


pasarAMayusculas(palabras)
  .then(ordenarPalabras)
  .then((result) => console.log(result))
  .catch(error => console.log(error))

pasarAMayusculas(arrayMix)
  .then(ordenarPalabras)
  .then((result) => console.log(result))
  .catch(error => console.log(error))