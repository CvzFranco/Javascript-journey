'use strict';

///////////////////////////////////////
/**
 *  Default Parameters
 */
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // Default value
//   //ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

///////////////////////////////////////
/**
 *  How passing arguments works : value vs reference
 */

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 2356898653,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999'; // copy  of primitive value fligth
//   passenger.name = 'Mr.' + passenger.name; //same object in memory heap

//   if (passenger.passport === 2356898653) {
//     alert('Check in');
//   } else {
//     alert('Wrong passeport !');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // // Is the same as doing
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

///////////////////////////////////////
/**
 *  Functions accepting callback functions
 */

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher- order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string : ${fn(str)}`);

//   console.log(`Transformed  by : ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord); // upperFirstWord is call back functions
// transformer('JavaScript is the best!', oneWord); //

// //JS uses callback all the time
// const high5 = function () {
//   console.log(':D');
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

///////////////////////////////////////
/**
 *  Functions Returning functions
 */

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// //Challenge Arrow function
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hi')('Jonas');

/**
 *  The call and Aply methods
 */

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LM',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ fligth: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Franco Chiavuzzo');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// //DoesNOT work
// // book(23, 'Sarah Williams');

// //Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Sophie Mattauer');

// //Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData); // Best method

// //Bind Method
// // book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams');
// bookLH(24, 'Coucou');
// bookLX(25, 'Hello');

// //Personnal application
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha cooper');

// //With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// //first argument is "this"
// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * rate;

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

//////////////////////////////////////////////////////////////
/**
 * Chalenge #1
 */

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     //Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n ${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//     //Register answer

//     //short circuiting
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       //Poll result are 13,2,4,1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// // poll.registerNewAnswer();
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

//////////////////////////////////////////////////////////////
/**
 *Immediately Invoked Function Expressios(IIFE)
 */

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();
// // IIFE
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23; //encapsulated in this function
// })();

// // console.log(isPrivate);

// (() => console.log('This will ALSO never run again'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// // console.log(isPrivate);
// console.log(notPrivate);

//////////////////////////////////////////////////////////////
/**
 *Closures
 */

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// //First example
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();

// //Reassigning f function
// h();
// f();

// // console.dir(f);

// //Second example
// const boardPassengers = function (n, wait) {
//   // const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`The are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };
// const perGroup = 1000;
// boardPassengers(180, 3);

//////////////////////////////////////////////////////////////
/**
 *Challenge #2
 */

(function () {
  const header = document.querySelector('h1');

  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
