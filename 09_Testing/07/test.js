mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// ### 07 - 

// - Hacer una función que tome, primero, una frase y luego pida un caracter para remover de la frase ingresada.
//   Observaciones: validar que el caracter ingresado sea solo uno. Si es más de uno retornar un null.

describe("Remover caracter", () => {
    it("Remueve el caracter ingersado de una frase", () => {
      const phrase= "hoy no es domingo";
      const letter = "o"
      expect(removeLetter(phrase,letter)).to.be.equal("hy n es dming")
    });

    it("Comprueba que sea 1 solo el caracter ingresado", () => {
      const letter = "o";
      expect(checkLength(letter)).to.be.equal(true)
    })
   
  });
  
mocha.run(); //Correr test
