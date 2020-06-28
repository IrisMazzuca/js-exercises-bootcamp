// ### `getMoves()`
// * Crear una función `getMoves` que tome como argumento un pokémon y devuelva la lista de movimientos

const getMoves = (pokemon) => {
    const {moves:movimientos} = pokemon;
    return movimientos;
}

// ### `getPrimaryAbility()`
// * Crear una función `getPrimaryAbility` que tome como argumento un pokémon y devuelva la habilidad primaria

const getPrimaryAbility = (pokemon) =>{

    const {ability: {primary}} = pokemon
  
    return primary;
  }
  

// ### `getWeaknesses()`
// * Crear una función `getWeaknesses` que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

const getWeaknesses = (pokemon) => {
    const {modifiers: {weakness}} = pokemon;
  
   return weakness;
  }
  

// ### `getResistances()`
// * Crear una función `getResistances` que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

const getResistances = (pokemon) => {
    const {modifiers: {resistances}} = pokemon;
  
   return resistances;
  }
  

// ### `resistsType()`
// * Crear una función `resistsType` que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo

const resistsType = (pokemon, type) => {
    const {modifiers: {resistances}} = pokemon;
    
    return resistances.includes(type);
  }

  

// ### `resistsMove()`
// * Crear una función `resistsMove` que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo, p. ej.: `{ name: "Rain dance", type: "water" }`

// ### `isWeakAgainst()`
// * Crear una función `isWeakAgainst` que tome como argumento un objeto con dos propiedades, `attacker` y `attacked`, donde cada valor es un pokémon (p.ej. `{ attacker: pikachu, attacked: squirtle }`) y devuelva `true` si el pokémon atacado es débil frente al tipo de pokémon que lo ataca

const isWeakAgainst = (attacker, attacked) => {
    const {type} = attacker;
  
    return getWeaknesses(attacked).includes(type);
  }
  

// ### `isStrongAgainst()`
// * Crear una función `isStrongAgainst` que tome como argumento un objeto con dos propiedades, `attacker` y `attacked`, donde cada valor es un pokémon (p.ej. `{ attacker: pikachu, attacked: squirtle }`) y devuelva `true` si el pokémon atacado es resistente al tipo de pokémon que lo ataca

const isStrongAgainst = (attacker, attacked) => {
    const {type} = attacker;
    return getResistances(attacked).includes(type);
  
  }

  
// ### `addAbility()`
// * Crear una función `addAbility` que tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma (p. ej.: `{ secondary: "Discharge" }`) y devuelva el pokémon con la habilidad agregada

const addAbility = (pokemon, newAbility) => {
    const newPokemon = {...pokemon};
    newPokemon.ability = {...newPokemon.ability, ...newAbility}
    return newPokemon;
  }
  

// ### `addMove()`
// * Crear una función `addMove` que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento a su lista y devuelva el pokémon con el movimiento agregado

const addMove = (pokemon, newMove) => {
    const newPokemon = {...pokemon}
    const {moves} = newPokemon;
    moves.push(newMove)
    return newPokemon
  }
  

// ### `removeMove()`
// * Crear una función `removeMove` que tome como argumentos un pokémon y un movimiento, elimine dicho movimiento de su lista y devuelva el pokémon con el movimiento agregado

const removeMove = (pokemon, removedElement) => {
    const newPokemon = {...pokemon}
    const {moves} = newPokemon;
  
    const elementIndex =  moves.indexOf(removedElement);
  
    moves.splice(elementIndex, 1)
    
    return newPokemon
  }
  

// ### `getAttackModifier()`
// * Crear una función `getAttackModifier`, tome como argumento un objeto con dos propiedades, `attacker` y `attacked`, donde cada valor es un pokémon (p.ej. `{ attacker: pikachu, attacked: squirtle }`) y devuelva:
//     - 2, si el pokémon atacado es débil (`weakness`) contra el tipo del pokémon que ataca
//     - 0,5, si el pokémon atacado es resistente (`resistances`) contra el tipo del pokémon que ataca
//     - 1, si no es débil ni resistente


