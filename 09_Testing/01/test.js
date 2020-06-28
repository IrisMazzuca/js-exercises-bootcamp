mocha.setup("bdd"); 

const expect = chai.expect; 
// Test

// Escribir las siguientes funciones siguiendo el proceso de TDD (Test Driven Development)

// 1. Escribir el test con el resultado esperado y verlo fallar
// 2. Escribir la función para que el resultado de verde
// 3. Mejorar la función

// ### 01 - de reversa

// - Escribir una función que reciba como parámetro un número e imprima ese número al revés.(pista reverse)

describe("Verificar reversa", () => 
{
    it("checkReverse verifica que el numero se imprima al revés",()=>{
        const number = 1234;
        expect(checkReverse(number)).to.be.equal(4321)
    });

}); //

mocha.run(); //Correr test
