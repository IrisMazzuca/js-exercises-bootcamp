// **📐 Patrón**

// - Crear un programa que muestre en consola el siguiente patrón

// ```bash
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************
// *************
// ```

let asterisco = '*'

for (i = 1; i <= 13; i++) {

    console.log(`${asterisco}`);

    asterisco = asterisco + '*';
};