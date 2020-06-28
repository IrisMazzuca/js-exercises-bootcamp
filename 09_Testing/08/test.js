mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// ### 08 - toCamelCase

// ```javascript
// /**
//  * @name toCamelCase
//  * @description Convierte un string en dash-case a camelCase
//  *
//  * @param {string} str - El string en dash-case a convertir
//  * @returns {String} El string en camelCase convertido
//  *
//  * @example
//  *  toCamelCase('javascript-es-raro') // returns 'javascriptEsRaro'
//  */
// ```

// - pista hay que dividir por `-`
// - leer siguinte guia https://www.geeksforgeeks.org/how-to-make-first-letter-of-a-string-uppercase-in-javascript/#:~:text=There%20are%20number%20of%20ways,the%20all%20letters%20to%20uppercase.

describe("Convierte a camel case", () => {
  it("toma como parametro un string en dash case y lo devuelve en camelCase", () => {
      const phrase = "Pablito-clavo-varios-clavitos";
      expect(camelCaseConverter(phrase)).to.be.equal("pablitoClavoVariosClavitos");
  });

});

  
mocha.run(); //Correr test
