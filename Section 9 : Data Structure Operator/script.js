// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     adress,
//   }) {
//     console.log(
//       `Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

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

//Create one player Array for eachg team
const [players1, players2] = game.players;
// console.log(players1, players2);

//Goal kipper and fieldplayer
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

//Players of both team (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//Bayern Team + Substitute
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Peresic'];
console.log(players1Final);

// Each odd team1 , draw, team2
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//print goals
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// Team is more likely to win
console.log(`${team1 < team2 ? `Team1` : `Team 2`} is more likely to win`);

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
