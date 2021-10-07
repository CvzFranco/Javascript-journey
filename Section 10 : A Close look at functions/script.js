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

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LM',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ fligth: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, 'Franco Chiavuzzo');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  ariline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//DoesNOT work
// book(23, 'Sarah Williams');

//Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Sophie Mattauer');

//Apply method
const fligthData = [583, 'George Cooper'];
book.apply(swiss, fligthData);
console.log(swiss);
