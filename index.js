// const now = 2037;
// const ageJones = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJones, ageSarah);

// console.log(ageJones * 2, ageJones / 10, 2 ** 3);

// const firstName = "jonas";
// const lastName = "Cvz";

// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// console.log(x);

// //comparison operators

// console.log(ageJones > ageSarah);
// console.log(ageSarah >= 18);

// const ifFullAge = ageSarah >=10;

// console.log(now-1991 > now - 2018)
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Dont spend it all");
// } else {
//   console.log("you should get a job");
// }

// let height = 10;
// if (height) {
//   console.log("Yayy height is defined");
// } else {
//   console.log("Height is undefined");
// }

// const age = 18;

// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// const hasDriversLicence = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// // if (shouldDrive) {
// //   console.log("Sarah is able to drive");
// // } else {
// //   console.log("someone else should drive..");
// // }

// const isTired = false; // C
// console.log(hasDriversLicence && hasGoodVision && isTired);

// if (hasDriversLicence && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// // const interface ='Audio' :
// //const private =534;
/**
 *  29 /09/2021 START 4:10 AM
 */

// function logger() {
//   console.log("My name is Jonas");
// }
// // //calling / running / invokin function
// // logger();
// // logger();
// // logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(4, 3);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");
//function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// //function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

/**
 * ARROW FUNCTION
 */

//Arrow function
// const calcAge3 = (birthYear) => 2021 - birthYear;
// const age3 = calcAge3(1989);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2021 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years `;
//   //   return retirement;
// };

// console.log(yearsUntilRetirement(1989, "Franco"));

/**
 * FUNCTION CALLING OTHER FUNCTION
 */

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces  of apple and ${orangePieces}  pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired `);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Mike"));
// console.log(yearsUntilRetirement(1950, "Gilbert"));

/**
 * CODDING CHALLENGE
 */

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// //Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win the trophy (${avgDolphins} vs. ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win the trophy (${avgKoalas} vs. ${avgDolphins}`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);
// //Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

// const Friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter ";

// const friends = ["Michael", "Steven", "Peter"];

// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(y);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// // friends = ["Bob", "alice"]
// const firstName = "Jonas";
// const jonas = [firstName, "LastName", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// //Exercice

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
// console.log(ages);

/**
 * Basic array operations
 */

// const friends = ["Michael", "Steven", "Peter"];

// //Add elements
// const newLength = friends.push("Franco");
// console.log(friends);
// console.log(newLength);
// friends.unshift("John");
// console.log(friends);

// //remve elements
// friends.pop(); // last
// const popped = friends.pop(); // last
// console.log(popped);
// console.log(friends);

// friends.shift(); // first
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friends called peter");
// }

/** 30/09/21
 * Started at 4:12am
 */

/**
 * CHALLENGE
 */
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

/**
 * Introdution to object
 */

//  const jonas = {
//     firstName: 'Jonas ',
//     lastName : `Test`,
//     age: 2037 - 1991,
//     job : `teacher`,
//     friends:  [`Michael`,`Peter`,`Steven`] };

/**
 * dot vs bracket notation
 */

// const jonas = {
//   firstName: "Jonas ",
//   lastName: `Test`,
//   age: 2037 - 1991,
//   job: `teacher`,
//   friends: [`Michael`, `Peter`, `Steven`],
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas?Choose between firstName,LastName, age ,job , and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     `Wrong request !Choose between firstName,LastName, age ,job , and friends`
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@franco.dev";
// console.log(jonas);

/**
 * Object Method
 */

const jonas = {
  firstName: "Jonas ",
  lastName: `Test`,
  birthYear: 1991,
  job: `teacher`,
  friends: [`Michael`, `Peter`, `Steven`],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },
  //   calcAge: function () {
  //     console.log(this);
  //     return 2037 - this.birthYear;
  //   },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge

console.log(jonas.getSummary());
