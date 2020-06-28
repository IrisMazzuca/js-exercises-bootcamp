mocha.setup("bdd"); 

const expect = chai.expect; 
// Test

// Escribir las siguientes funciones siguiendo el proceso de TDD (Test Driven Development)

// 1. Escribir el test con el resultado esperado y verlo fallar
// 2. Escribir la función para que el resultado de verde
// 3. Mejorar la función

// ### 02 - número de la semana

// - Desarrollar una función que reciba por parámetro un día de la semana y devuelva el número que le corresponde.

describe("Verificar día de la semana", () => 
{
    it("checkDay devuelve el día de la semana en número",()=>{
        const day = 'lunes';
        expect(checkDay(day)).to.be.equal(1)
    });

}); //

mocha.run(); //Correr test