const getAttackModifier = (attacker , attacked) =>{
    let result = 0;
  
    if(isWeakAgainst(attacker , attacked)){
      result = 2;
    }
    else if(isStrongAgainst(attacker, attacked)){
      result = 0.5;
    }else{
      result = 1
    };
    return result;
  
  }

// ### `getAttackLog()`
// * Crear una función `getAttackLog`, que tome como argumento un objeto con las siguientes propiedades:

// ```js
// {
//     attacker: "Squirtle",
//     attacked: "Pikachu",
//     move: "Water Gun",
//     damage: 12,
//     modifier: "weak" // otros valores: "resistant", "normal"
// }
// ```

// Y que devuelve un string con la siguiente plantilla:

// ```js
// `${attacker} used ${move}! ${attacked} lost ${damage} HP!`
// ```

// Por ejemplo:

// ```
// "Squirtle used Water Gun! Pikachu lost 12 HP!"
// ```

// Si el pokémon es débil contra el tipo de su atacante, se debe agregar `It's super effective!`, si es resistente, se debe agregar `It's not very effective!`, por ejemplo:

// ```
// "Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"
// ```
const getAttackLog = (atacante, defensor) => {
  const {name: attacker} = atacante
  const {name: attacked} = defensor
  let move = randomMove(atacante)
  let damage = calculateDamage(fight, atacante, defensor);

  let effectiveness = ""
  if(getAttackModifier(atacante, defensor) === 0.5){
    effectiveness = "It's not very effective!";
  }else if(getAttackModifier(atacante, defensor) === 2){
    effectiveness = "It's super effective!";
  }

  return  `${attacker} used ${move}! ${attacked} lost ${damage} HP!${effectiveness}`
  
};

  


// ### `calculateDamage()`
// * Crear una función `calculateDamage` que tome como un argumento un objeto con la siguientes propiedades 
//     - `attack` es el ataque del pokémon que ataca
//     - `defense` es la defensa del pokémon siendo atacado
//     - `modifier` el modificador del daño según el tipo del atacante y del atacado
// y devuelva el daño ocasionado. El daño se calcula con la siguiente fórmula: 

// ```js
// 0.5 * attack * (attack / defense) * modifier
// ```    

// const calculateDamage = (fight) => {
//     const { attack, defense, modifier } = fight
  
//     return Number((0.5 * attack * (attack / defense) * modifier).toFixed(1))
//       ;
  
//   }
  


// ### `battle()`
// * Crear un función `battle` que tome como argumentos dos pokémons. La función debe simular una batalla y devolver el resultado de la misma. Las reglas de la misma son:
//     - Por ronda, cada pokémon ataca al contrario
//     - Comienza atacando el pokémon con más velocidad (`speed`)
//     - La batalla termina cuando la vida (`hp`, hit points, puntos de golpe) de un pokémon llega a 0 o menos
//     - El daño se obtiene con la función `calculateDamage` y se resta a la vida del pokémon atacado
//     - Se tiene que guardar un registro o historial del ataque en cada turno, usando lo que devuelve la función `getAttackLog`
//     - El movimiento se elige de forma aleatoria en cada ataque
//     - El objeto que debe devolver como resultado debe seguir la siguiente estructura:
      
// const battle = (pokemonA,pokemonB) => {
//   let round = 0;
//   const {stats:{hp:lifeA}} = pokemonA;
//   const {stats:{hp:lifeB}} = pokemonB;

//   while (lifeA > 0 && lifeB > 0) {

//     const attack = () => {
//       round++;

//       if (round = 1) {

//         if ((pokemonA.stats.speed) > (pokemonB.stats.speed)) {
//           const attacker = pokemonA;
//           const attacked = pokemonB;
//         }  else {
//           const attacker = pokemonB;
//           const attacked = pokemonA;
//         }
//       // } else {

//       //   if (Math.random() < 0.5) {
//       //     const attacker = pokemonA;
//       //     const attacked = pokemonB;
//       //   } else {
//       //     const attacker = pokemonB;
//       //     const attacked = pokemonA;
//       //   }

//       };
//     }
    

