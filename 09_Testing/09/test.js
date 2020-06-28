mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

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

describe("Devuelve la/s palabra/s mas corta/s", () => {
  it("toma como parametro un string y devuelve las palabras mas cortas en un array", () => {
      const phrase = "Pablito clavo varios clavitos rosas";
      expect(getShortestWords(phrase)).to.be.eql(["clavo", "rosas"]);
  });

});


  
mocha.run(); //Correr test
