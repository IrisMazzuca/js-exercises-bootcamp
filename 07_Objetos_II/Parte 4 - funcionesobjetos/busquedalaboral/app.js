// ## Búsqueda laboral

// - Crear una función que dada una persona y una búsqueda de empleo, devuelva `true` si la persona se ajusta a dicha búsqueda. Ambos objetos tienen la siguiente estructura:

// ```javascript
persona = {
  experience: 4,
  languages: ["JavaScript", "HTML","CSS"],
  location: ["Buenos Aires"],
  remuneration: 35000
}

busqueda = {
  experience: 1,
  languages: ["JavaScript", "HTML"],
  location: ["Buenos Aires"],
  remuneration: 40000
}//return true


// La persona es adecuada si:

// - tiene igual o más años de experiencia que la búsqueda
// - los lenguajes que conoce son los que contiene la búsqueda (puede conocer más, pero no afecta en nada)
// - su locación está incluida dentro de las locaciones posibles de la búsqueda
// - su remuneración (pretendida) es igual o menor a la de la búsqueda

// - (Pista) deberia empezar a comprobar si las condiciones mas sencillas se cumplen,como la expiencia o la remuneracion
// - (Pista) deberia recorrer los array de busqueda y preguntar si estan existen en la persona
// - (Pista) deberia retornar false a la primera que falla.


const isMatch = (persona, busqueda) => {
  let cumpleExperiencia = persona.experience >= busqueda.experience;
  let cumpleLenguajes = (busqueda.languages).reduce((anterior, lenguaje) => {
    return anterior && (persona.languages).includes(lenguaje)
  }, true);
  let cumpleLocacion = (busqueda.location).reduce((anterior, locacion) => {
    return anterior && (persona.location).includes(locacion)
  }, true);
  let cumpleRemuneracion = persona.remuneration <= busqueda.remuneration;
  return cumpleExperiencia && cumpleLenguajes && cumpleLocacion && cumpleRemuneracion;
}