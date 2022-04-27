const storm = {
  superPower: function () {
    const powers = [
      "Mind Control",
      "Flying",
      "Invisibility",
      "Manipulating objects",
    ];
    return powers[Math.floor(Math.random() * 4)];
  },
  printSuperPower,
};

function printSuperPower() {
  console.log("my superpower is " + this.superPower());
}

storm.printSuperPower();
