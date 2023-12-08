// Parent or super class
class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
    // return is not needed because the new object is returned by default
  }
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  static speak(sound) {
    console.log(sound);
  }
  toString(animal = "Animal") {
    // receive an email - cow, dog etc. "Animal -default value, in case we don't provide anything"
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${
      this.isAwake ? "is" : "is not"
    } awake, and ${this.isMoving ? "is" : "is not"} moving.`;
  }
}

//we create a new class which is going to extend the Animal class
//what is available in Animal class is going to be available in cat class and we can add more things in the cat class
//constructor(fur, isAwake, isMoving) - exclusively for the Cat - what defines the specific class- parametrii pe care eu vreau sa ii dau, pot sa schimba valorile daca eu vreau de aia le definesc aici prima data sau ii pot pastra prin valorile date la super
// super(2, 4, isAwake, isMoving); - super is a reference to the super class (Animal class) - what do we take from the parent - aici sunt valorile, eu le pot schimba sau pot pastra ce are (2,4 o sa apara si la Cat), practic iau si eyes and legs
class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
 static speak() {
    super.speak("Meow..."); // we are reusing the speak method from the parent
  }
  toString() {
    return super.toString("Cat"); // we are reusing the toString method from the parent
  }
}

const cat1 = new Cat("orange", true, false);
console.log(cat1);
// cat1.speak();
console.log(cat1.toString()); /// because I have the return keyword

class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Woof!");
  }
  toString() {
    return super.toString("Dog");
  }
}

class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }
  speak() {
    super.speak("Moo.");
  }
  toString() {
    return super.toString("Cow");
  }
}

// exercise - create a human

class Human extends Animal {
  constructor(hair, clothes, name, isAwake, isMoving) {
    super(2, 2, isAwake, isMoving);
    this.hair = hair;
    this.clothes = clothes;
    this.name = name;
  }
  static speak() {
    super.speak(
      `I am a human being. My name is ${this.name}, my hair color is ${this.hair}, and I wear a ${this.clothes}`
    );
  }

  toString() {
    return super.toString("human");
  }
}

const human1 = new Human("brown", "red dress", "Jane", true, true);
console.log(human1);
// human1.speak();

console.log(human1.toString());

// Encapsulation

class Learner {
  #grades = [];
  #name = {
    first: "",
    last: "",
  };
  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }

  get name() {
    return `${this.#name.first} ${this.#name.last}`;
  }

  get age() {
    return this.#age;
  }


  //pushes a new grade(a single one) tot the array
  //we can remove this part because addGrades will accept single values too
  set grades(grade) {
    grade = Number(grade);

    if (grade >= 0 && grade <= 100) {
      this.#grades.push(grade);
    }
  }

  //return the grades array
  get grades() {
    return this.#grades;
  }

  // add many grades to the private #grades array
  addGrades(...grades) {
    // rest parameters - to allow our grades setter to accept an indefinite number of arguments as an array - puts the values into a single array [98, 78, Array(2), Array(3)]
    grades = grades.flat(); // transform multi layer array into a single array

    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade);
      }
    });
  }
  // gets the average by dropping the lowest score from the grades array
  get average() {
    const arr = [...this.#grades];
    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b) / arr.length;
  }
}

const learner1 = new Learner("Leeroy", "Jenkins", 18);

console.log(learner1.name);
learner1.age = 20; // I can not override the private value, in this way added a public property -age 22 (this is not the correct way); after I declared the age function, the value 22 dissaper
console.log(learner1.age);
console.log(learner1);

// get - allow the user to read the property
// eg: console.log(learner1.name) - is undefined

//setter - pass the number, then goes to the function and if the conditions are ok, push the value to the array

//adding single values
// learner1.grades = 100;
// learner1.grades = 56;
// learner1.grades = 26;
// console.log(learner1);

//adding multiple values using addGrades function
learner1.addGrades(98, 87, [95, 100, 77], [96, 89]);

console.log(learner1.grades); // is undefined, we need a get to return the values get grades() function

console.log(learner1.average);


class Human2 extends Animal {
  static speak(){
    super.speak("blablalba");
  }
}

Human2.speak()