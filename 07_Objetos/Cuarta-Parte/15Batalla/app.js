// ## Batalla

// - Crear una función que acepte dos combatientes. Cada combatiente debe tener: nombre, vida, defensa y ataque. Por ronda, se atacan una vez cada uno, usando la siguiente fórmula: `daño = ataque - defensaEnemigo` y restando a la vida el daño generado. La batalla termina cuando la vida de cualquiera llegue a 0 o menos. Devolver un objeto que indique la cantidad de rondas de duración y quién ganó.

// ```javascript
// const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 };
// const fighterA = { name: "Cammy", life: 50, attack: 20, defense: 20 };
// fight(fighterA, fighterB); // returns { rounds: 3, winner: "Chun-Li"}
