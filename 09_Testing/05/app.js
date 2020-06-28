
// ### 05 - frase mas larga

// - Escribir una función que reciba una frase e imprima la palabra mas larga de la misma(pista reduce)

const getLargestWord = (phrase) => {
  const phraseArray = phrase.split(" ");

  return phraseArray.reduce((largest,word) => {
    return largest.length > word.length ? largest : word;
  });
};