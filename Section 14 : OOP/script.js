'use strict';

// //Constructor functions and the new operator
// const Person = function (firstName, birthYear) {
//   //Instance propeties
//   (this.firstName = firstName), (this.birthYear = birthYear);
//   //Never do this , verry bad for performance
//   // (this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // });
// };

// //Jonas  is an instance of person
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// //1. New {} is created
// //2. function is called, this = {}
// //3. {}  linked to prototype
// //4. function automatically return {}

// const matila = new Person('Matila', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matila, jack);

// const jay = 'jay';
// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// //Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matila.calcAge();

// // //create __proto__ properties is step 3
// // console.log(jonas.__proto__);
// // //prototype isn't prototype to Person but to each object create with Person.
// // console.log(jonas.__proto__ === Person.prototype);
// // console.log(Person.prototype.isPrototypeOf(jonas));

// Person.prototype.species = 'Homo Sapiens';
// // console.log(jonas, matila.species);

// // console.log(jonas.hasOwnProperty('firstName'));
// // console.log(jonas.hasOwnProperty('species'));

// //Prototypal inheritance on built-in objects
// console.log(jonas.__proto__);
// //Object.prototype(top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 9, 6, 4, 5, 5, 6, 9, 3]; //[] === new Array
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);

// //Coding challenge #1

// const Car = function (make, speed) {
//   (this.make = make), (this.speed = `${speed}km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercredes', 95);

// Car.prototype.accelerate = function () {
//   //   this.speed = parseInt(this.speed) + 10 + 'km/h';
//   //   return this.speed;
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// console.log(bmw.accelerate());

// Car.prototype.brake = function () {
//   //   this.speed = parseInt(this.speed) - 5 + 'km/h';
//   //   return this.speed;
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// ES6 Classes
//class expression
// const PersonCl = class {

// }

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //instance method
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  //Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('stop');
  }

  get fullName() {
    return this._fullName;
  }
  //static method
  static hey() {
    console.log('Hey');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
jessica.calcAge();
// console.log(jessica.age);
console.log(jessica.__proto___ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log('Hey');
};

jessica.greet();

//1. Class are NOT hoisted
//2. Class are first-class citizes
//3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1996);

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.latest);

PersonCl.hey();

//Object Create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);
sarah.calcAge();

//Challenge 2

class CarCl {
  constructor(make, speed) {
    (this.make = make), (this.speed = speed);
  }
  accelerate() {
    //   this.speed = parseInt(this.speed) + 10 + 'km/h';
    //   return this.speed;
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  brake() {
    //   this.speed = parseInt(this.speed) - 5 + 'km/h';
    //   return this.speed;
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  get speedUS() {
    return console.log(`Curent speed : ${this.speed / 1.6}mi/h`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
const bmw = new CarCl('BMW', 120);
const mercedes = new CarCl('Mercredes', 95);
ford.speedUS;
