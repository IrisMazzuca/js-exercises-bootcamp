mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect

describe("Objeto Persona", () => {
  it("Agregar la propiedad `sabeJS` con valor `true` (al principio), y la propiedad `edad` con el valor `27` (al final)", () => {
    
    const estudiante = {
      nombre: 'Ada',
      apellido: 'Lovelace'
     };

     const estudianteCompleto = {
      sabeJS: true,
      nombre: 'Ada',
      apellido: 'Lovelace',
      edad: 27
     }

    expect(estudianteJS(estudiante)).to.eql(estudianteCompleto);
  });


}); //

mocha.run(); //Correr test
