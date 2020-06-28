mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// ### 05 - frase mas larga

// - Escribir una función que reciba una frase e imprima la palabra mas larga de la misma(pista reduce)

describe("Palabra más larga", () => {
    it("Devuelve la palabra más larga de una frase dada", () => {
      const phrase= "hoy no es domingo";
      expect(getLargestWord(phrase)).to.be.equal("domingo")
    });
   
  });
  
mocha.run(); //Correr test
