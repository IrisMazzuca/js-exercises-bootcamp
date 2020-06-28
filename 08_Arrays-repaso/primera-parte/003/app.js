// ## Ejercicio Array 003

// - Declarar un array con el nombre **discoNevermind** y asignar los siguientes valores:
//   - Smells Like Teen Spirit
//   - In Bloom
//   - Come As You Are
//   - Immodium
//   - Lithium
//   - Polly
//   - Territorial Pissings
//   - Drain You
//   - Lounge Act
//   - Pay To Play
//   - On a Plain
//   - Endless, Nameless
// - Reemplazar `Immodium` por `Breed`
// - Reemplazar `Pay To Play` por `Stay Away`
// - Reemplazar `Tim` por `Something in the Way`
// - Mostrar en consola la lista de canciones modificada
// - El resultado debería ser: `["Smells Like Teen Spirit", "In Bloom", "Come As You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act", "Stay Away", "On a Plain", "Something in the Way"]`

const discoNevermind = [
    "Smells Like Teen Spirit",
   " In Bloom",
   "Come As You Are",
   "Immodium",
   "Lithium",
   "Polly",
   "Territorial Pissings",
   "Drain You",
   "Lounge Act",
   "Pay To Play",
   "On a Plain",
   "Endless, Nameless"
];

// discoNevermind.splice(3,1, "Breed" );

let index = discoNevermind.indexOf("Immodium");
discoNevermind[index] = "Breed";

console.log(discoNevermind);



