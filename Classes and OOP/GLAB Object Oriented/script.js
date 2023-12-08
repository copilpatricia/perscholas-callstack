class Character {
  static max_health = 100;
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

class Adventurer extends Character {
  static roles = ["Fighter", "Healer", "Wizard"];
  companion = { name: "", type: "", belongings: "" };
  constructor(name, role) {
    super(name);
   if(Adventurer.roles.includes(role.toLowerCase())){
    this.role = role;
   } else{
    console.log("this is not a role")
   }
    
    this.inventory.push("bedroll", "50 gold coins");

    this.weapons = [];
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  set companion(newCompanion) {
    this.companion.name = newCompanion.name;
    this.companion.type = newCompanion.type;
    this.companion.belongings = [];
  }

}

const robin = new Adventurer("Robin", "Wizard");
robin.weapons.push("sword", "hammer");

class Companion {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const cici = new Companion("Cici", "dog");
console.log(cici);

const tiger = new Companion("Tiger", "cat");
tiger.belongings = ["food", ["toys"]];
console.log(tiger);

cici.companion = tiger;
console.log(cici);

robin.companion = cici;
console.log(robin);
// Part 4
