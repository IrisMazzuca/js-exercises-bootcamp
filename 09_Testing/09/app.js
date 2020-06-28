// ### 09 - getShortestWords

// ```javascript
// /**
//  * @name getShortestWords
//  * @description Obtiene la(s) palabra(s) más corta(s) de un string
//  *
//  * @param {string} text - El texto del que se desea obtener las palabras
//  * @returns {String[]} Array de palabra(s) más cortas de {text}
//  *
//  * @example
//  *  getShortestWords('no sé por qué no funciona') // returns ['no', 'sé']
//  */
// ```

// - pista descomponer en array para obtener las palabras
// - pista reducir el array para obtener las palabra con menos letra
// - pista filtrar para obtener las palbras que tengan esa cantidad de letras

const getShortestWords = (phrase) => {

  const phraseArray = phrase.split(" ")
  // 2
  // filter palabra.length ==2
  const wordLength = phraseArray.reduce((acc, valor) => {
    return acc.length < valor.length ? acc.length : valor.length
  });



  return phraseArray.filter((word) => {
    return word.length === wordLength;

  })
}
