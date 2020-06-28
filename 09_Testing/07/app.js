// ### 07 - 

// - Hacer una función que tome, primero, una frase y luego pida un caracter para remover de la frase ingresada.
//   Observaciones: validar que el caracter ingresado sea solo uno. Si es más de uno retornar un null.

const removeLetter = (phrase, letter) => {
  if (checkLength(letter)) {
    const filterLetters = phrase.toLowerCase().split("").filter((character) =>{
      return character != letter 
    })
    return filterLetters.join("")
     
  }
};


const checkLength = (letter) => {
  return (letter.length === 1);
};

// removeLetter = (phrase, letter) => {
//   if (checkLength(letter)) {
//     return phrase.toLowerCase().replace(letter, "");
//   }
// }
