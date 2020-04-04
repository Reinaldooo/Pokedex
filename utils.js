export const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const allPokemon = [
  {
    "id": 1,
    "name": "bulbasaur",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
    "owned": false
  },
  {
    "id": 2,
    "name": "ivysaur",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "color": "rgb(52, 199, 89)",
    "desc": "There is a bud on this Pokémon’s back. To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon.",
    "owned": false
  },
  {
    "id": 3,
    "name": "venusaur",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "color": "rgb(52, 199, 89)",
    "desc": "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
    "owned": false
  },
  {
    "id": 4,
    "name": "charmander",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "color": "rgb(255, 69, 58)",
    "desc": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    "owned": false
  },
  {
    "id": 5,
    "name": "charmeleon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    "owned": false
  },
  {
    "id": 6,
    "name": "charizard",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    "owned": false
  },
  {
    "id": 7,
    "name": "squirtle",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    "owned": false
  },
  {
    "id": 8,
    "name": "wartortle",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler.",
    "owned": false
  },
  {
    "id": 9,
    "name": "blastoise",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    "owned": false
  },
  {
    "id": 10,
    "name": "caterpie",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Perhaps because it would like to grow up quickly, it has a voracious appetite, eating a hundred leaves a day.",
    "owned": false
  },
  {
    "id": 11,
    "name": "metapod",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Its shell is filled with a thick liquid. All of the cells throughout its body are being rebuilt in preparation for evolution.",
    "owned": false
  },
  {
    "id": 12,
    "name": "butterfree",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    "color": "white",
    "desc": "Its wings are covered in toxic scales. If it finds bird Pokémon going after Caterpie, Butterfree sprinkles its scales on them to drive them off.",
    "owned": false
  },
  {
    "id": 13,
    "name": "weedle",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
    "owned": false
  },
  {
    "id": 14,
    "name": "kakuna",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    "color": "yellow",
    "desc": "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
    "owned": false
  },
  {
    "id": 15,
    "name": "beedrill",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    "color": "yellow",
    "desc": "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
    "owned": false
  },
  {
    "id": 16,
    "name": "pidgey",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
    "owned": false
  },
  {
    "id": 17,
    "name": "pidgeotto",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
    "owned": false
  },
  {
    "id": 18,
    "name": "pidgeot",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    "color": "rgb(210, 106, 36)",
    "desc": "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
    "owned": false
  },
  {
    "id": 19,
    "name": "rattata",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Its incisors grow continuously throughout its life. If its incisors get too long, this Pokémon becomes unable to eat, and it starves to death.",
    "owned": false
  },
  {
    "id": 20,
    "name": "raticate",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    "color": "rgb(210, 106, 36)",
    "desc": "People say that it fled from its enemies by using its small webbed hind feet to swim from island to island in Alola.",
    "owned": false
  },
  {
    "id": 21,
    "name": "spearow",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Its reckless nature leads it to stand up to others—even large Pokémon—if it has to protect its territory.",
    "owned": false
  },
  {
    "id": 22,
    "name": "fearow",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Carrying food through Fearow’s territory is dangerous. It will snatch the food away from you in a flash!",
    "owned": false
  },
  {
    "id": 23,
    "name": "ekans",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    "color": "rgb(112, 90, 159)",
    "desc": "By dislocating its jaw, it can swallow prey larger than itself. After a meal, it curls up and rests.",
    "owned": false
  },
  {
    "id": 24,
    "name": "arbok",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    "color": "rgb(112, 90, 159)",
    "desc": "The latest research has determined that there are over 20 possible arrangements of the patterns on its stomach.",
    "owned": false
  },
  {
    "id": 25,
    "name": "pikachu",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "color": "yellow",
    "desc": "Its nature is to store up electricity. Forests where nests of Pikachu live are dangerous, since the trees are so often struck by lightning.",
    "owned": false
  },
  {
    "id": 26,
    "name": "raichu",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    "color": "yellow",
    "desc": "As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity buildup is actually causing stress.",
    "owned": false
  },
  {
    "id": 27,
    "name": "sandshrew",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    "color": "yellow",
    "desc": "It lives in areas of limited rainfall. When danger approaches, it curls up into a ball to protect its soft stomach.",
    "owned": false
  },
  {
    "id": 28,
    "name": "sandslash",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    "color": "yellow",
    "desc": "Its claws and horns often break off. The broken claws and horns can be used to carve plows for tilling farm fields.",
    "owned": false
  },
  {
    "id": 29,
    "name": "nidoran-f",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
    "owned": false
  },
  {
    "id": 30,
    "name": "nidorina",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    "color": "rgb(10, 132, 255)",
    "desc": "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
    "owned": false
  },
  {
    "id": 31,
    "name": "nidoqueen",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Nidoqueen’s body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
    "owned": false
  },
  {
    "id": 32,
    "name": "nidoran-m",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon’s notice.",
    "owned": false
  },
  {
    "id": 33,
    "name": "nidorino",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
    "owned": false
  },
  {
    "id": 34,
    "name": "nidoking",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Nidoking’s thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
    "owned": false
  },
  {
    "id": 35,
    "name": "clefairy",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    "color": "pink",
    "desc": "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves.",
    "owned": false
  },
  {
    "id": 36,
    "name": "clefable",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    "color": "pink",
    "desc": "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.",
    "owned": false
  },
  {
    "id": 37,
    "name": "vulpix",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Its beautiful tails have made it very popular. However, if it’s not brushed diligently, it will be a mass of tangles before you know it.",
    "owned": false
  },
  {
    "id": 38,
    "name": "ninetales",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    "color": "yellow",
    "desc": "It is vindictive and relentless by nature. Those who cross it even once will be cursed for a thousand years, along with their descendants.",
    "owned": false
  },
  {
    "id": 39,
    "name": "jigglypuff",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    "color": "pink",
    "desc": "Recordings of Jigglypuff’s strange lullabies can be purchased from department stores. These CDs can be found near the bedding area.",
    "owned": false
  },
  {
    "id": 40,
    "name": "wigglytuff",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    "color": "pink",
    "desc": "Thanks to its bouncy body and fine fur, this Pokémon is sought after. Holding one in your arms while you sleep feels great.",
    "owned": false
  },
  {
    "id": 41,
    "name": "zubat",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.",
    "owned": false
  },
  {
    "id": 42,
    "name": "golbat",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.",
    "owned": false
  },
  {
    "id": 43,
    "name": "oddish",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Oddish searches for fertile, nutrient-rich soil, then plants itself. During the daytime, while it is planted, this Pokémon’s feet are thought to change shape and become similar to the roots of trees.",
    "owned": false
  },
  {
    "id": 44,
    "name": "gloom",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    "color": "rgb(10, 132, 255)",
    "desc": "From its mouth Gloom drips honey that smells absolutely horrible. Apparently, it loves the horrid stench. It sniffs the noxious fumes and then drools even more of its honey.",
    "owned": false
  },
  {
    "id": 45,
    "name": "vileplume",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Vileplume has the world’s largest petals. They are used to attract prey that are then doused with toxic spores. Once the prey are immobilized, this Pokémon catches and devours them.",
    "owned": false
  },
  {
    "id": 46,
    "name": "paras",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Whether it’s due to a lack of moisture or a lack of nutrients, in Alola the mushrooms on Paras don’t grow up quite right.",
    "owned": false
  },
  {
    "id": 47,
    "name": "parasect",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    "color": "rgb(255, 69, 58)",
    "desc": "The bug is mostly dead, with the mushroom on its back having become the main body. If the mushroom comes off, the bug stops moving.",
    "owned": false
  },
  {
    "id": 48,
    "name": "venonat",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.",
    "owned": false
  },
  {
    "id": 49,
    "name": "venomoth",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.",
    "owned": false
  },
  {
    "id": 50,
    "name": "diglett",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It travels through tunnels that it digs underground. It hates sunlight, so it comes out only after the sun goes down.",
    "owned": false
  },
  {
    "id": 51,
    "name": "dugtrio",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    "color": "rgb(210, 106, 36)",
    "desc": "While the three of them normally get along splendidly, on rare occasions a huge fight will break out over which head gets to eat first.",
    "owned": false
  },
  {
    "id": 52,
    "name": "meowth",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    "color": "yellow",
    "desc": "When visiting a junkyard, you may catch sight of it having an intense fight with Murkrow over shiny objects.",
    "owned": false
  },
  {
    "id": 53,
    "name": "persian",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    "color": "yellow",
    "desc": "Although the jewel on its forehead appears to be a different color than those of Alolan Persian, it’s mostly made of the same material.",
    "owned": false
  },
  {
    "id": 54,
    "name": "psyduck",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    "color": "yellow",
    "desc": "Using psychokinesis gives it a headache, so it normally passes the time spacing out and doing as little as possible.",
    "owned": false
  },
  {
    "id": 55,
    "name": "golduck",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Even fast-swimming fish Pokémon can be disabled by Golduck. It brings them to a standstill and seizes them.",
    "owned": false
  },
  {
    "id": 56,
    "name": "mankey",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    "color": "rgb(210, 106, 36)",
    "desc": "The smallest of things could cause it to lose its temper. Because it doesn’t hold in its stress, this Pokémon can live a long time.",
    "owned": false
  },
  {
    "id": 57,
    "name": "primeape",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It will never forgive opponents who have angered it. Even after it has beaten them down until they can’t move, it never ever forgives.",
    "owned": false
  },
  {
    "id": 58,
    "name": "growlithe",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    "color": "rgb(210, 106, 36)",
    "desc": "While it’s quite friendly toward humans once it’s grown used to them, in the wild it must be quite fierce to defend its territory from Rockruff.",
    "owned": false
  },
  {
    "id": 59,
    "name": "arcanine",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Legends tell of its fighting alongside a general and conquering a whole country.",
    "owned": false
  },
  {
    "id": 60,
    "name": "poliwag",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Despite the danger, it wants to come up on land. So it does its best to waddle along, but when an enemy finds it, it rushes back to the water.",
    "owned": false
  },
  {
    "id": 61,
    "name": "poliwhirl",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Although it has become capable of living on land, it spends its time in the water, where its prey, fish Pokémon, are plentiful.",
    "owned": false
  },
  {
    "id": 62,
    "name": "poliwrath",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It’s quite a gifted swimmer, even among Water-type Pokémon, but it normally spends its time on land.",
    "owned": false
  },
  {
    "id": 63,
    "name": "abra",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It uses various psychic powers even while it’s sleeping, so you can’t tell whether or not it’s awake.",
    "owned": false
  },
  {
    "id": 64,
    "name": "kadabra",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It stares at a silver spoon to amplify its psychic powers before it lets loose. Apparently, gold spoons are no good.",
    "owned": false
  },
  {
    "id": 65,
    "name": "alakazam",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Alakazam uses its psychic powers to make the spoons it carries. Each spoon is an original that there’s only one of in the whole world.",
    "owned": false
  },
  {
    "id": 66,
    "name": "machop",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    "color": "gray",
    "desc": "Once this Pokémon has gained enough confidence and muscle from training with its friends, it challenges Makuhita to a battle.",
    "owned": false
  },
  {
    "id": 67,
    "name": "machoke",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    "color": "gray",
    "desc": "When it encounters an enemy that’s truly mighty, this Pokémon removes the power-save belt from its waist and unleashes its full power.",
    "owned": false
  },
  {
    "id": 68,
    "name": "machamp",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    "color": "gray",
    "desc": "It grasps its opponents with its four arms and twists them up in an intricate hold. People call it “the Machamp special.”",
    "owned": false
  },
  {
    "id": 69,
    "name": "bellsprout",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Bellsprout’s thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.",
    "owned": false
  },
  {
    "id": 70,
    "name": "weepinbell",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.",
    "owned": false
  },
  {
    "id": 71,
    "name": "victreebel",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.",
    "owned": false
  },
  {
    "id": 72,
    "name": "tentacool",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It drifts through the sea searching for prey. Its poisonous tentacles break off sometimes, but after a while, they grow back.",
    "owned": false
  },
  {
    "id": 73,
    "name": "tentacruel",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It fires off ultrasonic waves from its red orbs to weaken its prey, and then it wraps them up in its 80 tentacles.",
    "owned": false
  },
  {
    "id": 74,
    "name": "geodude",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Geodude that have lived a long life have had all their edges smoothed out until they’re totally round. They also have a calm, quiet disposition.",
    "owned": false
  },
  {
    "id": 75,
    "name": "graveler",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It climbs up cliffs as it heads toward the peak of a mountain. As soon as it reaches the summit, it rolls back down the way it came.",
    "owned": false
  },
  {
    "id": 76,
    "name": "golem",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    "color": "rgb(210, 106, 36)",
    "desc": "When Golem grow old, they stop shedding their shells. Those that have lived a long, long time have shells green with moss.",
    "owned": false
  },
  {
    "id": 77,
    "name": "ponyta",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    "color": "yellow",
    "desc": "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.",
    "owned": false
  },
  {
    "id": 78,
    "name": "rapidash",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    "color": "yellow",
    "desc": "Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.",
    "owned": false
  },
  {
    "id": 79,
    "name": "slowpoke",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    "color": "pink",
    "desc": "There are some places where Slowpoke is worshiped because of a long-standing belief that whenever Slowpoke yawns, it rains.",
    "owned": false
  },
  {
    "id": 80,
    "name": "slowbro",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    "color": "pink",
    "desc": "Spacing out is basically all it does. It turns back into Slowpoke if its tail, along with Shellder, breaks off.",
    "owned": false
  },
  {
    "id": 81,
    "name": "magnemite",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    "color": "gray",
    "desc": "It’s frequently the cause of power outages, which is why some power plants send out electrical signals that it can’t stand.",
    "owned": false
  },
  {
    "id": 82,
    "name": "magneton",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    "color": "gray",
    "desc": "Delicate equipment can malfunction in areas inhabited by Magneton, which send out mysterious electrical signals.",
    "owned": false
  },
  {
    "id": 83,
    "name": "farfetchd",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Farfetch’d is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.",
    "owned": false
  },
  {
    "id": 84,
    "name": "doduo",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Doduo’s two heads contain completely identical brains. A scientific study reported that on rare occasions, there will be examples of this Pokémon possessing different sets of brains.",
    "owned": false
  },
  {
    "id": 85,
    "name": "dodrio",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Apparently, the heads aren’t the only parts of the body that Dodrio has three of. It has three sets of hearts and lungs as well, so it is capable of running long distances without rest.",
    "owned": false
  },
  {
    "id": 86,
    "name": "seel",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    "color": "white",
    "desc": "It has always been supposed that Seel live only in cold seas. Their having shown up in Alola is a mystery.",
    "owned": false
  },
  {
    "id": 87,
    "name": "dewgong",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    "color": "white",
    "desc": "It swims through the ocean at a speed of eight knots, searching for Pokémon that will become its prey. It’s especially fond of Wishiwashi.",
    "owned": false
  },
  {
    "id": 88,
    "name": "grimer",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.",
    "owned": false
  },
  {
    "id": 89,
    "name": "muk",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Their food sources have decreased, and their numbers have declined sharply. Sludge ponds are being built to prevent their extinction.",
    "owned": false
  },
  {
    "id": 90,
    "name": "shellder",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    "color": "rgb(112, 90, 159)",
    "desc": "The sand that accumulates inside its shell eventually becomes a pearl. But the pearl gets in the way, so it spits it out and discards it.",
    "owned": false
  },
  {
    "id": 91,
    "name": "cloyster",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    "color": "rgb(112, 90, 159)",
    "desc": "If areas of Cloyster’s very hard shell get damaged, those areas swell, gradually growing into large sharp spikes.",
    "owned": false
  },
  {
    "id": 92,
    "name": "gastly",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It’s said that gas emanating from a graveyard was possessed by the grievances of the deceased and thus became a Pokémon.",
    "owned": false
  },
  {
    "id": 93,
    "name": "haunter",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    "color": "rgb(112, 90, 159)",
    "desc": "On moonless nights, Haunter searches for someone to curse, so it’s best not to go out walking around.",
    "owned": false
  },
  {
    "id": 94,
    "name": "gengar",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    "color": "rgb(112, 90, 159)",
    "desc": "You can hear tales told all over the world about how Gengar will pay a visit to children who are naughty.",
    "owned": false
  },
  {
    "id": 95,
    "name": "onix",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    "color": "gray",
    "desc": "Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.",
    "owned": false
  },
  {
    "id": 96,
    "name": "drowzee",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    "color": "yellow",
    "desc": "It can be spotted near recreational facilities, intending to eat the pleasant dreams of children who enjoyed themselves there that day.",
    "owned": false
  },
  {
    "id": 97,
    "name": "hypno",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    "color": "yellow",
    "desc": "In Alola, Komala is Hypno’s main target. It rarely harms people.",
    "owned": false
  },
  {
    "id": 98,
    "name": "krabby",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.",
    "owned": false
  },
  {
    "id": 99,
    "name": "kingler",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",
    "owned": false
  },
  {
    "id": 100,
    "name": "voltorb",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Voltorb is extremely sensitive—it explodes at the slightest of shocks. It is rumored that it was first created when a Poké Ball was exposed to a powerful pulse of energy.",
    "owned": false
  },
  {
    "id": 101,
    "name": "electrode",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    "color": "rgb(255, 69, 58)",
    "desc": "One of Electrode’s characteristics is its attraction to electricity. It is a problematical Pokémon that congregates mostly at electrical power plants to feed on electricity that has just been generated.",
    "owned": false
  },
  {
    "id": 102,
    "name": "exeggcute",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    "color": "pink",
    "desc": "Six of them form a single Pokémon. Should one of the six be lost, the next morning there will once more be six.",
    "owned": false
  },
  {
    "id": 103,
    "name": "exeggutor",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    "color": "yellow",
    "desc": "It engages its enemies using psychic powers. Each of its three heads fires off psychokinetic energy, tripling its power.",
    "owned": false
  },
  {
    "id": 104,
    "name": "cubone",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    "color": "rgb(210, 106, 36)",
    "desc": "At night, it weeps loudly for its dead mother, but those cries only attract its natural enemy—Mandibuzz.",
    "owned": false
  },
  {
    "id": 105,
    "name": "marowak",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It throws bones at Mandibuzz to knock it down. It’s thought that Marowak is trying to avenge its parent.",
    "owned": false
  },
  {
    "id": 106,
    "name": "hitmonlee",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Hitmonlee’s legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.",
    "owned": false
  },
  {
    "id": 107,
    "name": "hitmonchan",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity.",
    "owned": false
  },
  {
    "id": 108,
    "name": "lickitung",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    "color": "pink",
    "desc": "It checks out whatever’s around it by licking everything. If you don’t clean off a spot where it’s licked you, you’ll break out in a rash!",
    "owned": false
  },
  {
    "id": 109,
    "name": "koffing",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Koffing embodies toxic substances. It mixes the toxins with raw garbage to set off a chemical reaction that results in a terribly powerful poison gas. The higher the temperature, the more gas is concocted by this Pokémon.",
    "owned": false
  },
  {
    "id": 110,
    "name": "weezing",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Weezing alternately shrinks and inflates its twin bodies to mix together toxic gases inside. The more the gases are mixed, the more powerful the toxins become. The Pokémon also becomes more putrid.",
    "owned": false
  },
  {
    "id": 111,
    "name": "rhyhorn",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    "color": "gray",
    "desc": "Rhyhorn’s brain is very small. It is so dense, while on a run it forgets why it started running in the first place. It apparently remembers sometimes if it demolishes something.",
    "owned": false
  },
  {
    "id": 112,
    "name": "rhydon",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    "color": "gray",
    "desc": "Rhydon has a horn that serves as a drill. It is used for destroying rocks and boulders. This Pokémon occasionally rams into streams of magma, but the armor-like hide prevents it from feeling the heat.",
    "owned": false
  },
  {
    "id": 113,
    "name": "chansey",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    "color": "pink",
    "desc": "It seems that other Pokémon’s efforts to take its delicious, nutritious egg away from it caused Chansey to get faster at fleeing.",
    "owned": false
  },
  {
    "id": 114,
    "name": "tangela",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Tangela’s vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.",
    "owned": false
  },
  {
    "id": 115,
    "name": "kangaskhan",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Kangaskhan protects its child by keeping it in its pouch. It has zero forgiveness for those who harm its child and will beat them down.",
    "owned": false
  },
  {
    "id": 116,
    "name": "horsea",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    "color": "rgb(10, 132, 255)",
    "desc": "If Horsea senses danger, it will reflexively spray a dense black ink from its mouth and try to escape. This Pokémon swims by cleverly flapping the fin on its back.",
    "owned": false
  },
  {
    "id": 117,
    "name": "seadra",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Seadra generates whirlpools by spinning its body. The whirlpools are strong enough to swallow even fishing boats. This Pokémon weakens prey with these currents, then swallows it whole.",
    "owned": false
  },
  {
    "id": 118,
    "name": "goldeen",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Although known for their splendid tail fins, Goldeen apparently compete among themselves to see whose horn is thickest and sharpest.",
    "owned": false
  },
  {
    "id": 119,
    "name": "seaking",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Its horn spins like a drill to steadily hollow out rocks—even harder ones. The coloration of the male is more vivid.",
    "owned": false
  },
  {
    "id": 120,
    "name": "staryu",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    "color": "rgb(210, 106, 36)",
    "desc": "In many places, there are folktales of stardust falling into the ocean and becoming Staryu.",
    "owned": false
  },
  {
    "id": 121,
    "name": "starmie",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Its sparkling core is called “the gem of the sea.” This core can be made into high-priced accessories that are traded in secret.",
    "owned": false
  },
  {
    "id": 122,
    "name": "mr-mime",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    "color": "pink",
    "desc": "Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.",
    "owned": false
  },
  {
    "id": 123,
    "name": "scyther",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Its two sharp scythes are more than just weapons. It uses them with dexterity to dress its prey before eating.",
    "owned": false
  },
  {
    "id": 124,
    "name": "jynx",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    "color": "rgb(255, 69, 58)",
    "desc": "It sways its hips to a rhythm all its own. The precise movements of Jynx living in Alola are truly wonderful.",
    "owned": false
  },
  {
    "id": 125,
    "name": "electabuzz",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    "color": "yellow",
    "desc": "Electricity permeates its body. It swings its arms round and round to charge up electricity before unleashing a punch.",
    "owned": false
  },
  {
    "id": 126,
    "name": "magmar",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Its entire body is burning. When it breathes, the temperature rises. When it sneezes, flames shoot out!",
    "owned": false
  },
  {
    "id": 127,
    "name": "pinsir",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It gets into territorial disputes with Vikavolt. For some reason, it apparently gets along well with Heracross in Alola.",
    "owned": false
  },
  {
    "id": 128,
    "name": "tauros",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    "color": "rgb(210, 106, 36)",
    "desc": "They live in groups. The one with the longest, thickest, and most-scarred horns is the boss of the herd.",
    "owned": false
  },
  {
    "id": 129,
    "name": "magikarp",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    "color": "rgb(255, 69, 58)",
    "desc": "In the distant past, they were fairly strong, but they have become gradually weaker over time.",
    "owned": false
  },
  {
    "id": 130,
    "name": "gyarados",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It fires hyper beams in all directions, burning the surrounding area to ash. There are some regions where it’s called “the deity of destruction.”",
    "owned": false
  },
  {
    "id": 131,
    "name": "lapras",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It likes swimming around with people on its back. In the Alola region, it’s an important means of transportation over water.",
    "owned": false
  },
  {
    "id": 132,
    "name": "ditto",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    "color": "rgb(112, 90, 159)",
    "desc": "While it can transform into anything, each Ditto apparently has its own strengths and weaknesses when it comes to transformations.",
    "owned": false
  },
  {
    "id": 133,
    "name": "eevee",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    "color": "rgb(210, 106, 36)",
    "desc": "The question of why only Eevee has such unstable genes has still not been solved.",
    "owned": false
  },
  {
    "id": 134,
    "name": "vaporeon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Clean, clear waters are its usual habitat. When it’s about to be attacked by an invading enemy, it dives into the water to hide.",
    "owned": false
  },
  {
    "id": 135,
    "name": "jolteon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    "color": "yellow",
    "desc": "Its lungs contain an organ that creates electricity. The crackling sound of electricity can be heard when it exhales.",
    "owned": false
  },
  {
    "id": 136,
    "name": "flareon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    "color": "rgb(255, 69, 58)",
    "desc": "If it inhales deeply, that’s a sign it’s about to attack. Prepare to be hit by flames of over 3,000 degrees Fahrenheit!",
    "owned": false
  },
  {
    "id": 137,
    "name": "porygon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    "color": "pink",
    "desc": "This Pokémon was created using the cutting-edge science of 20 years ago, so many parts of it have since become obsolete.",
    "owned": false
  },
  {
    "id": 138,
    "name": "omanyte",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Omanyte lived in the seas of antiquity. Its fossils have been found bearing bite marks from Archeops, so apparently Archeops preyed on it.",
    "owned": false
  },
  {
    "id": 139,
    "name": "omastar",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Its heavy shell is thought to be the reason this ancient Pokémon died out. It’s apparently a distant ancestor of Octillery.",
    "owned": false
  },
  {
    "id": 140,
    "name": "kabuto",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    "color": "rgb(210, 106, 36)",
    "desc": "This Pokémon thrived 300 million years ago. It’s said that living specimens can still be seen in a certain region—a rare sight.",
    "owned": false
  },
  {
    "id": 141,
    "name": "kabutops",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Its body had begun to change so it could function on land. But it didn’t adapt in time and went extinct.",
    "owned": false
  },
  {
    "id": 142,
    "name": "aerodactyl",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Restored from DNA found in amber, this Pokémon exhibited ferocity that was greater than expected. Some casualties resulted.",
    "owned": false
  },
  {
    "id": 143,
    "name": "snorlax",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    "color": "black",
    "desc": "It doesn’t do anything other than eat and sleep. When prompted to make a serious effort, though, it apparently displays awesome power.",
    "owned": false
  },
  {
    "id": 144,
    "name": "articuno",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.",
    "owned": false
  },
  {
    "id": 145,
    "name": "zapdos",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    "color": "yellow",
    "desc": "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.",
    "owned": false
  },
  {
    "id": 146,
    "name": "moltres",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    "color": "yellow",
    "desc": "Moltres is a legendary bird Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.",
    "owned": false
  },
  {
    "id": 147,
    "name": "dratini",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It’s still weak, so it lurks on the floor of bodies of water, eating whatever food sinks down and living a quiet life.",
    "owned": false
  },
  {
    "id": 148,
    "name": "dragonair",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Lakes where Dragonair live are filled with offerings from people, because they believe this Pokémon is able to control the weather.",
    "owned": false
  },
  {
    "id": 149,
    "name": "dragonite",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It flies over raging seas as if they were nothing. Observing this, a ship’s captain dubbed this Pokémon “the sea incarnate.”",
    "owned": false
  },
  {
    "id": 150,
    "name": "mewtwo",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon’s body, they failed to endow Mewtwo with a compassionate heart.",
    "owned": false
  },
  {
    "id": 151,
    "name": "mew",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    "color": "pink",
    "desc": "Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.",
    "owned": false
  },
  {
    "id": 152,
    "name": "chikorita",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
    "color": "rgb(52, 199, 89)",
    "desc": "In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.",
    "owned": false
  },
  {
    "id": 153,
    "name": "bayleef",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Bayleef’s neck is ringed by curled-up leaves. Inside each tubular leaf is a small shoot of a tree. The fragrance of this shoot makes people peppy.",
    "owned": false
  },
  {
    "id": 154,
    "name": "meganium",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
    "color": "rgb(52, 199, 89)",
    "desc": "The fragrance of Meganium’s flower soothes and calms emotions. In battle, this Pokémon gives off more of its becalming scent to blunt the foe’s fighting spirit.",
    "owned": false
  },
  {
    "id": 155,
    "name": "cyndaquil",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
    "color": "yellow",
    "desc": "Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion.",
    "owned": false
  },
  {
    "id": 156,
    "name": "quilava",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
    "color": "yellow",
    "desc": "Quilava keeps its foes at bay with the intensity of its flames and gusts of superheated air. This Pokémon applies its outstanding nimbleness to dodge attacks even while scorching the foe with flames.",
    "owned": false
  },
  {
    "id": 157,
    "name": "typhlosion",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
    "color": "yellow",
    "desc": "Typhlosion obscures itself behind a shimmering heat haze that it creates using its intensely hot flames. This Pokémon creates blazing explosive blasts that burn everything to cinders.",
    "owned": false
  },
  {
    "id": 158,
    "name": "totodile",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Despite the smallness of its body, Totodile’s jaws are very powerful. While the Pokémon may think it is just playfully nipping, its bite has enough power to cause serious injury.",
    "owned": false
  },
  {
    "id": 159,
    "name": "croconaw",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Once Croconaw has clamped its jaws on its foe, it will absolutely not let go. Because the tips of its fangs are forked back like barbed fishhooks, they become impossible to remove when they have sunk in.",
    "owned": false
  },
  {
    "id": 160,
    "name": "feraligatr",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Feraligatr intimidates its foes by opening its huge mouth. In battle, it will kick the ground hard with its thick and powerful hind legs to charge at the foe at an incredible speed.",
    "owned": false
  },
  {
    "id": 161,
    "name": "sentret",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
    "color": "rgb(210, 106, 36)",
    "desc": "When Sentret sleeps, it does so while another stands guard. The sentry wakes the others at the first sign of danger. When this Pokémon becomes separated from its pack, it becomes incapable of sleep due to fear.",
    "owned": false
  },
  {
    "id": 162,
    "name": "furret",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Furret has a very slim build. When under attack, it can slickly squirm through narrow spaces and get away. In spite of its short limbs, this Pokémon is very nimble and fleet.",
    "owned": false
  },
  {
    "id": 163,
    "name": "hoothoot",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Every day, it tilts its head in the same rhythm. A long time ago, people raised these Pokémon to serve as clocks.",
    "owned": false
  },
  {
    "id": 164,
    "name": "noctowl",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
    "color": "rgb(210, 106, 36)",
    "desc": "With eyes that can see in pitch-darkness, it never lets its prey escape. Some even call it “the emperor of dark nights.”",
    "owned": false
  },
  {
    "id": 165,
    "name": "ledyba",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
    "color": "rgb(255, 69, 58)",
    "desc": "This Pokémon is very sensitive to cold. In the warmth of Alola, it appears quite lively.",
    "owned": false
  },
  {
    "id": 166,
    "name": "ledian",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
    "color": "rgb(255, 69, 58)",
    "desc": "It’s said that the patterns on its back are related to the stars in the night sky, but the details of that relationship remain unclear.",
    "owned": false
  },
  {
    "id": 167,
    "name": "spinarak",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
    "color": "rgb(52, 199, 89)",
    "desc": "With threads from its mouth, it fashions sturdy webs that won’t break even if you set a rock on them.",
    "owned": false
  },
  {
    "id": 168,
    "name": "ariados",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Every night, it wanders around in search of prey, whose movements it restrains by spewing threads before it bites into them with its fangs.",
    "owned": false
  },
  {
    "id": 169,
    "name": "crobat",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Its fangs are so sharp, if it bites you in the dark and sucks your blood, you won’t notice any pain or realize you’ve been bitten.",
    "owned": false
  },
  {
    "id": 170,
    "name": "chinchou",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Its two antennae glow softly to lure in prey, making it a useful Pokémon for night fishing.",
    "owned": false
  },
  {
    "id": 171,
    "name": "lanturn",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
    "color": "rgb(10, 132, 255)",
    "desc": "When the bacteria living inside its antennae absorb Lanturn’s bodily fluids, a strong luminescent effect is produced.",
    "owned": false
  },
  {
    "id": 172,
    "name": "pichu",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
    "color": "yellow",
    "desc": "It still can’t use electricity well. When it’s surprised or excited, it discharges electricity unintentionally.",
    "owned": false
  },
  {
    "id": 173,
    "name": "cleffa",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
    "color": "pink",
    "desc": "On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!",
    "owned": false
  },
  {
    "id": 174,
    "name": "igglybuff",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
    "color": "pink",
    "desc": "It’s always practicing its singing because it wants to improve. Even when it’s asleep, it keeps singing in its dreams!",
    "owned": false
  },
  {
    "id": 175,
    "name": "togepi",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
    "color": "white",
    "desc": "As its energy, Togepi uses the positive emotions of compassion and pleasure exuded by people and Pokémon. This Pokémon stores up feelings of happiness inside its shell, then shares them with others.",
    "owned": false
  },
  {
    "id": 176,
    "name": "togetic",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
    "color": "white",
    "desc": "Togetic is said to be a Pokémon that brings good fortune. When the Pokémon spots someone who is pure of heart, it is said to appear and share its happiness with that person.",
    "owned": false
  },
  {
    "id": 177,
    "name": "natu",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Although it still can’t fly, its jumping power is outstanding. It jumps way up into trees and plucks the buds from the branches.",
    "owned": false
  },
  {
    "id": 178,
    "name": "xatu",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It’s said that while this Pokémon has the power to predict the future, it’s not powerful enough to change the future it sees.",
    "owned": false
  },
  {
    "id": 179,
    "name": "mareep",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
    "color": "white",
    "desc": "Clothing made from Mareep’s fleece is easily charged with static electricity, so a special process is used on it.",
    "owned": false
  },
  {
    "id": 180,
    "name": "flaaffy",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
    "color": "pink",
    "desc": "In the places on its body where fleece doesn’t grow, its skin is rubbery and doesn’t conduct electricity. Those spots are safe to touch.",
    "owned": false
  },
  {
    "id": 181,
    "name": "ampharos",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
    "color": "yellow",
    "desc": "The light from its tail can be seen from space. This is why you can always tell exactly where it is, which is why it usually keeps the light off.",
    "owned": false
  },
  {
    "id": 182,
    "name": "bellossom",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
    "color": "rgb(52, 199, 89)",
    "desc": "A Bellossom grows flowers more beautifully if it has evolved from a smelly Gloom—the more stinky the better. At night, this Pokémon closes its petals and goes to sleep.",
    "owned": false
  },
  {
    "id": 183,
    "name": "marill",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
    "color": "rgb(10, 132, 255)",
    "desc": "When fishing for food at the edge of a fast-running stream, Marill wraps its tail around the trunk of a tree. This Pokémon’s tail is flexible and configured to stretch.",
    "owned": false
  },
  {
    "id": 184,
    "name": "azumarill",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Azumarill can make balloons out of air. It makes these air balloons if it spots a drowning Pokémon. The air balloons enable the Pokémon in trouble to breathe.",
    "owned": false
  },
  {
    "id": 185,
    "name": "sudowoodo",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It’s so popular with the elderly that there’s a magazine devoted to this Pokémon. Fans obsess over the particular length and angle of its arms.",
    "owned": false
  },
  {
    "id": 186,
    "name": "politoed",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Although its cries sound like screams, a composer created a beautiful ballad that was influenced by the sounds.",
    "owned": false
  },
  {
    "id": 187,
    "name": "hoppip",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
    "color": "pink",
    "desc": "This Pokémon drifts and floats with the wind. If it senses the approach of strong winds, Hoppip links its leaves with other Hoppip to prepare against being blown away.",
    "owned": false
  },
  {
    "id": 188,
    "name": "skiploom",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Skiploom’s flower blossoms when the temperature rises above 64 degrees Fahrenheit. How much the flower opens depends on the temperature. For that reason, this Pokémon is sometimes used as a thermometer.",
    "owned": false
  },
  {
    "id": 189,
    "name": "jumpluff",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Jumpluff rides warm southern winds to cross the sea and fly to foreign lands. The Pokémon descends to the ground when it encounters cold air while it is floating.",
    "owned": false
  },
  {
    "id": 190,
    "name": "aipom",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
    "color": "rgb(112, 90, 159)",
    "desc": "As it did more and more with its tail, its hands became clumsy. It makes its nest high in the treetops.",
    "owned": false
  },
  {
    "id": 191,
    "name": "sunkern",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
    "color": "yellow",
    "desc": "Sunkern tries to move as little as it possibly can. It does so because it tries to conserve all the nutrients it has stored in its body for its evolution. It will not eat a thing, subsisting only on morning dew.",
    "owned": false
  },
  {
    "id": 192,
    "name": "sunflora",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
    "color": "yellow",
    "desc": "Sunflora converts solar energy into nutrition. It moves around actively in the daytime when it is warm. It stops moving as soon as the sun goes down for the night.",
    "owned": false
  },
  {
    "id": 193,
    "name": "yanma",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Yanma is capable of seeing 360 degrees without having to move its eyes. It is a great flier that is adept at making sudden stops and turning midair. This Pokémon uses its flying ability to quickly chase down targeted prey.",
    "owned": false
  },
  {
    "id": 194,
    "name": "wooper",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Wooper usually lives in water. However, it occasionally comes out onto land in search of food. On land, it coats its body with a gooey, toxic film.",
    "owned": false
  },
  {
    "id": 195,
    "name": "quagsire",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Quagsire hunts for food by leaving its mouth wide open in water and waiting for its prey to blunder in unaware. Because the Pokémon does not move, it does not get very hungry.",
    "owned": false
  },
  {
    "id": 196,
    "name": "espeon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Although it originally had no powers at all, people say its precognitive faculties were awakened by its need to protect itself.",
    "owned": false
  },
  {
    "id": 197,
    "name": "umbreon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
    "color": "black",
    "desc": "This Pokémon is nocturnal. Even in total darkness, its large eyes can spot its prey clearly!",
    "owned": false
  },
  {
    "id": 198,
    "name": "murkrow",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
    "color": "black",
    "desc": "It has a weakness for shiny things. It’s been known to sneak into the nests of Gabite—noted collectors of jewels—in search of treasure.",
    "owned": false
  },
  {
    "id": 199,
    "name": "slowking",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
    "color": "pink",
    "desc": "It’s constantly coming up with new ideas that would change the world, but as soon as it hits upon a new idea, it forgets it.",
    "owned": false
  },
  {
    "id": 200,
    "name": "misdreavus",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
    "color": "gray",
    "desc": "What gives meaning to its life is surprising others. If you set your ear against the red orbs around its neck, you can hear shrieking.",
    "owned": false
  },
  {
    "id": 201,
    "name": "unown",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
    "color": "black",
    "desc": "This Pokémon is shaped like ancient writing. It is a mystery as to which came first, the ancient writings or the various Unown. Research into this topic is ongoing but nothing is known.",
    "owned": false
  },
  {
    "id": 202,
    "name": "wobbuffet",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Wobbuffet does nothing but endure attacks—it won’t attack on its own. However, it won’t endure an attack on its tail. When that happens, the Pokémon will try to take the foe with it using Destiny Bond.",
    "owned": false
  },
  {
    "id": 203,
    "name": "girafarig",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
    "color": "yellow",
    "desc": "Girafarig’s rear head contains a tiny brain that is too small for thinking. However, the rear head doesn’t need to sleep, so it can keep watch over its surroundings 24 hours a day.",
    "owned": false
  },
  {
    "id": 204,
    "name": "pineco",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
    "color": "gray",
    "desc": "Motionless, it hangs from trees, waiting for its bug Pokémon prey to come to it. Its favorite in Alola is Cutiefly.",
    "owned": false
  },
  {
    "id": 205,
    "name": "forretress",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
    "color": "rgb(112, 90, 159)",
    "desc": "When something approaches it, it fires off fragments of its steel shell in attack. This is not a conscious action but a conditioned reflex.",
    "owned": false
  },
  {
    "id": 206,
    "name": "dunsparce",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
    "color": "yellow",
    "desc": "It travels by digging through the ground. Diglett and Dunsparce share one another’s tunnels happily.",
    "owned": false
  },
  {
    "id": 207,
    "name": "gligar",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Gligar glides through the air without a sound as if it were sliding. This Pokémon hangs on to the face of its foe using its clawed hind legs and the large pincers on its forelegs, then injects the prey with its poison barb.",
    "owned": false
  },
  {
    "id": 208,
    "name": "steelix",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    "color": "gray",
    "desc": "Steelix lives even further underground than Onix. This Pokémon is known to dig toward the earth’s core. There are records of this Pokémon reaching a depth of over six-tenths of a mile underground.",
    "owned": false
  },
  {
    "id": 209,
    "name": "snubbull",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
    "color": "pink",
    "desc": "It grows close to others easily and is also easily spoiled. The disparity between its face and its actions makes many young people wild about it.",
    "owned": false
  },
  {
    "id": 210,
    "name": "granbull",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
    "color": "rgb(112, 90, 159)",
    "desc": "While it has powerful jaws, it doesn’t care for disputes, so it rarely has a chance to display their might.",
    "owned": false
  },
  {
    "id": 211,
    "name": "qwilfish",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
    "color": "gray",
    "desc": "Qwilfish sucks in water, inflating itself. This Pokémon uses the pressure of the water it swallowed to shoot toxic quills all at once from all over its body. It finds swimming somewhat challenging.",
    "owned": false
  },
  {
    "id": 212,
    "name": "scizor",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Its body is like steel. Its tough, heavy pincers are more suited to smashing enemies than grabbing them.",
    "owned": false
  },
  {
    "id": 213,
    "name": "shuckle",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
    "color": "yellow",
    "desc": "Shuckle quietly hides itself under rocks, keeping its body concealed inside its hard shell while eating berries it has stored away. The berries mix with its body fluids to become a juice.",
    "owned": false
  },
  {
    "id": 214,
    "name": "heracross",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It’s proud of its thick horn. In Alola, its biggest rival is Vikavolt, which it’s always fighting with.",
    "owned": false
  },
  {
    "id": 215,
    "name": "sneasel",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
    "color": "black",
    "desc": "They will cooperate to steal eggs from the nests of bird Pokémon, but fights break out to determine which one gets to eat the eggs.",
    "owned": false
  },
  {
    "id": 216,
    "name": "teddiursa",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
    "color": "rgb(210, 106, 36)",
    "desc": "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill.",
    "owned": false
  },
  {
    "id": 217,
    "name": "ursaring",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
    "color": "rgb(210, 106, 36)",
    "desc": "In the forests inhabited by Ursaring, it is said that there are many streams and towering trees where they gather food. This Pokémon walks through its forest gathering food every day.",
    "owned": false
  },
  {
    "id": 218,
    "name": "slugma",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Slugma does not have any blood in its body. Instead, intensely hot magma circulates throughout this Pokémon’s body, carrying essential nutrients and oxygen to its organs.",
    "owned": false
  },
  {
    "id": 219,
    "name": "magcargo",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Magcargo’s body temperature is approximately 18,000 degrees Fahrenheit. Water is vaporized on contact. If this Pokémon is caught in the rain, the raindrops instantly turn into steam, cloaking the area in a thick fog.",
    "owned": false
  },
  {
    "id": 220,
    "name": "swinub",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Swinub roots for food by rubbing its snout against the ground. Its favorite food is a mushroom that grows under the cover of dead grass. This Pokémon occasionally roots out hot springs.",
    "owned": false
  },
  {
    "id": 221,
    "name": "piloswine",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Piloswine is covered by a thick coat of long hair that enables it to endure the freezing cold. This Pokémon uses its tusks to dig up food that has been buried under ice.",
    "owned": false
  },
  {
    "id": 222,
    "name": "corsola",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
    "color": "pink",
    "desc": "The pink of Corsola that live in Alola is deep and vibrant, thanks to seas filled with nutrition.",
    "owned": false
  },
  {
    "id": 223,
    "name": "remoraid",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
    "color": "gray",
    "desc": "This Pokémon clings to Mantine and shares in its prosperity. When its Mantine is attacked, Remoraid will fight alongside it!",
    "owned": false
  },
  {
    "id": 224,
    "name": "octillery",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
    "color": "rgb(255, 69, 58)",
    "desc": "The ink it spits when escaping is special. It contains a substance that dulls the sense of smell, so Pokémon with keen noses get lost.",
    "owned": false
  },
  {
    "id": 225,
    "name": "delibird",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
    "color": "rgb(255, 69, 58)",
    "desc": "It shares its food with people who are stranded. Because Delibird is omnivorous, sometimes it gives those people bug Pokémon.",
    "owned": false
  },
  {
    "id": 226,
    "name": "mantine",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Postcards and posters featuring Mantine leaping elegantly above the waves are popular souvenirs of Alola.",
    "owned": false
  },
  {
    "id": 227,
    "name": "skarmory",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
    "color": "gray",
    "desc": "The wing feathers it sheds can be processed and made into knives whose sharpness is recognized by the finest chefs.",
    "owned": false
  },
  {
    "id": 228,
    "name": "houndour",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
    "color": "black",
    "desc": "It cooperates with others skillfully. When it becomes your partner, it’s very loyal to you as its Trainer and will obey your orders.",
    "owned": false
  },
  {
    "id": 229,
    "name": "houndoom",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    "color": "black",
    "desc": "They spew flames mixed with poison to finish off their opponents. They divvy up their prey evenly among the members of their pack.",
    "owned": false
  },
  {
    "id": 230,
    "name": "kingdra",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Kingdra sleeps on the seafloor where it is otherwise devoid of life. When a storm arrives, the Pokémon is said to awaken and wander about in search of prey.",
    "owned": false
  },
  {
    "id": 231,
    "name": "phanpy",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Phanpy uses its long nose to shower itself. When others gather around, they thoroughly douse each other with water. These Pokémon can be seen drying their soaking-wet bodies at the edge of water.",
    "owned": false
  },
  {
    "id": 232,
    "name": "donphan",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
    "color": "gray",
    "desc": "If Donphan were to tackle with its hard body, even a house could be destroyed. Using its massive strength, the Pokémon helps clear rock and mud slides that block mountain trails.",
    "owned": false
  },
  {
    "id": 233,
    "name": "porygon2",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
    "color": "rgb(255, 69, 58)",
    "desc": "AI has been installed in it. It learns various things all on its own, but it even remembers things it doesn’t need to know.",
    "owned": false
  },
  {
    "id": 234,
    "name": "stantler",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.",
    "owned": false
  },
  {
    "id": 235,
    "name": "smeargle",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
    "color": "white",
    "desc": "The fluid of Smeargle’s tail secretions changes in the intensity of its hue as the Pokémon’s emotions change.",
    "owned": false
  },
  {
    "id": 236,
    "name": "tyrogue",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Tyrogue becomes stressed out if it does not get to train every day. When raising this Pokémon, the Trainer must establish and uphold various training methods.",
    "owned": false
  },
  {
    "id": 237,
    "name": "hitmontop",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Hitmontop spins on its head at high speed, all the while delivering kicks. This technique is a remarkable mix of both offense and defense at the same time. The Pokémon travels faster spinning than it does walking.",
    "owned": false
  },
  {
    "id": 238,
    "name": "smoochum",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
    "color": "pink",
    "desc": "When it examines things, before touching them with its hands, it makes lip contact and then diligently licks all the dirt off its lips.",
    "owned": false
  },
  {
    "id": 239,
    "name": "elekid",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
    "color": "yellow",
    "desc": "When it hears the crash of thunder, Elekid’s mood improves. It can be useful to record that sound and play it when Elekid’s feeling down.",
    "owned": false
  },
  {
    "id": 240,
    "name": "magby",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
    "color": "rgb(255, 69, 58)",
    "desc": "When flames drip from its nose, that means it has a cold. Have it lie down for a nice rest in some magma.",
    "owned": false
  },
  {
    "id": 241,
    "name": "miltank",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    "color": "pink",
    "desc": "It produces over five gallons of milk a day. The higher the quality of the pastures it lives in, the richer and tastier its milk becomes.",
    "owned": false
  },
  {
    "id": 242,
    "name": "blissey",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
    "color": "pink",
    "desc": "Their eggs are such a delicacy that some say eating one will bring you happiness. These eggs fetch the highest prices on the market.",
    "owned": false
  },
  {
    "id": 243,
    "name": "raikou",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
    "color": "yellow",
    "desc": "Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.",
    "owned": false
  },
  {
    "id": 244,
    "name": "entei",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.",
    "owned": false
  },
  {
    "id": 245,
    "name": "suicune",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.",
    "owned": false
  },
  {
    "id": 246,
    "name": "larvitar",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Born underground, it eats its way through dirt to the surface, where its parents are. It doesn’t deal well with the bright light it finds there.",
    "owned": false
  },
  {
    "id": 247,
    "name": "pupitar",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
    "color": "gray",
    "desc": "This troublesome Pokémon can’t wait to evolve, so it relieves its stress by wildly propelling itself around using compressed gas.",
    "owned": false
  },
  {
    "id": 248,
    "name": "tyranitar",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It wanders through the mountains seeking opponents to fight. If it finds an opponent that’s not worthy, Tyranitar ignores it and wanders on.",
    "owned": false
  },
  {
    "id": 249,
    "name": "lugia",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    "color": "white",
    "desc": "Lugia’s wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.",
    "owned": false
  },
  {
    "id": 250,
    "name": "ho-oh",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.",
    "owned": false
  },
  {
    "id": 251,
    "name": "celebi",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
    "color": "rgb(52, 199, 89)",
    "desc": "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
    "owned": false
  },
  {
    "id": 252,
    "name": "treecko",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Treecko is cool, calm, and collected—it never panics under any situation. If a bigger foe were to glare at this Pokémon, it would glare right back without conceding an inch of ground.",
    "owned": false
  },
  {
    "id": 253,
    "name": "grovyle",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
    "color": "rgb(52, 199, 89)",
    "desc": "This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.",
    "owned": false
  },
  {
    "id": 254,
    "name": "sceptile",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Sceptile has seeds growing on its back. They are said to be bursting with nutrients that revitalize trees. This Pokémon raises the trees in a forest with loving care.",
    "owned": false
  },
  {
    "id": 255,
    "name": "torchic",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Torchic has a place inside its body where it keeps its flame. Give it a hug—it will be glowing with warmth. This Pokémon is covered all over by a fluffy coat of down.",
    "owned": false
  },
  {
    "id": 256,
    "name": "combusken",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Combusken battles with the intensely hot flames it spews from its beak and with outstandingly destructive kicks. This Pokémon’s cry is very loud and distracting.",
    "owned": false
  },
  {
    "id": 257,
    "name": "blaziken",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Blaziken has incredibly strong legs—it can easily clear a 30-story building in one leap. This Pokémon’s blazing punches leave its foes scorched and blackened.",
    "owned": false
  },
  {
    "id": 258,
    "name": "mudkip",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    "color": "rgb(10, 132, 255)",
    "desc": "In water, Mudkip breathes using the gills on its cheeks. If it is faced with a tight situation in battle, this Pokémon will unleash its amazing power—it can crush rocks bigger than itself.",
    "owned": false
  },
  {
    "id": 259,
    "name": "marshtomp",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Marshtomp is much faster at traveling through mud than it is at swimming. This Pokémon’s hindquarters exhibit obvious development, giving it the ability to walk on just its hind legs.",
    "owned": false
  },
  {
    "id": 260,
    "name": "swampert",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Swampert predicts storms by sensing subtle differences in the sounds of waves and tidal winds with its fins. If a storm is approaching, it piles up boulders to protect itself.",
    "owned": false
  },
  {
    "id": 261,
    "name": "poochyena",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
    "color": "gray",
    "desc": "Poochyena is an omnivore—it will eat anything. A distinguishing feature is how large its fangs are compared to its body. This Pokémon tries to intimidate its foes by making the hair on its tail bristle out.",
    "owned": false
  },
  {
    "id": 262,
    "name": "mightyena",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
    "color": "gray",
    "desc": "Mightyena travel and act as a pack in the wild. The memory of its life in the wild compels the Pokémon to obey only those Trainers that it recognizes to possess superior skill.",
    "owned": false
  },
  {
    "id": 263,
    "name": "zigzagoon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
    "color": "rgb(210, 106, 36)",
    "desc": "The hair on Zigzagoon’s back is bristly. It rubs the hard back hair against trees to leave its territorial markings. This Pokémon may play dead to fool foes in battle.",
    "owned": false
  },
  {
    "id": 264,
    "name": "linoone",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
    "color": "white",
    "desc": "When hunting, Linoone will make a beeline straight for the prey at a full run. While this Pokémon is capable of topping 60 mph, it has to come to a screeching halt before it can turn.",
    "owned": false
  },
  {
    "id": 265,
    "name": "wurmple",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Wurmple is targeted by Swellow as prey. This Pokémon will try to resist by pointing the spikes on its rear at the attacking predator. It will weaken the foe by leaking poison from the spikes.",
    "owned": false
  },
  {
    "id": 266,
    "name": "silcoon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
    "color": "white",
    "desc": "Silcoon was thought to endure hunger and not consume anything before its evolution. However, it is now thought that this Pokémon slakes its thirst by drinking rainwater that collects on its silk.",
    "owned": false
  },
  {
    "id": 267,
    "name": "beautifly",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
    "color": "yellow",
    "desc": "Beautifly has a long mouth like a coiled needle, which is very convenient for collecting pollen from flowers. This Pokémon rides the spring winds as it flits around gathering pollen.",
    "owned": false
  },
  {
    "id": 268,
    "name": "cascoon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
    "color": "rgb(112, 90, 159)",
    "desc": "If it is attacked, Cascoon remains motionless however badly it may be hurt. It does so because if it were to move, its body would be weak upon evolution. This Pokémon will also not forget the pain it endured.",
    "owned": false
  },
  {
    "id": 269,
    "name": "dustox",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
    "color": "rgb(52, 199, 89)",
    "desc": "When Dustox flaps its wings, a fine dust is scattered all over. This dust is actually a powerful poison that will even make a pro wrestler sick. This Pokémon searches for food using its antennae like radar.",
    "owned": false
  },
  {
    "id": 270,
    "name": "lotad",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Lotad is said to have dwelled on land before. However, this Pokémon is thought to have returned to water because the leaf on its head grew large and heavy. It now lives by floating atop the water.",
    "owned": false
  },
  {
    "id": 271,
    "name": "lombre",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Lombre’s entire body is covered by a slippery, slimy film. It feels horribly unpleasant to be touched by this Pokémon’s hands. Lombre is often mistaken for a human child.",
    "owned": false
  },
  {
    "id": 272,
    "name": "ludicolo",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Upon hearing an upbeat and cheerful rhythm, the cells in Ludicolo’s body become very energetic and active. Even in battle, this Pokémon will exhibit an amazing amount of power.",
    "owned": false
  },
  {
    "id": 273,
    "name": "seedot",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Seedot looks exactly like an acorn when it is dangling from a tree branch. It startles other Pokémon by suddenly moving. This Pokémon polishes its body once a day using leaves.",
    "owned": false
  },
  {
    "id": 274,
    "name": "nuzleaf",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
    "color": "rgb(210, 106, 36)",
    "desc": "This Pokémon pulls out the leaf on its head and makes a flute with it. The sound of Nuzleaf’s flute strikes fear and uncertainty in the hearts of people lost in a forest.",
    "owned": false
  },
  {
    "id": 275,
    "name": "shiftry",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Shiftry’s large fans generate awesome gusts of wind at a speed close to 100 feet per second. The whipped-up wind blows anything away. This Pokémon chooses to live quietly deep in forests.",
    "owned": false
  },
  {
    "id": 276,
    "name": "taillow",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Taillow is young—it has only just left its nest. As a result, it sometimes becomes lonesome and cries at night. This Pokémon feeds on Wurmple that live in forests.",
    "owned": false
  },
  {
    "id": 277,
    "name": "swellow",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Swellow is very conscientious about the upkeep of its glossy wings. Once two Swellow are gathered, they diligently take care of cleaning each other’s wings.",
    "owned": false
  },
  {
    "id": 278,
    "name": "wingull",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
    "color": "white",
    "desc": "With its long, thin wings, it catches updrafts and flies like a glider high up into the sky.",
    "owned": false
  },
  {
    "id": 279,
    "name": "pelipper",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
    "color": "yellow",
    "desc": "It places small Pokémon into its spacious beak and carries them around. No one knows where it’s taking them.",
    "owned": false
  },
  {
    "id": 280,
    "name": "ralts",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
    "color": "white",
    "desc": "Ralts has the ability to sense the emotions of people. If its Trainer is in a cheerful mood, this Pokémon grows cheerful and joyous in the same way.",
    "owned": false
  },
  {
    "id": 281,
    "name": "kirlia",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
    "color": "white",
    "desc": "Kirlia uses the horns on its head to amplify its psychokinetic power. When the Pokémon uses its power, the air around it becomes distorted, creating mirages of nonexistent scenery.",
    "owned": false
  },
  {
    "id": 282,
    "name": "gardevoir",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    "color": "white",
    "desc": "Gardevoir has the psychokinetic power to distort the dimensions and create a small black hole. This Pokémon will try to protect its Trainer even at the risk of its own life.",
    "owned": false
  },
  {
    "id": 283,
    "name": "surskit",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
    "color": "rgb(10, 132, 255)",
    "desc": "If it’s in a pinch, it will secrete a sweet liquid from the tip of its head. Syrup made from gathering that liquid is tasty on bread.",
    "owned": false
  },
  {
    "id": 284,
    "name": "masquerain",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Masquerain intimidates enemies with the eyelike patterns of its eyespots. If that doesn’t work, it deftly makes its escape on its set of four wings.",
    "owned": false
  },
  {
    "id": 285,
    "name": "shroomish",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
    "color": "rgb(210, 106, 36)",
    "desc": "If Shroomish senses danger, it shakes its body and scatters spores from the top of its head. This Pokémon’s spores are so toxic, they make trees and weeds wilt.",
    "owned": false
  },
  {
    "id": 286,
    "name": "breloom",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
    "color": "rgb(52, 199, 89)",
    "desc": "The seeds ringing Breloom’s tail are made of hardened toxic spores. It is horrible to eat the seeds. Just taking a bite of this Pokémon’s seed will cause your stomach to rumble.",
    "owned": false
  },
  {
    "id": 287,
    "name": "slakoth",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless. It is rare to see this Pokémon in motion.",
    "owned": false
  },
  {
    "id": 288,
    "name": "vigoroth",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
    "color": "white",
    "desc": "Vigoroth is simply incapable of remaining still. Even when it tries to sleep, the blood in its veins grows agitated, compelling this Pokémon to run wild throughout the jungle before it can settle down.",
    "owned": false
  },
  {
    "id": 289,
    "name": "slaking",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Wherever Slaking live, rings of over a yard in diameter appear in grassy fields. They are made by the Pokémon as it eats all the grass within reach while lying prone on the ground.",
    "owned": false
  },
  {
    "id": 290,
    "name": "nincada",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
    "color": "gray",
    "desc": "Nincada lives underground. It uses its sharp claws to carve the roots of trees and absorb moisture and nutrients. This Pokémon can’t withstand bright sunlight so avoids it.",
    "owned": false
  },
  {
    "id": 291,
    "name": "ninjask",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
    "color": "yellow",
    "desc": "If Ninjask is not trained properly, it will refuse to obey the Trainer and cry loudly continuously. Because of this quality, this Pokémon is said to be one that puts the Trainer’s abilities to the test.",
    "owned": false
  },
  {
    "id": 292,
    "name": "shedinja",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Shedinja is a peculiar Pokémon. It seems to appear unsought in a Poké Ball after a Nincada evolves. This bizarre Pokémon is entirely immobile—it doesn’t even breathe.",
    "owned": false
  },
  {
    "id": 293,
    "name": "whismur",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
    "color": "pink",
    "desc": "Whismur is very timid. If it starts to cry loudly, it becomes startled by its own crying and cries even harder. When it finally stops crying, the Pokémon goes to sleep, all tired out.",
    "owned": false
  },
  {
    "id": 294,
    "name": "loudred",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Loudred shouts while stamping its feet. After it finishes shouting, this Pokémon becomes incapable of hearing anything for a while. This is considered to be a weak point.",
    "owned": false
  },
  {
    "id": 295,
    "name": "exploud",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Exploud communicates its feelings to the others by emitting whistle-like sounds from the tubes on its body. This Pokémon only raises its voice when it is in battle.",
    "owned": false
  },
  {
    "id": 296,
    "name": "makuhita",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
    "color": "yellow",
    "desc": "It practices its slaps by repeatedly slapping tree trunks. It has been known to slap an Exeggutor and get flung away.",
    "owned": false
  },
  {
    "id": 297,
    "name": "hariyama",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Although they enjoy comparing their strength, they’re also kind. They value etiquette, praising opponents they battle.",
    "owned": false
  },
  {
    "id": 298,
    "name": "azurill",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Azurill’s tail is large and bouncy. It is packed full of the nutrients this Pokémon needs to grow. Azurill can be seen bouncing and playing on its big, rubbery tail.",
    "owned": false
  },
  {
    "id": 299,
    "name": "nosepass",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
    "color": "gray",
    "desc": "It moves less than an inch a year, but when it’s in a jam, it will spin and drill down into the ground in a split second.",
    "owned": false
  },
  {
    "id": 300,
    "name": "skitty",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
    "color": "pink",
    "desc": "Skitty is known to chase around playfully after its own tail. In the wild, this Pokémon lives in holes in the trees of forests. It is very popular as a pet because of its adorable looks.",
    "owned": false
  },
  {
    "id": 301,
    "name": "delcatty",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Delcatty sleeps anywhere it wants without keeping a permanent nest. If other Pokémon approach it as it sleeps, this Pokémon will never fight—it will just move away somewhere else.",
    "owned": false
  },
  {
    "id": 302,
    "name": "sableye",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It digs through the ground with its hard claws and crunches down gems with its thick pointy teeth. Carbink is its favorite food.",
    "owned": false
  },
  {
    "id": 303,
    "name": "mawile",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
    "color": "black",
    "desc": "A cunning and terrifying Pokémon, its cuteness makes opponents let down their guard—and then it swallows them whole with its huge jaws.",
    "owned": false
  },
  {
    "id": 304,
    "name": "aron",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
    "color": "gray",
    "desc": "Aron has a body of steel. With one all-out charge, this Pokémon can demolish even a heavy dump truck. The destroyed dump truck then becomes a handy meal for the Pokémon.",
    "owned": false
  },
  {
    "id": 305,
    "name": "lairon",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
    "color": "gray",
    "desc": "Lairon feeds on iron contained in rocks and water. It makes its nest on mountains where iron ore is buried. As a result, the Pokémon often clashes with humans mining the iron ore.",
    "owned": false
  },
  {
    "id": 306,
    "name": "aggron",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
    "color": "gray",
    "desc": "Aggron is protective of its environment. If its mountain is ravaged by a landslide or a fire, this Pokémon will haul topsoil to the area, plant trees, and beautifully restore its own territory.",
    "owned": false
  },
  {
    "id": 307,
    "name": "meditite",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Meditite heightens its inner energy through meditation. It survives on just one berry a day. Minimal eating is another aspect of this Pokémon’s training.",
    "owned": false
  },
  {
    "id": 308,
    "name": "medicham",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.",
    "owned": false
  },
  {
    "id": 309,
    "name": "electrike",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Friction between the air and its fur produces static electricity. When Electrike runs, it makes a crackling sound.",
    "owned": false
  },
  {
    "id": 310,
    "name": "manectric",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
    "color": "yellow",
    "desc": "Manectric can be found beneath unnatural thunderclouds. People say it can run at the same speed as lightning striking.",
    "owned": false
  },
  {
    "id": 311,
    "name": "plusle",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
    "color": "yellow",
    "desc": "When Plusle is cheering on its partner, it flashes with electric sparks from all over its body. If its partner loses, this Pokémon cries loudly.",
    "owned": false
  },
  {
    "id": 312,
    "name": "minun",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
    "color": "yellow",
    "desc": "Minun loves to cheer on its partner in battle. It gives off sparks from its body while it is doing so. If its partner is in trouble, this Pokémon gives off increasing amounts of sparks.",
    "owned": false
  },
  {
    "id": 313,
    "name": "volbeat",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
    "color": "gray",
    "desc": "Volbeat’s tail glows like a lightbulb. With other Volbeat, it uses its tail to draw geometric shapes in the night sky. This Pokémon loves the sweet aroma given off by Illumise.",
    "owned": false
  },
  {
    "id": 314,
    "name": "illumise",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.",
    "owned": false
  },
  {
    "id": 315,
    "name": "roselia",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
    "color": "rgb(52, 199, 89)",
    "desc": "On extremely rare occasions, a Roselia is said to appear with its flowers in unusual colors. The thorns on this Pokémon’s head contain a vicious poison.",
    "owned": false
  },
  {
    "id": 316,
    "name": "gulpin",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Most of Gulpin’s body is made up of its stomach—its heart and brain are very small in comparison. This Pokémon’s stomach contains special enzymes that dissolve anything.",
    "owned": false
  },
  {
    "id": 317,
    "name": "swalot",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Swalot has no teeth, so what it eats, it swallows whole, no matter what. Its cavernous mouth yawns widely. An automobile tire could easily fit inside this Pokémon’s mouth.",
    "owned": false
  },
  {
    "id": 318,
    "name": "carvanha",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
    "color": "rgb(255, 69, 58)",
    "desc": "They’re such cowards that they won’t hunt alone. When five or so of them get together, they suddenly turn ferocious!",
    "owned": false
  },
  {
    "id": 319,
    "name": "sharpedo",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
    "color": "rgb(10, 132, 255)",
    "desc": "People believe that carrying one of its discarded fangs will prevent mishaps at sea, so the fangs are made into accessories.",
    "owned": false
  },
  {
    "id": 320,
    "name": "wailmer",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It swims along with its mouth open and swallows down seawater along with its food. It sprays excess water out of its nostrils.",
    "owned": false
  },
  {
    "id": 321,
    "name": "wailord",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
    "color": "rgb(10, 132, 255)",
    "desc": "They eat so many fish Pokémon that when Wailord become too numerous, fishermen have to chase them off.",
    "owned": false
  },
  {
    "id": 322,
    "name": "numel",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
    "color": "yellow",
    "desc": "Numel stores magma of almost 2,200 degrees Fahrenheit within its body. If it gets wet, the magma cools and hardens. In that event, the Pokémon’s body grows heavy and its movements become sluggish.",
    "owned": false
  },
  {
    "id": 323,
    "name": "camerupt",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
    "color": "rgb(255, 69, 58)",
    "desc": "The humps on Camerupt’s back are formed by a transformation of its bones. They sometimes blast out molten magma. This Pokémon apparently erupts often when it is enraged.",
    "owned": false
  },
  {
    "id": 324,
    "name": "torkoal",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
    "color": "rgb(210, 106, 36)",
    "desc": "You can tell how it’s feeling by the smoke spouting from its shell. Tremendous velocity is a sign of good health.",
    "owned": false
  },
  {
    "id": 325,
    "name": "spoink",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
    "color": "black",
    "desc": "Spoink keeps a pearl on top of its head. The pearl functions to amplify this Pokémon’s psychokinetic powers. It is therefore on a constant search for a bigger pearl.",
    "owned": false
  },
  {
    "id": 326,
    "name": "grumpig",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Grumpig uses the black pearls on its body to wield its fantastic powers. When it is doing so, it dances bizarrely. This Pokémon’s black pearls are valuable as works of art.",
    "owned": false
  },
  {
    "id": 327,
    "name": "spinda",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Its steps are shaky and stumbling. Walking for a long time makes it feel sick.",
    "owned": false
  },
  {
    "id": 328,
    "name": "trapinch",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Its jaws are strong enough to crush rocks but so heavy that it can’t get up if it flips over. Sandile seize those moments as their chance.",
    "owned": false
  },
  {
    "id": 329,
    "name": "vibrava",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It vibrates its wings to generate ultrasonic waves, causing its prey to faint. Then it buries the prey alive in the sand to preserve it.",
    "owned": false
  },
  {
    "id": 330,
    "name": "flygon",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    "color": "rgb(52, 199, 89)",
    "desc": "By flapping their wings, Flygon cause sandstorms that conceal Krookodile. The team then splits the prey they catch.",
    "owned": false
  },
  {
    "id": 331,
    "name": "cacnea",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
    "color": "rgb(52, 199, 89)",
    "desc": "The more arid and harsh the environment, the more pretty and fragrant a flower Cacnea grows. This Pokémon battles by wildly swinging its thorny arms.",
    "owned": false
  },
  {
    "id": 332,
    "name": "cacturne",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
    "color": "rgb(52, 199, 89)",
    "desc": "If a traveler is going through a desert in the thick of night, Cacturne will follow in a ragtag group. The Pokémon are biding their time, waiting for the traveler to tire and become incapable of moving.",
    "owned": false
  },
  {
    "id": 333,
    "name": "swablu",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Swablu loves to make things clean. If it spots something dirty, it will wipe and polish it with its cottony wings. If its wings become dirty, this Pokémon finds a stream and showers itself.",
    "owned": false
  },
  {
    "id": 334,
    "name": "altaria",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Altaria sings in a gorgeous soprano. Its wings are like cotton clouds. This Pokémon catches updrafts with its buoyant wings and soars way up into the wild blue yonder.",
    "owned": false
  },
  {
    "id": 335,
    "name": "zangoose",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
    "color": "white",
    "desc": "Zangoose usually stays on all fours, but when angered, it gets up on its hind legs and extends its claws. This Pokémon shares a bitter rivalry with Seviper that dates back over generations.",
    "owned": false
  },
  {
    "id": 336,
    "name": "seviper",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
    "color": "black",
    "desc": "Seviper’s swordlike tail serves two purposes—it slashes foes and douses them with secreted poison. This Pokémon will not give up its long-running blood feud with Zangoose.",
    "owned": false
  },
  {
    "id": 337,
    "name": "lunatone",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
    "color": "yellow",
    "desc": "Lunatone becomes active around the time of the full moon. Instead of walking, it moves by floating in midair. The Pokémon’s intimidating red eyes cause all those who see it to become transfixed with fear.",
    "owned": false
  },
  {
    "id": 338,
    "name": "solrock",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Sunlight is the source of Solrock’s power. It is said to possess the ability to read the emotions of others. This Pokémon gives off intense heat while rotating its body.",
    "owned": false
  },
  {
    "id": 339,
    "name": "barboach",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
    "color": "gray",
    "desc": "Its entire body is gooey. When pecked at by bird Pokémon, it slips and slides its way to freedom.",
    "owned": false
  },
  {
    "id": 340,
    "name": "whiscash",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Whiscash shakes the ground at high intensities to intimidate its opponents. It swallows its prey whole—along with mud from the swamp floor.",
    "owned": false
  },
  {
    "id": 341,
    "name": "corphish",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Individuals that have been set free by Trainers who could no longer raise them have become common, and they can now be found in Alola.",
    "owned": false
  },
  {
    "id": 342,
    "name": "crawdaunt",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Its temperament is rough and it loves to fight, but as soon as its pincers break off, it turns cowardly. It stays timid until they grow back.",
    "owned": false
  },
  {
    "id": 343,
    "name": "baltoy",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Depictions of Pokémon similar to Baltoy have been found on the walls of caves where primitive humans lived.",
    "owned": false
  },
  {
    "id": 344,
    "name": "claydol",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
    "color": "black",
    "desc": "If it gets wet, its body melts. When rain starts to fall, it wraps its whole body up with its psychic powers to protect itself.",
    "owned": false
  },
  {
    "id": 345,
    "name": "lileep",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
    "color": "rgb(112, 90, 159)",
    "desc": "In ancient times, it lived in warm seas. It disguised itself as seaweed to ambush its prey and devoured them whole when they got close.",
    "owned": false
  },
  {
    "id": 346,
    "name": "cradily",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Normally, it lived on shallow sea shoals. When the tide went out, this Pokémon came up on land to search for prey.",
    "owned": false
  },
  {
    "id": 347,
    "name": "anorith",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
    "color": "gray",
    "desc": "When restored Anorith are released into the ocean, they don’t thrive, because the water composition has changed since their era.",
    "owned": false
  },
  {
    "id": 348,
    "name": "armaldo",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
    "color": "gray",
    "desc": "It lived on land and went out into the sea to hunt for prey. Its sharp claws were its greatest weapon.",
    "owned": false
  },
  {
    "id": 349,
    "name": "feebas",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
    "color": "rgb(210, 106, 36)",
    "desc": "They look ragged, so no one catches them. They look like they’d taste bad, so predators won’t eat them. And their numbers continue to grow.",
    "owned": false
  },
  {
    "id": 350,
    "name": "milotic",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
    "color": "pink",
    "desc": "While Milotic is said to be the most beautiful Pokémon, Trainers who like Feebas and have raised it are seemingly disappointed by Milotic.",
    "owned": false
  },
  {
    "id": 351,
    "name": "castform",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
    "color": "gray",
    "desc": "Although its form changes with the weather, that is apparently the result of a chemical reaction and not the result of its own free will.",
    "owned": false
  },
  {
    "id": 352,
    "name": "kecleon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It changes its hue to blend into its surroundings. If no one takes notice of it for too long, it will pout and never reveal itself.",
    "owned": false
  },
  {
    "id": 353,
    "name": "shuppet",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
    "color": "black",
    "desc": "It eats up emotions like malice, jealousy, and resentment, so some people are grateful for its presence.",
    "owned": false
  },
  {
    "id": 354,
    "name": "banette",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
    "color": "black",
    "desc": "It’s a stuffed toy that was thrown away and became possessed, ever searching for the one who threw it away so it can exact its revenge.",
    "owned": false
  },
  {
    "id": 355,
    "name": "duskull",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
    "color": "black",
    "desc": "Duskull wanders lost among the deep darkness of midnight. There is an oft-told admonishment given to misbehaving children that this Pokémon will spirit away bad children who earn scoldings from their mothers.",
    "owned": false
  },
  {
    "id": 356,
    "name": "dusclops",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
    "color": "black",
    "desc": "Dusclops absorbs anything, however large the object may be. This Pokémon hypnotizes its foe by waving its hands in a macabre manner and by bringing its single eye to bear. The hypnotized foe is made to do Dusclops’s bidding.",
    "owned": false
  },
  {
    "id": 357,
    "name": "tropius",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
    "color": "rgb(52, 199, 89)",
    "desc": "The bunches of fruit growing around the necks of Tropius in Alola are especially sweet compared to those in other regions.",
    "owned": false
  },
  {
    "id": 358,
    "name": "chimecho",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
    "color": "rgb(10, 132, 255)",
    "desc": "In high winds, Chimecho cries as it hangs from a tree branch or the eaves of a building using a suction cup on its head. This Pokémon plucks berries with its long tail and eats them.",
    "owned": false
  },
  {
    "id": 359,
    "name": "absol",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
    "color": "white",
    "desc": "The only thing unlucky about Absol is its appearance. It protects fields and warns people of disaster, so one ought to be grateful for it.",
    "owned": false
  },
  {
    "id": 360,
    "name": "wynaut",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Wynaut gather on moonlit nights to play by squeezing up against each other. By being squeezed, this Pokémon gains endurance and is trained to dole out powerful counterattacks.",
    "owned": false
  },
  {
    "id": 361,
    "name": "snorunt",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
    "color": "gray",
    "desc": "It feeds mainly on ice and snow. It’s only able to survive in a limited number of places in the warm Alola region.",
    "owned": false
  },
  {
    "id": 362,
    "name": "glalie",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
    "color": "gray",
    "desc": "It freezes its prey and chews them whole. However, it prefers to eat Pokémon like Vanillite that are already frozen.",
    "owned": false
  },
  {
    "id": 363,
    "name": "spheal",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Spheal always travels by rolling around on its ball-like body. When the season for ice floes arrives, this Pokémon can be seen rolling about on ice and crossing the sea.",
    "owned": false
  },
  {
    "id": 364,
    "name": "sealeo",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Sealeo often balances and rolls things on the tip of its nose. While the Pokémon is rolling something, it checks the object’s aroma and texture to determine whether it likes the object or not.",
    "owned": false
  },
  {
    "id": 365,
    "name": "walrein",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Walrein swims all over in frigid seawater while crushing icebergs with its grand, imposing tusks. Its thick layer of blubber makes enemy attacks bounce off harmlessly.",
    "owned": false
  },
  {
    "id": 366,
    "name": "clamperl",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Despite its appearance, it’s carnivorous. It clamps down on its prey with both sides of its shell and doesn’t let go until they stop moving.",
    "owned": false
  },
  {
    "id": 367,
    "name": "huntail",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It’s not the strongest swimmer. It wags its tail to lure in its prey and then gulps them down as soon as they get close.",
    "owned": false
  },
  {
    "id": 368,
    "name": "gorebyss",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
    "color": "pink",
    "desc": "The color of its body changes with the water temperature. The coloration of Gorebyss in Alola is almost blindingly vivid.",
    "owned": false
  },
  {
    "id": 369,
    "name": "relicanth",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
    "color": "gray",
    "desc": "Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered it.",
    "owned": false
  },
  {
    "id": 370,
    "name": "luvdisc",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
    "color": "pink",
    "desc": "There was an era when it was overfished due to the rumor that having one of its heart-shaped scales would enable you to find a sweetheart.",
    "owned": false
  },
  {
    "id": 371,
    "name": "bagon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Whenever it sees bird Pokémon flying through the sky, it becomes envious and smashes its surroundings to bits with headbutts.",
    "owned": false
  },
  {
    "id": 372,
    "name": "shelgon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
    "color": "white",
    "desc": "The cells within its body are changing at a bewildering pace. Its hard shell is made from the same substance as bone.",
    "owned": false
  },
  {
    "id": 373,
    "name": "salamence",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Overjoyed at finally being able to fly, it flies all over the place and usually doesn’t land until it’s completely exhausted and needs to sleep.",
    "owned": false
  },
  {
    "id": 374,
    "name": "beldum",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Instead of blood, magnetism flows through its body. When it’s feeling bad, try giving it a magnet.",
    "owned": false
  },
  {
    "id": 375,
    "name": "metang",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
    "color": "rgb(10, 132, 255)",
    "desc": "With its two brains, it fires powerful psychic energy to stop its prey in their tracks.",
    "owned": false
  },
  {
    "id": 376,
    "name": "metagross",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It boasts not only psychic powers but also fantastic strength. It grabs its prey with its four legs and holds them in place with its claws.",
    "owned": false
  },
  {
    "id": 377,
    "name": "regirock",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Regirock’s body is composed entirely of rocks. Recently, a study made the startling discovery that the rocks were all unearthed from different locations.",
    "owned": false
  },
  {
    "id": 378,
    "name": "regice",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Regice cloaks itself with frigid air of -328 degrees Fahrenheit. Things will freeze solid just by going near this Pokémon. Its icy body is so cold, it will not melt even if it is immersed in magma.",
    "owned": false
  },
  {
    "id": 379,
    "name": "registeel",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
    "color": "gray",
    "desc": "Registeel was imprisoned by people in ancient times. The metal composing its body is thought to be a curious substance that is not of this earth.",
    "owned": false
  },
  {
    "id": 380,
    "name": "latias",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Latias is highly intelligent and capable of understanding human speech. It is covered with a glass-like down. The Pokémon enfolds its body with its down and refracts light to alter its appearance.",
    "owned": false
  },
  {
    "id": 381,
    "name": "latios",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Latios will only open its heart to a Trainer with a compassionate spirit. This Pokémon can fly faster than a jet plane by folding its forelegs to minimize air resistance.",
    "owned": false
  },
  {
    "id": 382,
    "name": "kyogre",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Kyogre is said to be the personification of the sea itself. Legends tell of its many clashes against Groudon, as each sought to gain the power of nature.",
    "owned": false
  },
  {
    "id": 383,
    "name": "groudon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Through Primal Reversion and with nature’s full power, it will take back its true form. It can cause magma to erupt and expand the landmass of the world.",
    "owned": false
  },
  {
    "id": 384,
    "name": "rayquaza",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It flies forever through the ozone layer, consuming meteoroids for sustenance. The many meteoroids in its body provide the energy it needs to Mega Evolve.",
    "owned": false
  },
  {
    "id": 385,
    "name": "jirachi",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
    "color": "yellow",
    "desc": "Jirachi will awaken from its sleep of a thousand years if you sing to it in a voice of purity. It is said to make true any wish that people desire.",
    "owned": false
  },
  {
    "id": 386,
    "name": "deoxys-normal",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Deoxys emerged from a virus that came from space. It is highly intelligent and wields psychokinetic powers. This Pokémon shoots lasers from the crystalline organ on its chest.",
    "owned": false
  },
  {
    "id": 387,
    "name": "turtwig",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It undertakes photosynthesis with its body, making oxygen. The leaf on its head wilts if it is thirsty.",
    "owned": false
  },
  {
    "id": 388,
    "name": "grotle",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It knows where pure water wells up. It carries fellow Pokémon there on its back.",
    "owned": false
  },
  {
    "id": 389,
    "name": "torterra",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Small Pokémon occasionally gather on its unmoving back to begin building their nests.",
    "owned": false
  },
  {
    "id": 390,
    "name": "chimchar",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
    "color": "rgb(210, 106, 36)",
    "desc": "The gas made in its belly burns from its rear end. The fire burns weakly when it feels sick.",
    "owned": false
  },
  {
    "id": 391,
    "name": "monferno",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It uses ceilings and walls to launch aerial attacks. Its fiery tail is but one weapon.",
    "owned": false
  },
  {
    "id": 392,
    "name": "infernape",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It tosses its enemies around with agility. It uses all its limbs to fight in its own unique style.",
    "owned": false
  },
  {
    "id": 393,
    "name": "piplup",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold.",
    "owned": false
  },
  {
    "id": 394,
    "name": "prinplup",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It lives a solitary life. Its wings deliver wicked blows that can snap even the thickest of trees.",
    "owned": false
  },
  {
    "id": 395,
    "name": "empoleon",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
    "color": "rgb(10, 132, 255)",
    "desc": "The three horns that extend from its beak attest to its power. The leader has the biggest horns.",
    "owned": false
  },
  {
    "id": 396,
    "name": "starly",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
    "color": "rgb(210, 106, 36)",
    "desc": "They flock around mountains and fields, chasing after bug Pokémon. Their singing is noisy and annoying.",
    "owned": false
  },
  {
    "id": 397,
    "name": "staravia",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It lives in forests and fields. Squabbles over territory occur when flocks collide.",
    "owned": false
  },
  {
    "id": 398,
    "name": "staraptor",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
    "color": "rgb(210, 106, 36)",
    "desc": "When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings.",
    "owned": false
  },
  {
    "id": 399,
    "name": "bidoof",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It constantly gnaws on logs and rocks to whittle down its front teeth. It nests alongside water.",
    "owned": false
  },
  {
    "id": 400,
    "name": "bibarel",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It makes its nest by damming streams with bark and mud. It is known as an industrious worker.",
    "owned": false
  },
  {
    "id": 401,
    "name": "kricketot",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
    "color": "rgb(255, 69, 58)",
    "desc": "When its antennae hit each other, it sounds like the music of a xylophone.",
    "owned": false
  },
  {
    "id": 402,
    "name": "kricketune",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
    "color": "rgb(255, 69, 58)",
    "desc": "It signals its emotions with its melodies. Scientists are studying these melodic patterns.",
    "owned": false
  },
  {
    "id": 403,
    "name": "shinx",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
    "color": "rgb(10, 132, 255)",
    "desc": "All of its fur dazzles if danger is sensed. It flees while the foe is momentarily blinded.",
    "owned": false
  },
  {
    "id": 404,
    "name": "luxio",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes.",
    "owned": false
  },
  {
    "id": 405,
    "name": "luxray",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Luxray’s ability to see through objects comes in handy when it’s scouting for danger.",
    "owned": false
  },
  {
    "id": 406,
    "name": "budew",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Over the winter, it closes its bud and endures the cold. In spring, the bud opens and releases pollen.",
    "owned": false
  },
  {
    "id": 407,
    "name": "roserade",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
    "color": "rgb(52, 199, 89)",
    "desc": "With the movements of a dancer, it strikes with whips that are densely lined with poison thorns.",
    "owned": false
  },
  {
    "id": 408,
    "name": "cranidos",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
    "color": "rgb(10, 132, 255)",
    "desc": "A primeval Pokémon, it possesses a hard and sturdy skull, lacking any intelligence within.",
    "owned": false
  },
  {
    "id": 409,
    "name": "rampardos",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
    "color": "rgb(10, 132, 255)",
    "desc": "In ancient times, people would dig up fossils of this Pokémon and use its skull, which is harder than steel, to make helmets.",
    "owned": false
  },
  {
    "id": 410,
    "name": "shieldon",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
    "color": "gray",
    "desc": "A mild-mannered, herbivorous Pokémon, it used its face to dig up tree roots to eat. The skin on its face was plenty tough.",
    "owned": false
  },
  {
    "id": 411,
    "name": "bastiodon",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
    "color": "gray",
    "desc": "The bones of its face are huge and hard, so they were mistaken for its spine until after this Pokémon was successfully restored.",
    "owned": false
  },
  {
    "id": 412,
    "name": "burmy",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
    "color": "rgb(52, 199, 89)",
    "desc": "If its cloak is broken in battle, it quickly remakes the cloak with materials nearby.",
    "owned": false
  },
  {
    "id": 413,
    "name": "wormadam-plant",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
    "color": "rgb(52, 199, 89)",
    "desc": "When Burmy evolved, its cloak became a part of this Pokémon’s body. The cloak is never shed.",
    "owned": false
  },
  {
    "id": 414,
    "name": "mothim",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
    "color": "yellow",
    "desc": "It flutters around at night and steals honey from the Combee hive.",
    "owned": false
  },
  {
    "id": 415,
    "name": "combee",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
    "color": "yellow",
    "desc": "It collects and delivers honey to its colony. At night, they cluster to form a beehive and sleep.",
    "owned": false
  },
  {
    "id": 416,
    "name": "vespiquen",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
    "color": "yellow",
    "desc": "Its abdomen is a honeycomb for grubs. It raises its grubs on honey collected by Combee.",
    "owned": false
  },
  {
    "id": 417,
    "name": "pachirisu",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
    "color": "white",
    "desc": "A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity.",
    "owned": false
  },
  {
    "id": 418,
    "name": "buizel",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It inflates the flotation sac around its neck and pokes its head out of the water to see what is going on.",
    "owned": false
  },
  {
    "id": 419,
    "name": "floatzel",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Its flotation sac developed as a result of pursuing aquatic prey. It can double as a rubber raft.",
    "owned": false
  },
  {
    "id": 420,
    "name": "cherubi",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
    "color": "pink",
    "desc": "It evolves by sucking the energy out of the small ball where it had been storing nutrients.",
    "owned": false
  },
  {
    "id": 421,
    "name": "cherrim",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
    "color": "rgb(112, 90, 159)",
    "desc": "If it senses strong sunlight, it opens its folded petals to absorb the sun’s rays with its whole body.",
    "owned": false
  },
  {
    "id": 422,
    "name": "shellos",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
    "color": "rgb(112, 90, 159)",
    "desc": "While they normally live in the sea, they can function on land, too, until their skin dries out.",
    "owned": false
  },
  {
    "id": 423,
    "name": "gastrodon",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Long ago, it had a shell on its back. There’s now a vestigial plate on its back that’s hard but thin.",
    "owned": false
  },
  {
    "id": 424,
    "name": "ambipom",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
    "color": "rgb(112, 90, 159)",
    "desc": "In their search for comfortable trees, they get into territorial disputes with groups of Passimian. They win about half the time.",
    "owned": false
  },
  {
    "id": 425,
    "name": "drifloon",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Its round body is stuffed with souls and expands each time it leads someone away.",
    "owned": false
  },
  {
    "id": 426,
    "name": "drifblim",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
    "color": "rgb(112, 90, 159)",
    "desc": "There’s a rumor that if you catch a Drifblim floating on the wind at dusk, you’ll be carried away to the afterlife.",
    "owned": false
  },
  {
    "id": 427,
    "name": "buneary",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Its arms and legs are weak, but when it rolls its ears up tight and then unleashes them with its full force, it can smash boulders to dust.",
    "owned": false
  },
  {
    "id": 428,
    "name": "lopunny",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Lopunny regrows its coat twice a year. Mufflers and hats made from its fur are really warm.",
    "owned": false
  },
  {
    "id": 429,
    "name": "mismagius",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Feared for its wrath and the curses it spreads, this Pokémon will also, on a whim, cast spells that help people.",
    "owned": false
  },
  {
    "id": 430,
    "name": "honchkrow",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
    "color": "black",
    "desc": "It will absolutely not forgive failure from or betrayal by its goons. It has no choice in this if it wants to maintain the order of the flock.",
    "owned": false
  },
  {
    "id": 431,
    "name": "glameow",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
    "color": "gray",
    "desc": "When it’s happy, Glameow demonstrates beautiful movements of its tail, like a dancing ribbon.",
    "owned": false
  },
  {
    "id": 432,
    "name": "purugly",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
    "color": "gray",
    "desc": "To make itself appear intimidatingly beefy, it tightly cinches its waist with its twin tails.",
    "owned": false
  },
  {
    "id": 433,
    "name": "chingling",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
    "color": "yellow",
    "desc": "There is an orb inside its mouth. When it hops, the orb bounces all over and makes a ringing sound.",
    "owned": false
  },
  {
    "id": 434,
    "name": "stunky",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It protects itself by spraying a noxious fluid from its rear. The stench lingers for 24 hours.",
    "owned": false
  },
  {
    "id": 435,
    "name": "skuntank",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It sprays a stinky fluid from its tail. The fluid smells worse the longer it is allowed to fester.",
    "owned": false
  },
  {
    "id": 436,
    "name": "bronzor",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Implements shaped like it were discovered in ancient tombs. It is unknown if they are related.",
    "owned": false
  },
  {
    "id": 437,
    "name": "bronzong",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Ancient people believed that petitioning Bronzong for rain was the way to make crops grow.",
    "owned": false
  },
  {
    "id": 438,
    "name": "bonsly",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It discharges moisture from its eyes, making it look like it’s crying—apparently an effective way of getting enemies to let down their guard.",
    "owned": false
  },
  {
    "id": 439,
    "name": "mime-jr",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
    "color": "pink",
    "desc": "It does its absolute best to mimic the movements and expressions of its opponents, but it’s still not very good at it.",
    "owned": false
  },
  {
    "id": 440,
    "name": "happiny",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
    "color": "pink",
    "desc": "Usually it’s a well-behaved Pokémon, but if you take its round rock away, it will cry and fuss and throw a big old tantrum.",
    "owned": false
  },
  {
    "id": 441,
    "name": "chatot",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
    "color": "black",
    "desc": "It can learn and speak human words. If they gather, they all learn the same saying.",
    "owned": false
  },
  {
    "id": 442,
    "name": "spiritomb",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It was bound to a fissure in an odd keystone as punishment for misdeeds 500 years ago.",
    "owned": false
  },
  {
    "id": 443,
    "name": "gible",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It reacts to anything that moves—flies right at it and bites it. Sometimes it injures itself, but it doesn’t care too much.",
    "owned": false
  },
  {
    "id": 444,
    "name": "gabite",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It loves shiny things. When it finds a Sableye trying to catch a Carbink, Gabite becomes furiously angry and attacks the Sableye.",
    "owned": false
  },
  {
    "id": 445,
    "name": "garchomp",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It flies at the speed of sound while searching for prey, and it has midair battles with Salamence as the two compete for food.",
    "owned": false
  },
  {
    "id": 446,
    "name": "munchlax",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
    "color": "black",
    "desc": "It hides food under its long fur, but it sometimes forgets about it and causes a stinky disturbance.",
    "owned": false
  },
  {
    "id": 447,
    "name": "riolu",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It knows how people and Pokémon feel by looking at their auras. It doesn’t approach dangerous opponents.",
    "owned": false
  },
  {
    "id": 448,
    "name": "lucario",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It concentrates its mental energy and fires off mysterious waves called auras, which can crush boulders of large size to dust.",
    "owned": false
  },
  {
    "id": 449,
    "name": "hippopotas",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It enshrouds itself with sand to protect itself from germs. It does not enjoy getting wet.",
    "owned": false
  },
  {
    "id": 450,
    "name": "hippowdon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It blasts internally stored sand from ports on its body to create a towering twister for attack.",
    "owned": false
  },
  {
    "id": 451,
    "name": "skorupi",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It burrows under the sand to lie in wait for prey. Its tail claws can inject its prey with a savage poison.",
    "owned": false
  },
  {
    "id": 452,
    "name": "drapion",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It has the power in its clawed arms to make scrap of a car. The tips of its claws release poison.",
    "owned": false
  },
  {
    "id": 453,
    "name": "croagunk",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.",
    "owned": false
  },
  {
    "id": 454,
    "name": "toxicroak",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Its knuckle claws secrete a toxin so vile that even a scratch could prove fatal.",
    "owned": false
  },
  {
    "id": 455,
    "name": "carnivine",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down.",
    "owned": false
  },
  {
    "id": 456,
    "name": "finneon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
    "color": "rgb(10, 132, 255)",
    "desc": "When night falls, their pink patterns begin to shine. They’re popular with divers, so there are resorts that feed them to keep them close.",
    "owned": false
  },
  {
    "id": 457,
    "name": "lumineon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Deep down at the bottom of the ocean, prey is scarce. Lumineon get into fierce disputes with Lanturn over food.",
    "owned": false
  },
  {
    "id": 458,
    "name": "mantyke",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It’s highly friendly and easily tamed. Tours that take people swimming with Mantyke are a super-popular beach activity.",
    "owned": false
  },
  {
    "id": 459,
    "name": "snover",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
    "color": "white",
    "desc": "In the spring, it grows berries with the texture of frozen treats around its belly.",
    "owned": false
  },
  {
    "id": 460,
    "name": "abomasnow",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
    "color": "white",
    "desc": "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
    "owned": false
  },
  {
    "id": 461,
    "name": "weavile",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
    "color": "black",
    "desc": "One Weavile will trip a Sandshrew and flip it over, and then another Weavile will deal the finishing blow with its sharp claws.",
    "owned": false
  },
  {
    "id": 462,
    "name": "magnezone",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
    "color": "gray",
    "desc": "It uses radar to monitor its territory. Intruders are quickly disposed of with a hyper beam.",
    "owned": false
  },
  {
    "id": 463,
    "name": "lickilicky",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
    "color": "pink",
    "desc": "A contest is under way to determine which one can stick its tongue out the farthest. The current record is...more than 82 feet.",
    "owned": false
  },
  {
    "id": 464,
    "name": "rhyperior",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
    "color": "gray",
    "desc": "It puts rocks in holes in its palms and uses its muscles to shoot them. Geodude are shot at rare times.",
    "owned": false
  },
  {
    "id": 465,
    "name": "tangrowth",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Its vines grow so profusely that, in the warm season, you can’t even see its eyes.",
    "owned": false
  },
  {
    "id": 466,
    "name": "electivire",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
    "color": "yellow",
    "desc": "It grips its tail, which spews electricity, and then beats down opponents with the power of its electrified fist.",
    "owned": false
  },
  {
    "id": 467,
    "name": "magmortar",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
    "color": "rgb(255, 69, 58)",
    "desc": "There are still quite a few factories that rely on the flames provided by Magmortar to process metals.",
    "owned": false
  },
  {
    "id": 468,
    "name": "togekiss",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    "color": "white",
    "desc": "It shares many blessings with people who respect one another’s rights and avoid needless strife.",
    "owned": false
  },
  {
    "id": 469,
    "name": "yanmega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
    "color": "rgb(52, 199, 89)",
    "desc": "This six-legged Pokémon is easily capable of transporting an adult in flight. The wings on its tail help it stay balanced.",
    "owned": false
  },
  {
    "id": 470,
    "name": "leafeon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Although it doesn’t like disputes, it will sharpen the leaf on its tail into a blade and fight if it has to protect its friends.",
    "owned": false
  },
  {
    "id": 471,
    "name": "glaceon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It protects itself by freezing its fur into sharp needles. It can drop its body temperature below –75 degrees Fahrenheit.",
    "owned": false
  },
  {
    "id": 472,
    "name": "gliscor",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Its flight is soundless. It uses its lengthy tail to carry off its prey... Then its elongated fangs do the rest.",
    "owned": false
  },
  {
    "id": 473,
    "name": "mamoswine",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Its impressive tusks are made of ice. The population thinned when it turned warm after the ice age.",
    "owned": false
  },
  {
    "id": 474,
    "name": "porygon-z",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Its behavior is noticeably unstable, which is apparently due to the incompetence of the engineer who updated its programming.",
    "owned": false
  },
  {
    "id": 475,
    "name": "gallade",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
    "color": "white",
    "desc": "A master of courtesy and swordsmanship, it fights using extending swords on its elbows.",
    "owned": false
  },
  {
    "id": 476,
    "name": "probopass",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
    "color": "gray",
    "desc": "Although it can control its units known as Mini-Noses, they sometimes get lost and don’t come back.",
    "owned": false
  },
  {
    "id": 477,
    "name": "dusknoir",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
    "color": "black",
    "desc": "The antenna on its head captures radio waves from the world of spirits that command it to take people there.",
    "owned": false
  },
  {
    "id": 478,
    "name": "froslass",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
    "color": "white",
    "desc": "It freezes hikers who have come to climb snowy mountains and carries them back to its home. It only goes after men it thinks are handsome.",
    "owned": false
  },
  {
    "id": 479,
    "name": "rotom",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Its body is composed of plasma. It is known to infiltrate electronic devices and wreak havoc.",
    "owned": false
  },
  {
    "id": 480,
    "name": "uxie",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
    "color": "yellow",
    "desc": "It is said that its emergence gave humans the intelligence to improve their quality of life.",
    "owned": false
  },
  {
    "id": 481,
    "name": "mesprit",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
    "color": "pink",
    "desc": "It sleeps at the bottom of a lake. Its spirit is said to leave its body to fly on the lake’s surface.",
    "owned": false
  },
  {
    "id": 482,
    "name": "azelf",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It is thought that Uxie, Mesprit, and Azelf all came from the same egg.",
    "owned": false
  },
  {
    "id": 483,
    "name": "dialga",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    "color": "white",
    "desc": "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
    "owned": false
  },
  {
    "id": 484,
    "name": "palkia",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It has the ability to distort space. It is described as a deity in Sinnoh-region mythology.",
    "owned": false
  },
  {
    "id": 485,
    "name": "heatran",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Boiling blood, like magma, circulates through its body. It makes its dwelling place in volcanic caves.",
    "owned": false
  },
  {
    "id": 486,
    "name": "regigigas",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
    "color": "white",
    "desc": "There is an enduring legend that states this Pokémon towed continents with ropes.",
    "owned": false
  },
  {
    "id": 487,
    "name": "giratina-altered",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
    "color": "black",
    "desc": "It was banished for its violence. It silently gazed upon the old world from the Distortion World.",
    "owned": false
  },
  {
    "id": 488,
    "name": "cresselia",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
    "color": "yellow",
    "desc": "Those who sleep holding Cresselia’s feather are assured of joyful dreams. It is said to represent the crescent moon.",
    "owned": false
  },
  {
    "id": 489,
    "name": "phione",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It drifts in warm seas. It always returns to where it was born, no matter how far it may have drifted.",
    "owned": false
  },
  {
    "id": 490,
    "name": "manaphy",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It starts its life with a wondrous power that permits it to bond with any kind of Pokémon.",
    "owned": false
  },
  {
    "id": 491,
    "name": "darkrai",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
    "color": "black",
    "desc": "It can lull people to sleep and make them dream. It is active during nights of the new moon.",
    "owned": false
  },
  {
    "id": 492,
    "name": "shaymin-land",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
    "color": "rgb(52, 199, 89)",
    "desc": "The blooming of Gracidea flowers confers the power of flight upon it. Feelings of gratitude are the message it delivers.",
    "owned": false
  },
  {
    "id": 493,
    "name": "arceus",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
    "color": "white",
    "desc": "It is told in mythology that this Pokémon was born before the universe even existed.",
    "owned": false
  },
  {
    "id": 494,
    "name": "victini",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
    "color": "yellow",
    "desc": "When it shares the infinite energy it creates, that being’s entire body will be overflowing with power.",
    "owned": false
  },
  {
    "id": 495,
    "name": "snivy",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
    "color": "rgb(52, 199, 89)",
    "desc": "They photosynthesize by bathing their tails in sunlight. When they are not feeling well, their tails droop.",
    "owned": false
  },
  {
    "id": 496,
    "name": "servine",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
    "color": "rgb(52, 199, 89)",
    "desc": "When it gets dirty, its leaves can’t be used in photosynthesis, so it always keeps itself clean.",
    "owned": false
  },
  {
    "id": 497,
    "name": "serperior",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It can stop its opponents’ movements with just a glare. It takes in solar energy and boosts it internally.",
    "owned": false
  },
  {
    "id": 498,
    "name": "tepig",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
    "color": "rgb(255, 69, 58)",
    "desc": "It loves to eat roasted berries, but sometimes it gets too excited and burns them to a crisp.",
    "owned": false
  },
  {
    "id": 499,
    "name": "pignite",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
    "color": "rgb(255, 69, 58)",
    "desc": "When its internal fire flares up, its movements grow sharper and faster. When in trouble, it emits smoke.",
    "owned": false
  },
  {
    "id": 500,
    "name": "emboar",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
    "color": "rgb(255, 69, 58)",
    "desc": "It has mastered fast and powerful fighting moves. It grows a beard of fire.",
    "owned": false
  },
  {
    "id": 501,
    "name": "oshawott",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It fights using the scalchop on its stomach. In response to an attack, it retaliates immediately by slashing.",
    "owned": false
  },
  {
    "id": 502,
    "name": "dewott",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
    "color": "rgb(10, 132, 255)",
    "desc": "As a result of strict training, each Dewott learns different forms for using the scalchops.",
    "owned": false
  },
  {
    "id": 503,
    "name": "samurott",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
    "color": "rgb(10, 132, 255)",
    "desc": "One swing of the sword incorporated in its armor can fell an opponent. A simple glare from one of them quiets everybody.",
    "owned": false
  },
  {
    "id": 504,
    "name": "patrat",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Extremely cautious, one of them will always be on the lookout, but it won’t notice a foe coming from behind.",
    "owned": false
  },
  {
    "id": 505,
    "name": "watchog",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
    "color": "rgb(210, 106, 36)",
    "desc": "When they see an enemy, their tails stand high, and they spit the seeds of berries stored in their cheek pouches.",
    "owned": false
  },
  {
    "id": 506,
    "name": "lillipup",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
    "color": "rgb(210, 106, 36)",
    "desc": "This Pokémon has excellent judgment. If it decides it can’t defeat an opponent, it immediately turns tail and vamooses.",
    "owned": false
  },
  {
    "id": 507,
    "name": "herdier",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
    "color": "gray",
    "desc": "The longer its black fur grows, the harder and more impervious it gets. Claws and fangs can’t easily penetrate it.",
    "owned": false
  },
  {
    "id": 508,
    "name": "stoutland",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
    "color": "gray",
    "desc": "It pays no mind to the cold, thanks to its long warm coat. Stoutland in Alola look a little uncomfortable.",
    "owned": false
  },
  {
    "id": 509,
    "name": "purrloin",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
    "color": "rgb(112, 90, 159)",
    "desc": "They steal from people for fun, but their victims can’t help but forgive them. Their deceptively cute act is perfect.",
    "owned": false
  },
  {
    "id": 510,
    "name": "liepard",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Stealthily, it sneaks up on its target, striking from behind before its victim has a chance to react.",
    "owned": false
  },
  {
    "id": 511,
    "name": "pansage",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It’s good at finding berries and gathers them from all over. It’s kind enough to share them with friends.",
    "owned": false
  },
  {
    "id": 512,
    "name": "simisage",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter.",
    "owned": false
  },
  {
    "id": 513,
    "name": "pansear",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
    "color": "rgb(255, 69, 58)",
    "desc": "This Pokémon lives in caves in volcanoes. The fire within the tuft on its head can reach 600 degrees Fahrenheit.",
    "owned": false
  },
  {
    "id": 514,
    "name": "simisear",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
    "color": "rgb(255, 69, 58)",
    "desc": "When it gets excited, embers rise from its head and tail and it gets hot. For some reason, it loves sweets.",
    "owned": false
  },
  {
    "id": 515,
    "name": "panpour",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
    "color": "rgb(10, 132, 255)",
    "desc": "The water stored inside the tuft on its head is full of nutrients. Plants that receive its water grow large.",
    "owned": false
  },
  {
    "id": 516,
    "name": "simipour",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It prefers places with clean water. When its tuft runs low, it replenishes it by siphoning up water with its tail.",
    "owned": false
  },
  {
    "id": 517,
    "name": "munna",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
    "color": "pink",
    "desc": "It eats the dreams of people and Pokémon. When it eats a pleasant dream, it expels pink-colored mist.",
    "owned": false
  },
  {
    "id": 518,
    "name": "musharna",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
    "color": "pink",
    "desc": "The dream mist coming from its forehead changes into many different colors depending on the dream that was eaten.",
    "owned": false
  },
  {
    "id": 519,
    "name": "pidove",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
    "color": "gray",
    "desc": "These Pokémon live in cities. They are accustomed to people. Flocks often gather in parks and plazas.",
    "owned": false
  },
  {
    "id": 520,
    "name": "tranquill",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
    "color": "gray",
    "desc": "No matter where in the world it goes, it knows where its nest is, so it never gets separated from its Trainer.",
    "owned": false
  },
  {
    "id": 521,
    "name": "unfezant",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
    "color": "gray",
    "desc": "Males have plumage on their heads. They will never let themselves feel close to anyone other than their Trainers.",
    "owned": false
  },
  {
    "id": 522,
    "name": "blitzle",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
    "color": "black",
    "desc": "Its mane shines when it discharges electricity. They use the frequency and rhythm of these flashes to communicate.",
    "owned": false
  },
  {
    "id": 523,
    "name": "zebstrika",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
    "color": "black",
    "desc": "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates.",
    "owned": false
  },
  {
    "id": 524,
    "name": "roggenrola",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
    "color": "rgb(10, 132, 255)",
    "desc": "The hexagonal hole is its ear. Deep in that ear is an energy core, so if you stick your hand in there, Roggenrola will be very angry!",
    "owned": false
  },
  {
    "id": 525,
    "name": "boldore",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
    "color": "rgb(10, 132, 255)",
    "desc": "The energy overflowing from its body has turned into orange crystals that are hard enough to smash diamonds.",
    "owned": false
  },
  {
    "id": 526,
    "name": "gigalith",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
    "color": "rgb(10, 132, 255)",
    "desc": "When it fires off energy with all its might, the power creates countless fissures on its body.",
    "owned": false
  },
  {
    "id": 527,
    "name": "woobat",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
    "color": "rgb(10, 132, 255)",
    "desc": "The heart-shaped mark left on a body after a Woobat has been attached to it is said to bring good fortune.",
    "owned": false
  },
  {
    "id": 528,
    "name": "swoobat",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Anyone who comes into contact with the ultrasonic waves emitted by a courting male experiences a positive mood shift.",
    "owned": false
  },
  {
    "id": 529,
    "name": "drilbur",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
    "color": "gray",
    "desc": "By spinning its body, it can dig straight through the ground at a speed of 30 mph.",
    "owned": false
  },
  {
    "id": 530,
    "name": "excadrill",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
    "color": "gray",
    "desc": "More than 300 feet below the surface, they build mazelike nests. Their activity can be destructive to subway tunnels.",
    "owned": false
  },
  {
    "id": 531,
    "name": "audino",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
    "color": "pink",
    "desc": "It touches others with the feelers on its ears, using the sound of their heartbeats to tell how they are feeling.",
    "owned": false
  },
  {
    "id": 532,
    "name": "timburr",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
    "color": "gray",
    "desc": "Always carrying squared logs, they help out with construction. As they grow, they carry bigger logs.",
    "owned": false
  },
  {
    "id": 533,
    "name": "gurdurr",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
    "color": "gray",
    "desc": "This Pokémon is so muscular and strongly built that even a group of wrestlers could not make it budge an inch.",
    "owned": false
  },
  {
    "id": 534,
    "name": "conkeldurr",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Rather than rely on force, they master moves that utilize the centrifugal force of spinning concrete.",
    "owned": false
  },
  {
    "id": 535,
    "name": "tympole",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
    "color": "rgb(10, 132, 255)",
    "desc": "By vibrating its cheeks, it emits sound waves imperceptible to humans. It uses the rhythm of these sounds to talk.",
    "owned": false
  },
  {
    "id": 536,
    "name": "palpitoad",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It lives in the water and on land. It uses its long, sticky tongue to immobilize its opponents.",
    "owned": false
  },
  {
    "id": 537,
    "name": "seismitoad",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
    "color": "rgb(10, 132, 255)",
    "desc": "They shoot paralyzing liquid from their head bumps. They use vibration to hurt their opponents.",
    "owned": false
  },
  {
    "id": 538,
    "name": "throh",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
    "color": "rgb(255, 69, 58)",
    "desc": "When it encounters a foe bigger than itself, it wants to throw it. It changes belts as it gets stronger.",
    "owned": false
  },
  {
    "id": 539,
    "name": "sawk",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Tying their belts gets them pumped and makes their punches more destructive. Disturbing their training angers them.",
    "owned": false
  },
  {
    "id": 540,
    "name": "sewaddle",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
    "color": "yellow",
    "desc": "Since this Pokémon makes its own clothes out of leaves, it is a popular mascot for fashion designers.",
    "owned": false
  },
  {
    "id": 541,
    "name": "swadloon",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It protects itself from the cold by wrapping up in leaves. It stays on the move, eating leaves in forests.",
    "owned": false
  },
  {
    "id": 542,
    "name": "leavanny",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
    "color": "yellow",
    "desc": "It keeps its eggs warm with heat from fermenting leaves. It also uses leaves to make warm wrappings for Sewaddle.",
    "owned": false
  },
  {
    "id": 543,
    "name": "venipede",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Its bite injects a potent poison, enough to paralyze large bird Pokémon that try to prey on it.",
    "owned": false
  },
  {
    "id": 544,
    "name": "whirlipede",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
    "color": "gray",
    "desc": "It is usually motionless, but when attacked, it rotates at high speed and then crashes into its opponent.",
    "owned": false
  },
  {
    "id": 545,
    "name": "scolipede",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
    "color": "rgb(255, 69, 58)",
    "desc": "With quick movements, it chases down its foes, attacking relentlessly with its horns until it prevails.",
    "owned": false
  },
  {
    "id": 546,
    "name": "cottonee",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
    "color": "rgb(52, 199, 89)",
    "desc": "To protect itself, it shoots cotton from its body. When it gets wet in the rain, its cotton grows moist and heavy, and it can’t move as well.",
    "owned": false
  },
  {
    "id": 547,
    "name": "whimsicott",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
    "color": "rgb(52, 199, 89)",
    "desc": "This nuisance sneaks into people’s homes, where it hides important things and scatters cotton all over the place.",
    "owned": false
  },
  {
    "id": 548,
    "name": "petilil",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Some say if you dry the leaves on its head, boil them down, and drink the infusion, your vigor will return, so Petilil is popular with the elderly.",
    "owned": false
  },
  {
    "id": 549,
    "name": "lilligant",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
    "color": "rgb(52, 199, 89)",
    "desc": "The fragrance of its flower differs slightly depending on the soil where it grew up. Sniffing the aroma calms your heart and mind.",
    "owned": false
  },
  {
    "id": 550,
    "name": "basculin-red-striped",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Savage, violent Pokémon, red and blue Basculin are always fighting each other over territory.",
    "owned": false
  },
  {
    "id": 551,
    "name": "sandile",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Alola, where it’s warm all year round, is a comfortable environment for this Pokémon. Sometimes you’ll even see it outside of deserts.",
    "owned": false
  },
  {
    "id": 552,
    "name": "krokorok",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Krokorok really hates it when its body gets cold. On nights when the temperature drops, it digs deep into the desert sands.",
    "owned": false
  },
  {
    "id": 553,
    "name": "krookodile",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
    "color": "rgb(255, 69, 58)",
    "desc": "When it spots prey, even at a distance of over 30 miles, it swims through the desert as if it were water, then jumps out and chomps them.",
    "owned": false
  },
  {
    "id": 554,
    "name": "darumaka",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
    "color": "rgb(255, 69, 58)",
    "desc": "When it sleeps, it pulls its limbs into its body and its internal fire goes down to 1,100 degrees Fahrenheit.",
    "owned": false
  },
  {
    "id": 555,
    "name": "darmanitan-standard",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Its internal fire burns at 2,500 degrees Fahrenheit, making enough power that it can destroy a dump truck with one punch.",
    "owned": false
  },
  {
    "id": 556,
    "name": "maractus",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Arid regions are their habitat. They move rhythmically, making a sound similar to maracas.",
    "owned": false
  },
  {
    "id": 557,
    "name": "dwebble",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
    "color": "rgb(255, 69, 58)",
    "desc": "When it finds a stone of a suitable size, it secretes a liquid from its mouth to open up a hole to crawl into.",
    "owned": false
  },
  {
    "id": 558,
    "name": "crustle",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Competing for territory, Crustle fight viciously. The one whose boulder is broken is the loser of the battle.",
    "owned": false
  },
  {
    "id": 559,
    "name": "scraggy",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
    "color": "yellow",
    "desc": "They move in small groups, walking around lazily. Anyone who makes eye contact gets smacked with a headbutt.",
    "owned": false
  },
  {
    "id": 560,
    "name": "scrafty",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
    "color": "rgb(255, 69, 58)",
    "desc": "This Pokémon may be rude, but it takes very good care of its family, its friends, and its turf.",
    "owned": false
  },
  {
    "id": 561,
    "name": "sigilyph",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
    "color": "black",
    "desc": "The guardians of an ancient city, they always fly the same route while keeping watch for invaders.",
    "owned": false
  },
  {
    "id": 562,
    "name": "yamask",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
    "color": "black",
    "desc": "Each of them carries a mask that used to be its face when it was human. Sometimes they look at it and cry.",
    "owned": false
  },
  {
    "id": 563,
    "name": "cofagrigus",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
    "color": "yellow",
    "desc": "Grave robbers who mistake them for real coffins and get too close end up trapped inside their bodies.",
    "owned": false
  },
  {
    "id": 564,
    "name": "tirtouga",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It was restored from an ancient fossil. Tirtouga lived in the sea but came up onto the land to search for prey.",
    "owned": false
  },
  {
    "id": 565,
    "name": "carracosta",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Its jaws are terrifyingly powerful. It could eat Omastar and Omanyte whole and not be bothered in the slightest by their shells.",
    "owned": false
  },
  {
    "id": 566,
    "name": "archen",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
    "color": "yellow",
    "desc": "Once thought to be the ancestor of all bird Pokémon, some of the latest research suggests that may not be the case.",
    "owned": false
  },
  {
    "id": 567,
    "name": "archeops",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
    "color": "yellow",
    "desc": "This ancient Pokémon’s plumage is delicate, so if anyone other than an experienced professional tries to restore it, they will fail.",
    "owned": false
  },
  {
    "id": 568,
    "name": "trubbish",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Poisonous gas leaks out of it when it breathes. Muk that catch a whiff of that stench will come drooling.",
    "owned": false
  },
  {
    "id": 569,
    "name": "garbodor",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It locks opponents in place with its left hand, immobilizing them by entirely dousing their bodies with poisonous liquid.",
    "owned": false
  },
  {
    "id": 570,
    "name": "zorua",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
    "color": "gray",
    "desc": "This Pokémon has a cowardly disposition, so when it’s not around friends, it basically always stays transformed as something else.",
    "owned": false
  },
  {
    "id": 571,
    "name": "zoroark",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
    "color": "gray",
    "desc": "It doesn’t just transform itself—it also has the power to make hundreds of people see its illusions.",
    "owned": false
  },
  {
    "id": 572,
    "name": "minccino",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
    "color": "gray",
    "desc": "A clean freak that will not allow even the slightest mess, it uses its tail like a mop to thoroughly clean any and all filth.",
    "owned": false
  },
  {
    "id": 573,
    "name": "cinccino",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
    "color": "gray",
    "desc": "The white parts of its coat are covered in an oil secreted from its body, so this Pokémon can slide right away from its enemies’ attacks.",
    "owned": false
  },
  {
    "id": 574,
    "name": "gothita",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
    "color": "rgb(112, 90, 159)",
    "desc": "They intently observe both Trainers and Pokémon. Apparently, they are looking at something that only Gothita can see.",
    "owned": false
  },
  {
    "id": 575,
    "name": "gothorita",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
    "color": "rgb(112, 90, 159)",
    "desc": "According to many old tales, it creates friends for itself by controlling sleeping children on starry nights.",
    "owned": false
  },
  {
    "id": 576,
    "name": "gothitelle",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
    "color": "rgb(112, 90, 159)",
    "desc": "They can predict the future from the placement and movement of the stars. They can see Trainers’ life spans.",
    "owned": false
  },
  {
    "id": 577,
    "name": "solosis",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
    "color": "rgb(52, 199, 89)",
    "desc": "They drive away attackers by unleashing psychic power. They can use telepathy to talk with others.",
    "owned": false
  },
  {
    "id": 578,
    "name": "duosion",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
    "color": "rgb(52, 199, 89)",
    "desc": "When their two divided brains think the same thoughts, their psychic power is maximized.",
    "owned": false
  },
  {
    "id": 579,
    "name": "reuniclus",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
    "color": "rgb(52, 199, 89)",
    "desc": "When Reuniclus shake hands, a network forms between their brains, increasing their psychic power.",
    "owned": false
  },
  {
    "id": 580,
    "name": "ducklett",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
    "color": "rgb(10, 132, 255)",
    "desc": "They are better at swimming than flying, and they happily eat their favorite food, peat moss, as they dive underwater.",
    "owned": false
  },
  {
    "id": 581,
    "name": "swanna",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
    "color": "white",
    "desc": "Swanna start to dance at dusk. The one dancing in the middle is the leader of the flock.",
    "owned": false
  },
  {
    "id": 582,
    "name": "vanillite",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
    "color": "white",
    "desc": "It exhales cold air that is at –58 degrees Fahrenheit. When it’s in a warm place, it shrinks little by little.",
    "owned": false
  },
  {
    "id": 583,
    "name": "vanillish",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
    "color": "white",
    "desc": "It sprays its enemies with grains of ice to freeze them. Most Vanillish in Alola are smaller than average.",
    "owned": false
  },
  {
    "id": 584,
    "name": "vanilluxe",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
    "color": "white",
    "desc": "It blasts blizzards from its two mouths. It can create snow anywhere, so it gets a lot of love from skiers and snowboarders.",
    "owned": false
  },
  {
    "id": 585,
    "name": "deerling",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
    "color": "pink",
    "desc": "The turning of the seasons changes the color and scent of this Pokémon’s fur. People use it to mark the seasons.",
    "owned": false
  },
  {
    "id": 586,
    "name": "sawsbuck",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
    "color": "rgb(210, 106, 36)",
    "desc": "They migrate according to the seasons, so some people call Sawsbuck the harbingers of spring.",
    "owned": false
  },
  {
    "id": 587,
    "name": "emolga",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
    "color": "white",
    "desc": "They store up electricity to fly through the air. When thunder cracks at night, sometimes there are almost enough of them to blot out the sky.",
    "owned": false
  },
  {
    "id": 588,
    "name": "karrablast",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
    "color": "rgb(10, 132, 255)",
    "desc": "For some reason they evolve when they receive electrical energy while they are attacking Shelmet.",
    "owned": false
  },
  {
    "id": 589,
    "name": "escavalier",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
    "color": "gray",
    "desc": "These Pokémon evolve by wearing the shell covering of a Shelmet. The steel armor protects their whole body.",
    "owned": false
  },
  {
    "id": 590,
    "name": "foongus",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
    "color": "white",
    "desc": "It lures Pokémon with its pattern that looks just like a Poké Ball, then releases poison spores.",
    "owned": false
  },
  {
    "id": 591,
    "name": "amoonguss",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    "color": "white",
    "desc": "It lures prey close by dancing and waving its arm caps, which resemble Poké Balls, in a swaying motion.",
    "owned": false
  },
  {
    "id": 592,
    "name": "frillish",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
    "color": "white",
    "desc": "It wraps its veillike arms and legs around prey swimming by and drags them down to the depths of the ocean.",
    "owned": false
  },
  {
    "id": 593,
    "name": "jellicent",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
    "color": "white",
    "desc": "Jellicent is always hanging around fancy cruise ships and tankers, hoping to drag away its prey.",
    "owned": false
  },
  {
    "id": 594,
    "name": "alomomola",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
    "color": "pink",
    "desc": "Fishermen take them along on long voyages, because if you have an Alomomola with you, there’ll be no need for a doctor or medicine.",
    "owned": false
  },
  {
    "id": 595,
    "name": "joltik",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
    "color": "yellow",
    "desc": "They attach themselves to large-bodied Pokémon and absorb static electricity, which they store in an electric pouch.",
    "owned": false
  },
  {
    "id": 596,
    "name": "galvantula",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
    "color": "yellow",
    "desc": "When attacked, they create an electric barrier by spitting out many electrically charged threads.",
    "owned": false
  },
  {
    "id": 597,
    "name": "ferroseed",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
    "color": "gray",
    "desc": "It absorbs the iron it finds in the rock while clinging to the ceiling. It shoots spikes when in danger.",
    "owned": false
  },
  {
    "id": 598,
    "name": "ferrothorn",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
    "color": "gray",
    "desc": "They attach themselves to cave ceilings, firing steel spikes at targets passing beneath them.",
    "owned": false
  },
  {
    "id": 599,
    "name": "klink",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
    "color": "gray",
    "desc": "The two minigears that mesh together are predetermined. Each will rebound from other minigears without meshing.",
    "owned": false
  },
  {
    "id": 600,
    "name": "klang",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
    "color": "gray",
    "desc": "A minigear and big gear comprise its body. If the minigear it launches at a foe doesn’t return, it will die.",
    "owned": false
  },
  {
    "id": 601,
    "name": "klinklang",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
    "color": "gray",
    "desc": "Its red core functions as an energy tank. It fires the charged energy through its spikes into an area.",
    "owned": false
  },
  {
    "id": 602,
    "name": "tynamo",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
    "color": "white",
    "desc": "One alone can emit only a trickle of electricity, so a group of them gathers to unleash a powerful electric shock.",
    "owned": false
  },
  {
    "id": 603,
    "name": "eelektrik",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
    "color": "rgb(10, 132, 255)",
    "desc": "These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity.",
    "owned": false
  },
  {
    "id": 604,
    "name": "eelektross",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
    "color": "rgb(10, 132, 255)",
    "desc": "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.",
    "owned": false
  },
  {
    "id": 605,
    "name": "elgyem",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It controls tremendous psychic power. Most reports of alien sightings are actually just people mistaking Elgyem for an alien.",
    "owned": false
  },
  {
    "id": 606,
    "name": "beheeyem",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
    "color": "rgb(210, 106, 36)",
    "desc": "With its psychic powers, it rewrites its opponents’ memories. You, too, may have already had your memories rewritten.",
    "owned": false
  },
  {
    "id": 607,
    "name": "litwick",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
    "color": "white",
    "desc": "Litwick shines a light that absorbs the life energy of people and Pokémon, which becomes the fuel that it burns.",
    "owned": false
  },
  {
    "id": 608,
    "name": "lampent",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
    "color": "black",
    "desc": "It arrives near the moment of death and steals spirit from the body.",
    "owned": false
  },
  {
    "id": 609,
    "name": "chandelure",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
    "color": "black",
    "desc": "The spirits burned up in its ominous flame lose their way and wander this world forever.",
    "owned": false
  },
  {
    "id": 610,
    "name": "axew",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
    "color": "rgb(52, 199, 89)",
    "desc": "They mark their territory by leaving gashes in trees with their tusks. If a tusk breaks, a new one grows in quickly.",
    "owned": false
  },
  {
    "id": 611,
    "name": "fraxure",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
    "color": "rgb(52, 199, 89)",
    "desc": "A broken tusk will not grow back, so it diligently sharpens its tusks on river rocks after the end of a battle.",
    "owned": false
  },
  {
    "id": 612,
    "name": "haxorus",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
    "color": "yellow",
    "desc": "Their sturdy tusks will stay sharp even if used to cut steel beams. These Pokémon are covered in hard armor.",
    "owned": false
  },
  {
    "id": 613,
    "name": "cubchoo",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
    "color": "white",
    "desc": "Their snot is a barometer of health. When healthy, their snot is sticky and the power of their ice moves increases.",
    "owned": false
  },
  {
    "id": 614,
    "name": "beartic",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
    "color": "white",
    "desc": "It freezes its breath to create fangs and claws of ice to fight with. Cold northern areas are its habitat.",
    "owned": false
  },
  {
    "id": 615,
    "name": "cryogonal",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
    "color": "rgb(10, 132, 255)",
    "desc": "They are composed of ice crystals. They capture prey with chains of ice, freezing the prey at -148 degrees Fahrenheit.",
    "owned": false
  },
  {
    "id": 616,
    "name": "shelmet",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
    "color": "rgb(255, 69, 58)",
    "desc": "It evolves when bathed in an electric-like energy along with Karrablast. The reason is still unknown.",
    "owned": false
  },
  {
    "id": 617,
    "name": "accelgor",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
    "color": "rgb(255, 69, 58)",
    "desc": "When its body dries out, it weakens. So, to prevent dehydration, it wraps itself in many layers of thin membrane.",
    "owned": false
  },
  {
    "id": 618,
    "name": "stunfisk",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It conceals itself in the mud of the seashore. Then it waits. When prey touch it, it delivers a jolt of electricity.",
    "owned": false
  },
  {
    "id": 619,
    "name": "mienfoo",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
    "color": "yellow",
    "desc": "They can often be seen in packs in the morning, slowly moving their bodies through a series of poses.",
    "owned": false
  },
  {
    "id": 620,
    "name": "mienshao",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It overwhelms its opponents with continuous attacks and then slowly stores up power before delivering the finishing blow.",
    "owned": false
  },
  {
    "id": 621,
    "name": "druddigon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
    "color": "rgb(255, 69, 58)",
    "desc": "The red skin on its face is harder than rock. In narrow caves, it squares off against its enemies and charges face-first right into them.",
    "owned": false
  },
  {
    "id": 622,
    "name": "golett",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Its movements are powered by a mysterious energy. It has continued to move since ancient times, so its power may soon run out.",
    "owned": false
  },
  {
    "id": 623,
    "name": "golurk",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Some say that ancient people invented Golurk to serve as a laborer. It follows its master’s orders faithfully.",
    "owned": false
  },
  {
    "id": 624,
    "name": "pawniard",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
    "color": "rgb(255, 69, 58)",
    "desc": "After shredding its prey, it sharpens its blades on a stone by the river. Each Pawniard has its own favorite sharpening stone.",
    "owned": false
  },
  {
    "id": 625,
    "name": "bisharp",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
    "color": "rgb(255, 69, 58)",
    "desc": "No matter how strong the Bisharp, it’s said that if the blade on its head is chipped, it will retire from its position as the boss.",
    "owned": false
  },
  {
    "id": 626,
    "name": "bouffalant",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Their fluffy fur absorbs damage, even if they strike foes with a fierce headbutt.",
    "owned": false
  },
  {
    "id": 627,
    "name": "rufflet",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
    "color": "white",
    "desc": "With its powerful legs and sturdy claws, it can crack even the hard shells of Shellder and pluck out their insides.",
    "owned": false
  },
  {
    "id": 628,
    "name": "braviary",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
    "color": "rgb(255, 69, 58)",
    "desc": "The more scars it has on its front, the more heroic it’s considered to be. Those with many scars on their back are mocked by the flock.",
    "owned": false
  },
  {
    "id": 629,
    "name": "vullaby",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Mandibuzz gives it the bones it wears. Vullaby’s wings are short, so it can’t fly yet, but it jumps around, dreaming of wide open skies.",
    "owned": false
  },
  {
    "id": 630,
    "name": "mandibuzz",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It skillfully arranges the bones of its prey to construct its nest. Most of the bones are Cubone.",
    "owned": false
  },
  {
    "id": 631,
    "name": "heatmor",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
    "color": "rgb(255, 69, 58)",
    "desc": "It draws in air through its tail, transforms it into fire, and uses it like a tongue. It melts Durant and eats them.",
    "owned": false
  },
  {
    "id": 632,
    "name": "durant",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
    "color": "gray",
    "desc": "They attack in groups, covering themselves in steel armor to protect themselves from Heatmor.",
    "owned": false
  },
  {
    "id": 633,
    "name": "deino",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Lacking sight, it’s unaware of its surroundings, so it bumps into things and eats anything that moves.",
    "owned": false
  },
  {
    "id": 634,
    "name": "zweilous",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
    "color": "rgb(10, 132, 255)",
    "desc": "After it has eaten up all the food in its territory, it moves to another area. Its two heads do not get along.",
    "owned": false
  },
  {
    "id": 635,
    "name": "hydreigon",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It responds to movement by attacking. This scary, three-headed Pokémon devours everything in its path!",
    "owned": false
  },
  {
    "id": 636,
    "name": "larvesta",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
    "color": "white",
    "desc": "When battling opponents, it sprays fire from its five horns. The max temperature of the flames can reach nearly 5,500 degrees Fahrenheit.",
    "owned": false
  },
  {
    "id": 637,
    "name": "volcarona",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
    "color": "white",
    "desc": "As it flies, it scatters its flaming scales. It was feared by ancient people, who referred to it as “the rage of the sun.”",
    "owned": false
  },
  {
    "id": 638,
    "name": "cobalion",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It has a body and heart of steel. It worked with its allies to punish people when they hurt Pokémon.",
    "owned": false
  },
  {
    "id": 639,
    "name": "terrakion",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
    "color": "gray",
    "desc": "Spoken of in legend, this Pokémon used its phenomenal power to destroy a castle in its effort to protect Pokémon.",
    "owned": false
  },
  {
    "id": 640,
    "name": "virizion",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Legends say this Pokémon confounded opponents with its swift movements.",
    "owned": false
  },
  {
    "id": 641,
    "name": "tornadus-incarnate",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Tornadus expels massive energy from its tail, causing severe storms. Its power is great enough to blow houses away.",
    "owned": false
  },
  {
    "id": 642,
    "name": "thundurus-incarnate",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
    "color": "rgb(10, 132, 255)",
    "desc": "As it flies around, it shoots lightning all over the place and causes forest fires. It is therefore disliked.",
    "owned": false
  },
  {
    "id": 643,
    "name": "reshiram",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
    "color": "white",
    "desc": "When Reshiram’s tail flares, the heat energy moves the atmosphere and changes the world’s weather.",
    "owned": false
  },
  {
    "id": 644,
    "name": "zekrom",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
    "color": "black",
    "desc": "Concealing itself in lightning clouds, it flies throughout the Unova region. It creates electricity in its tail.",
    "owned": false
  },
  {
    "id": 645,
    "name": "landorus-incarnate",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
    "color": "rgb(210, 106, 36)",
    "desc": "From the forces of lightning and wind, it creates energy to give nutrients to the soil and make the land abundant.",
    "owned": false
  },
  {
    "id": 646,
    "name": "kyurem",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
    "color": "gray",
    "desc": "It generates a powerful, freezing energy inside itself, but its body became frozen when the energy leaked out.",
    "owned": false
  },
  {
    "id": 647,
    "name": "keldeo-ordinary",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
    "color": "yellow",
    "desc": "When it is resolute, its body fills with power and it becomes swifter. Its jumps are then too fast to follow.",
    "owned": false
  },
  {
    "id": 648,
    "name": "meloetta-aria",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
    "color": "white",
    "desc": "Its melodies are sung with a special vocalization method that can control the feelings of those who hear it.",
    "owned": false
  },
  {
    "id": 649,
    "name": "genesect",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
    "color": "rgb(112, 90, 159)",
    "desc": "This Pokémon existed 300 million years ago. Team Plasma altered it and attached a cannon to its back.",
    "owned": false
  },
  {
    "id": 650,
    "name": "chespin",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
    "color": "rgb(52, 199, 89)",
    "desc": "Such a thick shell of wood covers its head and back that even a direct hit from a truck wouldn’t faze it.",
    "owned": false
  },
  {
    "id": 651,
    "name": "quilladin",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
    "color": "rgb(52, 199, 89)",
    "desc": "They strengthen their lower bodies by running into one another. They are very kind and won’t start fights.",
    "owned": false
  },
  {
    "id": 652,
    "name": "chesnaught",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
    "color": "rgb(52, 199, 89)",
    "desc": "When it takes a defensive posture with its fists guarding its face, it could withstand a bomb blast.",
    "owned": false
  },
  {
    "id": 653,
    "name": "fennekin",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
    "color": "rgb(255, 69, 58)",
    "desc": "As it walks, it munches on a twig in place of a snack. It intimidates opponents by puffing hot air out of its ears.",
    "owned": false
  },
  {
    "id": 654,
    "name": "braixen",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
    "color": "rgb(255, 69, 58)",
    "desc": "When the twig is plucked from its tail, friction sets the twig alight. The flame is used to send signals to its allies.",
    "owned": false
  },
  {
    "id": 655,
    "name": "delphox",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Using psychic power, it generates a fiery vortex of 5,400 degrees Fahrenheit, incinerating foes swept into this whirl of flame.",
    "owned": false
  },
  {
    "id": 656,
    "name": "froakie",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings.",
    "owned": false
  },
  {
    "id": 657,
    "name": "frogadier",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Its swiftness is unparalleled. It can scale a tower of more than 2,000 feet in a minute’s time.",
    "owned": false
  },
  {
    "id": 658,
    "name": "greninja",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It appears and vanishes with a ninja’s grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water.",
    "owned": false
  },
  {
    "id": 659,
    "name": "bunnelby",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It has ears like shovels. Digging holes strengthens its ears so much that they can sever thick roots effortlessly.",
    "owned": false
  },
  {
    "id": 660,
    "name": "diggersby",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
    "color": "rgb(210, 106, 36)",
    "desc": "As powerful as an excavator, its ears can reduce dense bedrock to rubble. When it’s finished digging, it lounges lazily.",
    "owned": false
  },
  {
    "id": 661,
    "name": "fletchling",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
    "color": "rgb(255, 69, 58)",
    "desc": "While it’s an amiable Pokémon, if you touch it unexpectedly, it will heat up its body in an instant, and you’ll be burned.",
    "owned": false
  },
  {
    "id": 662,
    "name": "fletchinder",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
    "color": "rgb(255, 69, 58)",
    "desc": "It scatters embers in the tall grass. Then bug Pokémon, frightened by the flames, come flying out, and Fletchinder gobbles them up.",
    "owned": false
  },
  {
    "id": 663,
    "name": "talonflame",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Its tough wings don’t allow fire to pass through them. A long time ago, firefighters’ outfits were made from Talonflame wings.",
    "owned": false
  },
  {
    "id": 664,
    "name": "scatterbug",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
    "color": "black",
    "desc": "The powder that covers its body regulates its temperature, so it can live in any region or climate.",
    "owned": false
  },
  {
    "id": 665,
    "name": "spewpa",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
    "color": "black",
    "desc": "The beaks of bird Pokémon can’t begin to scratch its stalwart body. To defend itself, it spews powder.",
    "owned": false
  },
  {
    "id": 666,
    "name": "vivillon",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
    "color": "white",
    "desc": "The patterns on this Pokémon’s wings depend on the climate and topography of its habitat. It scatters colorful scales.",
    "owned": false
  },
  {
    "id": 667,
    "name": "litleo",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
    "color": "rgb(210, 106, 36)",
    "desc": "When they’re young, they live with a pride. Once they’re able to hunt prey on their own, they’re kicked out and have to make their own way.",
    "owned": false
  },
  {
    "id": 668,
    "name": "pyroar",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
    "color": "rgb(210, 106, 36)",
    "desc": "The males are usually lazy, but when attacked by a strong foe, a male will protect its friends with no regard for its own safety.",
    "owned": false
  },
  {
    "id": 669,
    "name": "flabebe",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
    "color": "white",
    "desc": "It’s not safe without the power of a flower, but it will keep traveling around until it finds one with the color and shape it wants.",
    "owned": false
  },
  {
    "id": 670,
    "name": "floette",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
    "color": "white",
    "desc": "It raises flowers and uses them as weapons. The more gorgeous the blossom, the more power it contains.",
    "owned": false
  },
  {
    "id": 671,
    "name": "florges",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
    "color": "white",
    "desc": "It controls the flowers it grows. The petal blizzards that Florges triggers are overwhelming in their beauty and power.",
    "owned": false
  },
  {
    "id": 672,
    "name": "skiddo",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
    "color": "rgb(210, 106, 36)",
    "desc": "If it has sunshine and water, it doesn’t need to eat, because it can generate energy from the leaves on its back.",
    "owned": false
  },
  {
    "id": 673,
    "name": "gogoat",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
    "color": "rgb(210, 106, 36)",
    "desc": "They inhabit mountainous regions. The leader of the herd is decided by a battle of clashing horns.",
    "owned": false
  },
  {
    "id": 674,
    "name": "pancham",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
    "color": "white",
    "desc": "It follows Pangoro around like a henchman. When Pancham makes a big mistake, its leaf gets taken away.",
    "owned": false
  },
  {
    "id": 675,
    "name": "pangoro",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
    "color": "white",
    "desc": "This rowdy Pokémon boasts great physical strength. Many Trainers are also smitten by its lively character.",
    "owned": false
  },
  {
    "id": 676,
    "name": "furfrou",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
    "color": "white",
    "desc": "There was an era when aristocrats would compete to see who could trim their Furfrou’s fur into the most exquisite style.",
    "owned": false
  },
  {
    "id": 677,
    "name": "espurr",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
    "color": "gray",
    "desc": "It has enough psychic energy to blast everything within 300 feet of itself, but it has no control over its power.",
    "owned": false
  },
  {
    "id": 678,
    "name": "meowstic-male",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
    "color": "rgb(10, 132, 255)",
    "desc": "The eyeball patterns on the interior of its ears emit psychic energy. It keeps the patterns tightly covered because that power is too immense.",
    "owned": false
  },
  {
    "id": 679,
    "name": "honedge",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
    "color": "rgb(210, 106, 36)",
    "desc": "If anyone dares to grab its hilt, it wraps a blue cloth around that person’s arm and drains that person’s life energy completely.",
    "owned": false
  },
  {
    "id": 680,
    "name": "doublade",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
    "color": "rgb(210, 106, 36)",
    "desc": "The complex attack patterns of its two swords are unstoppable, even for an opponent greatly accomplished at swordplay.",
    "owned": false
  },
  {
    "id": 681,
    "name": "aegislash-shield",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Apparently, it can detect the innate qualities of leadership. According to legend, whoever it recognizes is destined to become king.",
    "owned": false
  },
  {
    "id": 682,
    "name": "spritzee",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
    "color": "pink",
    "desc": "In the past, rather than using perfume, royal ladies carried a Spritzee that would waft a fragrance they liked.",
    "owned": false
  },
  {
    "id": 683,
    "name": "aromatisse",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
    "color": "pink",
    "desc": "Its scent is so overpowering that, unless a Trainer happens to really enjoy the smell, he or she will have a hard time walking alongside it.",
    "owned": false
  },
  {
    "id": 684,
    "name": "swirlix",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
    "color": "white",
    "desc": "Because it eats nothing but sweets, its fur is as sticky sweet as cotton candy.",
    "owned": false
  },
  {
    "id": 685,
    "name": "slurpuff",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
    "color": "white",
    "desc": "Its sense of smell is 100 million times better than a human’s, so even the faintest scent tells it about everything in the area. It’s like it can see with its nose!",
    "owned": false
  },
  {
    "id": 686,
    "name": "inkay",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It draws prey near with its blinking lights and then wraps them up in its long tentacles and holds them in place.",
    "owned": false
  },
  {
    "id": 687,
    "name": "malamar",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
    "color": "rgb(10, 132, 255)",
    "desc": "When it comes to strong hypnosis, there’s an endless number of people who utilize Malamar for their nefarious deeds.",
    "owned": false
  },
  {
    "id": 688,
    "name": "binacle",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
    "color": "rgb(210, 106, 36)",
    "desc": "They stretch and then contract, yanking their rocks along with them in bold hops. They eat seaweed that washes up on the shoreline.",
    "owned": false
  },
  {
    "id": 689,
    "name": "barbaracle",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Barbaracle’s legs and hands have minds of their own, and they will move independently. But they usually follow the head’s orders.",
    "owned": false
  },
  {
    "id": 690,
    "name": "skrelp",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It vanishes into seaweed and remains perfectly still to avoid attacks from large Pokémon. Rotten seaweed is its main food source.",
    "owned": false
  },
  {
    "id": 691,
    "name": "dragalge",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
    "color": "rgb(210, 106, 36)",
    "desc": "This vicious Pokémon sprays a poisonous liquid on opponents that come near. For whatever reason, it gets along really well with Dhelmise.",
    "owned": false
  },
  {
    "id": 692,
    "name": "clauncher",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Its claws occasionally fall off, and it keeps a low profile until they grow back. The meat of its claws is so delicious!",
    "owned": false
  },
  {
    "id": 693,
    "name": "clawitzer",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It compresses the water it has sucked up and then projects it with enough power to punch a hole right through a thick sheet of iron.",
    "owned": false
  },
  {
    "id": 694,
    "name": "helioptile",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
    "color": "yellow",
    "desc": "The frills on either side of its head have cells that generate electricity when exposed to sunlight.",
    "owned": false
  },
  {
    "id": 695,
    "name": "heliolisk",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
    "color": "yellow",
    "desc": "It stimulates its muscles with electricity, boosting the strength in its legs and enabling it to run 100 yards in five seconds.",
    "owned": false
  },
  {
    "id": 696,
    "name": "tyrunt",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Its large jaw has incredible destructive power. Some theories suggest that its restored form is different from its form of long ago.",
    "owned": false
  },
  {
    "id": 697,
    "name": "tyrantrum",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Complete restoration is impossible, allowing room for theories that its entire body was once covered in a feather-like coat.",
    "owned": false
  },
  {
    "id": 698,
    "name": "amaura",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It lived in cold areas in ancient times. It’s said that when Amaura whinnies, auroras appear in the night sky.",
    "owned": false
  },
  {
    "id": 699,
    "name": "aurorus",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
    "color": "rgb(10, 132, 255)",
    "desc": "An Aurorus was found frozen solid within a glacier, just as it appeared long ago, which became quite a big event in the news.",
    "owned": false
  },
  {
    "id": 700,
    "name": "sylveon",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
    "color": "pink",
    "desc": "Once a fight breaks out, it will unflinchingly charge at dragon Pokémon that are many times larger than itself.",
    "owned": false
  },
  {
    "id": 701,
    "name": "hawlucha",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It overwhelms opponents with quick moves, but sometimes it showboats for too long when it’s using a special move and gets itself into a pinch.",
    "owned": false
  },
  {
    "id": 702,
    "name": "dedenne",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
    "color": "yellow",
    "desc": "It sneaks into people’s homes and steals electricity from their outlets. When your electric bill seems off, it’s the handiwork of this rascal.",
    "owned": false
  },
  {
    "id": 703,
    "name": "carbink",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
    "color": "gray",
    "desc": "Some say that deep beneath the surface of the world, a pack of Carbink live with their queen in a kingdom of jewels.",
    "owned": false
  },
  {
    "id": 704,
    "name": "goomy",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It uses its horns to check out its surroundings. They’re very sensitive, so if you grab them, it will feel a strong shock and be unable to move.",
    "owned": false
  },
  {
    "id": 705,
    "name": "sliggoo",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It crawls along sluggishly. The swirly protrusion on its back is filled with its brain and other organs.",
    "owned": false
  },
  {
    "id": 706,
    "name": "goodra",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It’s very friendly toward people. If you grow close to it, Goodra will hug you with its sticky, slime-covered body. Don’t get mad.",
    "owned": false
  },
  {
    "id": 707,
    "name": "klefki",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
    "color": "gray",
    "desc": "Although it’s unclear why it collects keys, giving it a key makes Klefki very happy. However, it apparently only likes master keys.",
    "owned": false
  },
  {
    "id": 708,
    "name": "phantump",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
    "color": "rgb(210, 106, 36)",
    "desc": "By imitating the voice of a child, it causes people to get hopelessly lost deep in the forest. It’s trying to make friends with them.",
    "owned": false
  },
  {
    "id": 709,
    "name": "trevenant",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It’s feared as a ghost of the forest. Lumberjacks bring along Fire types, which Trevenant hates, when they enter the forest.",
    "owned": false
  },
  {
    "id": 710,
    "name": "pumpkaboo-average",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It is said to carry wandering spirits to the place where they belong so they can move on.",
    "owned": false
  },
  {
    "id": 711,
    "name": "gourgeist-average",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It enwraps its prey in its hairlike arms. It sings joyfully as it observes the suffering of its prey.",
    "owned": false
  },
  {
    "id": 712,
    "name": "bergmite",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Using air of -150 degrees Fahrenheit, they freeze opponents solid. They live in herds above the snow line on mountains.",
    "owned": false
  },
  {
    "id": 713,
    "name": "avalugg",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
    "color": "rgb(10, 132, 255)",
    "desc": "The way several Bergmite huddle on its back makes it look like an aircraft carrier made of ice.",
    "owned": false
  },
  {
    "id": 714,
    "name": "noibat",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Fruits are its favorite foods. This gourmet carefully picks out just the ripe ones using its sonar.",
    "owned": false
  },
  {
    "id": 715,
    "name": "noivern",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Although it has a violent disposition, if you give it a nice ripe fruit that it loves, Noivern will suddenly become tame.",
    "owned": false
  },
  {
    "id": 716,
    "name": "xerneas",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
    "color": "rgb(10, 132, 255)",
    "desc": "When the horns on its head shine in seven colors, it is said to be sharing everlasting life.",
    "owned": false
  },
  {
    "id": 717,
    "name": "yveltal",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
    "color": "rgb(255, 69, 58)",
    "desc": "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more.",
    "owned": false
  },
  {
    "id": 718,
    "name": "zygarde",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
    "color": "rgb(52, 199, 89)",
    "desc": "This is Zygarde’s form when about half of its pieces have been assembled. It plays the role of monitoring the ecosystem.",
    "owned": false
  },
  {
    "id": 719,
    "name": "diancie",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
    "color": "pink",
    "desc": "It can instantly create many diamonds by compressing the carbon in the air between its hands.",
    "owned": false
  },
  {
    "id": 720,
    "name": "hoopa",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It is said to be able to seize anything it desires with its six rings and six huge arms. With its power sealed, it is transformed into a much smaller form.",
    "owned": false
  },
  {
    "id": 721,
    "name": "volcanion",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It expels its internal steam from the arms on its back. It has enough power to blow away a mountain.",
    "owned": false
  },
  {
    "id": 722,
    "name": "rowlet",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It sends its feathers, which are as sharp as blades, flying in attack. Its legs are strong, so its kicks are also formidable.",
    "owned": false
  },
  {
    "id": 723,
    "name": "dartrix",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
    "color": "rgb(210, 106, 36)",
    "desc": "This narcissistic Pokémon is a clean freak. If you don’t groom it diligently, it will stop listening to you.",
    "owned": false
  },
  {
    "id": 724,
    "name": "decidueye",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It nocks its arrow quills and shoots them at opponents. When it simply can’t afford to miss, it tugs the vine on its head to improve its focus.",
    "owned": false
  },
  {
    "id": 725,
    "name": "litten",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
    "color": "rgb(255, 69, 58)",
    "desc": "If you try too hard to get close to it, it won’t open up to you. Even if you do grow close, giving it too much affection is still a no-no.",
    "owned": false
  },
  {
    "id": 726,
    "name": "torracat",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
    "color": "rgb(255, 69, 58)",
    "desc": "It can act spoiled if it grows close to its Trainer. A powerful Pokémon, its sharp claws can leave its Trainer’s whole body covered in scratches.",
    "owned": false
  },
  {
    "id": 727,
    "name": "incineroar",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Although it’s rough mannered and egotistical, it finds beating down unworthy opponents boring. It gets motivated for stronger opponents.",
    "owned": false
  },
  {
    "id": 728,
    "name": "popplio",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
    "color": "rgb(10, 132, 255)",
    "desc": "The balloons it inflates with its nose grow larger and larger as it practices day by day.",
    "owned": false
  },
  {
    "id": 729,
    "name": "brionne",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It gets excited when it sees a dance it doesn’t know. This hard worker practices diligently until it can learn that dance.",
    "owned": false
  },
  {
    "id": 730,
    "name": "primarina",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
    "color": "rgb(10, 132, 255)",
    "desc": "To Primarina, every battle is a stage. It takes down its prey with beautiful singing and dancing.",
    "owned": false
  },
  {
    "id": 731,
    "name": "pikipek",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
    "color": "black",
    "desc": "It pecks at trees with its hard beak. You can get some idea of its mood or condition from the rhythm of its pecking.",
    "owned": false
  },
  {
    "id": 732,
    "name": "trumbeak",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
    "color": "black",
    "desc": "It can bend the tip of its beak to produce over a hundred different cries at will.",
    "owned": false
  },
  {
    "id": 733,
    "name": "toucannon",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
    "color": "black",
    "desc": "They smack beaks with others of their kind to communicate. The strength and number of hits tell each other how they feel.",
    "owned": false
  },
  {
    "id": 734,
    "name": "yungoos",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Its stomach takes up most of its long torso. It’s a big eater, so the amount Trainers have to spend on its food is no laughing matter.",
    "owned": false
  },
  {
    "id": 735,
    "name": "gumshoos",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Although it wasn’t originally found in Alola, this Pokémon was brought over a long time ago when there was a huge Rattata outbreak.",
    "owned": false
  },
  {
    "id": 736,
    "name": "grubbin",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
    "color": "gray",
    "desc": "If you find its nest, you shouldn’t stick your hand inside. You’ll get bitten by an irritated Grubbin.",
    "owned": false
  },
  {
    "id": 737,
    "name": "charjabug",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It buries itself in fallen leaves and barely moves, munching away on humus. If you accidentally step on one, you’ll get a shock!",
    "owned": false
  },
  {
    "id": 738,
    "name": "vikavolt",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It has an organ that generates electricity in its abdomen. It concentrates energy in its strong jaws and fires off powerful jolts of electricity.",
    "owned": false
  },
  {
    "id": 739,
    "name": "crabrawler",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Its hard pincers are well suited to both offense and defense. Fights between two Crabrawler are like boxing matches.",
    "owned": false
  },
  {
    "id": 740,
    "name": "crabominable",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
    "color": "white",
    "desc": "It stores coldness in its pincers and pummels its foes. It can even smash thick walls of ice to bits!",
    "owned": false
  },
  {
    "id": 741,
    "name": "oricorio-baile",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
    "color": "rgb(255, 69, 58)",
    "desc": "It wins the hearts of its enemies with its passionate dancing and then uses the opening it creates to burn them up with blazing flames.",
    "owned": false
  },
  {
    "id": 742,
    "name": "cutiefly",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
    "color": "yellow",
    "desc": "Nectar and pollen are its favorite fare. In fields of flowers, it gets into skirmishes with Butterfree over food.",
    "owned": false
  },
  {
    "id": 743,
    "name": "ribombee",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
    "color": "yellow",
    "desc": "Rain makes pollen damp, so Ribombee hates rain. When it sees ominous clouds, it finds a hollow in a tree, where it waits stock-still.",
    "owned": false
  },
  {
    "id": 744,
    "name": "rockruff",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
    "color": "rgb(210, 106, 36)",
    "desc": "As they develop, their disposition grows more violent and aggressive. Many Trainers find them too much to handle and abandon them.",
    "owned": false
  },
  {
    "id": 745,
    "name": "lycanroc-midday",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
    "color": "rgb(210, 106, 36)",
    "desc": "The sharp rocks in its mane can cut like knives. Lycanroc wears its prey down by degrees before finishing them off.",
    "owned": false
  },
  {
    "id": 746,
    "name": "wishiwashi-solo",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
    "color": "rgb(10, 132, 255)",
    "desc": "They’re weak, so they move in schools. However, they can also often be seen all alone, having strayed from the school.",
    "owned": false
  },
  {
    "id": 747,
    "name": "mareanie",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
    "color": "rgb(10, 132, 255)",
    "desc": "They eat Corsola branches, so Mareanie are hated by craftsmen who work with Corsola branches that have naturally fallen off.",
    "owned": false
  },
  {
    "id": 748,
    "name": "toxapex",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
    "color": "rgb(10, 132, 255)",
    "desc": "To attack, this Pokémon sends toxic spikes flying at its enemies. Ones that come close get mown down by the claws on its feet.",
    "owned": false
  },
  {
    "id": 749,
    "name": "mudbray",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It loves playing in the mud. If it isn’t showered with mud on a daily basis, it gets stressed out and stops listening to its Trainer.",
    "owned": false
  },
  {
    "id": 750,
    "name": "mudsdale",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It remains calm and unmoving no matter the situation. It mixes dirt with the saliva in its mouth to make a special kind of mud.",
    "owned": false
  },
  {
    "id": 751,
    "name": "dewpider",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
    "color": "rgb(52, 199, 89)",
    "desc": "When two Dewpider meet, they display their water bubbles to each other. Then the one with the smaller bubble gets out of the other’s way.",
    "owned": false
  },
  {
    "id": 752,
    "name": "araquanid",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It usually passes its time in the water. When its belly is full, it stores its subdued prey in the water bubble on its head.",
    "owned": false
  },
  {
    "id": 753,
    "name": "fomantis",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
    "color": "pink",
    "desc": "When the sun rises, Fomantis spreads its four leaves and bathes in the sunlight. The tip of its head has a pleasant aroma.",
    "owned": false
  },
  {
    "id": 754,
    "name": "lurantis",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
    "color": "pink",
    "desc": "For self-protection, it pretends to be a bug Pokémon. Both of its arms bear keen-edged petals.",
    "owned": false
  },
  {
    "id": 755,
    "name": "morelull",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It scatters its shining spores around itself. Even though they’re dangerous, nighttime tours of forests where Morelull live are popular.",
    "owned": false
  },
  {
    "id": 756,
    "name": "shiinotic",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It puts its prey to sleep and siphons off their vitality through the tip of its arms. If one of its kind is weakened, it helps by sending it vitality.",
    "owned": false
  },
  {
    "id": 757,
    "name": "salandit",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
    "color": "black",
    "desc": "The males will do whatever the females tell them. They give the females most of their food. Due to malnutrition, the males can’t evolve.",
    "owned": false
  },
  {
    "id": 758,
    "name": "salazzle",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
    "color": "black",
    "desc": "Salazzle lives deep in caves and forces the Salandit it has attracted with its pheromones to serve it.",
    "owned": false
  },
  {
    "id": 759,
    "name": "stufful",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
    "color": "pink",
    "desc": "It boasts power enough to split large trees in half. The organ on its rear releases an odor that it uses to communicate with others of its kind.",
    "owned": false
  },
  {
    "id": 760,
    "name": "bewear",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
    "color": "pink",
    "desc": "It waves its hands wildly in intimidation and warning. Life is over for anyone who doesn’t run away as fast as possible.",
    "owned": false
  },
  {
    "id": 761,
    "name": "bounsweet",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Because of its sweet, delicious aroma, bird Pokémon are always after it, but it’s not intelligent enough to care.",
    "owned": false
  },
  {
    "id": 762,
    "name": "steenee",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
    "color": "rgb(112, 90, 159)",
    "desc": "It’s protected by its hard sepals, so it plays with bird Pokémon without worry. They peck it relentlessly, but it doesn’t care.",
    "owned": false
  },
  {
    "id": 763,
    "name": "tsareena",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
    "color": "rgb(112, 90, 159)",
    "desc": "A master of grand and beautiful kicks, it can knock out even kickboxing champions with a single blow.",
    "owned": false
  },
  {
    "id": 764,
    "name": "comfey",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It stretches sticky vines out from its head and picks flowers to adorn itself with. When it doesn’t have any flowers, it feels uneasy.",
    "owned": false
  },
  {
    "id": 765,
    "name": "oranguru",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
    "color": "white",
    "desc": "It normally spends its time meditating in the treetops. It throws Poké Balls and gives other Pokémon orders as it pleases.",
    "owned": false
  },
  {
    "id": 766,
    "name": "passimian",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
    "color": "white",
    "desc": "They use their saliva to stick leaves to their shoulders. You can tell what troop they belong to from the position of the leaves.",
    "owned": false
  },
  {
    "id": 767,
    "name": "wimpod",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
    "color": "gray",
    "desc": "It will pick up anything it finds on the ground. Sometimes it finds coins, so Murkrow and Meowth will go after it.",
    "owned": false
  },
  {
    "id": 768,
    "name": "golisopod",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
    "color": "gray",
    "desc": "The shell covering its body is as hard as diamond. This Pokémon will do anything it takes to win.",
    "owned": false
  },
  {
    "id": 769,
    "name": "sandygast",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It likes the shovel on its head, so Sandygast will get serious and fight any children who come to take it back.",
    "owned": false
  },
  {
    "id": 770,
    "name": "palossand",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
    "color": "rgb(210, 106, 36)",
    "desc": "Each of its grains of sand has its own will. Palossand eats small Pokémon and siphons away their vital essence while they’re still alive.",
    "owned": false
  },
  {
    "id": 771,
    "name": "pyukumuku",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
    "color": "black",
    "desc": "The tradition known as Pyukumuku chucking started from the custom of throwing Pyukumuku back into the sea after they wash onshore.",
    "owned": false
  },
  {
    "id": 772,
    "name": "type-null",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
    "color": "gray",
    "desc": "A Pokémon weapon developed for a specific mission, it went berserk during an experiment, so it was cryogenically frozen.",
    "owned": false
  },
  {
    "id": 773,
    "name": "silvally",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
    "color": "gray",
    "desc": "This is its form once it has awakened and evolved. Freed from its heavy mask, its speed is greatly increased.",
    "owned": false
  },
  {
    "id": 774,
    "name": "minior-red-meteor",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
    "color": "rgb(210, 106, 36)",
    "desc": "It lives in the ozone layer, where it becomes food for stronger Pokémon. When it tries to run away, it falls to the ground.",
    "owned": false
  },
  {
    "id": 775,
    "name": "komala",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
    "color": "rgb(10, 132, 255)",
    "desc": "It stays asleep from the moment it’s born. When it falls into a deep sleep, it stops moving altogether.",
    "owned": false
  },
  {
    "id": 776,
    "name": "turtonator",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
    "color": "rgb(255, 69, 58)",
    "desc": "It lives in volcanoes and eats sulfur and other minerals. Materials from the food it eats form the basis of its explosive shell.",
    "owned": false
  },
  {
    "id": 777,
    "name": "togedemaru",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
    "color": "gray",
    "desc": "When it’s surprised or agitated, the 14 fur spikes on its back will stand up involuntarily.",
    "owned": false
  },
  {
    "id": 778,
    "name": "mimikyu-disguised",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
    "color": "yellow",
    "desc": "Although it’s a quiet, lonely Pokémon, if you try to look at what’s under its rag, it will become agitated and resist violently.",
    "owned": false
  },
  {
    "id": 779,
    "name": "bruxish",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
    "color": "pink",
    "desc": "It burrows beneath the sand, radiating psychic power from the protuberance on its head. It waits for prey as it surveys the area.",
    "owned": false
  },
  {
    "id": 780,
    "name": "drampa",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
    "color": "white",
    "desc": "If a child it has made friends with is bullied, Drampa will find the bully’s house and burn it to the ground.",
    "owned": false
  },
  {
    "id": 781,
    "name": "dhelmise",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
    "color": "rgb(52, 199, 89)",
    "desc": "It wraps its prey in green seaweed and sucks away their vitality. It only likes to go after big prey like Wailord.",
    "owned": false
  },
  {
    "id": 782,
    "name": "jangmo-o",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
    "color": "gray",
    "desc": "It smacks the scales on its head against rocks or against the ground to frighten its opponents. It can also contact its friends with these noises.",
    "owned": false
  },
  {
    "id": 783,
    "name": "hakamo-o",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
    "color": "gray",
    "desc": "It makes noise by clanging its scales together. When the rhythm has reached its peak, Hakamo-o attacks.",
    "owned": false
  },
  {
    "id": 784,
    "name": "kommo-o",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
    "color": "gray",
    "desc": "When it howls after finishing off its prey, the metallic sounds of its celebrating comrades can be heard from all around.",
    "owned": false
  },
  {
    "id": 785,
    "name": "tapu-koko",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
    "color": "yellow",
    "desc": "Although it’s called a guardian deity, if a person or Pokémon puts it in a bad mood, it will become a malevolent deity and attack.",
    "owned": false
  },
  {
    "id": 786,
    "name": "tapu-lele",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
    "color": "pink",
    "desc": "It heals the wounds of people and Pokémon by sprinkling them with its sparkling scales. This guardian deity is worshiped on Akala.",
    "owned": false
  },
  {
    "id": 787,
    "name": "tapu-bulu",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Although it’s called a guardian deity, it’s violent enough to crush anyone it sees as an enemy.",
    "owned": false
  },
  {
    "id": 788,
    "name": "tapu-fini",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
    "color": "rgb(112, 90, 159)",
    "desc": "This guardian deity of Poni Island manipulates water. Because it lives deep within a thick fog, it came to be both feared and revered.",
    "owned": false
  },
  {
    "id": 789,
    "name": "cosmog",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
    "color": "rgb(10, 132, 255)",
    "desc": "Even though its helpless, gaseous body can be blown away by the slightest breeze, it doesn’t seem to care.",
    "owned": false
  },
  {
    "id": 790,
    "name": "cosmoem",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
    "color": "rgb(10, 132, 255)",
    "desc": "The king who ruled Alola in times of antiquity called it the “cocoon of the stars” and built an altar to worship it.",
    "owned": false
  },
  {
    "id": 791,
    "name": "solgaleo",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
    "color": "white",
    "desc": "Sometimes the result of its opening an Ultra Wormhole is that energy and life-forms from other worlds are called here to this world.",
    "owned": false
  },
  {
    "id": 792,
    "name": "lunala",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
    "color": "rgb(112, 90, 159)",
    "desc": "Records of it exist in writings from long, long ago, where it was known by the name “the beast that calls the moon.”",
    "owned": false
  },
  {
    "id": 793,
    "name": "nihilego",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
    "color": "white",
    "desc": "A life-form from another world, it was dubbed a UB and is thought to produce a strong neurotoxin.",
    "owned": false
  },
  {
    "id": 794,
    "name": "buzzwole",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
    "color": "rgb(255, 69, 58)",
    "desc": "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives.",
    "owned": false
  },
  {
    "id": 795,
    "name": "pheromosa",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
    "color": "white",
    "desc": "A life-form that lives in another world, its body is thin and supple, but it also possesses great power.",
    "owned": false
  },
  {
    "id": 796,
    "name": "xurkitree",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
    "color": "black",
    "desc": "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives.",
    "owned": false
  },
  {
    "id": 797,
    "name": "celesteela",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
    "color": "rgb(52, 199, 89)",
    "desc": "One of the dangerous UBs, high energy readings can be detected coming from both of its huge arms.",
    "owned": false
  },
  {
    "id": 798,
    "name": "kartana",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
    "color": "white",
    "desc": "This Ultra Beast’s body, which is as thin as paper, is like a sharpened sword.",
    "owned": false
  },
  {
    "id": 799,
    "name": "guzzlord",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
    "color": "black",
    "desc": "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives.",
    "owned": false
  },
  {
    "id": 800,
    "name": "necrozma",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",
    "color": "black",
    "desc": "It looks somehow pained as it rages around in search of light, which serves as its energy. It’s apparently from another world.",
    "owned": false
  },
  {
    "id": 801,
    "name": "magearna",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
    "color": "gray",
    "desc": "It synchronizes its consciousness with others to understand their feelings. This faculty makes it useful for taking care of people.",
    "owned": false
  },
  {
    "id": 802,
    "name": "marshadow",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
    "color": "gray",
    "desc": "It slips into the shadows of others and mimics their powers and movements. As it improves, it becomes stronger than those it’s imitating.",
    "owned": false
  },
  {
    "id": 10001,
    "name": "deoxys-attack",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10001.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10002,
    "name": "deoxys-defense",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10002.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10003,
    "name": "deoxys-speed",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10003.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10004,
    "name": "wormadam-sandy",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10004.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10005,
    "name": "wormadam-trash",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10005.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10006,
    "name": "shaymin-sky",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10006.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10007,
    "name": "giratina-origin",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10007.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10008,
    "name": "rotom-heat",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10008.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10009,
    "name": "rotom-wash",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10009.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10010,
    "name": "rotom-frost",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10010.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10011,
    "name": "rotom-fan",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10011.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10012,
    "name": "rotom-mow",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10012.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10013,
    "name": "castform-sunny",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10013.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10014,
    "name": "castform-rainy",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10014.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10015,
    "name": "castform-snowy",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10015.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10016,
    "name": "basculin-blue-striped",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10016.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10017,
    "name": "darmanitan-zen",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10017.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10018,
    "name": "meloetta-pirouette",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10018.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10019,
    "name": "tornadus-therian",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10019.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10020,
    "name": "thundurus-therian",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10020.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10021,
    "name": "landorus-therian",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10021.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10022,
    "name": "kyurem-black",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10022.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10023,
    "name": "kyurem-white",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10023.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10024,
    "name": "keldeo-resolute",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10024.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10025,
    "name": "meowstic-female",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10025.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10026,
    "name": "aegislash-blade",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10026.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10027,
    "name": "pumpkaboo-small",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10027.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10028,
    "name": "pumpkaboo-large",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10028.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10029,
    "name": "pumpkaboo-super",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10029.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10030,
    "name": "gourgeist-small",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10030.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10031,
    "name": "gourgeist-large",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10031.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10032,
    "name": "gourgeist-super",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10032.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10033,
    "name": "venusaur-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10034,
    "name": "charizard-mega-x",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10035,
    "name": "charizard-mega-y",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10036,
    "name": "blastoise-mega",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10037,
    "name": "alakazam-mega",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10037.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10038,
    "name": "gengar-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10038.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10039,
    "name": "kangaskhan-mega",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10039.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10040,
    "name": "pinsir-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10040.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10041,
    "name": "gyarados-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10041.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10042,
    "name": "aerodactyl-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10042.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10043,
    "name": "mewtwo-mega-x",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10043.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10044,
    "name": "mewtwo-mega-y",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10044.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10045,
    "name": "ampharos-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10045.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10046,
    "name": "scizor-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10046.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10047,
    "name": "heracross-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10047.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10048,
    "name": "houndoom-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10048.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10049,
    "name": "tyranitar-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10049.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10050,
    "name": "blaziken-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10050.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10051,
    "name": "gardevoir-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10051.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10052,
    "name": "mawile-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10052.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10053,
    "name": "aggron-mega",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10053.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10054,
    "name": "medicham-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10054.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10055,
    "name": "manectric-mega",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10055.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10056,
    "name": "banette-mega",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10056.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10057,
    "name": "absol-mega",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10057.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10058,
    "name": "garchomp-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10058.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10059,
    "name": "lucario-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10059.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10060,
    "name": "abomasnow-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10060.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10061,
    "name": "floette-eternal",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10061.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10062,
    "name": "latias-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10062.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10063,
    "name": "latios-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10063.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10064,
    "name": "swampert-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10064.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10065,
    "name": "sceptile-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10065.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10066,
    "name": "sableye-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10066.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10067,
    "name": "altaria-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10067.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10068,
    "name": "gallade-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10068.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10069,
    "name": "audino-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10069.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10070,
    "name": "sharpedo-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10070.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10071,
    "name": "slowbro-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10071.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10072,
    "name": "steelix-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10072.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10073,
    "name": "pidgeot-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10073.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10074,
    "name": "glalie-mega",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10074.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10075,
    "name": "diancie-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10076,
    "name": "metagross-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10077,
    "name": "kyogre-primal",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10077.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10078,
    "name": "groudon-primal",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10078.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10079,
    "name": "rayquaza-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10079.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10080,
    "name": "pikachu-rock-star",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10081,
    "name": "pikachu-belle",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10082,
    "name": "pikachu-pop-star",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10083,
    "name": "pikachu-phd",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10084,
    "name": "pikachu-libre",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10085,
    "name": "pikachu-cosplay",
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10086,
    "name": "hoopa-unbound",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10086.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10087,
    "name": "camerupt-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10087.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10088,
    "name": "lopunny-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10088.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10089,
    "name": "salamence-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10089.png",
    "color": "white",
    "desc": false,
    "owned": false
  },
  {
    "id": 10090,
    "name": "beedrill-mega",
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10090.png",
    "color": "white",
    "desc": false,
    "owned": false
  }
]