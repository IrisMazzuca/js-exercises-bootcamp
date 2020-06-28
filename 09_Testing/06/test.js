mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect


describe("Cantidad de vocales", () => {
    it("Devuelve la cantidad de vocales de una frase dada", () => {
      const phrase= "hoy no es domingo";
      expect(vowels(phrase)).to.be.equal(6)
    });
   
  });
  
mocha.run(); //Correr test
