"use strict";

// //Objet Vide
// const paul = {}; // = new Object()
// const alice = {};

//MODEL
/*
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  //Method
  this.hello = function () {
    console.log(`Hello ${firstName} ${lastName}`);
  };
}
*/

// franco.hello(); // Hello Franco Chiavuzzo

//Heritage function

// function Etudiant (firstname, lastname, age, level, sector){
//     this.person = Person;
//     this.person(firstname,lastname,age)
//     this.age = age
//     this.sector = sector

//     this.getLevel = function(){
//         console.log(`Level : ${level}`);
//     }
//     this.getSector = function(){
//         console.log(`Sector : ${sector}`);
//     }
// }

//Heritage Class
// Class ECMAScript 2015
class Person {
  constructor(firstName, lastName, age) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.createdAt = new Date().toLocaleDateString();
  }
  hello() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }
  getAge() {
    console.log(
      `Hello. je m'appelle ${this.firstName} ${this.lastName} et j'ai ${this.age}`
    );
  }
}

// Model Etudiant qui Hérite du model Person
class Etudiant extends Person {
  constructor(firstName, lastName, age, sector, level) {
    super(firstName, lastName, age); // Fait reference a la clase dont on herite
    this.level = level;
    this.sector = sector;
  }
  getLevel() {
    console.log(`Level : ${this.level}`);
  }
  getSector() {
    console.log(`Secteur : ${this.sector}`);
  }
}

const getHeritages = (obj) => {
  let prototype = Object.getPrototypeOf(obj);

  const result = [];

  while (prototype) {
    result[result.length] = prototype.constructor.name;
    prototype = Object.getPrototypeOf(prototype);
  }
  return result;
};

const franco = new Person("Franco", "Chiavuzzo", 32);
const sophie = new Person("Sophie", "Mattauer", 32);
const diane = new Etudiant(
  "Diane",
  "Chiavuzzo",
  4,
  "Escalade",
  "Moyenne Section"
);

// console.log(diane);
// diane.getLevel();
//Protype
// console.log(typeof diane);
// console.log(typeof franco);

//Connaitre le prototype , modele à partir duquel franco à été crée et celui dont il a hérité.
// console.log(Object.getPrototypeOf(diane));
// console.log(getHeritages(diane));
// console.log(getHeritages(franco));

// document , window
console.log(getHeritages(window));

//Objects
//keys
console.log(Object.keys(diane));

//values
console.log(Object.values(diane));

//entries
console.log(Object.entries(diane));

const getValues = (obj) => {
  const content = Object.entries(obj);
  content.forEach((tab) => {
    let result = `${tab[0]} : ${tab[1]}`;
    console.log(result);
  });
};
getValues(diane);

//Date
//.toLocalDateString
