'use strict';

//Constructor functions and the new operator
const Person = function (firstName, birthYear) {
  //Instance propeties
  (this.firstName = firstName),
    (this.birthYear = birthYear),
    (this.calcAge = function () {
      console.log(2037 - this.birthYear);
    });
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
