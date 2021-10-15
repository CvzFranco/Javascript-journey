'use strict';

//Constructor functions and the new operator
const Person = function (firstName, birthYear) {
  //Instance propeties
  (this.firstName = firstName), (this.birthYear = birthYear);
  //Never do this , verry bad for performance
  // (this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // });
};

//Jonas  is an instance of person
const jonas = new Person('Jonas', 1991);
console.log(jonas);

//1. New {} is created
//2. function is called, this = {}
//3. {}  linked to prototype
//4. function automatically return {}

const matila = new Person('Matila', 2017);
const jack = new Person('Jack', 1975);
console.log(matila, jack);

const jay = 'jay';
console.log(jonas instanceof Person);
console.log(jay instanceof Person);

//Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matila.calcAge();

// //create __proto__ properties is step 3
// console.log(jonas.__proto__);
// //prototype isn't prototype to Person but to each object create with Person.
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo Sapiens';
// console.log(jonas, matila.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

//Prototypal inheritance on built-in objects
console.log(jonas.__proto__);
//Object.prototype(top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 9, 6, 4, 5, 5, 6, 9, 3]; //[] === new Array
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

//Coding challenge #1

const Car = function (make, speed) {
  (this.make = make), (this.speed = `${speed}km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercredes', 95);

Car.prototype.accelerate = function () {
  //   this.speed = parseInt(this.speed) + 10 + 'km/h';
  //   return this.speed;
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

console.log(bmw.accelerate());

Car.prototype.brake = function () {
  //   this.speed = parseInt(this.speed) - 5 + 'km/h';
  //   return this.speed;
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
