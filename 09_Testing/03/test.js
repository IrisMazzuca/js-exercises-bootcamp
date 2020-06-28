mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect



describe("Ordenar letras de las palabras", () => {
    it("Ordena las letras en orden alfabetico ", () => {
        const word = "martes";
        expect(sortLetters(word)).to.be.equal("aemrst")
    });

});


mocha.run(); //Correr test
