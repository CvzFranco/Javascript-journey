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

const calcAverage = (a, b, c) => (a + b + c) / 3;

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win the trophy (${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win the trophy (${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
