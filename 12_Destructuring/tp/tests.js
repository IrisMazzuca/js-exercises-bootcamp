// mocha.setup("bdd"); //inicializar los test

// const expect = chai.expect; //Abreviar expect

describe("Pokemon", () => {
    it("tomo como arg un pokemon y devuelve la lista de sus moviemientos", () => {
      const pokemon = getSquirtle();
      const moves = [
        "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
      ];
  
      expect(getMoves(pokemon)).to.be.eql(moves);
    });

    it("tomo como arg un pokemon y devuelve la habilidad primaria", () => {
        const pokemon = getSquirtle();
        const primaryAbility = 'Torrent';
    
        expect(getPrimaryAbility(pokemon)).to.be.eql(primaryAbility);
    });

    it("tomo como arg un pokemon y devuelve la lista de tipos contra los que es débil", () => {
        const pokemon = getSquirtle();
        const weakness= ['electric', 'grass']
    
        expect(getWeaknesses(pokemon)).to.be.eql(weakness);
      });
    
      it("tomo como arg un pokemon y devuelve la lista de tipos a los que es resitente", () => {
        const pokemon = getSquirtle();
        const resistances= ['water', 'fire', 'ice', 'steel'];
    
        expect(getResistances(pokemon)).to.be.eql(resistances);
      });
      
      it("tomo como arg un pokemon y un tipo y devuelve true si el pokémon es resistente a dicho tipo", () => {
        const pokemon = getSquirtle();
        const type= 'water';
    
        expect(resistsType(pokemon, type)).to.be.eql(true);
      });

      it("devuelve `true` si el pokémon atacado es débil frente al tipo de pokémon que lo ataca", () => {
        const fight = {
          attacker: getPikachu(),
          attacked: getSquirtle(),
        }
        const {attacker , attacked} = fight;
    
        expect(isWeakAgainst(attacker, attacked)).to.be.eql(true);
      });

      it(" devuelva `true` si el pokémon atacado es resistente al tipo de pokémon que lo ataca", () => {
        const fight = {
          attacked: getPikachu(),
          attacker: getSquirtle(),
        }
        const {attacker , attacked} = fight;
    
        expect(isStrongAgainst(attacker, attacked)).to.be.eql(true);
      });
    
      it("toma como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma y devuelve el pokémon con la habilidad agregada ", () => {
        const pokemon = getSquirtle();
        const ability = { secondary: "Discharge" }
    
        const newPokemon = {
          name: 'Squirtle',
          type: 'water',
          ability: {
            primary: 'Torrent',
            secondary: "Discharge",
            hidden: 'Rain Dish'
          },
          stats: {
            hp: 44,
            attack: 48,
            deffense: 50,
            speed: 43
          },
          moves: ['Tackle', 'Tail Whip', 'Water Gun', 'Hydro Pump'],
          modifiers: {
            weakness: ['electric', 'grass'],
            resistances: ['water', 'fire', 'ice', 'steel']
          }
        }
    
        expect(addAbility(pokemon, ability)).to.be.eql(newPokemon);
      });

      it("toma como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma y devuelve el pokémon con la habilidad agregada ", () => {
        const pokemon = getSquirtle();
        const newMove = 'jump'
    
        const newPokemon = {
          name: 'Squirtle',
          type: 'water',
          ability: {
            primary: 'Torrent',
            hidden: 'Rain Dish'
          },
          stats: {
            hp: 44,
            attack: 48,
            deffense: 50,
            speed: 43
          },
          moves: ['Tackle', 'Tail Whip', 'Water Gun', 'Hydro Pump', 'jump'],
          modifiers: {
            weakness: ['electric', 'grass'],
            resistances: ['water', 'fire', 'ice', 'steel']
          }
        }
    
        expect(addMove(pokemon, newMove)).to.be.eql(newPokemon);
      });
    
      it("toma como argumentos un pokémon y un movimiento, elimina dicho movimiento de su lista y devuelve el pokémon con el movimiento eliminado.", () => {
        const pokemon = getSquirtle();
        const  removedElement= 'Water Gun'
    
        const newPokemon = {
          name: 'Squirtle',
          type: 'water',
          ability: {
            primary: 'Torrent',
            hidden: 'Rain Dish'
          },
          stats: {
            hp: 44,
            attack: 48,
            deffense: 50,
            speed: 43
          },
          moves: ['Tackle', 'Tail Whip', 'Hydro Pump'],
          modifiers: {
            weakness: ['electric', 'grass'],
            resistances: ['water', 'fire', 'ice', 'steel']
          }
        }
    
        expect(removeMove(pokemon, removedElement)).to.be.eql(newPokemon);
      });

      it("devuelve: 2 si el pokémon atacado es débil contra el tipo del pokémon que ataca, 0.5 si el pokémon atacado es resistente contra el tipo del pokémon que ataca y 1 si no es débil ni resistente", () => {
        const fight = {
          attacker: getPikachu(),
          attacked: getSquirtle(),
        }
        const {attacker , attacked} = fight;
    
        expect(getAttackModifier(attacker, attacked)).to.be.eql(2);
      });
      
      // it("Recibe un objeto ataque y devuelve Si el pokémon es débil contra el tipo de su atacante: `It's super effective!`, si es resistente: `It's not very effective!", () => {

      //   const fight = {
      //     attacker: "Squirtle",
      //     attacked: "Pikachu",
      //     move: "Water Gun",
      //     damage: 12,
      //     modifier: "weak" // otros valores: "resistant", "normal"
      //   }
      //   const {attacker, attacked, move, damage, modifier} = fight
    
    
      //   expect(getAttackLog(fight)).to.be.eql("Squirtle used Water Gun! Pikachu lost 12 HP!It's not very effective!");
      // });

      it("Recibe un objeto ataque y devuelve Si el pokémon es débil contra el tipo de su atacante: `It's super effective!`, si es resistente: `It's not very effective!", () => {
    
        const attacked = getTestPikachu();
        const attacker = getTestSquirtle();
        
        expect(getAttackLog(attacker, attacked)).to.be.eql("Squirtle used Tackle! Pikachu lost 14.4 HP!It's not very effective!");
      });
    

      // it("Toma como un argumento un objeto con attack, defense, modifier y devuelve el daño ocasionado", () => {

      //   const fight = {
      //     atacante: getPikachu().stats.attack,
      //     defensor: getSquirtle().stats.deffense,
      //     modifier: getAttackModifier(getPikachu(), getSquirtle())
    
      //   }
    
      //   expect(calculateDamage(fight)).to.be.eql(60.5);
      // });

      it("calculateDamage() toma como un argumento un objeto con attack, defense, modifier y devuelve el daño ocasionado", () => {

        const attacker = getTestPikachu();
        const attacked = getTestSquirtle();
    
        const fight = (attacker , attacked) => {
    
          return {  
            attack: attacker.stats.attack,
            defense: attacked.stats.deffense,
            modifier: getAttackModifier(attacker, attacked)
          }
          
        }
    
        expect(calculateDamage(fight, attacker, attacked)).to.be.eql(60.5);
      });
    

      it("Función batalla", () => {

        const pokemonA = getTestPikachu();
        const pokemonB = getTestSquirtle();

        const result = {
            rounds: 1, 
            results: {
              winner: {
                name: "Pikachu",
                hp: 35
              },
              loser: {
                name: "Squirtle",
                hp: -16.5,
              }, 
            },
            history: [
              "Pikachu used Quick Attack! Squirtle lost 60.5 HP!It's super effective!"
            ],          
        }

        expect(battle(pokemonA,pokemonB)).to.be.eql(result);
      });
 
      
  
  });
  

// mocha.run(); //Correr test