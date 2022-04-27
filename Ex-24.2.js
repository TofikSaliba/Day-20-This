function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const pokeOne = new Pokemon("Pickachu", "Electric", [
  "Volt Tackle",
  "Electroweb",
  "Iron Tail",
  "Tackle",
  "Leer",
]);

const pokeTwo = new Pokemon("charizard", "Fire", [
  "Dragon Breath",
  "Fire Fang",
  "Flamethrower",
  "Slash",
  "Smokescreen",
]);

const pokeThree = new Pokemon("Psyduck", "Water", [
  "Tail Whip",
  "Confusion",
  "Amnesia",
  "Water Gun",
  "Disable",
]);

Pokemon.prototype.callPokemo = function () {
  console.log(`\nI choose you, ${this.name}`);
};

Pokemon.prototype.attack = function (attNumber) {
  if (typeof attNumber !== "number" || attNumber > 4 || attNumber < 0) {
    console.log(
      `${attNumber} Is invalid! Expected an argument that is a number between 0 and 4.`
    );
  } else {
    console.log(`${this.name} used ${this.attackList[attNumber]}`);
  }
};

let random = Math.floor(Math.random() * 4);

pokeOne.callPokemo();
pokeOne.attack(random);
pokeTwo.callPokemo();
pokeTwo.attack(random);
pokeThree.callPokemo();
pokeThree.attack(random);
