// Part 2

const contactsDiv = document.getElementById("contacts-list");
const form = document.querySelector("form");
const nameInput = document.getElementById("contact-name");
const emailInput = document.getElementById("contact-email");
const contacts = [];

// we need to declare this outside the function because we want to reuse this
class Contact {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.createdAt = new Date(Date.now());
  }

  toString() {
    //we override the method declared down, because this is in the parent class
    console.log(`Contact name ${this.name} and the email is ${this.email}`);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // daca nu adaug asta formularul o sa faca ce face deobicei si nu o sa imi apara datele, am oprit formularul sa isi faca submit

  const contactInfo = new Contact(nameInput.value, emailInput.value);
  console.log(contactInfo);
  console.log(contactInfo.toString()); // this method is declared it here, not in the parrent class

  contacts.push(contactInfo);
  console.log(contacts);
  displayContact();
  nameInput.value = "";
  emailInput.value = "";
});

function displayContact() {
  contacts.forEach((contact) => {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const h6 = document.createElement("h6");

    //adding the text
    h4.textContent = contact.name;
    h6.textContent = contact.email;

    //appending
    div.appendChild(h4);
    div.appendChild(h6);

    contactsDiv.appendChild(div);
  });
}

//Part 1

// this is the window object - global environment
// console.log(this);

//  this is the window object - inside the function
// function sayHi(){
//     console.log(this)
// }
// sayHi();

// this is the person object - this is the object person
// const person = {
//     username: "Max",
//     age: 22,
//     role: "Developer",
//     sayData: function () {
//         console.log(`Hello, my name is ${this.username}, I am ${this.role} and I am ${this.age} years old.`)
//     }
// }

// person.sayData(); // person object

// this is the div! ; if I change to an arrow function, this will be the window

// div.addEventListener('click', function(){
//     dir show properties of the div
//     console.dir(this);
// })

//  Classes
// this is the blue print for different cars
// class Car {
//     constructor(maker, year, model){ //this are parameters
//         this.maker = maker; // this refers to the objects we create
//         this.year = year;
//         this.model = model;
//         this.speed = 100; // this is a default value, will show even if we don't give an argument for this
//     }
//     is not inside the constructor because there we have a reference to the properties that have been initialized with the object
//     we access the properties inside the function, so there is no need to be inside the constructor
//     increaseSpeed = function(){
//         this.speed += 10
//     };

// }

//  we don't need to create three different objects, we can use the blueprint with the "new" keyword - which execute the constructor function and pass the values for each car
// const honda = new Car('honda', 2007, 'civic'); // we pass these values  as arguments
// honda.increaseSpeed(); // we need to call the method to increase the speed
// console.log(honda);

// const toyota = new Car('toyota', 2023, 'camry'); // we pass these values as arguments
// toyota.increaseSpeed();
// console.log(toyota);

//  Exercise

//  create a new animal class, eyes, legs, name, hair, age

// class Animal {
//     constructor(name, eyes, legs, age, isAwake, isMoving){
//         this.name = name;
//         this.eyes = eyes;
//         this.legs = legs;
//         this.age = age;
//         this.isAwake = isAwake;
//         this.isMoving = isMoving;
//         this.food = 0;
//     }
//      methods for the class - all new objects will have these methods
//     sleep(){
//         this.isAwake = false;
//     }

//     wake(){
//         this.isAwake = true;
//     }

//     sit(){
//        this.isMoving = false;
//     }

//     walk(){
//         this.isMoving = true;
//     }

//     speak(sound){
//         console.log(`My animal ${this.name} is making the sound ${sound}`);
//     }

//     feedMePizzaSlice(slices){
//         this.food += slices
//     }
// }

// const cow = new Animal('Cici', 2, 4, 10, false, false);
// console.log(cow);

// cow.wake(); // calling this method we change the false value we gave initially
// console.log('is cow awake?',cow.isAwake);

// cow.speak('muuuuuuu')

// cow.feedMePizzaSlice(3);
// console.log(cow);

// const dog = new Animal('Bill', 2, 4, 7, false, false);
// console.log(dog);

//  for this we don't need to use the new keyword
// const error = Error('this is an error');
// console.log(error.message);

// instance method - we can use them inside the class
// const nums =[1,2,3];
// nums.forEach(n => console.log(n))

// static method - we can use them inside the class
// console.log(Math.random());

// const arr1 = Array(4,5,6,7);
// console.log(arr1);

// arr1.forEach(ar => console.log(ar));

//
