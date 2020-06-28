mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

// ### 04 - uppercase

// - Escribir una función que reciba una frase e imprima la misma con la primera letra de cada palabra en mayúsculas.

describe("Frase en mayusculas", () => {
    it("la primera letra de cada palabra debe estar en mayuscula", () => {
      const frase= "hoy no es martes";
      expect(capitalizedFrase(frase)).to.be.equal("Hoy No Es Martes")
    });
  
    it("envio un palabra y me retora la primera letra en mayuscula",()=> {
      const palabra = "hoy";
      expect(uppercaseWord(palabra)).to.be.equal("Hoy")
    })   
  });
  


mocha.run(); //Correr test