//     getMoves(attacker);
//     const {stats:{hp}} = attacker - calculateDamage(fight);
//     [attacker,attacked] = [attacked,attacker]

    


//   };

// };
 

// ```js
// {
//     rounds: 1,
//     results: {
//         winner: {
//             name: "Pikachu",
//             hp: 12 // vida restante
//         },
//         losser: {
//             name: "Squirtle",
//             hp: 0
//         }
//     },
//     history: [
//         "Squirtle used Water Gun! Pikachu lost 12 HP!", 
//         "Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"
//     ]
// }
// ```




const squirtle = {
  name: "Squirtle",
  type: "water",
  ability: {
    "primary": "Torrent",
    "hidden": "Rain Dish"
  },
  stats: {
    hp: 100,
    attack: 48,
    deffense: 50,
    speed: 43
  },
  moves: [
    "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
  ],
  modifiers: {
    "weakness": ["electric", "grass"],
    "resistances": ["water", "fire", "ice", "steel"]
  }
}

const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    "primary": "Static",
    "hidden": "Lightning rod"
  },
  stats: {
    hp: 100,
    attack: 55,
    deffense: 40,
    speed: 90
  },
  moves: [
    "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
  ],
  modifiers: {
    "weakness": ["ground"],
    "resistances": ["electric", "flying", "water", "steel"]
  }
}


const fight = (atacante, defensor) => {

  return {
    attack: atacante.stats.attack,
    defense: defensor.stats.deffense,
    modifier: getAttackModifier(atacante, defensor)
  }
}

const calculateDamage = (fight, atacante, defensor) => {
  const { attack, defense, modifier } = fight(atacante, defensor)
  return Number((0.5 * attack * (attack / defense) * modifier).toFixed(1));

}


const hpDefensor = (atacante, defensor) => {
  const hp = defensor.stats.hp - calculateDamage(fight, atacante, defensor)
  defensor.stats.hp = hp
  return defensor.stats.hp
};


const randomMove = (pokemon) => {

  const { moves } = pokemon;

  const max = (moves.length + 1)
  const min = 0;

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return moves[randomNumber];
}

// const getAttackLog = (atacante, defensor) => {
//   const {name: attacker} = atacante
//   const {name: attacked} = defensor
//   let move = randomMove(atacante)
//   let damage = calculateDamage(fight, atacante, defensor);


//   let effectiveness = ""
//   if(getAttackModifier(atacante, defensor) === 0.5){
//     effectiveness = "It's not very effective!";
//   }else if(getAttackModifier(atacante, defensor) === 2){
//     effectiveness = "It's super effective!";
//   }

//   return  `${attacker} used ${move}! ${attacked} lost ${damage} HP!${effectiveness}`
  
// };


const battle = (pokemonA, pokemonB) => {
  const [fastestPokemon, slowestPokemon] = [{ ...pokemonA }, { ...pokemonB }].sort((a, b) => a.stats.speed > b.stats.speed)
  let hpFastest = fastestPokemon.stats.hp;
  let hpSlowest = slowestPokemon.stats.hp;
  let rondas = 1;
  const history = [];

  while (hpFastest > 0 && hpSlowest > 0) {

    hpSlowest = hpDefensor(fastestPokemon, slowestPokemon);

    history.push(getAttackLog(fastestPokemon,slowestPokemon));

    if (hpSlowest <= 0) break;

    hpFastest = hpDefensor(slowestPokemon, fastestPokemon);

    history.push(getAttackLog(slowestPokemon,fastestPokemon));

    if (hpFastest <= 0) break;

    rondas++

    
  }
  let winner = "";

  return {
    rounds: rondas,
    results: {
      winner: (hpFastest > 0) ? 
        {
          name: fastestPokemon.name,
          hp: hpFastest
        } : {
          name: slowestPokemon.name,
          hp: hpSlowest,
        },
      loser: (winner.name = fastestPokemon.name) ? {
          name: slowestPokemon.name,
          hp: hpSlowest,
        } : {
          name: fastestPokemon.name,
          hp: hpFastest,
        }, 
    },
    history: history,
  }
  
}

