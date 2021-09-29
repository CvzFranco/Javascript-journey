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
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);
//function expression
const calAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calAge2(1991);
console.log(age1, age2);
