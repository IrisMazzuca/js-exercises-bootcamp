mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// ### 10 - uncensor

// ```javascript
// /**
//  * @name uncensor
//  * @description Dado un texto censurado y una lista de letras en orden recupera el texto censurado reemplazando cada letra
//  * censurada por su correspondiente
//  *
//  * @param {string} censoredText - El texto censurado a recuperar. Las letras censuradas se representan con *
//  * @param {string[]} censoredLetters - Letras censuradas en orden a como corresponde al {censoredText}
//  * @returns {string} El texto sin censurar
//  *
//  * @example
//  *  uncensor('*di* Ja**Scr*p*', ['O', 'o', 'v', 'a', 'i', 't']) // returns 'Odio JavaScript'
//  */
// ```

// - pista recorrer el array de letras y remplazar el \* por la letra

describe("Devuelve la/s palabra/s mas corta/s", () => {
  it("toma como parametro un string y devuelve las palabras mas cortas en un array", () => {
      const phrase = "Pablito clavo varios clavitos rosas";
      expect(getShortestWords(phrase)).to.be.eql(["clavo", "rosas"]);
  });

});


  
mocha.run(); //Correr test
