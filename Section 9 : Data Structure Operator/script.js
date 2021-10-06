'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['monday', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', adress }) {
    console.log(
      `Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//////////////////////////////////////////////////
/**
 * Challenge 4
 */

// document.body.append(document.createElement('textarea'));

// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split(' ');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'V'.repeat(i + 1)} `);
//   }
// });

//////////////////////////////////////////////////
/**
 * Working with Strings part 3
 */

// // Split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// console.log(firstName, lastName.toUpperCase());

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica and smith davis');
// capitalizeName('franco chiavuzzo');

// //Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));
// console.log('Jonas'.padEnd(25, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(345678987654323456));

// //Repeat
// const message2 = 'Bad waether.. All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planedInLine = function (n) {
//   console.log(`There are ${n} plane in line ${':('.repeat(n)} `);
// };

// planedInLine(6);

//////////////////////////////////////////////////
/**
 * Working with Strings part 2
 */
// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fix capitalisation in name
// const passenger = 'jOnAs'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //Comparing Emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //Replacing
// const priceGB = '288,97$';
// const priceUS = priceGB.replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23,Boarding door 23!';
// // console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate')); // g - global

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo'))
//   console.log('Part of the NEW Airbus family');

// //Pratice exercices
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };
// checkBaggage('I have a laptop,some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

//////////////////////////////////////////////////
/**
 * Working with Strings part 1
 */

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got lucky');
//   }
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));
////////////////////////////////////////////
/**
 * Challenge 3
 */

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1 .
// console.log(gameEvents.values());
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2 .
// gameEvents.delete(64);

// //3 .
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// //4 .
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'First ' : 'Second';
//   console.log(`${half}[HALF] ${min} : ${event}`);
// }

////////////////////////////////////////////
/**
 * MAPS Iterations
 */

// const question = new Map([
//   ['question', 'What is the best programming language ins the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct :D'],
//   [false, 'Try again !'],
// ]);
// console.log(question);
// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// //Convert map to aray
// console.log([...question]);
// // console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());
////////////////////////////////////////////
/**
 * MAPS Fundamentals
 */

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon,Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('Open', 11)
//   .set('Close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

// console.log(rest.has('categories'));
// rest.delete(2);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// // rest.clear();
// console.log(rest.size);

// console.log(rest.get(arr));

////////////////////////////////////////////
/**
 * SETS
 */

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

////////////////////////////////////////////
/**
 * Looping Objects : Object Keys, Values and Entries
 */
// //Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days`;

// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// //Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// //[key,value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

///////////////////////////////////////////////
/**
 * Optional Chaining
 */
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //Example
// const days = ['monday', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   // ?? nulish  coalescing operator
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const users = [
//   {
//     name: 'Jonas',
//     email: 'hello@jonas.io',
//   },
// ];

// console.log(users[0]?.name ?? 'User array empty');

/**
 * Looping arrays : The for of loop
 */
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log(...menu.entries());

///////////////////////////////////////
// Coding Challenge #1

const game = {
  team1: 'Bayern Munich',

  team2: 'Borrussia Dortmund',

  players: [
    [
      'Neuer',

      'Pavard',

      'Martinez',

      'Alaba',

      'Davies',

      'Kimmich',

      'Goretzka',

      'Coman',

      'Muller',

      'Gnarby',

      'Lewandowski',
    ],

    [
      'Burki',

      'Schulz',

      'Hummels',

      'Akanji',

      'Hakimi',

      'Weigl',

      'Witsel',

      'Hazard',

      'Brandt',

      'Sancho',

      'Gotze',
    ],
  ],

  score: '4:0',

  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],

  date: 'Nov 9th, 2037',

  odds: {
    team1: 1.33,

    x: 3.25,

    team2: 6.5,
  },
};

/***
 * Challenge #2
 *
 */

//Loop goal number
// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}) : ${el}`);
// }

// Loop for average ODD
// for (const [i, el] of game.odds.entries()) {
//   console.log(i, el);
// const odds = Object.values(game.odds);
//   let avrg = 0;
// for (const odd of odds) {
// avrg+= odd
// avrg /=odds.length
//   console.log(avrg);
// }

//Loop printing 3 odds strings

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// //Create one player Array for eachg team
// const [players1, players2] = game.players;
// // console.log(players1, players2);

// //Goal kipper and fieldplayer
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// //Players of both team (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //Bayern Team + Substitute
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Peresic'];
// console.log(players1Final);

// // Each odd team1 , draw, team2
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //print goals
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // Team is more likely to win
// console.log(`${team1 < team2 ? `Team1` : `Team 2`} is more likely to win`);

//Loop goal number

/**
 * ///////////////////////////////////
 * Nullish operator
 */
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //Nullish : null and undefined(NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

/**
 * ////////////////////////////////////////////
 * //Short Circuiting(&& and ||)
 */
// console.log('----OR-----');
// //Une ANY data type,return ANY type, short-circuiting( return first TRUE value)
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //Oposite ||
// console.log('----AND-----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

// //Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
/**
 * Rest Patern and Parameters
 */
// //1)Destructuring
// //Spread because RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST  because on LEFT side of = (WE COMPRESS)
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...othersFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, othersFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2)Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms')

/**
 * ////////////////////////////////////////////////////////
 * Spread Operator (We EXPEND)
 */
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //Iterables : arrays, strings,map ,sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// //Real-world exemple
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient1?"),
//   // prompt("Let's make pasta! Ingredient2?"),
//   // prompt("Let's make pasta! Ingredient3?"),
// ];
// restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = { foundeIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/**
 * //////////////////////////////////////////
 * Destructring objects
 */
// restaurant.orderDelivery({
//   time: '22:30',
//   adress: 'Via del Sol, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   adress: 'Via del sole,21',
//   startedIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/**
 * /////////////////////////////////////////////////
 * Destructuring Arrays
 */
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);
